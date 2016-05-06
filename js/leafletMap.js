var leafletMap = AwBase.extend({    
    /**
     * Initialise the map.  Call this to go!
     * 
     * @param {Object} args Constructor arguments
     * 
     * @returns {null}
     */
    init: function(args) {
        // Get options
        this.options = this.paramsextend({}, this.getDefaults(), args);
        
        if (typeof this.options.mapOptions !== 'object') {
            this.options.mapOptions = {};
        }
        
        jQuery.each(['maxZoom', 'minZoom'], function(index, value) {
            if (!this.options.mapOptions.hasOwnProperty(value) 
                && Drupal.settings.leafletmaputils 
                && Drupal.settings.leafletmaputils.hasOwnProperty(value)
                && Drupal.settings.leafletmaputils[value].length > 0
            ) {
                this.options.mapOptions[value] = Drupal.settings.leafletmaputils[value];
            }
        }.bind(this));
        
        this.map = L.map(this.options.container, this.options.mapOptions).setView(
            this.options.center,
            this.options.zoom
        );

        var tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        if (Drupal.settings.leafletmaputils 
            && Drupal.settings.leafletmaputils.tileroot 
            && Drupal.settings.leafletmaputils.tileroot.length > 0
        ) {
            tileURL = Drupal.settings.leafletmaputils.tileroot;
        }

        this.tiles = L.tileLayer(tileURL, {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map);
        
        jQuery('a', this.map.attributionControl._container).attr('target', '_new');
    },
    
    /**
     * Get the map defaults
     * 
     * @returns {Array}
     */
    getDefaults: function() {
        return {
            center: [
                51.505,
                -0.09
            ],
            zoom: 10,
            container: 'leaflet_map_block',
            mapOptions: {}
        };
    },
    
    /**
     * Return the map object
     * 
     * @returns {L.map}
     */
    getMap: function() {
        return this.map;
    }
});