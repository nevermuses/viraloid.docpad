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
                id: 'Rectangle5',
                type: 'rect',
                rect: ['522px', '289px','0px','2px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],['-2']]
            },
            {
                id: 'Rectangle4',
                display: 'none',
                type: 'rect',
                rect: ['442px', '304px','84px','2px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],['-23']]
            },
            {
                id: 'Ellipse',
                type: 'ellipse',
                rect: ['285px', '397px','11px','11px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle2',
                display: 'none',
                type: 'rect',
                rect: ['291px', '355px','2px','2px','auto', 'auto'],
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'BG',
                type: 'image',
                rect: ['0px', '0px','800px','500px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BG.svg",'0px','0px']
            },
            {
                id: 'Rectangle6',
                type: 'rect',
                rect: ['599px', '274px','79px','2px','auto', 'auto'],
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],['-18']]
            },
            {
                id: 'Guy-Body',
                type: 'image',
                rect: ['326px', '53px','92px','148px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Guy-Body.svg",'0px','0px']
            },
            {
                id: 'Guy-Arm',
                type: 'image',
                rect: ['360px', '81px','58px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Guy-Arm.svg",'0px','0px']
            },
            {
                id: 'RoundRect',
                display: 'none',
                type: 'rect',
                rect: ['394px', '85px','3px','11px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,243,208,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['119px', '165px','7px','7px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'RectangleCopy',
                type: 'rect',
                rect: ['128px', '165px','7px','7px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'RectangleCopy2',
                type: 'rect',
                rect: ['137px', '165px','7px','7px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'RectangleCopy3',
                type: 'rect',
                rect: ['146px', '165px','7px','7px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'RectangleCopy4',
                type: 'rect',
                rect: ['155px', '165px','7px','7px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'RectangleCopy5',
                type: 'rect',
                rect: ['164px', '165px','7px','7px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'RectangleCopy6',
                type: 'rect',
                rect: ['173px', '165px','7px','7px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'RectangleCopy7',
                type: 'rect',
                rect: ['182px', '165px','7px','7px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: '_10_Shadow',
                display: 'none',
                type: 'rect',
                rect: ['275px', '317px','33px','20px','auto', 'auto'],
                fill: ["rgba(235,99,46,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_10',
                display: 'none',
                type: 'text',
                rect: ['281px', '319px','auto','auto','auto', 'auto'],
                text: "10",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(255,255,255,1.00)", "900", "none", ""]
            },
            {
                id: '_11_Shadow',
                display: 'none',
                type: 'rect',
                rect: ['275px', '317px','33px','20px','auto', 'auto'],
                fill: ["rgba(235,99,46,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_11',
                display: 'none',
                type: 'text',
                rect: ['281px', '319px','auto','auto','auto', 'auto'],
                text: "100",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(255,255,255,1.00)", "900", "none", ""]
            },
            {
                id: '_12_Shadow',
                display: 'none',
                type: 'rect',
                rect: ['275px', '317px','33px','20px','auto', 'auto'],
                fill: ["rgba(235,99,46,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_12',
                display: 'none',
                type: 'text',
                rect: ['281px', '319px','auto','auto','auto', 'auto'],
                text: "1K",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(255,255,255,1.00)", "900", "none", ""]
            },
            {
                id: '_12_ShadowCopy',
                display: 'none',
                type: 'rect',
                rect: ['275px', '317px','33px','20px','auto', 'auto'],
                fill: ["rgba(235,99,46,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_12Copy',
                display: 'none',
                type: 'text',
                rect: ['281px', '319px','auto','auto','auto', 'auto'],
                text: "10K",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(255,255,255,1.00)", "900", "none", ""]
            },
            {
                id: '_12_ShadowCopy2',
                display: 'none',
                type: 'rect',
                rect: ['275px', '317px','33px','20px','auto', 'auto'],
                fill: ["rgba(235,99,46,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_12Copy2',
                display: 'none',
                type: 'text',
                rect: ['281px', '319px','auto','auto','auto', 'auto'],
                text: "100K",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(255,255,255,1.00)", "900", "none", ""]
            },
            {
                id: '_12_ShadowCopy3',
                display: 'none',
                type: 'rect',
                rect: ['275px', '317px','33px','20px','auto', 'auto'],
                fill: ["rgba(235,99,46,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_12Copy3',
                display: 'none',
                type: 'text',
                rect: ['281px', '319px','auto','auto','auto', 'auto'],
                text: "1M",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(255,255,255,1.00)", "900", "none", ""]
            },
            {
                id: 'Ellipse2',
                display: 'none',
                type: 'ellipse',
                rect: ['672px', '256px','11px','11px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__12_ShadowCopy2}": [
                ["color", "background-color", 'rgba(235,99,46,1.00)'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '584px'],
                ["style", "top", '260px']
            ],
            "${_Guy-Body}": [
                ["style", "left", '326px'],
                ["style", "top", '53px']
            ],
            "${__12Copy2}": [
                ["style", "top", '262px'],
                ["style", "letter-spacing", '2px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '582px'],
                ["style", "font-size", '15px']
            ],
            "${__11_Shadow}": [
                ["color", "background-color", 'rgba(235,99,46,1.00)'],
                ["style", "height", '20px'],
                ["style", "top", '307px'],
                ["style", "left", '348px'],
                ["style", "display", 'none']
            ],
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(255,243,208,1.00)'],
                ["style", "display", 'none'],
                ["style", "top", '85px'],
                ["style", "width", '3px']
            ],
            "${__10}": [
                ["style", "top", '319px'],
                ["style", "letter-spacing", '2px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '281px'],
                ["style", "font-size", '15px']
            ],
            "${_RectangleCopy4}": [
                ["style", "top", '165px'],
                ["style", "height", '7px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '155px'],
                ["style", "width", '7px']
            ],
            "${_Guy-Arm}": [
                ["style", "top", '92px'],
                ["style", "left", '346px'],
                ["transform", "rotateZ", '58deg']
            ],
            "${_BG}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${__10_Shadow}": [
                ["color", "background-color", 'rgba(235,99,46,1.00)'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '275px'],
                ["style", "top", '317px']
            ],
            "${__11}": [
                ["style", "top", '309px'],
                ["style", "letter-spacing", '2px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "display", 'none'],
                ["style", "font-weight", '900'],
                ["style", "left", '352px'],
                ["style", "font-size", '15px']
            ],
            "${__12Copy3}": [
                ["style", "top", '262px'],
                ["style", "letter-spacing", '2px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "display", 'none'],
                ["style", "font-weight", '900'],
                ["style", "left", '582px'],
                ["style", "font-size", '15px']
            ],
            "${_Rectangle}": [
                ["style", "top", '165px'],
                ["style", "height", '7px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '119px'],
                ["style", "width", '7px']
            ],
            "${_Rectangle4}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "rotateZ", '-23deg'],
                ["style", "display", 'none'],
                ["style", "top", '321px'],
                ["style", "left", '446px'],
                ["style", "width", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(235,99,46,1.00)'],
                ["style", "width", '800px'],
                ["style", "height", '500px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle2}": [
                ["style", "top", '357px'],
                ["transform", "rotateZ", '-12deg'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '2px'],
                ["style", "display", 'none'],
                ["style", "left", '290px'],
                ["style", "width", '2px']
            ],
            "${_RectangleCopy3}": [
                ["style", "top", '165px'],
                ["style", "height", '7px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '146px'],
                ["style", "width", '7px']
            ],
            "${_RectangleCopy5}": [
                ["style", "top", '165px'],
                ["style", "height", '7px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '164px'],
                ["style", "width", '7px']
            ],
            "${_RectangleCopy6}": [
                ["style", "top", '165px'],
                ["style", "height", '7px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '173px'],
                ["style", "width", '7px']
            ],
            "${__12_ShadowCopy3}": [
                ["color", "background-color", 'rgba(235,99,46,1.00)'],
                ["style", "height", '20px'],
                ["style", "top", '230px'],
                ["style", "left", '661px'],
                ["style", "display", 'none']
            ],
            "${_RectangleCopy7}": [
                ["style", "top", '165px'],
                ["style", "height", '7px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '182px'],
                ["style", "width", '7px']
            ],
            "${__12}": [
                ["style", "top", '291px'],
                ["style", "letter-spacing", '2px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '437px'],
                ["style", "font-size", '15px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '286px'],
                ["style", "width", '0px'],
                ["style", "left", '601px'],
                ["transform", "rotateZ", '-18deg']
            ],
            "${__12_ShadowCopy}": [
                ["color", "background-color", 'rgba(235,99,46,1.00)'],
                ["style", "display", 'none'],
                ["style", "top", '260px'],
                ["style", "left", '505px'],
                ["style", "height", '20px']
            ],
            "${_RectangleCopy}": [
                ["style", "top", '165px'],
                ["style", "height", '7px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '128px'],
                ["style", "width", '7px']
            ],
            "${_Ellipse}": [
                ["style", "top", '397px'],
                ["style", "height", '11px'],
                ["style", "left", '285px'],
                ["style", "width", '11px']
            ],
            "${_RectangleCopy2}": [
                ["style", "top", '165px'],
                ["style", "height", '7px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '137px'],
                ["style", "width", '7px']
            ],
            "${_Rectangle5}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "width", '0px'],
                ["style", "top", '288px'],
                ["transform", "rotateZ", '-2deg']
            ],
            "${__12Copy}": [
                ["style", "top", '262px'],
                ["style", "letter-spacing", '2px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "display", 'none'],
                ["style", "font-weight", '900'],
                ["style", "left", '507px'],
                ["style", "font-size", '15px']
            ],
            "${_Ellipse2}": [
                ["style", "top", '256px'],
                ["style", "left", '672px'],
                ["style", "display", 'none']
            ],
            "${__12_Shadow}": [
                ["color", "background-color", 'rgba(235,99,46,1.00)'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '429px'],
                ["style", "top", '289px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: true,
            timeline: [
                { id: "eid66", tween: [ "style", "${__11}", "display", 'none', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid67", tween: [ "style", "${__11}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
                { id: "eid83", tween: [ "style", "${_Rectangle4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid84", tween: [ "style", "${_Rectangle4}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid44", tween: [ "style", "${_Rectangle2}", "height", '2px', { fromValue: '2px'}], position: 3500, duration: 0 },
                { id: "eid77", tween: [ "style", "${__12_Shadow}", "display", 'none', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid78", tween: [ "style", "${__12_Shadow}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid31", tween: [ "transform", "${_Guy-Arm}", "rotateZ", '58deg', { fromValue: '58deg'}], position: 0, duration: 0 },
                { id: "eid158", tween: [ "transform", "${_Guy-Arm}", "rotateZ", '0deg', { fromValue: '58deg'}], position: 7250, duration: 250 },
                { id: "eid116", tween: [ "style", "${__12Copy2}", "display", 'none', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid117", tween: [ "style", "${__12Copy2}", "display", 'block', { fromValue: 'none'}], position: 6500, duration: 0 },
                { id: "eid154", tween: [ "style", "${__12_ShadowCopy3}", "top", '230px', { fromValue: '230px'}], position: 7250, duration: 0 },
                { id: "eid63", tween: [ "style", "${__10_Shadow}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid65", tween: [ "style", "${__10_Shadow}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid91", tween: [ "style", "${_Rectangle5}", "width", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid94", tween: [ "style", "${_Rectangle5}", "width", '78px', { fromValue: '0px'}], position: 5750, duration: 750 },
                { id: "eid149", tween: [ "style", "${__12Copy3}", "left", '666px', { fromValue: '582px'}], position: 7250, duration: 0 },
                { id: "eid139", tween: [ "style", "${__12Copy}", "left", '507px', { fromValue: '507px'}], position: 5750, duration: 0 },
                { id: "eid58", tween: [ "style", "${_Rectangle2}", "left", '290px', { fromValue: '290px'}], position: 5000, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Guy-Arm}", "top", '92px', { fromValue: '92px'}], position: 0, duration: 0 },
                { id: "eid162", tween: [ "style", "${_Guy-Arm}", "top", '80px', { fromValue: '92px'}], position: 7250, duration: 250 },
                { id: "eid14", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(0,255,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 250, duration: 0 },
                { id: "eid54", tween: [ "style", "${_Rectangle2}", "top", '346px', { fromValue: '357px'}], position: 3500, duration: 750 },
                { id: "eid57", tween: [ "style", "${_Rectangle2}", "top", '337px', { fromValue: '346px'}], position: 4250, duration: 750 },
                { id: "eid163", tween: [ "style", "${_RoundRect}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid164", tween: [ "style", "${_RoundRect}", "display", 'block', { fromValue: 'none'}], position: 7750, duration: 0 },
                { id: "eid165", tween: [ "style", "${_RoundRect}", "display", 'block', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid60", tween: [ "transform", "${_Rectangle2}", "rotateZ", '-12deg', { fromValue: '-12deg'}], position: 3500, duration: 0 },
                { id: "eid75", tween: [ "style", "${__12}", "display", 'none', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid76", tween: [ "style", "${__12}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid45", tween: [ "style", "${_Rectangle2}", "width", '76px', { fromValue: '2px'}], position: 3500, duration: 750 },
                { id: "eid59", tween: [ "style", "${_Rectangle2}", "width", '158px', { fromValue: '76px'}], position: 4250, duration: 750 },
                { id: "eid120", tween: [ "style", "${__12_ShadowCopy2}", "display", 'none', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid121", tween: [ "style", "${__12_ShadowCopy2}", "display", 'block', { fromValue: 'none'}], position: 6500, duration: 0 },
                { id: "eid137", tween: [ "style", "${__12_ShadowCopy2}", "top", '260px', { fromValue: '260px'}], position: 6500, duration: 0 },
                { id: "eid62", tween: [ "style", "${__10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid64", tween: [ "style", "${__10}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid55", tween: [ "style", "${_Rectangle2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid56", tween: [ "style", "${_Rectangle2}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Ellipse}", "top", '397px', { fromValue: '397px'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Ellipse}", "top", '350px', { fromValue: '397px'}], position: 3500, duration: 0 },
                { id: "eid112", tween: [ "style", "${__12_ShadowCopy}", "top", '260px', { fromValue: '260px'}], position: 5750, duration: 0 },
                { id: "eid134", tween: [ "style", "${__12_ShadowCopy2}", "left", '584px', { fromValue: '584px'}], position: 6500, duration: 0 },
                { id: "eid21", tween: [ "color", "${_RectangleCopy7}", "background-color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "color", "${_RectangleCopy7}", "background-color", 'rgba(0,255,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 3000, duration: 0 },
                { id: "eid138", tween: [ "style", "${__12Copy2}", "left", '582px', { fromValue: '582px'}], position: 6500, duration: 0 },
                { id: "eid18", tween: [ "color", "${_RectangleCopy4}", "background-color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "color", "${_RectangleCopy4}", "background-color", 'rgba(0,255,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 1925, duration: 0 },
                { id: "eid15", tween: [ "color", "${_RectangleCopy}", "background-color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "color", "${_RectangleCopy}", "background-color", 'rgba(0,255,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 665, duration: 0 },
                { id: "eid136", tween: [ "style", "${__12Copy2}", "top", '262px', { fromValue: '262px'}], position: 6500, duration: 0 },
                { id: "eid19", tween: [ "color", "${_RectangleCopy5}", "background-color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "color", "${_RectangleCopy5}", "background-color", 'rgba(0,255,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 2295, duration: 0 },
                { id: "eid16", tween: [ "color", "${_RectangleCopy2}", "background-color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "color", "${_RectangleCopy2}", "background-color", 'rgba(0,255,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 1080, duration: 0 },
                { id: "eid108", tween: [ "style", "${__12_ShadowCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid109", tween: [ "style", "${__12_ShadowCopy}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0 },
                { id: "eid150", tween: [ "style", "${__12Copy3}", "top", '232px', { fromValue: '262px'}], position: 7250, duration: 0 },
                { id: "eid104", tween: [ "style", "${_Ellipse2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid105", tween: [ "style", "${_Ellipse2}", "display", 'block', { fromValue: 'none'}], position: 7250, duration: 0 },
                { id: "eid100", tween: [ "style", "${_Rectangle6}", "top", '274px', { fromValue: '286px'}], position: 6500, duration: 750 },
                { id: "eid106", tween: [ "style", "${__12Copy}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid107", tween: [ "style", "${__12Copy}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0 },
                { id: "eid113", tween: [ "style", "${__12_ShadowCopy}", "left", '505px', { fromValue: '505px'}], position: 5750, duration: 0 },
                { id: "eid38", tween: [ "style", "${_Guy-Arm}", "left", '346px', { fromValue: '346px'}], position: 0, duration: 0 },
                { id: "eid161", tween: [ "style", "${_Guy-Arm}", "left", '359px', { fromValue: '346px'}], position: 7250, duration: 250 },
                { id: "eid101", tween: [ "style", "${_Rectangle6}", "left", '599px', { fromValue: '601px'}], position: 6500, duration: 750 },
                { id: "eid89", tween: [ "style", "${_Rectangle4}", "left", '443px', { fromValue: '446px'}], position: 5000, duration: 750 },
                { id: "eid167", tween: [ "style", "${_RoundRect}", "top", '85px', { fromValue: '85px'}], position: 7750, duration: 0 },
                { id: "eid90", tween: [ "style", "${_Rectangle4}", "width", '82px', { fromValue: '0px'}], position: 5000, duration: 750 },
                { id: "eid88", tween: [ "style", "${_Rectangle4}", "top", '305px', { fromValue: '321px'}], position: 5000, duration: 750 },
                { id: "eid102", tween: [ "style", "${_Rectangle6}", "width", '79px', { fromValue: '0px'}], position: 6500, duration: 750 },
                { id: "eid49", tween: [ "transform", "${_Rectangle2}", "skewX", '0deg', { fromValue: '0deg'}], position: 4250, duration: 0 },
                { id: "eid130", tween: [ "style", "${__11}", "left", '352px', { fromValue: '352px'}], position: 10000, duration: 0 },
                { id: "eid141", tween: [ "style", "${__12Copy3}", "display", 'none', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid142", tween: [ "style", "${__12Copy3}", "display", 'block', { fromValue: 'none'}], position: 7250, duration: 0 },
                { id: "eid93", tween: [ "style", "${_Rectangle5}", "top", '288px', { fromValue: '288px'}], position: 6500, duration: 0 },
                { id: "eid68", tween: [ "style", "${__11_Shadow}", "display", 'none', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid69", tween: [ "style", "${__11_Shadow}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
                { id: "eid20", tween: [ "color", "${_RectangleCopy6}", "background-color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "color", "${_RectangleCopy6}", "background-color", 'rgba(0,255,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 2650, duration: 0 },
                { id: "eid17", tween: [ "color", "${_RectangleCopy3}", "background-color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "color", "${_RectangleCopy3}", "background-color", 'rgba(0,255,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 1500, duration: 0 },
                { id: "eid153", tween: [ "style", "${__12_ShadowCopy3}", "left", '661px', { fromValue: '661px'}], position: 7250, duration: 0 },
                { id: "eid147", tween: [ "style", "${__12_ShadowCopy3}", "display", 'none', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid148", tween: [ "style", "${__12_ShadowCopy3}", "display", 'block', { fromValue: 'none'}], position: 7250, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-949856816");
