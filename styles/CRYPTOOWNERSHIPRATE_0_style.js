var size = 0;
var placement = 'point';

var style_CRYPTOOWNERSHIPRATE_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("CrptOwnRat");
    var labelText = "";
    size = 0;
    var labelFont = "9.1px \'Bahnschrift SemiCondensed\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 0.25;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("CTRY_EN") !== null) {
        labelText = String(feature.get("CTRY_EN"));
    }
    if (value >= 0.000000 && value <= 0.860000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.22799999999999998}),fill: new ol.style.Fill({color: 'rgba(246,239,247,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.860000 && value <= 3.060000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.22799999999999998}),fill: new ol.style.Fill({color: 'rgba(189,201,225,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 3.060000 && value <= 9.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.22799999999999998}),fill: new ol.style.Fill({color: 'rgba(103,169,207,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 9.000000 && value <= 16.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.22799999999999998}),fill: new ol.style.Fill({color: 'rgba(28,144,153,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 16.000000 && value <= 30.390000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.22799999999999998}),fill: new ol.style.Fill({color: 'rgba(1,108,89,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
