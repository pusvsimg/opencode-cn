// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
            
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation highlighting
    function updateActiveNavigation() {
        const sections = document.querySelectorAll('.section, .subsection');
        const navLinks = document.querySelectorAll('.nav-link, .toc a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    // Scroll event listener for active navigation
    let isScrolling = false;
    window.addEventListener('scroll', function() {
        if (!isScrolling) {
            window.requestAnimationFrame(function() {
                updateActiveNavigation();
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

    // Copy code functionality
    function addCopyButtons() {
        const codeBlocks = document.querySelectorAll('pre code');
        
        codeBlocks.forEach((codeBlock, index) => {
            const pre = codeBlock.parentElement;
            
            // Create copy button
            const copyButton = document.createElement('button');
            copyButton.innerHTML = '📋 复制';
            copyButton.className = 'copy-button';
            copyButton.setAttribute('data-index', index);
            
            // Style the copy button
            copyButton.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                background: #3498db;
                color: white;
                border: none;
                padding: 5px 10px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 12px;
                z-index: 1;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            // Make pre element relative positioned
            pre.style.position = 'relative';
            
            // Show/hide copy button on hover
            pre.addEventListener('mouseenter', () => {
                copyButton.style.opacity = '1';
            });
            
            pre.addEventListener('mouseleave', () => {
                copyButton.style.opacity = '0';
            });
            
            // Copy functionality
            copyButton.addEventListener('click', async () => {
                const text = codeBlock.textContent;
                
                try {
                    await navigator.clipboard.writeText(text);
                    copyButton.innerHTML = '✅ 已复制';
                    copyButton.style.background = '#28a745';
                    
                    setTimeout(() => {
                        copyButton.innerHTML = '📋 复制';
                        copyButton.style.background = '#3498db';
                    }, 2000);
                } catch (err) {
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = text;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    
                    copyButton.innerHTML = '✅ 已复制';
                    copyButton.style.background = '#28a745';
                    
                    setTimeout(() => {
                        copyButton.innerHTML = '📋 复制';
                        copyButton.style.background = '#3498db';
                    }, 2000);
                }
            });
            
            pre.appendChild(copyButton);
        });
    }

    // Add copy buttons after a short delay to ensure code highlighting is complete
    setTimeout(addCopyButtons, 100);

    // Search functionality for table of contents
    function addTocSearch() {
        const toc = document.querySelector('.toc');
        if (!toc) return;

        // Create search input
        const searchContainer = document.createElement('div');
        searchContainer.style.cssText = 'margin-bottom: 15px;';
        
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = '搜索目录...';
        searchInput.style.cssText = `
            width: 100%;
            padding: 8px 12px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
        `;
        
        searchContainer.appendChild(searchInput);
        toc.insertBefore(searchContainer, toc.querySelector('h3').nextSibling);
        
        // Search functionality
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const tocLinks = toc.querySelectorAll('a');
            
            tocLinks.forEach(link => {
                const text = link.textContent.toLowerCase();
                const listItem = link.parentElement;
                
                if (text.includes(searchTerm)) {
                    listItem.style.display = 'block';
                } else {
                    listItem.style.display = 'none';
                }
            });
        });
    }

    addTocSearch();

    // Back to top button
    function addBackToTopButton() {
        const backToTopButton = document.createElement('button');
        backToTopButton.innerHTML = '↑';
        backToTopButton.setAttribute('aria-label', '返回顶部');
        backToTopButton.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: #3498db;
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            font-size: 20px;
            font-weight: bold;
            z-index: 1000;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(52, 152, 219, 0.4);
        `;
        
        document.body.appendChild(backToTopButton);
        
        // Show/hide button based on scroll position
        function toggleBackToTopButton() {
            if (window.scrollY > 300) {
                backToTopButton.style.opacity = '1';
                backToTopButton.style.transform = 'translateY(0)';
            } else {
                backToTopButton.style.opacity = '0';
                backToTopButton.style.transform = 'translateY(20px)';
            }
        }
        
        window.addEventListener('scroll', toggleBackToTopButton);
        
        // Scroll to top functionality
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Hover effects
        backToTopButton.addEventListener('mouseenter', () => {
            backToTopButton.style.background = '#2980b9';
            backToTopButton.style.transform = window.scrollY > 300 ? 'translateY(-5px)' : 'translateY(15px)';
        });
        
        backToTopButton.addEventListener('mouseleave', () => {
            backToTopButton.style.background = '#3498db';
            backToTopButton.style.transform = window.scrollY > 300 ? 'translateY(0)' : 'translateY(20px)';
        });
    }

    addBackToTopButton();

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Press 'Escape' to close mobile menu
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
        
        // Press '/' to focus search input
        if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
            const searchInput = document.querySelector('.toc input');
            if (searchInput && document.activeElement !== searchInput) {
                e.preventDefault();
                searchInput.focus();
            }
        }
    });

    // Progress bar
    function addProgressBar() {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 60px;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #3498db, #2ecc71);
            z-index: 1000;
            transition: width 0.1s ease;
        `;
        
        document.body.appendChild(progressBar);
        
        function updateProgressBar() {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            progressBar.style.width = Math.min(scrollPercent, 100) + '%';
        }
        
        window.addEventListener('scroll', updateProgressBar);
    }

    addProgressBar();

    // External links
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        if (!link.hasAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
        
        // Add external link icon
        if (!link.innerHTML.includes('🔗')) {
            link.innerHTML += ' 🔗';
        }
    });

    // Table of contents auto-expand
    function autoExpandToc() {
        const tocLinks = document.querySelectorAll('.toc a');
        const sections = document.querySelectorAll('.section, .subsection');
        
        function updateTocExpansion() {
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                if (window.scrollY >= sectionTop) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            tocLinks.forEach(link => {
                const href = link.getAttribute('href').substring(1);
                const parentLi = link.parentElement;
                const subList = parentLi.querySelector('ul');
                
                if (href === currentSection && subList) {
                    subList.style.display = 'block';
                    parentLi.classList.add('active');
                } else if (subList && !href.startsWith(currentSection)) {
                    // Keep parent sections expanded if we're in a subsection
                    const isParentOfCurrent = currentSection.startsWith(href);
                    if (!isParentOfCurrent) {
                        parentLi.classList.remove('active');
                    }
                }
            });
        }
        
        window.addEventListener('scroll', updateTocExpansion);
        updateTocExpansion(); // Run once on load
    }

    autoExpandToc();

    console.log('OpenCode 教程网站已加载完成！');
});

// Add active state styles to TOC
const tocActiveStyle = document.createElement('style');
tocActiveStyle.textContent = `
    .toc a.active {
        background-color: #3498db;
        color: white;
        font-weight: bold;
    }
    
    .toc li.active > a {
        background-color: #e3f2fd;
        color: #1976d2;
        font-weight: bold;
    }
`;
document.head.appendChild(tocActiveStyle);