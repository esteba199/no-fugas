     // Función para inicializar el mapa
      function initMap() {
          const map = new google.maps.Map(document.getElementById("map"), {
              center: { lat: 37.5443, lng: -4.7278 }, // Coordenadas de Andalucía
              zoom: 8,
              styles: [
                  {
                      featureType: "administrative",
                      elementType: "labels.text.fill",
                      stylers: [{ color: "#444444" }]
                  },
                  {
                      featureType: "landscape",
                      elementType: "all",
                      stylers: [{ color: "#f2f2f2" }]
                  }
              ]
          });
      }

    const buttons = document.querySelectorAll('.zone-btn');
    const allZones = document.querySelectorAll('.zone-details');
    const defaultDetails = document.getElementById('zoneDetails');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover "active" de todos los botones
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Ocultar todas las zonas
            allZones.forEach(zone => zone.style.display = 'none');

            // Mostrar la zona seleccionada
            const selectedZone = document.getElementById(button.dataset.zone + 'Zone');
            if (selectedZone) {
                selectedZone.style.display = 'block';
            } else {
                defaultDetails.style.display = 'block';
            }
        });
    });
