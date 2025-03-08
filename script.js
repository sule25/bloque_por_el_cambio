// Function to get the current location using the Geolocation API
function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
    
          // Using a reverse geocoding service (e.g., OpenCage, Google Maps API) to get the location name
          fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=JSON&auth=YOUR_API_KEY`)
            .then(response => response.json())
            .then(data => {
              document.getElementById('location').textContent = data.city || 'Ubicación desconocida';
            })
            .catch(error => {
              document.getElementById('location').textContent = 'Ubicación no disponible';
            });
        });
      } else {
        document.getElementById('location').textContent = 'Geolocalización no soportada';
      }
    }
    
    // Function to update the time
    function updateTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
    
      const timeString = `${hours}:${minutes}:${seconds}`;
      document.getElementById('time').textContent = timeString;
    }
    
    // Update the time every second
    setInterval(updateTime, 1000);
    
    // Call the functions to set the location and time when the page loads
    window.onload = function() {
      getLocation();
      updateTime();
    };