 const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section');

        navLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                navLinks.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');

                const targetSection = document.querySelector(`.${this.dataset.target}`);
                sections.forEach(section => section.style.display = 'none');
                targetSection.style.display = 'grid';
            });
        });

        // Default to show the first section
        document.querySelector('.section').style.display = 'grid';
