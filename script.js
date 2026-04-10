// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Dynamic Years of Experience Counting (Starting from Feb 2014)
// We calculate the exact difference in years from February 1st, 2014
const startDate = new Date('2014-02-01');
const currentDate = new Date();
const differenceInMilliseconds = currentDate - startDate;
const yearsOfDifference = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));

const dynamicYearElements = document.querySelectorAll('.dynamic-yr');
dynamicYearElements.forEach(el => {
    el.textContent = yearsOfDifference;
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if(mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('ph-list');
            icon.classList.add('ph-x');
        } else {
            icon.classList.remove('ph-x');
            icon.classList.add('ph-list');
        }
    });
}

// Close mobile menu when link is clicked
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('ph-x');
        icon.classList.add('ph-list');
    });
});

// Share functionality
async function sharePortfolio() {
    const shareStatus = document.getElementById('share-status');
    
    // Check if Web Share API is supported (mostly mobile + some modern desktop browsers)
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Srihari Balgam - Senior Full Stack Developer',
                text: 'Check out the portfolio of Srihari Balgam, an expert in MEAN Stack, .NET C# and Azure!',
                url: window.location.href
            });
            shareStatus.textContent = 'Shared successfully!';
        } catch (err) {
            // User cancelled or error occurred
            if(err.name !== 'AbortError') {
                 console.error('Error sharing:', err);
                 fallbackShare(shareStatus);
            }
        }
    } else {
        // Fallback for browsers that do not support Web Share API
        fallbackShare(shareStatus);
    }

    // Clear status message after 3 seconds
    setTimeout(() => {
        shareStatus.textContent = '';
    }, 3000);
}

function fallbackShare(statusElement) {
    // Copy URL to clipboard
    navigator.clipboard.writeText(window.location.href)
        .then(() => {
            statusElement.textContent = 'Link copied to clipboard!';
        })
        .catch(err => {
            console.error('Failed to copy link: ', err);
            statusElement.textContent = 'Failed to copy link.';
        });
}
