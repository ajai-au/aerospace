// Global variables
let currentPage = 'home';
let currentTheme = 'dark';
let mobileMenuOpen = false;
let adminPanelOpen = false;
let selectedGalleryCategory = 'all';
let selectedNewsCategory = 'all';
let searchTerm = '';

// Gallery data
const galleryItems = [
    {
        id: 1,
        title: 'AeroDyne X1 Pro',
        category: 'commercial',
        type: 'image',
        image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg',
        description: 'Professional-grade drone for aerial photography and surveying',
        specs: ['4K HDR Camera', '45min Flight Time', 'GPS Navigation', '10km Range'],
    },
    {
        id: 2,
        title: 'Stealth Recon Unit',
        category: 'military',
        type: 'image',
        image: 'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg',
        description: 'Advanced reconnaissance drone with stealth capabilities',
        specs: ['Night Vision', '2hr Flight Time', 'Silent Operation', '50km Range'],
    },
    {
        id: 3,
        title: 'Skybird Mini',
        category: 'recreational',
        type: 'image',
        image: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg',
        description: 'Compact drone perfect for beginners and casual flying',
        specs: ['1080p Camera', '25min Flight Time', 'Auto-stabilization', '2km Range'],
    },
    {
        id: 4,
        title: 'Industrial Titan',
        category: 'industrial',
        type: 'video',
        image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg',
        videoUrl: '#',
        description: 'Heavy-duty drone for construction and inspection tasks',
        specs: ['Thermal Camera', '60min Flight Time', '15kg Payload', '20km Range'],
    },
    {
        id: 5,
        title: 'AeroDyne Swarm System',
        category: 'commercial',
        type: 'video',
        image: 'https://images.pexels.com/photos/2050718/pexels-photo-2050718.jpeg',
        videoUrl: '#',
        description: 'Coordinated drone swarm for large-scale operations',
        specs: ['AI Coordination', '8 Unit System', 'Real-time Sync', '100km Coverage'],
    },
    {
        id: 6,
        title: 'Rescue Angel',
        category: 'commercial',
        type: 'image',
        image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg',
        description: 'Search and rescue drone with emergency response capabilities',
        specs: ['Medical Payload', '90min Flight Time', 'Weather Resistant', '30km Range'],
    },
];

// News articles data
const newsArticles = [
    {
        id: '1',
        title: 'Revolutionary AI Flight Control System Launched',
        content: 'We are excited to announce the launch of our new AI-powered flight control system that enhances drone stability and autonomous navigation capabilities. This groundbreaking technology represents years of research and development, bringing unprecedented precision to commercial drone operations...',
        excerpt: 'New AI flight control system enhances drone stability and autonomous navigation capabilities.',
        image_url: 'https://images.pexels.com/photos/2050718/pexels-photo-2050718.jpeg',
        author: 'Dr. Sarah Chen',
        category: 'technology',
        tags: ['AI', 'Flight Control', 'Innovation'],
        published: true,
        created_at: '2025-01-08',
        updated_at: '2025-01-08'
    },
    {
        id: '2',
        title: 'AeroDyne Expands to European Markets',
        content: 'We\'re thrilled to announce our expansion into the European market with new offices in London, Berlin, and Paris. This strategic move allows us to better serve our European clients and partners while maintaining our commitment to excellence in drone technology and support services...',
        excerpt: 'New offices in London, Berlin, and Paris mark our European expansion.',
        image_url: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg',
        author: 'Michael Rodriguez',
        category: 'announcements',
        tags: ['Expansion', 'Europe', 'Business'],
        published: true,
        created_at: '2025-01-05',
        updated_at: '2025-01-05'
    },
    {
        id: '3',
        title: 'Drone Maintenance Best Practices Guide',
        content: 'Proper maintenance is crucial for optimal drone performance and longevity. In this comprehensive guide, we cover everything from pre-flight checks to seasonal storage recommendations. Learn how to keep your AeroDyne drone in peak condition with these expert tips and techniques...',
        excerpt: 'Essential maintenance tips to keep your drone in peak condition.',
        image_url: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg',
        author: 'James Wilson',
        category: 'tutorials',
        tags: ['Maintenance', 'Tips', 'Guide'],
        published: true,
        created_at: '2025-01-03',
        updated_at: '2025-01-03'
    },
    {
        id: '4',
        title: 'Industry Report: Commercial Drone Market 2025',
        content: 'The commercial drone industry continues to grow at an unprecedented rate. Our latest industry report reveals key trends, market opportunities, and technological advances that are shaping the future of unmanned aerial systems across various sectors...',
        excerpt: 'Latest industry trends and market insights for commercial drones in 2025.',
        image_url: 'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg',
        author: 'Lisa Park',
        category: 'industry',
        tags: ['Market Report', 'Industry', 'Trends'],
        published: true,
        created_at: '2025-01-01',
        updated_at: '2025-01-01'
    }
];

// FAQ data
const faqData = [
    {
        category: 'General',
        questions: [
            {
                question: 'What makes AeroDyne drones different from competitors?',
                answer: 'Our drones feature proprietary AI flight systems, military-grade construction, and unmatched reliability. We combine cutting-edge technology with 24/7 support and a global service network.'
            },
            {
                question: 'Do you offer international shipping?',
                answer: 'Yes, we ship worldwide to over 50 countries. Shipping times and costs vary by location and product type. Contact us for specific international shipping quotes and regulations.'
            },
            {
                question: 'What is the warranty coverage for AeroDyne drones?',
                answer: 'All AeroDyne drones come with a comprehensive 2-year warranty covering manufacturing defects, plus optional extended coverage plans up to 5 years with additional services.'
            }
        ]
    },
    {
        category: 'Technical',
        questions: [
            {
                question: 'What is the maximum flight time for your drones?',
                answer: 'Flight times vary by model: recreational drones offer 25-30 minutes, commercial models provide 45-60 minutes, and industrial units can operate for up to 2 hours depending on payload and conditions.'
            },
            {
                question: 'Are AeroDyne drones compatible with third-party software?',
                answer: 'Yes, our drones support major industry-standard software platforms including DJI SDK, MAVLink protocol, and custom API integrations for enterprise applications.'
            },
            {
                question: 'What safety features are included?',
                answer: 'All models include GPS return-to-home, obstacle avoidance, emergency landing protocols, geo-fencing, and real-time flight monitoring with automatic fail-safe systems.'
            },
            {
                question: 'Can drones operate in adverse weather conditions?',
                answer: 'Our industrial and military-grade models are weather-resistant and can operate in light rain, wind up to 35 mph, and temperatures from -20°C to 50°C. Recreational models have more limited weather capabilities.'
            }
        ]
    },
    {
        category: 'Commercial & Industrial',
        questions: [
            {
                question: 'Do you provide training for commercial operators?',
                answer: 'Yes, we offer comprehensive training programs including Part 107 certification assistance, hands-on flight training, maintenance courses, and ongoing technical support for commercial operators.'
            },
            {
                question: 'What industries do you serve?',
                answer: 'We serve agriculture, construction, energy, telecommunications, public safety, surveying, film production, and defense sectors with specialized drone solutions and custom configurations.'
            },
            {
                question: 'Are volume discounts available for fleet purchases?',
                answer: 'Yes, we offer competitive fleet pricing for orders of 5+ units, including volume discounts, extended warranties, bulk training programs, and dedicated account management.'
            }
        ]
    },
    {
        category: 'Support & Maintenance',
        questions: [
            {
                question: 'Where can I get my drone serviced?',
                answer: 'We have authorized service centers in major cities worldwide, plus remote diagnostic capabilities and mail-in repair services. Most repairs are completed within 3-5 business days.'
            },
            {
                question: 'How do I register my drone?',
                answer: 'Registration varies by country and drone weight. In the US, drones over 0.55 lbs must be registered with the FAA. We provide guidance and support for all regulatory requirements in your region.'
            },
            {
                question: 'What replacement parts are available?',
                answer: 'We stock all common replacement parts including propellers, batteries, cameras, gimbals, and sensors. Most parts ship within 24 hours and are available through our online store or service partners.'
            }
        ]
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeNavigation();
    initializeGallery();
    initializeNews();
    initializeFAQ();
    initializeContact();
    initializeModal();
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    currentTheme = savedTheme || (systemDark ? 'dark' : 'light');
    
    applyTheme(currentTheme);
    
    // Desktop theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Mobile theme toggle
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', toggleTheme);
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            currentTheme = e.matches ? 'dark' : 'light';
            applyTheme(currentTheme);
        }
    });
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
}

function applyTheme(theme) {
    const root = document.documentElement;
    
    if (theme === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
    } else {
        root.classList.remove('dark');
        root.classList.add('light');
    }
    
    root.style.colorScheme = theme;
}

// Navigation Management
function initializeNavigation() {
    // Desktop navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const page = item.getAttribute('data-page');
            showPage(page);
        });
    });
    
    // Mobile navigation
    const mobileNavItems = document.querySelectorAll('.nav-item-mobile');
    mobileNavItems.forEach(item => {
        item.addEventListener('click', () => {
            const page = item.getAttribute('data-page');
            showPage(page);
            closeMobileMenu();
        });
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMobile = document.getElementById('nav-mobile');
    
    if (mobileMenuBtn && navMobile) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuOpen = !mobileMenuOpen;
            mobileMenuBtn.classList.toggle('active', mobileMenuOpen);
            navMobile.classList.toggle('active', mobileMenuOpen);
        });
    }
    
    // Logo click
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', () => showPage('home'));
    }
}

function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const targetPage = document.getElementById(`${pageId}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update navigation
    updateNavigation(pageId);
    
    // Update current page
    currentPage = pageId;
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Reinitialize Lucide icons for the new page
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function updateNavigation(activePageId) {
    // Update desktop navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const page = item.getAttribute('data-page');
        item.classList.toggle('active', page === activePageId);
    });
    
    // Update mobile navigation
    const mobileNavItems = document.querySelectorAll('.nav-item-mobile');
    mobileNavItems.forEach(item => {
        const page = item.getAttribute('data-page');
        item.classList.toggle('active', page === activePageId);
    });
}

function closeMobileMenu() {
    mobileMenuOpen = false;
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMobile = document.getElementById('nav-mobile');
    
    if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
    if (navMobile) navMobile.classList.remove('active');
}

// Gallery Management
function initializeGallery() {
    renderGallery();
    
    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            selectedGalleryCategory = category;
            
            // Update active filter button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            renderGallery();
        });
    });
}

function renderGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;
    
    const filteredItems = selectedGalleryCategory === 'all' 
        ? galleryItems 
        : galleryItems.filter(item => item.category === selectedGalleryCategory);
    
    galleryGrid.innerHTML = filteredItems.map(item => `
        <div class="gallery-item" data-id="${item.id}">
            <div class="gallery-image">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
                <div class="gallery-overlay">
                    <button class="gallery-overlay-btn" onclick="openModal(${item.id}, 'gallery')">
                        <i data-lucide="zoom-in"></i>
                    </button>
                    ${item.type === 'video' ? `
                        <button class="gallery-overlay-btn">
                            <i data-lucide="play"></i>
                        </button>
                    ` : ''}
                    <button class="gallery-overlay-btn">
                        <i data-lucide="external-link"></i>
                    </button>
                </div>
                <div class="gallery-badge ${item.type}">
                    ${item.type === 'video' ? 'Video' : 'Image'}
                </div>
            </div>
            <div class="gallery-content">
                <h3 class="gallery-title">${item.title}</h3>
                <p class="gallery-description">${item.description}</p>
                <div class="gallery-specs">
                    ${item.specs.map(spec => `<div class="gallery-spec">${spec}</div>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    // Reinitialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// News Management
function initializeNews() {
    renderNews();
    
    // Admin panel toggle
    const adminToggle = document.getElementById('admin-toggle');
    const adminPanel = document.getElementById('admin-panel');
    
    if (adminToggle && adminPanel) {
        adminToggle.addEventListener('click', () => {
            adminPanelOpen = !adminPanelOpen;
            adminPanel.classList.toggle('active', adminPanelOpen);
        });
    }
    
    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value.toLowerCase();
            renderNews();
        });
    }
    
    // Category filters
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            selectedNewsCategory = category;
            
            // Update active category button
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            renderNews();
        });
    });
}

function renderNews() {
    const articlesGrid = document.getElementById('articles-grid');
    if (!articlesGrid) return;
    
    let filteredArticles = newsArticles.filter(article => {
        const matchesSearch = searchTerm === '' || 
            article.title.toLowerCase().includes(searchTerm) ||
            article.excerpt.toLowerCase().includes(searchTerm) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        const matchesCategory = selectedNewsCategory === 'all' || article.category === selectedNewsCategory;
        
        return matchesSearch && matchesCategory && article.published;
    });
    
    if (filteredArticles.length === 0) {
        articlesGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 0;">
                <p style="font-size: 1.25rem; color: var(--text-secondary); margin-bottom: 1rem;">No articles found</p>
                <p style="color: var(--text-tertiary);">Try adjusting your search criteria</p>
            </div>
        `;
        return;
    }
    
    articlesGrid.innerHTML = filteredArticles.map(article => `
        <article class="article-card">
            <div class="article-image">
                <img src="${article.image_url}" alt="${article.title}" loading="lazy">
                <div class="article-category">${article.category}</div>
                <div class="article-admin-actions">
                    <button class="article-admin-btn">
                        <i data-lucide="edit"></i>
                    </button>
                    <button class="article-admin-btn">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
            </div>
            <div class="article-content">
                <div class="article-meta">
                    <i data-lucide="calendar"></i>
                    <span>${formatDate(article.created_at)}</span>
                    <i data-lucide="user"></i>
                    <span>${article.author}</span>
                </div>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-tags">
                    ${article.tags.slice(0, 3).map(tag => `
                        <span class="article-tag">
                            <i data-lucide="tag"></i>
                            ${tag}
                        </span>
                    `).join('')}
                </div>
                <a href="#" class="article-read-more">Read more →</a>
            </div>
        </article>
    `).join('');
    
    // Reinitialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// FAQ Management
function initializeFAQ() {
    renderFAQ();
}

function renderFAQ() {
    const faqContent = document.getElementById('faq-content');
    if (!faqContent) return;
    
    faqContent.innerHTML = faqData.map((category, categoryIndex) => `
        <div class="faq-category">
            <h2 class="faq-category-title">${category.category}</h2>
            <div class="faq-items">
                ${category.questions.map((item, index) => {
                    const globalIndex = categoryIndex * 100 + index;
                    return `
                        <div class="faq-item" data-index="${globalIndex}">
                            <button class="faq-question" onclick="toggleFAQ(${globalIndex})">
                                <span class="faq-question-text">${item.question}</span>
                                <i class="faq-question-icon" data-lucide="chevron-down"></i>
                            </button>
                            <div class="faq-answer">
                                <div class="faq-answer-content">
                                    ${item.answer}
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `).join('');
    
    // Reinitialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function toggleFAQ(index) {
    const faqItem = document.querySelector(`[data-index="${index}"]`);
    if (!faqItem) return;
    
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Contact Management
function initializeContact() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    console.log('Contact form submitted:', data);
    
    // Show success message (in a real app, this would send to a server)
    alert('Thank you for your message! We\'ll get back to you soon.');
    
    // Reset form
    e.target.reset();
}

// Modal Management
function initializeModal() {
    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modal-close');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function openModal(itemId, type) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalBody) return;
    
    let item;
    if (type === 'gallery') {
        item = galleryItems.find(i => i.id === itemId);
    }
    
    if (!item) return;
    
    modalBody.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="modal-image">
        <div class="modal-content-text">
            <h3 class="modal-title">${item.title}</h3>
            <p class="modal-description">${item.description}</p>
            <div class="modal-specs">
                ${item.specs.map(spec => `<div class="modal-spec">${spec}</div>`).join('')}
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scrolling for anchor links
document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .gallery-item, .article-card, .contact-card');
    animateElements.forEach(el => observer.observe(el));
});

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Error handling for missing images
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
    }
}, true);