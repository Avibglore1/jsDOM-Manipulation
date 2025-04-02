document.addEventListener('DOMContentLoaded', function() {
    const unitCBtn = document.querySelector('.unit-c');
    const unitFBtn = document.querySelector('.unit-f');
    
    unitCBtn.addEventListener('click', function() {
        unitCBtn.classList.add('active');
        unitFBtn.classList.remove('active');
        // TODO: Convert temperatures to Celsius
    });
    
    unitFBtn.addEventListener('click', function() {
        unitFBtn.classList.add('active');
        unitCBtn.classList.remove('active');
        // TODO: Convert temperatures to Fahrenheit
    });
    
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');
    
    searchBtn.addEventListener('click', function() {
        const city = searchInput.value.trim();
        if (city) {
            // TODO: Fetch weather data for the entered city
            console.log(`Searching weather for: ${city}`);
            // showLoading();
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
    
    const locationBtn = document.querySelector('.location-btn');
    
    locationBtn.addEventListener('click', function() {
        // TODO: Get user's current location and fetch weather
        console.log('Getting current location...');
        // showLoading();
        
        // Simulate geolocation API
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
                    // TODO: Use these coordinates to fetch weather data
                },
                (error) => {
                    console.error('Error getting location:', error.message);
                    // TODO: Show error message to user
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser');
            // TODO: Show error message to user
        }
    });
    
    // Functions to show/hide loading spinner
    function showLoading() {
        document.querySelector('.loading-overlay').style.display = 'flex';
    }
    
    function hideLoading() {
        document.querySelector('.loading-overlay').style.display = 'none';
    }
    
    // Update current date and time
    function updateDateTime() {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            day: 'numeric', 
            month: 'short', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        const formattedDateTime = now.toLocaleDateString('en-US', options)
            .replace(',', '')
            .replace(/(\d+):(\d+)/, '$1:$2');
        
        document.querySelector('.date-time').textContent = formattedDateTime;
    }
    
    updateDateTime();
    setInterval(updateDateTime, 60000); // Update every minute
    
    // Refresh button
    const refreshBtn = document.querySelector('.refresh-btn');
    
    refreshBtn.addEventListener('click', function() {
        // TODO: Refresh current weather data
        console.log('Refreshing weather data...');
        this.classList.add('rotating');
        
        // Remove the class after animation completes
        setTimeout(() => {
            this.classList.remove('rotating');
        }, 1000);
    });
});