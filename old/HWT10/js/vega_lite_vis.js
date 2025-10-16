var vg_1 = "js/symbol_map.vg.json";
var vg_2 = "js/stacked_bar_chart.vg.json";
var vg_3 = "js/test_stacked_area.vg.json";
var vg_4 = "js/scatter_legend.vg.json";


vegaEmbed("#symbol_map", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#stacked_bar_chart", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#bar_chart_1", vg_3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#scatter_legend", vg_4).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);