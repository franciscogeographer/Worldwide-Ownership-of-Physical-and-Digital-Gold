var size = 0;
var placement = 'point';

var style_GOLDHOLDINGSTONNES_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("GLD_TONNES");
    var labelText = "";
    size = 0;
    var labelFont = "10.4px \'Bahnschrift SemiCondensed\', sans-serif";
    var labelFill = "#30123b";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("GLD_TONNES") !== null && resolution > 9801 && resolution < 0) {
        labelText = String(feature.get("GLD_TONNES"));
    }
    if (value >= 1.500000 && value <= 100.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(117,117,117,0.75)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,27,0.75)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 100.000000 && value <= 450.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.5 + size,
            stroke: new ol.style.Stroke({color: 'rgba(117,117,117,0.75)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,27,0.75)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 450.000000 && value <= 1000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 7.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(117,117,117,0.75)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,27,0.75)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1000.000000 && value <= 3000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 9.5 + size,
            stroke: new ol.style.Stroke({color: 'rgba(117,117,117,0.75)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,27,0.75)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 3000.000000 && value <= 8135.500000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 12.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(117,117,117,0.75)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,27,0.75)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
