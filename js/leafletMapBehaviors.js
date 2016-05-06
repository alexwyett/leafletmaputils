(function ($) {
    
    /**
     * Stub
     */
    Drupal.behaviors.leafletmaputils = {};
    
    /**
     * Creates a marker
     * 
     * @param {Float}  lat
     * @param {Float}  lng
     * @param {String} icon
     * @param {String} colour
     * @param {String} markerClass
     * 
     * @returns {L.marker}
     */
    Drupal.behaviors.leafletmaputils.createMarker = function(lat, lng, icon, colour, markerClass) {
        
        icon = (typeof icon !== 'string') ? 'home' : icon;
        colour = (typeof colour !== 'string') ? '' : colour;
        markerClass = (typeof markerClass !== 'string') ? '' : markerClass;
        
        return L.marker(
            [lat, lng], {
                icon: new L.DivIcon({
                    html: '<div class="leafletmaputilsmarker ' + markerClass + '">'
                    + '<i class="leafletmaputilsmarker-icon ' + icon + '" style="background-color: ' + colour + '"></i>'
                    + '</div>',
                    iconSize: L.point(40, 70),
                    iconAnchor: L.point(12, 48)
                })
            }
        );
    };
    
    /**
     * Create a cluster marker for a leaflet map
     * 
     * @param {L.cluster} cluster
     * 
     * @returns {L.marker}
     */
    Drupal.behaviors.leafletmaputils.createClusterMarker = function(cluster) {
        return new L.DivIcon({
            html: '<div class="leafletmaputilsmarker leafletmaputilsmarker-group"><i>' + cluster.getChildCount() + '</i></div>',
            iconSize: L.point(50, 80),
            iconAnchor: L.point(25, 80)
        });
    };
    
})(jQuery);