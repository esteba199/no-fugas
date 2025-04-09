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