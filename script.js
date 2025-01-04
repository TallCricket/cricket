// Placeholder for future interactivity
console.log('TallCricket script loaded.');

// JavaScript Function to Search Content
function searchSite() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const contentSections = document.querySelectorAll('.content section');
    let found = false;

    contentSections.forEach(section => {
        const sectionText = section.textContent.toLowerCase();
        if (sectionText.includes(query)) {
            section.style.display = 'block';  // Show section if it matches
            found = true;
        } else {
            section.style.display = 'none';  // Hide section if it doesn't match
        }
    });

    if (!found) {
        alert("No matching content found.");
    }
}

function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
}
