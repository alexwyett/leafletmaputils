var leafletClusterMap = leafletMap.extend({
    init: function(args) {
        this._super(args);
        this.markerClusters = L.markerClusterGroup({
            iconCreateFunction: this.options.iconCreateFunction,
            showCoverageOnHover: false
        });
        this.getMap().addLayer(this.markerClusters);
    },
    
    fitBounds: function() {
        if (this.markerClusters.getLayers().length > 0) {
            bnds = [];
            this.markerClusters.eachLayer(function(layer) {
                bnds.push(layer.getLatLng());
            });
            this.map.fitBounds(
                L.latLngBounds(bnds),
                this.getBoundsSettings()
            );
        }
    },
    
    getCluster: function() {
        return this.markerClusters;
    },
    
    getBoundsSettings: function() {
        return {
            padding: [20, 20]
        };
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
            container: 'leafletmaputils_map_block',
            iconCreateFunction: false
        };
    }
});