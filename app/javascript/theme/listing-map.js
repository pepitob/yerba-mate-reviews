'use strict';

(function () {

  /* listing map */
  if ($("#detailMap").length) {
    var map = L.map('detailMap').setView([51.5, -0.09], 9);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

     var myIcon = L.icon({
      iconUrl: '../assets/images/map-pin.svg',
      iconSize: [28, 39]
      });
    L.marker([51.5, -0.09], {icon: myIcon}).addTo(map);
  }


  if ($("#mapid_2").length) {

    var map = L.map('mapid_2').setView([51.5, -0.09], 9);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);


    // Loop
    var Listings = [
        [listingsData("Beautiful Cozy Home",'Udaipur, Rajasthan, India','../assets/images/listing-img-1.jpg'), 51.3841208, 0.5247608, 1],
        [listingsData("Affordable Long Term Room",'Daman, Daman and Diu, India', '../assets/images/listing-img-2.jpg'), 51.4, -0.08, 2],
        [listingsData("Entire 3 BHK Cozy Apartment",'Ahmedabad, Gujarat, India','../assets/images/listing-img-3.jpg'), 51.2955038, -0.3293689, 3],
        [listingsData("Private Room No 4 - Boulevard View",'Jaipur, Rajasthan, India','../assets/images/listing-img-4.jpg'), 51.1, -0.05, 4],
        [listingsData("Beautiful Cozy Home",'Udaipur, Rajasthan, India','../assets/images/listing-img-5.jpg'), 51.4541208, 0.5847608, 5],
        [listingsData("Affordable Long Term Room",'Daman, Daman and Diu, India', '../assets/images/listing-img-6.jpg'), 51.49, -0.28, 6],
        [listingsData("Entire 3 BHK Cozy Apartment",'Ahmedabad, Gujarat, India','../assets/images/listing-img-2.jpg'), 51.7555038, -0.3293689, 7],
        [listingsData("Private Room No 4 - Boulevard View",'Jaipur, Rajasthan, India','../assets/images/listing-img-4.jpg'), 51.1, -0.85, 8],

        ];

    // Create HTML for ListingData
    function listingsData(locationTitle, locationAddress, locationimg) {
      return('<div class="tooltip-block"><div class="tooltip-img"><a href="#"><img src=" ' + locationimg + ' "  alt="Rentkit Directory & Listing Bootstrap 5 Theme" class="img-fluid"></a></div><div class="tooltip-content"><h3 class="tooltip-content-title"><a href="#" class="title">'+locationTitle+'</a></h3><p class="tooltip-content-text"><i class="mdi mdi-map-marker text-primary"></i>'+locationAddress+'</p><div class="review-content-rating"> <span class="mdi mdi-star me-1 text-warning small"></span><span class="rating-review fw-bold">4.9(6)</span></div></div></div>'

       );
    }
    // Loop for Listings
    for (var i = 0; i < Listings.length; i++) {
      // Icon Map
         var myIcon = L.icon({
        iconUrl: '../assets/images/map-pin.svg',
        iconSize: [28, 39],
        });
      // Marker to map
      var marker = new L.marker([Listings[i][1],Listings[i][2]], {icon: myIcon,})
      .addTo(map)
      .bindPopup(Listings[i][0])

    } // Loop Close

     for (let i in Listings) {
            console.log(Listings[i][0]);
    }
  }


})();
