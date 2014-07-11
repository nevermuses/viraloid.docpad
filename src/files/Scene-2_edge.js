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
                display: 'none',
                type: 'image',
                rect: ['232px', '111px','427px','346px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Light-On.svg",'0px','0px']
            },
            {
                id: 'Fish-012',
                type: 'image',
                rect: ['325px', '202px','71px','75px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Fish-01.svg",'0px','0px']
            },
            {
                id: 'Wave3',
                type: 'image',
                rect: ['281px', '233px','160px','106px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Wave.svg",'0px','0px']
            },
            {
                id: 'Fish-02',
                type: 'image',
                rect: ['325px', '265px','105px','147px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Fish-02.svg",'0px','0px']
            },
            {
                id: 'Background',
                type: 'image',
                rect: ['0px', '0px','650px','500px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Background.svg",'0px','0px']
            },
            {
                id: 'Left_Line',
                type: 'rect',
                rect: ['321px', '141px','1px','198px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Right_Line',
                type: 'rect',
                rect: ['471px', '141px','1px','118px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Board',
                type: 'image',
                rect: ['307px', '240px','198px','119px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Board.svg",'0px','0px']
            },
            {
                id: 'Fish-03',
                type: 'image',
                rect: ['471px', '216px','53px','167px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Fish-03.svg",'0px','0px']
            },
            {
                id: 'Fish-04',
                type: 'image',
                rect: ['480', '300','60px','75px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Fish-04.svg",'0px','0px']
            },
            {
                id: 'Wave',
                type: 'image',
                rect: ['361px', '311px','160px','106px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Wave.svg",'0px','0px']
            },
            {
                id: 'Wave2',
                type: 'image',
                rect: ['253px', '330px','160px','106px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Wave.svg",'0px','0px']
            },
            {
                id: 'Guy',
                type: 'image',
                rect: ['363px', '174px','100px','151px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Guy.svg",'0px','0px']
            },
            {
                id: 'Girl-Torso',
                type: 'image',
                rect: ['77px', '295px','88px','80px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Girl-Torso.svg",'0px','0px']
            },
            {
                id: 'Girl-RLeg',
                type: 'image',
                rect: ['97px', '339px','48px','114px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Girl-RLeg.svg",'0px','0px']
            },
            {
                id: 'Girl-LLeg',
                type: 'image',
                rect: ['78px', '341px','43px','114px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Girl-LLeg.svg",'0px','0px']
            },
            {
                id: 'Girl-LArm',
                type: 'image',
                rect: ['47px', '312px','72px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Girl-LArm.svg",'0px','0px']
            },
            {
                id: 'Girl-RArm',
                type: 'image',
                rect: ['120px', '329px','38px','69px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Girl-RArm.svg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Fish-02}": [
                ["style", "top", '265px'],
                ["style", "left", '325px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Girl-LArm}": [
                ["style", "top", '312px'],
                ["style", "left", '47px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Wave3}": [
                ["style", "left", '281px'],
                ["style", "top", '233px']
            ],
            "${_Girl-LLeg}": [
                ["style", "-webkit-transform-origin", [48,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [48,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [48,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [48,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [48,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '341px'],
                ["style", "left", '78px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Fish-012}": [
                ["style", "top", '202px'],
                ["style", "left", '325px'],
                ["transform", "rotateZ", '-11deg']
            ],
            "${_Right_Line}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '118px'],
                ["style", "top", '141px'],
                ["style", "left", '471px'],
                ["style", "width", '1px']
            ],
            "${_Girl-RLeg}": [
                ["style", "top", '339px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "left", '97px'],
                ["transform", "skewX", '0deg']
            ],
            "${_Light-On}": [
                ["style", "top", '111px'],
                ["style", "left", '232px'],
                ["style", "display", 'none']
            ],
            "${_Fish-03}": [
                ["style", "top", '216px'],
                ["style", "left", '471px'],
                ["transform", "rotateZ", '24deg']
            ],
            "${_Left_Line}": [
                ["style", "top", '141px'],
                ["style", "height", '198px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '321px'],
                ["style", "width", '1px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(235,99,46,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '500px'],
                ["style", "width", '650px']
            ],
            "${_Girl-RArm}": [
                ["style", "top", '329px'],
                ["style", "left", '120px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Fish-04}": [
                ["transform", "rotateZ", '0deg']
            ],
            "${_Wave}": [
                ["style", "left", '361px'],
                ["style", "top", '311px']
            ],
            "${_Girl-Torso}": [
                ["style", "top", '295px'],
                ["style", "left", '77px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Board}": [
                ["style", "top", '240px'],
                ["style", "left", '307px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Wave2}": [
                ["style", "left", '253px'],
                ["style", "top", '330px']
            ],
            "${_Guy}": [
                ["style", "top", '174px'],
                ["style", "left", '363px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Background}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6500,
            autoPlay: true,
            timeline: [
                { id: "eid146", tween: [ "transform", "${_Girl-RLeg}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid149", tween: [ "transform", "${_Girl-RLeg}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 500, duration: 500 },
                { id: "eid175", tween: [ "transform", "${_Girl-RLeg}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid176", tween: [ "transform", "${_Girl-RLeg}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 1500, duration: 500 },
                { id: "eid94", tween: [ "transform", "${_Girl-RArm}", "rotateZ", '-7deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid99", tween: [ "transform", "${_Girl-RArm}", "rotateZ", '0deg', { fromValue: '-7deg'}], position: 500, duration: 500 },
                { id: "eid157", tween: [ "transform", "${_Girl-RArm}", "rotateZ", '-7deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid158", tween: [ "transform", "${_Girl-RArm}", "rotateZ", '0deg', { fromValue: '-7deg'}], position: 1500, duration: 500 },
                { id: "eid147", tween: [ "style", "${_Girl-RLeg}", "left", '94px', { fromValue: '97px'}], position: 0, duration: 500 },
                { id: "eid148", tween: [ "style", "${_Girl-RLeg}", "left", '97px', { fromValue: '94px'}], position: 500, duration: 500 },
                { id: "eid173", tween: [ "style", "${_Girl-RLeg}", "left", '94px', { fromValue: '97px'}], position: 1000, duration: 500 },
                { id: "eid174", tween: [ "style", "${_Girl-RLeg}", "left", '97px', { fromValue: '94px'}], position: 1500, duration: 500 },
                { id: "eid95", tween: [ "style", "${_Girl-RArm}", "left", '123px', { fromValue: '120px'}], position: 0, duration: 500 },
                { id: "eid97", tween: [ "style", "${_Girl-RArm}", "left", '120px', { fromValue: '123px'}], position: 500, duration: 500 },
                { id: "eid155", tween: [ "style", "${_Girl-RArm}", "left", '123px', { fromValue: '120px'}], position: 1000, duration: 500 },
                { id: "eid156", tween: [ "style", "${_Girl-RArm}", "left", '120px', { fromValue: '123px'}], position: 1500, duration: 500 },
                { id: "eid38", tween: [ "transform", "${_Board}", "rotateZ", '20deg', { fromValue: '0deg'}], position: 2000, duration: 750 },
                { id: "eid42", tween: [ "transform", "${_Board}", "rotateZ", '0deg', { fromValue: '20deg'}], position: 2750, duration: 750 },
                { id: "eid46", tween: [ "transform", "${_Board}", "rotateZ", '20deg', { fromValue: '0deg'}], position: 3500, duration: 750 },
                { id: "eid47", tween: [ "transform", "${_Board}", "rotateZ", '0deg', { fromValue: '20deg'}], position: 4250, duration: 750 },
                { id: "eid202", tween: [ "transform", "${_Board}", "rotateZ", '20deg', { fromValue: '0deg'}], position: 5000, duration: 750 },
                { id: "eid203", tween: [ "transform", "${_Board}", "rotateZ", '0deg', { fromValue: '20deg'}], position: 5750, duration: 750 },
                { id: "eid130", tween: [ "style", "${_Girl-LLeg}", "top", '341px', { fromValue: '341px'}], position: 0, duration: 0 },
                { id: "eid164", tween: [ "style", "${_Girl-LLeg}", "top", '341px', { fromValue: '341px'}], position: 1000, duration: 0 },
                { id: "eid144", tween: [ "transform", "${_Girl-RLeg}", "skewX", '-3deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid150", tween: [ "transform", "${_Girl-RLeg}", "skewX", '0deg', { fromValue: '-3deg'}], position: 500, duration: 500 },
                { id: "eid171", tween: [ "transform", "${_Girl-RLeg}", "skewX", '-3deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid172", tween: [ "transform", "${_Girl-RLeg}", "skewX", '0deg', { fromValue: '-3deg'}], position: 1500, duration: 500 },
                { id: "eid1", tween: [ "style", "${_Light-On}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_Light-On}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid132", tween: [ "transform", "${_Girl-LLeg}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid135", tween: [ "transform", "${_Girl-LLeg}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 500, duration: 500 },
                { id: "eid168", tween: [ "transform", "${_Girl-LLeg}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid169", tween: [ "transform", "${_Girl-LLeg}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 1500, duration: 500 },
                { id: "eid6", tween: [ "transform", "${_Fish-04}", "rotateZ", '39deg', { fromValue: '0deg'}], position: 2000, duration: 750 },
                { id: "eid7", tween: [ "transform", "${_Fish-04}", "rotateZ", '0deg', { fromValue: '39deg'}], position: 2750, duration: 750 },
                { id: "eid26", tween: [ "transform", "${_Fish-04}", "rotateZ", '39deg', { fromValue: '0deg'}], position: 3500, duration: 750 },
                { id: "eid27", tween: [ "transform", "${_Fish-04}", "rotateZ", '0deg', { fromValue: '39deg'}], position: 4250, duration: 750 },
                { id: "eid198", tween: [ "transform", "${_Fish-04}", "rotateZ", '39deg', { fromValue: '0deg'}], position: 5000, duration: 750 },
                { id: "eid199", tween: [ "transform", "${_Fish-04}", "rotateZ", '0deg', { fromValue: '39deg'}], position: 5750, duration: 750 },
                { id: "eid119", tween: [ "transform", "${_Girl-LArm}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid122", tween: [ "transform", "${_Girl-LArm}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 500, duration: 500 },
                { id: "eid162", tween: [ "transform", "${_Girl-LArm}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid163", tween: [ "transform", "${_Girl-LArm}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 1500, duration: 500 },
                { id: "eid19", tween: [ "transform", "${_Fish-03}", "rotateZ", '0deg', { fromValue: '24deg'}], position: 2000, duration: 750 },
                { id: "eid18", tween: [ "transform", "${_Fish-03}", "rotateZ", '24deg', { fromValue: '0deg'}], position: 2750, duration: 750 },
                { id: "eid29", tween: [ "transform", "${_Fish-03}", "rotateZ", '0deg', { fromValue: '24deg'}], position: 3500, duration: 750 },
                { id: "eid28", tween: [ "transform", "${_Fish-03}", "rotateZ", '24deg', { fromValue: '0deg'}], position: 4250, duration: 750 },
                { id: "eid200", tween: [ "transform", "${_Fish-03}", "rotateZ", '0deg', { fromValue: '24deg'}], position: 5000, duration: 750 },
                { id: "eid201", tween: [ "transform", "${_Fish-03}", "rotateZ", '24deg', { fromValue: '0deg'}], position: 5750, duration: 750 },
                { id: "eid96", tween: [ "style", "${_Girl-RArm}", "top", '327px', { fromValue: '329px'}], position: 0, duration: 500 },
                { id: "eid98", tween: [ "style", "${_Girl-RArm}", "top", '329px', { fromValue: '327px'}], position: 500, duration: 500 },
                { id: "eid153", tween: [ "style", "${_Girl-RArm}", "top", '327px', { fromValue: '329px'}], position: 1000, duration: 500 },
                { id: "eid154", tween: [ "style", "${_Girl-RArm}", "top", '329px', { fromValue: '327px'}], position: 1500, duration: 500 },
                { id: "eid178", tween: [ "style", "${_Girl-Torso}", "left", '77px', { fromValue: '77px'}], position: 0, duration: 0 },
                { id: "eid133", tween: [ "style", "${_Girl-LLeg}", "left", '79px', { fromValue: '78px'}], position: 0, duration: 500 },
                { id: "eid134", tween: [ "style", "${_Girl-LLeg}", "left", '78px', { fromValue: '79px'}], position: 500, duration: 500 },
                { id: "eid166", tween: [ "style", "${_Girl-LLeg}", "left", '79px', { fromValue: '78px'}], position: 1000, duration: 500 },
                { id: "eid167", tween: [ "style", "${_Girl-LLeg}", "left", '78px', { fromValue: '79px'}], position: 1500, duration: 500 },
                { id: "eid44", tween: [ "style", "${_Right_Line}", "height", '145px', { fromValue: '118px'}], position: 2000, duration: 750 },
                { id: "eid45", tween: [ "style", "${_Right_Line}", "height", '118px', { fromValue: '145px'}], position: 2750, duration: 750 },
                { id: "eid48", tween: [ "style", "${_Right_Line}", "height", '145px', { fromValue: '118px'}], position: 3500, duration: 750 },
                { id: "eid49", tween: [ "style", "${_Right_Line}", "height", '118px', { fromValue: '145px'}], position: 4250, duration: 750 },
                { id: "eid204", tween: [ "style", "${_Right_Line}", "height", '145px', { fromValue: '118px'}], position: 5000, duration: 750 },
                { id: "eid205", tween: [ "style", "${_Right_Line}", "height", '118px', { fromValue: '145px'}], position: 5750, duration: 750 },
                { id: "eid40", tween: [ "style", "${_Left_Line}", "height", '169px', { fromValue: '198px'}], position: 2000, duration: 750 },
                { id: "eid41", tween: [ "style", "${_Left_Line}", "height", '198px', { fromValue: '169px'}], position: 2750, duration: 750 },
                { id: "eid50", tween: [ "style", "${_Left_Line}", "height", '169px', { fromValue: '198px'}], position: 3500, duration: 750 },
                { id: "eid51", tween: [ "style", "${_Left_Line}", "height", '198px', { fromValue: '169px'}], position: 4250, duration: 750 },
                { id: "eid206", tween: [ "style", "${_Left_Line}", "height", '169px', { fromValue: '198px'}], position: 5000, duration: 750 },
                { id: "eid207", tween: [ "style", "${_Left_Line}", "height", '198px', { fromValue: '169px'}], position: 5750, duration: 750 },
                { id: "eid9", tween: [ "transform", "${_Fish-02}", "rotateZ", '-23deg', { fromValue: '0deg'}], position: 2000, duration: 750 },
                { id: "eid10", tween: [ "transform", "${_Fish-02}", "rotateZ", '0deg', { fromValue: '-23deg'}], position: 2750, duration: 750 },
                { id: "eid32", tween: [ "transform", "${_Fish-02}", "rotateZ", '-23deg', { fromValue: '0deg'}], position: 3500, duration: 750 },
                { id: "eid33", tween: [ "transform", "${_Fish-02}", "rotateZ", '0deg', { fromValue: '-23deg'}], position: 4250, duration: 750 },
                { id: "eid208", tween: [ "transform", "${_Fish-02}", "rotateZ", '-23deg', { fromValue: '0deg'}], position: 5000, duration: 750 },
                { id: "eid209", tween: [ "transform", "${_Fish-02}", "rotateZ", '0deg', { fromValue: '-23deg'}], position: 5750, duration: 750 },
                { id: "eid181", tween: [ "style", "${_Girl-LArm}", "left", '49px', { fromValue: '47px'}], position: 0, duration: 500 },
                { id: "eid182", tween: [ "style", "${_Girl-LArm}", "left", '47px', { fromValue: '49px'}], position: 500, duration: 500 },
                { id: "eid183", tween: [ "style", "${_Girl-LArm}", "left", '49px', { fromValue: '47px'}], position: 1000, duration: 500 },
                { id: "eid184", tween: [ "style", "${_Girl-LArm}", "left", '47px', { fromValue: '49px'}], position: 1500, duration: 500 },
                { id: "eid180", tween: [ "transform", "${_Girl-Torso}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid185", tween: [ "transform", "${_Girl-Torso}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 500, duration: 500 },
                { id: "eid186", tween: [ "transform", "${_Girl-Torso}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid187", tween: [ "transform", "${_Girl-Torso}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 1500, duration: 500 },
                { id: "eid54", tween: [ "transform", "${_Guy}", "rotateZ", '-9deg', { fromValue: '0deg'}], position: 2000, duration: 750 },
                { id: "eid55", tween: [ "transform", "${_Guy}", "rotateZ", '0deg', { fromValue: '-9deg'}], position: 2750, duration: 750 },
                { id: "eid56", tween: [ "transform", "${_Guy}", "rotateZ", '-9deg', { fromValue: '0deg'}], position: 3500, duration: 750 },
                { id: "eid57", tween: [ "transform", "${_Guy}", "rotateZ", '0deg', { fromValue: '-9deg'}], position: 4250, duration: 750 },
                { id: "eid196", tween: [ "transform", "${_Guy}", "rotateZ", '-9deg', { fromValue: '0deg'}], position: 5000, duration: 750 },
                { id: "eid197", tween: [ "transform", "${_Guy}", "rotateZ", '0deg', { fromValue: '-9deg'}], position: 5750, duration: 750 },
                { id: "eid120", tween: [ "style", "${_Girl-LArm}", "top", '308px', { fromValue: '312px'}], position: 0, duration: 500 },
                { id: "eid121", tween: [ "style", "${_Girl-LArm}", "top", '312px', { fromValue: '308px'}], position: 500, duration: 500 },
                { id: "eid159", tween: [ "style", "${_Girl-LArm}", "top", '308px', { fromValue: '312px'}], position: 1000, duration: 500 },
                { id: "eid160", tween: [ "style", "${_Girl-LArm}", "top", '312px', { fromValue: '308px'}], position: 1500, duration: 500 },
                { id: "eid12", tween: [ "transform", "${_Fish-012}", "rotateZ", '0deg', { fromValue: '-11deg'}], position: 2000, duration: 750 },
                { id: "eid21", tween: [ "transform", "${_Fish-012}", "rotateZ", '-11deg', { fromValue: '0deg'}], position: 2750, duration: 750 },
                { id: "eid34", tween: [ "transform", "${_Fish-012}", "rotateZ", '0deg', { fromValue: '-11deg'}], position: 3500, duration: 750 },
                { id: "eid35", tween: [ "transform", "${_Fish-012}", "rotateZ", '-11deg', { fromValue: '0deg'}], position: 4250, duration: 750 },
                { id: "eid211", tween: [ "transform", "${_Fish-012}", "rotateZ", '0deg', { fromValue: '-11deg'}], position: 5000, duration: 750 },
                { id: "eid210", tween: [ "transform", "${_Fish-012}", "rotateZ", '-11deg', { fromValue: '0deg'}], position: 5750, duration: 750 },
                { id: "eid179", tween: [ "style", "${_Girl-Torso}", "top", '295px', { fromValue: '295px'}], position: 0, duration: 0 },
                { id: "eid152", tween: [ "style", "${_Girl-LLeg}", "-webkit-transform-origin", [48,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [48,50]}], position: 0, duration: 0 },
                { id: "eid220", tween: [ "style", "${_Girl-LLeg}", "-moz-transform-origin", [48,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [48,50]}], position: 0, duration: 0 },
                { id: "eid221", tween: [ "style", "${_Girl-LLeg}", "-ms-transform-origin", [48,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [48,50]}], position: 0, duration: 0 },
                { id: "eid222", tween: [ "style", "${_Girl-LLeg}", "msTransformOrigin", [48,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [48,50]}], position: 0, duration: 0 },
                { id: "eid223", tween: [ "style", "${_Girl-LLeg}", "-o-transform-origin", [48,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [48,50]}], position: 0, duration: 0 },
                { id: "eid165", tween: [ "style", "${_Girl-LLeg}", "-webkit-transform-origin", [48,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [48,50]}], position: 1000, duration: 0 },
                { id: "eid224", tween: [ "style", "${_Girl-LLeg}", "-moz-transform-origin", [48,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [48,50]}], position: 1000, duration: 0 },
                { id: "eid225", tween: [ "style", "${_Girl-LLeg}", "-ms-transform-origin", [48,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [48,50]}], position: 1000, duration: 0 },
                { id: "eid226", tween: [ "style", "${_Girl-LLeg}", "msTransformOrigin", [48,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [48,50]}], position: 1000, duration: 0 },
                { id: "eid227", tween: [ "style", "${_Girl-LLeg}", "-o-transform-origin", [48,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [48,50]}], position: 1000, duration: 0 },
                { id: "eid138", tween: [ "style", "${_Girl-RLeg}", "top", '339px', { fromValue: '339px'}], position: 0, duration: 0 },
                { id: "eid170", tween: [ "style", "${_Girl-RLeg}", "top", '339px', { fromValue: '339px'}], position: 1000, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-945239376");
