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
                id: 'BG',
                type: 'image',
                rect: ['75px', '-41px','400px','500px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BG.svg",'0px','0px']
            },
            {
                id: 'Shine',
                display: 'none',
                type: 'image',
                rect: ['167px', '16px','218px','212px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Shine.svg",'0px','0px']
            },
            {
                id: 'Guy-Torso',
                display: 'block',
                type: 'image',
                rect: ['236px', '144px','78px','212px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Guy-Torso.svg",'0px','0px']
            },
            {
                id: 'Guy-LArm-1',
                type: 'image',
                rect: ['236px', '212px','43px','91px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Guy-LArm-1.svg",'0px','0px'],
                transform: [[],['112']]
            },
            {
                id: 'Guy-LArm-2',
                type: 'image',
                rect: ['217px', '202px','60px','43px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Guy-LArm-2.svg",'0px','0px'],
                transform: [[],['-76']]
            },
            {
                id: 'Guy-RArm-1',
                type: 'image',
                rect: ['276px', '216px','43px','91px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Guy-RArm-1.svg",'0px','0px'],
                transform: [[],['-112']]
            },
            {
                id: 'Guy-RArm-2',
                type: 'image',
                rect: ['277px', '203px','60px','43px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Guy-RArm-2.svg",'0px','0px'],
                transform: [[],['76']]
            },
            {
                id: 'Diamond',
                type: 'image',
                rect: ['249px', '356px','54px','52px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Diamond.svg",'0px','0px']
            },
            {
                id: 'Confetti',
                display: 'none',
                type: 'rect',
                rect: ['300px', '111px','5px','9px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],[],['18','14']]
            },
            {
                id: 'ConfettiCopy2',
                display: 'none',
                type: 'rect',
                rect: ['299px', '128px','5px','9px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],[],['-22','14'],['0.65','0.65']]
            },
            {
                id: 'ConfettiCopy3',
                display: 'none',
                type: 'rect',
                rect: ['301px', '102px','5px','9px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],[],['46','14'],['0.65','0.65']]
            },
            {
                id: 'ConfettiCopy4',
                display: 'none',
                type: 'rect',
                rect: ['280px', '92px','5px','9px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],[],['60','14'],['0.57999','0.57999']]
            },
            {
                id: 'ConfettiCopy',
                display: 'none',
                type: 'rect',
                rect: ['293px', '93px','5px','9px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],[],['-5','-32'],['0.86','0.86']]
            },
            {
                id: 'ConfettiCopy5',
                display: 'none',
                type: 'rect',
                rect: ['248px', '112px','5px','9px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],[],['-5','-32'],['0.7','0.7']]
            },
            {
                id: 'ConfettiCopy6',
                display: 'none',
                type: 'rect',
                rect: ['257px', '124px','5px','9px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],[],['43','-32'],['0.87','0.87']]
            },
            {
                id: 'ConfettiCopy7',
                display: 'none',
                type: 'rect',
                rect: ['256px', '95px','5px','9px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],[],['2','-32'],['0.71','0.71']]
            },
            {
                id: 'ConfettiCopy8',
                display: 'none',
                type: 'rect',
                rect: ['269px', '87px','5px','9px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],[],['16','-54'],['0.71','0.71']]
            },
            {
                id: 'Bottom',
                type: 'image',
                rect: ['75px', '265px','400px','184px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Bottom.svg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Bottom}": [
                ["style", "top", '265px'],
                ["style", "left", '75px']
            ],
            "${_Guy-LArm-1}": [
                ["style", "top", '212px'],
                ["style", "left", '236px'],
                ["transform", "rotateZ", '112deg']
            ],
            "${_Guy-LArm-2}": [
                ["style", "top", '202px'],
                ["style", "left", '217px'],
                ["transform", "rotateZ", '-76deg']
            ],
            "${_BG}": [
                ["style", "top", '-41px'],
                ["style", "left", '75px']
            ],
            "${_ConfettiCopy2}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.65'],
                ["transform", "skewX", '-22deg'],
                ["transform", "scaleX", '0.65'],
                ["motion", "location", '301.5px 132.5px'],
                ["style", "display", 'none'],
                ["transform", "skewY", '14deg']
            ],
            "${_Guy-RArm-1}": [
                ["style", "top", '216px'],
                ["style", "left", '276px'],
                ["transform", "rotateZ", '-112deg']
            ],
            "${_Confetti}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "skewY", '14deg'],
                ["transform", "skewX", '18deg'],
                ["style", "display", 'none'],
                ["motion", "location", '302.5px 115.5px']
            ],
            "${_Guy-RArm-2}": [
                ["style", "top", '203px'],
                ["style", "left", '277px'],
                ["transform", "rotateZ", '76deg']
            ],
            "${_ConfettiCopy4}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.57999'],
                ["transform", "skewX", '60deg'],
                ["transform", "scaleX", '0.57999'],
                ["motion", "location", '282.5px 96.5px'],
                ["style", "display", 'none'],
                ["transform", "skewY", '14deg']
            ],
            "${_ConfettiCopy8}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.71'],
                ["transform", "skewX", '16deg'],
                ["transform", "scaleX", '0.71'],
                ["motion", "location", '271.5px 91.5px'],
                ["style", "display", 'none'],
                ["transform", "skewY", '-54deg']
            ],
            "${_ConfettiCopy7}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.71'],
                ["transform", "skewX", '2deg'],
                ["transform", "scaleX", '0.71'],
                ["motion", "location", '258.5px 99.5px'],
                ["style", "display", 'none'],
                ["transform", "skewY", '-32deg']
            ],
            "${_Shine}": [
                ["style", "top", '12px'],
                ["transform", "scaleY", '1.17'],
                ["transform", "scaleX", '1.17'],
                ["style", "display", 'none'],
                ["style", "left", '167px']
            ],
            "${_ConfettiCopy6}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.87'],
                ["transform", "skewX", '43deg'],
                ["transform", "scaleX", '0.87'],
                ["motion", "location", '259.5px 128.5px'],
                ["style", "display", 'none'],
                ["transform", "skewY", '-32deg']
            ],
            "${_ConfettiCopy}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.86'],
                ["transform", "skewX", '-5deg'],
                ["transform", "scaleX", '0.86'],
                ["motion", "location", '295.5px 97.5px'],
                ["style", "display", 'none'],
                ["transform", "skewY", '-32deg']
            ],
            "${_ConfettiCopy5}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.7'],
                ["transform", "skewX", '-5deg'],
                ["transform", "scaleX", '0.7'],
                ["motion", "location", '250.5px 116.5px'],
                ["style", "display", 'none'],
                ["transform", "skewY", '-32deg']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(235,99,46,1.00)'],
                ["style", "width", '550px'],
                ["style", "height", '500px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Diamond}": [
                ["style", "top", '356px'],
                ["style", "left", '249px']
            ],
            "${_ConfettiCopy3}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.65'],
                ["transform", "skewX", '46deg'],
                ["transform", "scaleX", '0.65'],
                ["motion", "location", '303.5px 106.5px'],
                ["style", "display", 'none'],
                ["transform", "skewY", '14deg']
            ],
            "${_Guy-Torso}": [
                ["style", "top", '144px'],
                ["style", "left", '236px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4250,
            autoPlay: true,
            timeline: [
                { id: "eid25", tween: [ "style", "${_Guy-RArm-1}", "left", '275px', { fromValue: '276px'}], position: 0, duration: 1160 },
                { id: "eid34", tween: [ "style", "${_Guy-RArm-1}", "left", '282px', { fromValue: '275px'}], position: 1160, duration: 270 },
                { id: "eid41", tween: [ "style", "${_Guy-RArm-1}", "left", '298px', { fromValue: '282px'}], position: 1430, duration: 320 },
                { id: "eid49", tween: [ "style", "${_Guy-RArm-1}", "left", '307px', { fromValue: '298px'}], position: 1750, duration: 250 },
                { id: "eid125", tween: [ "style", "${_ConfettiCopy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid134", tween: [ "style", "${_ConfettiCopy4}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid82", tween: [ "transform", "${_Shine}", "scaleX", '1', { fromValue: '1.17'}], position: 2250, duration: 250 },
                { id: "eid84", tween: [ "transform", "${_Shine}", "scaleX", '1.17', { fromValue: '1'}], position: 2500, duration: 250 },
                { id: "eid88", tween: [ "transform", "${_Shine}", "scaleX", '1', { fromValue: '1.17'}], position: 2750, duration: 250 },
                { id: "eid89", tween: [ "transform", "${_Shine}", "scaleX", '1.17', { fromValue: '1'}], position: 3000, duration: 250 },
                { id: "eid92", tween: [ "transform", "${_Shine}", "scaleX", '1', { fromValue: '1.17'}], position: 3250, duration: 250 },
                { id: "eid93", tween: [ "transform", "${_Shine}", "scaleX", '1.17', { fromValue: '1'}], position: 3500, duration: 250 },
                { id: "eid96", tween: [ "transform", "${_Shine}", "scaleX", '1', { fromValue: '1.17'}], position: 3750, duration: 250 },
                { id: "eid97", tween: [ "transform", "${_Shine}", "scaleX", '1.17', { fromValue: '1'}], position: 4000, duration: 250 },
                { id: "eid122", tween: [ "style", "${_ConfettiCopy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid131", tween: [ "style", "${_ConfettiCopy6}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid163", tween: [ "motion", "${_ConfettiCopy7}", [[258.5, 99.5, 0, 0],[79.98, 165.84, -187.55, 449.58, -92.91, 222.73],[47.5, 605.3, 0, 0]]], position: 2000, duration: 1250 },
                { id: "eid60", tween: [ "style", "${_Guy-LArm-2}", "left", '215px', { fromValue: '217px'}], position: 0, duration: 1160 },
                { id: "eid61", tween: [ "style", "${_Guy-LArm-2}", "left", '207px', { fromValue: '215px'}], position: 1160, duration: 270 },
                { id: "eid58", tween: [ "style", "${_Guy-RArm-2}", "top", '204px', { fromValue: '203px'}], position: 0, duration: 1160 },
                { id: "eid64", tween: [ "style", "${_Guy-RArm-2}", "top", '202px', { fromValue: '204px'}], position: 1160, duration: 270 },
                { id: "eid65", tween: [ "style", "${_Guy-RArm-2}", "top", '195px', { fromValue: '202px'}], position: 1430, duration: 320 },
                { id: "eid67", tween: [ "style", "${_Guy-RArm-2}", "top", '185px', { fromValue: '195px'}], position: 1750, duration: 250 },
                { id: "eid156", tween: [ "motion", "${_Confetti}", [[302.5, 115.5, 0, 0],[378.91, 204.65, 77.58, 345.72, 54.08, 241],[393.16, 519.51, 0, 0]]], position: 2000, duration: 1750 },
                { id: "eid164", tween: [ "motion", "${_ConfettiCopy8}", [[271.5, 91.5, 0, 0],[157.76, 124.52, -98.06, 355.98, -79.28, 250.64],[149.99, 532.63, 0, 0]]], position: 2000, duration: 1750 },
                { id: "eid128", tween: [ "style", "${_Confetti}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid137", tween: [ "style", "${_Confetti}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Diamond}", "top", '246px', { fromValue: '356px'}], position: 0, duration: 1000 },
                { id: "eid4", tween: [ "style", "${_Diamond}", "top", '92px', { fromValue: '246px'}], position: 1000, duration: 1000 },
                { id: "eid158", tween: [ "motion", "${_ConfettiCopy3}", [[303.5, 106.5, 0, 0],[431.36, 163.06, 121.89, 374.62, 69.97, 215.05],[441.51, 530.67, 0, 0]]], position: 2000, duration: 1250 },
                { id: "eid57", tween: [ "style", "${_Guy-LArm-2}", "top", '203px', { fromValue: '202px'}], position: 0, duration: 1160 },
                { id: "eid62", tween: [ "style", "${_Guy-LArm-2}", "top", '201px', { fromValue: '203px'}], position: 1160, duration: 270 },
                { id: "eid66", tween: [ "style", "${_Guy-LArm-2}", "top", '194px', { fromValue: '201px'}], position: 1430, duration: 320 },
                { id: "eid68", tween: [ "style", "${_Guy-LArm-2}", "top", '184px', { fromValue: '194px'}], position: 1750, duration: 250 },
                { id: "eid24", tween: [ "style", "${_Guy-RArm-1}", "top", '211px', { fromValue: '216px'}], position: 0, duration: 1160 },
                { id: "eid33", tween: [ "style", "${_Guy-RArm-1}", "top", '179px', { fromValue: '211px'}], position: 1160, duration: 270 },
                { id: "eid42", tween: [ "style", "${_Guy-RArm-1}", "top", '146px', { fromValue: '179px'}], position: 1430, duration: 320 },
                { id: "eid50", tween: [ "style", "${_Guy-RArm-1}", "top", '121px', { fromValue: '146px'}], position: 1750, duration: 250 },
                { id: "eid59", tween: [ "style", "${_Guy-RArm-2}", "left", '279px', { fromValue: '277px'}], position: 0, duration: 1160 },
                { id: "eid63", tween: [ "style", "${_Guy-RArm-2}", "left", '287px', { fromValue: '279px'}], position: 1160, duration: 270 },
                { id: "eid83", tween: [ "transform", "${_Shine}", "scaleY", '1', { fromValue: '1.17'}], position: 2250, duration: 250 },
                { id: "eid85", tween: [ "transform", "${_Shine}", "scaleY", '1.17', { fromValue: '1'}], position: 2500, duration: 250 },
                { id: "eid86", tween: [ "transform", "${_Shine}", "scaleY", '1', { fromValue: '1.17'}], position: 2750, duration: 250 },
                { id: "eid87", tween: [ "transform", "${_Shine}", "scaleY", '1.17', { fromValue: '1'}], position: 3000, duration: 250 },
                { id: "eid90", tween: [ "transform", "${_Shine}", "scaleY", '1', { fromValue: '1.17'}], position: 3250, duration: 250 },
                { id: "eid91", tween: [ "transform", "${_Shine}", "scaleY", '1.17', { fromValue: '1'}], position: 3500, duration: 250 },
                { id: "eid94", tween: [ "transform", "${_Shine}", "scaleY", '1', { fromValue: '1.17'}], position: 3750, duration: 250 },
                { id: "eid95", tween: [ "transform", "${_Shine}", "scaleY", '1.17', { fromValue: '1'}], position: 4000, duration: 250 },
                { id: "eid127", tween: [ "style", "${_ConfettiCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid136", tween: [ "style", "${_ConfettiCopy2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid19", tween: [ "transform", "${_Guy-LArm-2}", "rotateZ", '-70deg', { fromValue: '-76deg'}], position: 0, duration: 1160 },
                { id: "eid28", tween: [ "transform", "${_Guy-LArm-2}", "rotateZ", '-54deg', { fromValue: '-70deg'}], position: 1160, duration: 270 },
                { id: "eid36", tween: [ "transform", "${_Guy-LArm-2}", "rotateZ", '-36deg', { fromValue: '-54deg'}], position: 1430, duration: 320 },
                { id: "eid44", tween: [ "transform", "${_Guy-LArm-2}", "rotateZ", '0deg', { fromValue: '-36deg'}], position: 1750, duration: 250 },
                { id: "eid5", tween: [ "style", "${_Guy-Torso}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid77", tween: [ "style", "${_Shine}", "top", '12px', { fromValue: '12px'}], position: 2000, duration: 0 },
                { id: "eid160", tween: [ "motion", "${_ConfettiCopy}", [[295.5, 97.5, 0, 0],[339.76, 103.86, 36.78, 341.29, 9.64, 89.45],[342.51, 533.8, 0, 0]]], position: 2000, duration: 1560 },
                { id: "eid121", tween: [ "style", "${_ConfettiCopy7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid130", tween: [ "style", "${_ConfettiCopy7}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid123", tween: [ "style", "${_ConfettiCopy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid132", tween: [ "style", "${_ConfettiCopy5}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid162", tween: [ "motion", "${_ConfettiCopy6}", [[259.5, 128.5, 0, 0],[101.81, 189.51, -164.77, 376.62, -106.5, 251.44],[73.56, 553.5, 0, 0]]], position: 2000, duration: 1560 },
                { id: "eid22", tween: [ "transform", "${_Guy-RArm-1}", "rotateZ", '-93deg', { fromValue: '-112deg'}], position: 0, duration: 1160 },
                { id: "eid31", tween: [ "transform", "${_Guy-RArm-1}", "rotateZ", '-52deg', { fromValue: '-93deg'}], position: 1160, duration: 270 },
                { id: "eid39", tween: [ "transform", "${_Guy-RArm-1}", "rotateZ", '-14deg', { fromValue: '-52deg'}], position: 1430, duration: 320 },
                { id: "eid47", tween: [ "transform", "${_Guy-RArm-1}", "rotateZ", '0deg', { fromValue: '-14deg'}], position: 1750, duration: 250 },
                { id: "eid157", tween: [ "motion", "${_ConfettiCopy2}", [[301.5, 132.5, 0, 0],[403.88, 153.67, 92.98, 395.44, 41.01, 174.41],[406.64, 579.67, 0, 0]]], position: 2000, duration: 1560 },
                { id: "eid120", tween: [ "style", "${_ConfettiCopy8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid129", tween: [ "style", "${_ConfettiCopy8}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid124", tween: [ "style", "${_ConfettiCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid133", tween: [ "style", "${_ConfettiCopy}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid126", tween: [ "style", "${_ConfettiCopy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid135", tween: [ "style", "${_ConfettiCopy3}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid18", tween: [ "transform", "${_Guy-LArm-1}", "rotateZ", '93deg', { fromValue: '112deg'}], position: 0, duration: 1160 },
                { id: "eid27", tween: [ "transform", "${_Guy-LArm-1}", "rotateZ", '52deg', { fromValue: '93deg'}], position: 1160, duration: 270 },
                { id: "eid35", tween: [ "transform", "${_Guy-LArm-1}", "rotateZ", '14deg', { fromValue: '52deg'}], position: 1430, duration: 320 },
                { id: "eid43", tween: [ "transform", "${_Guy-LArm-1}", "rotateZ", '0deg', { fromValue: '14deg'}], position: 1750, duration: 250 },
                { id: "eid21", tween: [ "style", "${_Guy-LArm-1}", "left", '235px', { fromValue: '236px'}], position: 0, duration: 1160 },
                { id: "eid29", tween: [ "style", "${_Guy-LArm-1}", "left", '225px', { fromValue: '235px'}], position: 1160, duration: 270 },
                { id: "eid37", tween: [ "style", "${_Guy-LArm-1}", "left", '208px', { fromValue: '225px'}], position: 1430, duration: 320 },
                { id: "eid45", tween: [ "style", "${_Guy-LArm-1}", "left", '199px', { fromValue: '208px'}], position: 1750, duration: 250 },
                { id: "eid161", tween: [ "motion", "${_ConfettiCopy5}", [[250.5, 116.5, 0, 0],[189.11, 150.27, -59.44, 351.21, -23.69, 140],[182.51, 518.24, 0, 0]]], position: 2000, duration: 1250 },
                { id: "eid159", tween: [ "motion", "${_ConfettiCopy4}", [[282.5, 96.5, 0, 0],[468.8, 137.5, 157.18, 366.3, 115.19, 268.45],[468.5, 529.97, 0, 0]]], position: 2000, duration: 1560 },
                { id: "eid23", tween: [ "transform", "${_Guy-RArm-2}", "rotateZ", '70deg', { fromValue: '76deg'}], position: 0, duration: 1160 },
                { id: "eid32", tween: [ "transform", "${_Guy-RArm-2}", "rotateZ", '54deg', { fromValue: '70deg'}], position: 1160, duration: 270 },
                { id: "eid40", tween: [ "transform", "${_Guy-RArm-2}", "rotateZ", '36deg', { fromValue: '54deg'}], position: 1430, duration: 320 },
                { id: "eid48", tween: [ "transform", "${_Guy-RArm-2}", "rotateZ", '0deg', { fromValue: '36deg'}], position: 1750, duration: 250 },
                { id: "eid69", tween: [ "style", "${_Shine}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid70", tween: [ "style", "${_Shine}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Guy-LArm-1}", "top", '206px', { fromValue: '212px'}], position: 0, duration: 1160 },
                { id: "eid30", tween: [ "style", "${_Guy-LArm-1}", "top", '175px', { fromValue: '206px'}], position: 1160, duration: 270 },
                { id: "eid38", tween: [ "style", "${_Guy-LArm-1}", "top", '144px', { fromValue: '175px'}], position: 1430, duration: 320 },
                { id: "eid46", tween: [ "style", "${_Guy-LArm-1}", "top", '118px', { fromValue: '144px'}], position: 1750, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-954150874");
