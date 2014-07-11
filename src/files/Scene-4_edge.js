/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Light-On',
                type: 'image',
                rect: ['39px', '79px','615px','245px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Light-On.svg",'0px','0px']
            },
            {
                id: 'BG',
                type: 'image',
                rect: ['0px', '0px','800px','400px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BG.svg",'0px','0px']
            },
            {
                id: 'Rectangle',
                display: 'block',
                type: 'rect',
                rect: ['486px', '107px','222px','191px','auto', 'auto'],
                fill: ["rgba(103,103,103,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Guy-Torso',
                type: 'image',
                rect: ['108px', '140px','60px','119px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Guy-Torso.svg",'0px','0px']
            },
            {
                id: 'Guy-Arm-1',
                type: 'image',
                rect: ['145px', '179px','27px','40px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Guy-Arm-1.svg",'0px','0px'],
                transform: [[],['30']]
            },
            {
                id: 'Guy-Arm-2',
                type: 'image',
                rect: ['143px', '204px','37px','47px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Guy-Arm-2.svg",'0px','0px'],
                transform: [[],['126']]
            },
            {
                id: 'Guy-Leg-L',
                type: 'image',
                rect: ['111px', '233px','40px','89px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Guy-Leg-L.svg",'0px','0px']
            },
            {
                id: 'Guy-Leg-R',
                type: 'image',
                rect: ['134px', '233px','35px','89px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Guy-Leg-R.svg",'0px','0px']
            },
            {
                id: 'Ellipse',
                display: 'none',
                type: 'ellipse',
                rect: ['204px', '190px','4px','4px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(0,255,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Guy-Arm-1}": [
                ["style", "top", '179px'],
                ["style", "left", '145px'],
                ["transform", "rotateZ", '30deg']
            ],
            "${_Guy-Leg-L}": [
                ["style", "left", '111px'],
                ["style", "top", '233px']
            ],
            "${_Guy-Torso}": [
                ["style", "left", '108px'],
                ["style", "top", '140px']
            ],
            "${_BG}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Guy-Leg-R}": [
                ["style", "left", '134px'],
                ["style", "top", '233px']
            ],
            "${_Light-On}": [
                ["style", "top", '79px'],
                ["style", "height", '245px'],
                ["style", "left", '39px'],
                ["style", "width", '615px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(235,99,46,1.00)'],
                ["style", "width", '800px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(103,103,103,1.00)'],
                ["style", "display", 'block']
            ],
            "${_Ellipse}": [
                ["style", "top", '190px'],
                ["style", "display", 'none'],
                ["style", "height", '4px'],
                ["color", "background-color", 'rgba(0,255,0,1.00)'],
                ["style", "left", '204px'],
                ["style", "width", '4px']
            ],
            "${_Guy-Arm-2}": [
                ["style", "top", '204px'],
                ["style", "left", '146px'],
                ["transform", "rotateZ", '126deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid26", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid28", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Ellipse}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Ellipse}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid12", tween: [ "style", "${_Guy-Arm-1}", "top", '179px', { fromValue: '179px'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Guy-Arm-2}", "top", '195px', { fromValue: '204px'}], position: 0, duration: 500 },
                { id: "eid23", tween: [ "style", "${_Guy-Arm-2}", "top", '178px', { fromValue: '195px'}], position: 500, duration: 500 },
                { id: "eid15", tween: [ "transform", "${_Guy-Arm-1}", "rotateZ", '18deg', { fromValue: '30deg'}], position: 0, duration: 500 },
                { id: "eid21", tween: [ "transform", "${_Guy-Arm-1}", "rotateZ", '0deg', { fromValue: '18deg'}], position: 500, duration: 500 },
                { id: "eid16", tween: [ "style", "${_Guy-Arm-1}", "left", '148px', { fromValue: '145px'}], position: 0, duration: 500 },
                { id: "eid19", tween: [ "style", "${_Guy-Arm-2}", "left", '161px', { fromValue: '146px'}], position: 0, duration: 500 },
                { id: "eid22", tween: [ "style", "${_Guy-Arm-2}", "left", '166px', { fromValue: '161px'}], position: 500, duration: 500 },
                { id: "eid14", tween: [ "transform", "${_Guy-Arm-2}", "rotateZ", '83deg', { fromValue: '126deg'}], position: 0, duration: 500 },
                { id: "eid20", tween: [ "transform", "${_Guy-Arm-2}", "rotateZ", '26deg', { fromValue: '83deg'}], position: 500, duration: 500 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-952703492");
