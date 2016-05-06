<?php

function leafletmaputils_config_form($form, &$form_state)
{
    $form['leafletmaputils_tile_url'] = array(
        '#type' => 'select',
        '#title' => 'Tile style',
        '#options' => array(
            '' => 'Default style',
            'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg' => 'Watercolour Style',
            'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png' => 'Vanilla blue / grey style',
            'https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png' => 'Blue / grey with transport data style',
            'https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png' => 'Blue / grey with landscape definition style',
            'https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png' => 'Blue / grey with outdoor definition style',
            'https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png' => 'Pioneer style map',
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}' => 'World Street Map style',
            'https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}' => 'Delorme world base map style',
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}' => 'World Topographical Map style',
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}' => 'World Shaded Relief style',
            'https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}' => 'Ocean basemap style',
            'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}' => 'National geographic style',
            'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}' => 'World grey / base map style'
        ),
        '#default_value' => variable_get('leafletmaputils_tile_url', ''),
        '#description' => 'Use this option if you wish to change the tile url.',
    );
    
    // More can be found here: https://leaflet-extras.github.io/leaflet-providers/preview/
    
    $form['leafletmaputils_minZoom'] = array(
        '#type' => 'textfield',
        '#title' => 'Min Zoom level',
        '#default_value' => variable_get('leafletmaputils_minZoom', ''),
        '#description' => 'Enter a value between 1 and 18',
        '#element_validate' => array('element_validate_integer_positive')
    );
    
    $form['leafletmaputils_maxZoom'] = array(
        '#type' => 'textfield',
        '#title' => 'Max Zoom level',
        '#default_value' => variable_get('leafletmaputils_maxZoom', ''),
        '#description' => 'Enter a value between 1 and 18',
        '#element_validate' => array('element_validate_integer_positive')
    );
    
    return system_settings_form($form);
}