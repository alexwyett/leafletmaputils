var leafletAdminMap = leafletMap.extend({
    setMarker: function() {
        that = this;
        
        marker = new L.marker(
            new L.LatLng(
                this.options.center[0],
                this.options.center[1]
            ), {
                draggable: true
            }
        );

        marker.on('dragend', function(e) {
            var position = e.target.getLatLng();
            update_form(position.lat, position.lng);
            that.getMap().panTo(position);
        });
        
        that.getMap().addLayer(marker);
    },
    
    getContainer: function() {
        return jQuery('#' . this.options.container);
    }
});

var toccOffice = {
    lat: 52.7625898502495,
    lng: 1.1106276512145996
};

jQuery(document).ready(function() {
    var plugin = new leafletAdminMap({
        center: [
            tp_lat_field_value(),
            tp_long_field_value()
        ],
        zoom: 12,
        container: get_container()
    });
    plugin.setMarker();
    update_form(
        tp_lat_field_value(),
        tp_long_field_value()
    );
});

function get_container() {
    return 'toccmaputils_mappicker';
}

function update_form(_lat, _long) {
    tp_lat_field().val(_lat);
    tp_long_field().val(_long);
}

function tp_lat_field_value() {
    return (tp_lat_field().val().toString() === '') ? toccOffice.lat : tp_lat_field().val();
}

function tp_lat_field() {
    return jQuery('#' + jQuery('#' + get_container()).data('latfield'));
}

function tp_long_field_value() {
    return (tp_long_field().val().toString() === '') ? toccOffice.lng : tp_long_field().val();
}

function tp_long_field() {
    return jQuery('#' + jQuery('#' + get_container()).data('longfield'));
}