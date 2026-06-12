document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white', 'shadow-lg');
            navbar.classList.remove('bg-transparent', 'py-2');
        } else {
            navbar.classList.remove('bg-white', 'shadow-lg');
            navbar.classList.add('bg-transparent', 'py-2');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // 3. Booking Form Simulation
    const bookingForm = document.getElementById('bookingForm');
    const bookingAlert = document.getElementById('bookingAlert');

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page reload

        // Get values (for demonstration purposes, we could log them or send them)
        const service = document.getElementById('service').value;
        const barber = document.getElementById('barber').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;

        // Basic validation check (html 'required' attribute already handles most of this)
        if (service && barber && date && time && name && phone) {
            // Show success alert
            bookingAlert.classList.remove('hidden');
            bookingAlert.classList.add('block');

            // Change button text temporarily
            const submitBtn = bookingForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span>Terkirim! ✓</span>';
            submitBtn.classList.remove('bg-black');
            submitBtn.classList.add('bg-green-500', 'text-white');

            // Reset form
            bookingForm.reset();

            // Hide alert and reset button after 5 seconds
            setTimeout(() => {
                bookingAlert.classList.remove('block');
                bookingAlert.classList.add('hidden');
                
                submitBtn.innerHTML = originalText;
                submitBtn.classList.add('bg-black');
                submitBtn.classList.remove('bg-green-500', 'text-white');
            }, 5000);
        }
    });

    // Set minimum date for booking to today
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
});
