// Handle search form submission
function searchPackages(event) {
    event.preventDefault();
    const destination = document.getElementById('destination').value;
    
    // Redirect to packages page with the destination as a query parameter
    window.location.href = `packages.html?destination=${encodeURIComponent(destination)}`;
}

// Check if user is logged in
function checkAuth() {
    // Here you would typically check if the user has a valid session
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    
    if (isLoggedIn) {
        if (loginBtn) loginBtn.textContent = 'My Profile';
        if (loginBtn) loginBtn.href = 'profile.html';
        if (signupBtn) signupBtn.textContent = 'Logout';
        if (signupBtn) signupBtn.onclick = logout;
    } else {
        if (loginBtn) {
            loginBtn.textContent = 'Login';
            loginBtn.href = 'login.html';
            loginBtn.onclick = function() { window.location.href = 'login.html'; };
        }
        if (signupBtn) {
            signupBtn.textContent = 'Sign Up';
            signupBtn.href = 'login.html';
            signupBtn.onclick = function() { window.location.href = 'login.html'; };
        }
    }
}

// Handle logout
function logout() {
    // Clear any stored session data
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    // Show user icon if logged in
    var userIcon = document.getElementById('userIconContainer');
    if (userIcon) {
        if (localStorage.getItem('isLoggedIn') === 'true') {
            userIcon.style.display = 'flex';
        } else {
            userIcon.style.display = 'none';
        }
    }
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 