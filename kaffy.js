let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        cartCount++;
        document.getElementById('cart-count').innerText = cartCount;
        alert(`${this.getAttribute('data-name')} added to cart!`);
    });
});


 // Load Google Maps API
 function initMap() {
    const location = { lat: -34.397, lng: 150.644 }; // Replace with your location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}