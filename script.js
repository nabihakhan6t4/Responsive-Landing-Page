console.log("Meri landing page Tailwind ke saath ready ho rahi hai!");

// Learn More Button Example (optional)
const learnMoreBtn = document.querySelector('#hero button');
if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', () => {
        alert('Aapne aur jaanne ke liye click kiya!');
    });
}

// Mobile Menu Toggle Logic - **YEH HAI ZAROORI PART**
const mobileMenuButton = document.getElementById('mobile-menu-button'); // ID check karo
const mobileMenu = document.getElementById('mobile-menu'); // ID check karo

if (mobileMenuButton && mobileMenu) { // Ye check karega ke dono elements mil gaye hain
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden'); // 'hidden' class ko toggle karega
    });

    // Links click karne par menu close ho (optional, for better UX)
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden'); // Menu ko close kar de
        });
    });
} else {
    // Agar elements nahin mile toh console mein error message dikhayega
    console.error("Error: Mobile menu button or menu not found. Check IDs in HTML.");
}