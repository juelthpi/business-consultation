/**
 * Main JavaScript for DUVOLKS Consultants
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Hero Swiper
    const heroSwiper = new Swiper('.heroSwiper', {
        loop: true,
        effect: 'fade',
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        fadeEffect: {
            crossFade: true
        }
    });

    // 2. Initialize Testimonial Swiper
    const testimonialSwiper = new Swiper('.testimonialSwiper', {
        loop: true,
        spaceBetween: 10,
        speed: 800,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.testi-next',
            prevEl: '.testi-prev',
        },
        breakpoints: {
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
        }
    });

    // 2.5 Initialize Brand Swiper
    const brandSwiper = new Swiper('.brandSwiper', {
        loop: true,
        speed: 4000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        slidesPerView: 2,
        centeredSlides: true,
        allowTouchMove: false,
        breakpoints: {
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 7 },
        }
    });

    // 3. Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    // 4. Modern FAQ Interaction
    const faqBtns = document.querySelectorAll('.faq-btn');
    faqBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const faqItem = btn.parentElement;
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('.fa-plus') || btn.querySelector('.fa-minus');

            // Close other open items
            document.querySelectorAll('.faq-btn').forEach(otherBtn => {
                if (otherBtn !== btn && otherBtn.getAttribute('aria-expanded') === 'true') {
                    otherBtn.setAttribute('aria-expanded', 'false');
                    otherBtn.nextElementSibling.style.maxHeight = '0px';
                    if (otherBtn.querySelector('i')) {
                        otherBtn.querySelector('i').classList.replace('fa-minus', 'fa-plus');
                    }
                }
            });

            const expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', !expanded);

            if (!expanded) {
                content.style.maxHeight = content.scrollHeight + 'px';
                if (icon) icon.classList.replace('fa-plus', 'fa-minus');
            } else {
                content.style.maxHeight = '0px';
                if (icon) icon.classList.replace('fa-minus', 'fa-plus');
            }
        });
    });

    // 5. Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('reveal');
        observer.observe(section);
    });

    // 6. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');
    const mobileMenuContent = document.getElementById('mobileMenuContent');
    const body = document.body;

    if (mobileMenuBtn && mobileMenu) {
        const toggleMenu = (open) => {
            if (open) {
                mobileMenu.classList.remove('invisible');
                // Force a reflow for the transition
                void mobileMenu.offsetWidth;
                mobileMenuBackdrop.classList.add('opacity-100');
                mobileMenuContent.classList.remove('translate-x-full');
                body.classList.add('overflow-hidden');
            } else {
                mobileMenuBackdrop.classList.remove('opacity-100');
                mobileMenuContent.classList.add('translate-x-full');
                body.classList.remove('overflow-hidden');

                // Hide container after transition
                setTimeout(() => {
                    if (mobileMenuContent.classList.contains('translate-x-full')) {
                        mobileMenu.classList.add('invisible');
                    }
                }, 500);
            }
        };

        mobileMenuBtn.addEventListener('click', () => toggleMenu(true));
        closeMenuBtn.addEventListener('click', () => toggleMenu(false));
        mobileMenuBackdrop.addEventListener('click', () => toggleMenu(false));

        // Close menu on link click
        mobileMenuContent.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => toggleMenu(false));
        });
    }

    // 7. Intelligence Hub Logic
    const intelligenceData = {
        market: [
            { id: 'm1', sub: 'The Saudi Economy', icon: 'fa-chart-line', title: 'Market Insights for Businesses Extension', text: 'Saudi Arabia accelerated its transformation from an oil-dependent economy. Learn how regional and global companies can further their expansion to the Kingdom.', img: './assets/images/intelligence/m1.jpg', link: '#' },
            { id: 'm2', sub: 'Vision 2030', icon: 'fa-eye', title: 'Saudi Vision 2030 Roadmap', text: 'A sustainable plan to diversify the economy and develop public service sectors such as health, education, infrastructure, and tourism.', img: './assets/images/intelligence/m2.jpg', link: '#' },
            { id: 'm3', sub: 'Giga Projects', icon: 'fa-building-columns', title: 'The Future Built Today', text: 'From NEOM to the Red Sea, Saudi Arabia is rebuilding the future map of the Kingdom with technological marvels and sustainable urbanism.', img: './assets/images/intelligence/m3.jpg', link: '#' },
            { id: 'm4', sub: 'Culture and Business', icon: 'fa-handshake', title: 'Culture & Etiquette', text: 'Succeeding in Saudi requires understanding the unique blend of tradition and modernity. Get the insights you need for professional success.', img: './assets/images/intelligence/m4.jpg', link: '#' },
            { id: 'm5', sub: 'Business Industries', icon: 'fa-industry', title: 'High-Growth Power Sectors', text: 'Explore opportunities in FinTech, Tourism, Renewable Energy, and Logistics as the Kingdom opens its doors to global investment.', img: './assets/images/intelligence/m5.jpg', link: '#' }
        ],
        setup: [
            { id: 's1', sub: '100% Ownership', icon: 'fa-id-card', title: 'Full Foreign Ownership', text: 'Recent reforms allow foreign investors 100% ownership in various sectors without a local partner, simplifying market entry.', img: './assets/images/intelligence/s1.jpg', link: '#' },
            { id: 's2', sub: 'MISA License', icon: 'fa-file-signature', title: 'Securing MISA Investment', text: 'The Ministry of Investment license is the essential first step for any foreign entity looking to operate legally within the Kingdom.', img: './assets/images/intelligence/s2.jpg', link: '#' },
            { id: 's3', sub: 'Commercial Registration', icon: 'fa-stamp', title: 'Finalizing Registration', text: 'Our experts guide you through the Ministry of Commerce requirements to finalize your CR and obtain legal identity.', img: './assets/images/intelligence/s3.jpg', link: '#' },
            { id: 's4', sub: 'Legal Entities', icon: 'fa-scale-balanced', title: 'Choosing Proper Structure', text: 'Whether it is an LLC, a branch, or a representative office, we help you choose the best structure for your enterprise goals.', img: './assets/images/intelligence/s4.jpg', link: '#' }
        ],
        run: [
            { id: 'r1', sub: 'Tax & Zakat', icon: 'fa-file-invoice-dollar', title: 'Compliance Excellence', text: 'Navigate Saudi Arabia tax landscape, including VAT, Zakat, and corporate income tax with our specialized advisory services.', img: './assets/images/intelligence/r1.jpg', link: '#' },
            { id: 'r2', sub: 'Saudization', icon: 'fa-users', title: 'Workforce Nationalization', text: 'Stay compliant with the Nitaqat system while maintaining peak operational efficiency through our strategic manpower planning.', img: './assets/images/intelligence/r2.jpg', link: '#' },
            { id: 'r3', sub: 'Payroll & HR', icon: 'fa-people-group', title: 'End-to-End Payroll', text: 'Management of your workforce, from GOSI registration to WPS-compliant payroll processing.', img: './assets/images/intelligence/r3.jpg', link: '#' }
        ]
    };

    const subtabsContainer = document.getElementById('subtabs-container');
    const displayTitle = document.getElementById('display-title');
    const displayText = document.getElementById('display-text');
    const displayImg = document.getElementById('display-img');
    const contentLoader = document.getElementById('content-loader');

    function updateContent(item) {
        // Show loader
        contentLoader.classList.add('opacity-100');

        // Hide content temporarily for animation
        [displayTitle, displayText, document.getElementById('display-link-wrapper')].forEach(el => {
            el.classList.add('opacity-0', 'translate-y-4');
        });

        setTimeout(() => {
            displayTitle.textContent = item.title;
            displayText.textContent = item.text;
            displayImg.src = item.img;

            // Hide loader and show content
            contentLoader.classList.remove('opacity-100');
            [displayTitle, displayText, document.getElementById('display-link-wrapper')].forEach(el => {
                el.classList.remove('opacity-0', 'translate-y-4');
            });
        }, 300);
    }

    function renderSubtabs(category) {
        subtabsContainer.innerHTML = '';
        const items = intelligenceData[category];

        items.forEach((item, index) => {
            const btn = document.createElement('button');
            btn.className = `sub-tab group ${index === 0 ? 'active' : ''}`;
            btn.innerHTML = `
                <div class="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-brand/10 group-hover:text-brand transition-all duration-300 shadow-sm border border-slate-100 group-[.active]:bg-brand group-[.active]:text-white">
                    <i class="fa-solid ${item.icon}"></i>
                </div>
                <span class="font-bold flex-1 text-left">${item.sub}</span>
                <i class="fa-solid fa-chevron-right text-[10px] opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-[.active]:opacity-100 group-[.active]:translate-x-0"></i>
            `;

            btn.addEventListener('mouseenter', () => {
                document.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
                btn.classList.add('active');
                updateContent(item);
            });

            subtabsContainer.appendChild(btn);
        });

        // Initial content load
        updateContent(items[0]);
    }

    // Main Tab Switching
    document.querySelectorAll('.main-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.main-tab').forEach(t => {
                t.classList.remove('active');
                t.classList.add('text-slate-500');
            });
            tab.classList.add('active');
            tab.classList.remove('text-slate-500');

            const category = tab.getAttribute('data-category');
            renderSubtabs(category);
        });
    });

    // Initialize with first category
    if (subtabsContainer) renderSubtabs('market');
});
