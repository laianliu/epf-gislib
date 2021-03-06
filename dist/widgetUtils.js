var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "esri/widgets/Legend", "./widgets/Compass", "./widgets/Home", "./widgets/Fullscreen", "./widgets/Sketch", "./widgets/Measurement2D", "./widgets/Coordinate", "./widgets/ScaleBar", "./widgets/Draw", "./widgets/Buffer", "./widgets/LayerList", "./widgets/Legend", "./widgets/BasemapGallery"], function (require, exports, Legend_1, Compass_1, Home_1, Fullscreen_1, Sketch_1, Measurement2D_1, Coordinate_1, ScaleBar_1, Draw_1, Buffer_1, LayerList_1, Legend_2, BasemapGallery_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Legend_1 = __importDefault(Legend_1);
    Compass_1 = __importDefault(Compass_1);
    Home_1 = __importDefault(Home_1);
    Fullscreen_1 = __importDefault(Fullscreen_1);
    Sketch_1 = __importDefault(Sketch_1);
    Measurement2D_1 = __importDefault(Measurement2D_1);
    Coordinate_1 = __importDefault(Coordinate_1);
    ScaleBar_1 = __importDefault(ScaleBar_1);
    Draw_1 = __importDefault(Draw_1);
    Buffer_1 = __importDefault(Buffer_1);
    LayerList_1 = __importDefault(LayerList_1);
    Legend_2 = __importDefault(Legend_2);
    BasemapGallery_1 = __importDefault(BasemapGallery_1);
    var widgetMap = {
        Compass: Compass_1.default,
        Home: Home_1.default,
        Fullscreen: Fullscreen_1.default,
        Sketch: Sketch_1.default,
        Measurement2D: Measurement2D_1.default,
        Coordinate: Coordinate_1.default,
        ScaleBar: ScaleBar_1.default,
        Draw: Draw_1.default,
        Buffer: Buffer_1.default,
        LayerList: LayerList_1.default,
        Legend: Legend_2.default,
        BasemapGallery: BasemapGallery_1.default
    };
    function createWidget(name, view, position, index) {
        return new widgetMap[name](view, position, index);
    }
    exports.createWidget = createWidget;
    function createLegend(view, container) {
        var instance = new Legend_1.default({
            view: view,
            style: 'classic',
            layout: 'side-by-side',
            container: container
        });
        return instance;
    }
    exports.createLegend = createLegend;
});
