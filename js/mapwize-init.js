Mapwize.map('map', {
    apiKey: 'ContexeoDevAppAPIKEY',
    center: [50.6330782816305, 3.02013918757439],
    minZoom: 18,
    maxBounds: [[50.6299359068348, 3.01739931106567], [50.6347914424317, 3.02455544471741]],
    floor: 2
}, function (err, map) {
    // map.centerOnVenue('56b20714c3fa800b00d8f0b5');
    map.setPromotePlaces(['5909895d7082a800103da684']);
});
