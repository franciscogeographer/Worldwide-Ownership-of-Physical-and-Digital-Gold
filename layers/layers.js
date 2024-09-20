var wms_layers = [];

var format_CRYPTOOWNERSHIPRATE_0 = new ol.format.GeoJSON();
var features_CRYPTOOWNERSHIPRATE_0 = format_CRYPTOOWNERSHIPRATE_0.readFeatures(json_CRYPTOOWNERSHIPRATE_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRYPTOOWNERSHIPRATE_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRYPTOOWNERSHIPRATE_0.addFeatures(features_CRYPTOOWNERSHIPRATE_0);
var lyr_CRYPTOOWNERSHIPRATE_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CRYPTOOWNERSHIPRATE_0, 
                style: style_CRYPTOOWNERSHIPRATE_0,
                popuplayertitle: "CRYPTO OWNERSHIP RATE",
                interactive: false,
    title: 'CRYPTO OWNERSHIP RATE<br />\
    <img src="styles/legend/CRYPTOOWNERSHIPRATE_0_0.png" /> 0 %<br />\
    <img src="styles/legend/CRYPTOOWNERSHIPRATE_0_1.png" /> 0.86 % - 3 %<br />\
    <img src="styles/legend/CRYPTOOWNERSHIPRATE_0_2.png" /> 3.1 % - 9 %<br />\
    <img src="styles/legend/CRYPTOOWNERSHIPRATE_0_3.png" /> 9.1 % - 16 %<br />\
    <img src="styles/legend/CRYPTOOWNERSHIPRATE_0_4.png" /> 16.1 % - 30.4 %<br />'
        });
var format_AFRICAMONETARYUNION_1 = new ol.format.GeoJSON();
var features_AFRICAMONETARYUNION_1 = format_AFRICAMONETARYUNION_1.readFeatures(json_AFRICAMONETARYUNION_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AFRICAMONETARYUNION_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AFRICAMONETARYUNION_1.addFeatures(features_AFRICAMONETARYUNION_1);
var lyr_AFRICAMONETARYUNION_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AFRICAMONETARYUNION_1, 
                style: style_AFRICAMONETARYUNION_1,
                popuplayertitle: "AFRICA MONETARY UNION",
                interactive: true,
    title: 'AFRICA MONETARY UNION<br />\
    <img src="styles/legend/AFRICAMONETARYUNION_1_0.png" /> Bank Central African States (BEAC)<br />\
    <img src="styles/legend/AFRICAMONETARYUNION_1_1.png" /> West African Economic Monetary Union (WAEMU)<br />'
        });
var format_GOLDHOLDINGSTONNES_2 = new ol.format.GeoJSON();
var features_GOLDHOLDINGSTONNES_2 = format_GOLDHOLDINGSTONNES_2.readFeatures(json_GOLDHOLDINGSTONNES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GOLDHOLDINGSTONNES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GOLDHOLDINGSTONNES_2.addFeatures(features_GOLDHOLDINGSTONNES_2);
var lyr_GOLDHOLDINGSTONNES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GOLDHOLDINGSTONNES_2, 
                style: style_GOLDHOLDINGSTONNES_2,
                popuplayertitle: "GOLD HOLDINGS (TONNES)",
                interactive: true,
    title: 'GOLD HOLDINGS (TONNES)<br />\
    <img src="styles/legend/GOLDHOLDINGSTONNES_2_0.png" /> 2 - 100<br />\
    <img src="styles/legend/GOLDHOLDINGSTONNES_2_1.png" /> 100 - 450<br />\
    <img src="styles/legend/GOLDHOLDINGSTONNES_2_2.png" /> 450 - 1000<br />\
    <img src="styles/legend/GOLDHOLDINGSTONNES_2_3.png" /> 1000 - 3000<br />\
    <img src="styles/legend/GOLDHOLDINGSTONNES_2_4.png" /> 3000 - 8136<br />'
        });
var format_LABELLINES_3 = new ol.format.GeoJSON();
var features_LABELLINES_3 = format_LABELLINES_3.readFeatures(json_LABELLINES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LABELLINES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LABELLINES_3.addFeatures(features_LABELLINES_3);
var lyr_LABELLINES_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LABELLINES_3, 
                style: style_LABELLINES_3,
                popuplayertitle: "LABEL LINES",
                interactive: false,
                title: '<img src="styles/legend/LABELLINES_3.png" /> LABEL LINES'
            });

lyr_CRYPTOOWNERSHIPRATE_0.setVisible(true);lyr_AFRICAMONETARYUNION_1.setVisible(true);lyr_GOLDHOLDINGSTONNES_2.setVisible(true);lyr_LABELLINES_3.setVisible(true);
var layersList = [lyr_CRYPTOOWNERSHIPRATE_0,lyr_AFRICAMONETARYUNION_1,lyr_GOLDHOLDINGSTONNES_2,lyr_LABELLINES_3];
lyr_CRYPTOOWNERSHIPRATE_0.set('fieldAliases', {'CTRY_ALT': 'CTRY_ALT', 'CrptOwnRat': 'CrptOwnRat', 'CTRY_EN': 'CTRY_EN', 'World_official_gold_holdings_as_of_Sep2024_IFS_TONNES': 'World_official_gold_holdings_as_of_Sep2024_IFS_TONNES', });
lyr_AFRICAMONETARYUNION_1.set('fieldAliases', {'CONTINENT': 'CONTINENT', 'REGION_UN': 'REGION_UN', 'SUBREGION': 'SUBREGION', 'REGION_WB': 'REGION_WB', 'CTRY_ALT': 'CTRY_ALT', });
lyr_GOLDHOLDINGSTONNES_2.set('fieldAliases', {'GLD_TONNES': 'GLD_TONNES', 'COUNTRY': 'COUNTRY', });
lyr_LABELLINES_3.set('fieldAliases', {'id': 'id', });
lyr_CRYPTOOWNERSHIPRATE_0.set('fieldImages', {'CTRY_ALT': 'TextEdit', 'CrptOwnRat': 'TextEdit', 'CTRY_EN': 'TextEdit', 'World_official_gold_holdings_as_of_Sep2024_IFS_TONNES': 'TextEdit', });
lyr_AFRICAMONETARYUNION_1.set('fieldImages', {'CONTINENT': 'TextEdit', 'REGION_UN': 'TextEdit', 'SUBREGION': 'TextEdit', 'REGION_WB': 'TextEdit', 'CTRY_ALT': 'TextEdit', });
lyr_GOLDHOLDINGSTONNES_2.set('fieldImages', {'GLD_TONNES': 'TextEdit', 'COUNTRY': 'TextEdit', });
lyr_LABELLINES_3.set('fieldImages', {'id': 'TextEdit', });
lyr_CRYPTOOWNERSHIPRATE_0.set('fieldLabels', {'CTRY_ALT': 'no label', 'CrptOwnRat': 'inline label - visible with data', 'CTRY_EN': 'no label', 'World_official_gold_holdings_as_of_Sep2024_IFS_TONNES': 'no label', });
lyr_AFRICAMONETARYUNION_1.set('fieldLabels', {'CONTINENT': 'no label', 'REGION_UN': 'no label', 'SUBREGION': 'no label', 'REGION_WB': 'no label', 'CTRY_ALT': 'inline label - always visible', });
lyr_GOLDHOLDINGSTONNES_2.set('fieldLabels', {'GLD_TONNES': 'inline label - visible with data', 'COUNTRY': 'inline label - visible with data', });
lyr_LABELLINES_3.set('fieldLabels', {'id': 'no label', });
lyr_LABELLINES_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});