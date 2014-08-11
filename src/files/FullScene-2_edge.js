/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'BG',
                display: 'block',
                type: 'image',
                rect: ['0px', '-57px','800px','400px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BG.svg",'0px','0px']
            },
            {
                id: 'Rectangle2',
                display: 'block',
                type: 'rect',
                rect: ['479px', '47px','236px','196px','auto', 'auto'],
                fill: ["rgba(103,103,103,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse',
                display: 'none',
                type: 'ellipse',
                rect: ['207px', '131px','8px','8px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(103,103,103,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Light-Off',
                display: 'block',
                type: 'image',
                rect: ['-177px', '22px','702px','280px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Light-Off.svg",'0px','0px']
            },
            {
                id: 'Door-Open',
                display: 'none',
                type: 'image',
                rect: ['641px', '94px','90px','193px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Door-Open.svg",'0px','0px']
            },
            {
                id: 'Light-OffCopy',
                display: 'block',
                type: 'image',
                rect: ['161px', '22px','702px','280px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Light-Off.svg",'0px','0px']
            },
            {
                id: 'Light-On',
                display: 'none',
                type: 'image',
                rect: ['-177px', '22px','702px','280px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Light-On.svg",'0px','0px']
            },
            {
                id: 'Light-OnCopy',
                display: 'none',
                type: 'image',
                rect: ['161px', '22px','702px','280px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Light-On.svg",'0px','0px']
            },
            {
                id: 'Scene-1-BG',
                type: 'image',
                rect: ['37px', '-9px','580px','280px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Scene-1-BG.svg",'0px','0px']
            },
            {
                id: 'John_Dot',
                display: 'block',
                type: 'ellipse',
                rect: ['550px', '112px','7px','7px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(103,103,103,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Male_Dot',
                display: 'block',
                type: 'ellipse',
                rect: ['550px', '112px','7px','7px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(103,103,103,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: '_21_Dot',
                display: 'block',
                type: 'ellipse',
                rect: ['550px', '112px','7px','7px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(103,103,103,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Guy-Torso',
                type: 'image',
                rect: ['-89px', '119px','46px','97px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Guy-Torso.svg",'0px','0px']
            },
            {
                id: 'Guy-LArm',
                type: 'image',
                rect: ['-108px', '145px','40px','65px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Guy-LArm.svg",'0px','0px']
            },
            {
                id: 'Guy-Arm-2',
                display: 'none',
                type: 'image',
                rect: ['176px', '185px','37px','47px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Guy-Arm-2.svg",'0px','0px']
            },
            {
                id: 'Guy-Arm-1',
                display: 'none',
                type: 'image',
                rect: ['138px', '141px','27px','40px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Guy-Arm-1.svg",'0px','0px']
            },
            {
                id: 'Guy-RArm',
                display: 'block',
                type: 'image',
                rect: ['-70px', '149px','70px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Guy-RArm.svg",'0px','0px']
            },
            {
                id: 'Guy-LLeg',
                type: 'image',
                rect: ['-134px', '189px','73px','89px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Guy-LLeg.svg",'0px','0px']
            },
            {
                id: 'Guy-RLeg',
                type: 'image',
                rect: ['-80px', '191px','66px','89px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Guy-RLeg.svg",'0px','0px']
            },
            {
                id: 'Rectangle',
                display: 'none',
                type: 'rect',
                rect: ['630px', '67px','11px','240px','auto', 'auto'],
                fill: ["rgba(234,99,45,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Scan-Gradient',
                type: 'image',
                rect: ['272px', '81px','146px','219px','auto', 'auto'],
                clip: ['rect(159px 146px 159px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"Scan-Gradient.svg",'0px','0px']
            },
            {
                id: 'Scan-Bar',
                type: 'image',
                rect: ['248px', '219px','189px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Scan-Bar.svg",'0px','0px']
            },
            {
                id: 'S2-Light-On',
                display: 'none',
                type: 'image',
                rect: ['306px', '37px','427px','346px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"S2-Light-On.svg",'0px','0px']
            },
            {
                id: 'S2-Background',
                display: 'none',
                type: 'image',
                rect: ['724px', '-74px','650px','500px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"S2-Background.svg",'0px','0px']
            },
            {
                id: 'Fish-01',
                display: 'none',
                type: 'image',
                rect: ['1082px', '125px','71px','75px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Fish-01.svg",'0px','0px']
            },
            {
                id: 'S2-Wave',
                display: 'none',
                type: 'image',
                rect: ['341px', '166px','160px','106px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"S2-Wave.svg",'0px','0px']
            },
            {
                id: 'Fish-03',
                display: 'none',
                type: 'image',
                rect: ['1239px', '147px','53px','167px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Fish-03.svg",'0px','0px']
            },
            {
                id: 'Fish-04',
                display: 'none',
                type: 'image',
                rect: ['1266px', '251px','60px','75px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Fish-04.svg",'0px','0px']
            },
            {
                id: 'S2-Wave2',
                display: 'none',
                type: 'image',
                rect: ['487px', '255px','160px','106px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"S2-Wave.svg",'0px','0px']
            },
            {
                id: 'Fish-02',
                display: 'none',
                type: 'image',
                rect: ['1069px', '214px','105px','147px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Fish-02.svg",'0px','0px']
            },
            {
                id: 'Rectangle3',
                display: 'none',
                type: 'rect',
                rect: ['1070px', '67px','1px','205px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","solid"]
            },
            {
                id: 'Rectangle4',
                display: 'none',
                type: 'rect',
                rect: ['1222px', '66px','1px','132px','auto', 'auto'],
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Board',
                display: 'none',
                type: 'image',
                rect: ['1057px', '174px','198px','119px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Board.svg",'0px','0px']
            },
            {
                id: 'S2-Guy',
                display: 'none',
                type: 'image',
                rect: ['1111px', '107px','100px','151px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"S2-Guy.svg",'0px','0px']
            },
            {
                id: 'S2-Wave3',
                display: 'none',
                type: 'image',
                rect: ['372px', '272','160px','106px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"S2-Wave.svg",'0px','0px']
            },
            {
                id: 'S2-Girl-LLeg',
                display: 'none',
                type: 'image',
                rect: ['837px', '275px','43px','114px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"S2-Girl-LLeg.svg",'0px','0px']
            },
            {
                id: 'S2-Girl-RLeg',
                display: 'none',
                type: 'image',
                rect: ['855px', '269px','48px','114px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"S2-Girl-RLeg.svg",'0px','0px']
            },
            {
                id: 'S2-Girl-LArm',
                display: 'none',
                type: 'image',
                rect: ['805px', '248px','72px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"S2-Girl-LArm.svg",'0px','0px']
            },
            {
                id: 'S2-Girl-RArm',
                display: 'none',
                type: 'image',
                rect: ['878px', '263px','38px','69px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"S2-Girl-RArm.svg",'0px','0px']
            },
            {
                id: 'S2-Girl-Torso',
                display: 'none',
                type: 'image',
                rect: ['835px', '231px','88px','80px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"S2-Girl-Torso.svg",'0px','0px']
            },
            {
                id: 'Rectangle5',
                type: 'rect',
                rect: ['1329px', '71px','133px','1px','auto', 'auto'],
                fill: ["rgba(42,42,42,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'S3-BG',
                display: 'none',
                type: 'image',
                rect: ['576px', '-43px','800px','500px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"S3-BG.svg",'0px','0px']
            },
            {
                id: 'S3-Guy-Arm',
                display: 'none',
                type: 'image',
                rect: ['976', '269','58px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"S3-Guy-Arm.svg",'0px','0px']
            },
            {
                id: 'RoundRect',
                display: 'none',
                type: 'rect',
                rect: ['414px', '53px','3px','4px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,243,208,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'S3-Guy-Body',
                display: 'none',
                type: 'image',
                rect: ['976', '269','92px','148px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"S3-Guy-Body.svg",'0px','0px']
            },
            {
                id: 'Rectangle7',
                display: 'none',
                type: 'rect',
                rect: ['702px', '117px','8px','8px','auto', 'auto'],
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle7Copy',
                display: 'none',
                type: 'rect',
                rect: ['705px', '117px','8px','8px','auto', 'auto'],
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle7Copy2',
                display: 'none',
                type: 'rect',
                rect: ['705px', '117px','8px','8px','auto', 'auto'],
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle7Copy3',
                display: 'none',
                type: 'rect',
                rect: ['705px', '117px','8px','8px','auto', 'auto'],
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle7Copy4',
                display: 'none',
                type: 'rect',
                rect: ['705px', '117px','8px','8px','auto', 'auto'],
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle7Copy5',
                display: 'none',
                type: 'rect',
                rect: ['705px', '117px','8px','8px','auto', 'auto'],
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle7Copy6',
                display: 'none',
                type: 'rect',
                rect: ['705px', '117px','8px','8px','auto', 'auto'],
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle9Copy2',
                display: 'none',
                type: 'rect',
                rect: ['612px', '220px','78px','2px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"],
                transform: [[],['-12']]
            },
            {
                id: 'Rectangle9Copy',
                display: 'none',
                type: 'rect',
                rect: ['528px', '248px','88px','2px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"],
                transform: [[],['-27']]
            },
            {
                id: 'Rectangle9',
                display: 'none',
                type: 'rect',
                rect: ['528px', '248px','88px','2px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"],
                transform: [[],['-27']]
            },
            {
                id: 'Rectangle8',
                display: 'none',
                type: 'rect',
                rect: ['298px', '296px','160px','2px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"],
                transform: [[],['-5']]
            },
            {
                id: 'Ellipse2',
                display: 'none',
                type: 'ellipse',
                rect: ['297px', '299px','10px','10px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Ellipse2Copy',
                display: 'none',
                type: 'ellipse',
                rect: ['684px', '214px','10px','10px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Rectangle10',
                display: 'none',
                type: 'rect',
                rect: ['291px', '259px','20px','30px','auto', 'auto'],
                fill: ["rgba(234,99,45,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'Text',
                display: 'none',
                type: 'text',
                rect: ['291px', '264px','auto','auto','auto', 'auto'],
                text: "10",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(255,255,255,1.00)", "700", "none", ""]
            },
            {
                id: 'Rectangle10Copy',
                display: 'none',
                type: 'rect',
                rect: ['368px', '252px','20px','30px','auto', 'auto'],
                fill: ["rgba(234,99,45,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'TextCopy',
                display: 'none',
                type: 'text',
                rect: ['362px', '257px','auto','auto','auto', 'auto'],
                text: "100",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(255,255,255,1.00)", "700", "none", ""]
            },
            {
                id: 'Rectangle10Copy2',
                display: 'none',
                type: 'rect',
                rect: ['448px', '242px','20px','30px','auto', 'auto'],
                fill: ["rgba(234,99,45,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'TextCopy2',
                display: 'none',
                type: 'text',
                rect: ['445px', '247px','auto','auto','auto', 'auto'],
                text: "1K",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(255,255,255,1.00)", "700", "none", ""]
            },
            {
                id: 'Rectangle10Copy3',
                display: 'none',
                type: 'rect',
                rect: ['523px', '217px','20px','30px','auto', 'auto'],
                fill: ["rgba(234,99,45,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'TextCopy3',
                display: 'none',
                type: 'text',
                rect: ['516px', '222px','auto','auto','auto', 'auto'],
                text: "10K",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(255,255,255,1.00)", "700", "none", ""]
            },
            {
                id: 'Rectangle10Copy4',
                display: 'none',
                type: 'rect',
                rect: ['603px', '186px','20px','30px','auto', 'auto'],
                fill: ["rgba(234,99,45,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'TextCopy4',
                display: 'none',
                type: 'text',
                rect: ['593px', '191px','auto','auto','auto', 'auto'],
                text: "100K",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(255,255,255,1.00)", "700", "none", ""]
            },
            {
                id: 'Rectangle10Copy5',
                display: 'none',
                type: 'rect',
                rect: ['679px', '169px','20px','30px','auto', 'auto'],
                fill: ["rgba(234,99,45,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","solid"]
            },
            {
                id: 'TextCopy5',
                display: 'none',
                type: 'text',
                rect: ['676px', '174px','auto','auto','auto', 'auto'],
                text: "1M",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(255,255,255,1.00)", "700", "none", ""]
            },
            {
                id: 'S5-BG',
                type: 'image',
                rect: ['217px', '462px','400px','500px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"S5-BG.svg",'0px','0px']
            },
            {
                id: 'S5-Shine',
                display: 'none',
                type: 'image',
                rect: ['309px', '526px','218px','212px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"S5-Shine.svg",'0px','0px']
            },
            {
                id: 'ConfettiCopy8',
                display: 'none',
                type: 'rect',
                rect: ['442px', '98px','5px','9px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],[],['18','14']]
            },
            {
                id: 'ConfettiCopy7',
                display: 'none',
                type: 'rect',
                rect: ['441px', '115px','5px','9px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],[],['-22','14'],['0.65','0.65']]
            },
            {
                id: 'ConfettiCopy6',
                display: 'none',
                type: 'rect',
                rect: ['443px', '89px','5px','9px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],[],['46','14'],['0.65','0.65']]
            },
            {
                id: 'ConfettiCopy5',
                display: 'none',
                type: 'rect',
                rect: ['422px', '79px','5px','9px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],[],['60','14'],['0.57999','0.57999']]
            },
            {
                id: 'ConfettiCopy4',
                display: 'none',
                type: 'rect',
                rect: ['435px', '80px','5px','9px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],[],['-5','-32'],['0.86','0.86']]
            },
            {
                id: 'ConfettiCopy3',
                display: 'none',
                type: 'rect',
                rect: ['390px', '99px','5px','9px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],[],['-5','-32'],['0.7','0.7']]
            },
            {
                id: 'ConfettiCopy2',
                display: 'none',
                type: 'rect',
                rect: ['399px', '111px','5px','9px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],[],['43','-32'],['0.87','0.87']]
            },
            {
                id: 'ConfettiCopy',
                display: 'none',
                type: 'rect',
                rect: ['398px', '82px','5px','9px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],[],['2','-32'],['0.71','0.71']]
            },
            {
                id: 'Confetti',
                display: 'none',
                type: 'rect',
                rect: ['411px', '74px','5px','9px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],[],['16','-54'],['0.71','0.71']]
            },
            {
                id: 'S5-Bottom',
                type: 'image',
                rect: ['217px', '778px','400px','184px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"S5-Bottom.svg",'0px','0px']
            },
            {
                id: 'S5-Guy-LArm-1',
                type: 'image',
                rect: ['377px', '698px','43px','91px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"S5-Guy-LArm-1.svg",'0px','0px'],
                transform: [[],['71']]
            },
            {
                id: 'S5-Guy-LArm-2',
                type: 'image',
                rect: ['352px', '707px','60px','43px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"S5-Guy-LArm-2.svg",'0px','0px'],
                transform: [[],['-63']]
            },
            {
                id: 'S5-Guy-RArm-1',
                type: 'image',
                rect: ['417px', '702px','43px','91px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"S5-Guy-RArm-1.svg",'0px','0px'],
                transform: [[],['-71']]
            },
            {
                id: 'S5-Guy-RArm-2',
                type: 'image',
                rect: ['424px', '707px','60px','43px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"S5-Guy-RArm-2.svg",'0px','0px'],
                transform: [[],['63']]
            },
            {
                id: 'S5-Guy-Torso',
                type: 'image',
                rect: ['378px', '651px','78px','212px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"S5-Guy-Torso.svg",'0px','0px']
            },
            {
                id: 'S5-Diamond',
                type: 'image',
                rect: ['391px', '989px','54px','52px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"S5-Diamond.svg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_ConfettiCopy}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.71'],
                ["transform", "skewX", '2deg'],
                ["transform", "scaleX", '0.71'],
                ["motion", "location", '400.5px 86.5px'],
                ["style", "display", 'none'],
                ["transform", "skewY", '-32deg']
            ],
            "${_S5-BG}": [
                ["style", "left", '201px'],
                ["style", "top", '462px']
            ],
            "${_S2-Wave}": [
                ["style", "top", '160px'],
                ["style", "left", '1017px'],
                ["style", "display", 'none']
            ],
            "${_ConfettiCopy2}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.87'],
                ["transform", "skewX", '43deg'],
                ["transform", "scaleX", '0.87'],
                ["motion", "location", '401.5px 115.5px'],
                ["style", "display", 'none'],
                ["transform", "skewY", '-32deg']
            ],
            "${_Rectangle4}": [
                ["style", "top", '66px'],
                ["style", "height", '132px'],
                ["style", "display", 'none'],
                ["style", "left", '1222px'],
                ["style", "width", '1px']
            ],
            "${_Light-Off}": [
                ["style", "top", '22px'],
                ["style", "display", 'block'],
                ["style", "height", '280px'],
                ["style", "opacity", '0.5'],
                ["style", "left", '-972px'],
                ["style", "width", '702px']
            ],
            "${_ConfettiCopy8}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "skewY", '14deg'],
                ["transform", "skewX", '18deg'],
                ["style", "display", 'none'],
                ["motion", "location", '444.5px 102.5px']
            ],
            "${_ConfettiCopy7}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.65'],
                ["transform", "skewX", '-22deg'],
                ["transform", "scaleX", '0.65'],
                ["motion", "location", '443.5px 119.5px'],
                ["style", "display", 'none'],
                ["transform", "skewY", '14deg']
            ],
            "${_S5-Guy-LArm-1}": [
                ["style", "top", '698px'],
                ["style", "left", '361px'],
                ["transform", "rotateZ", '71deg']
            ],
            "${_Rectangle7Copy3}": [
                ["style", "top", '118px'],
                ["style", "display", 'none'],
                ["style", "height", '8px'],
                ["color", "background-color", 'rgba(37,201,0,1.00)'],
                ["style", "left", '726px'],
                ["style", "width", '8px']
            ],
            "${_S2-Wave2}": [
                ["style", "top", '254px'],
                ["style", "left", '1139px'],
                ["style", "display", 'none']
            ],
            "${_Fish-04}": [
                ["style", "display", 'none'],
                ["style", "top", '251px'],
                ["style", "left", '1266px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Ellipse}": [
                ["style", "top", '133px'],
                ["style", "display", 'none'],
                ["style", "height", '4px'],
                ["color", "background-color", 'rgba(15,255,0,1.00)'],
                ["style", "left", '205px'],
                ["style", "width", '4px']
            ],
            "${_S5-Shine}": [
                ["style", "top", '6px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '295px'],
                ["style", "display", 'none']
            ],
            "${_TextCopy}": [
                ["style", "top", '257px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '362px'],
                ["style", "font-size", '18px']
            ],
            "${_John_Dot}": [
                ["color", "background-color", 'rgba(103,103,103,1.00)'],
                ["style", "top", '111px'],
                ["style", "height", '6px'],
                ["style", "display", 'block'],
                ["style", "left", '549px'],
                ["style", "width", '6px']
            ],
            "${_Guy-RLeg}": [
                ["style", "top", '191px'],
                ["style", "left", '-100px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Rectangle9}": [
                ["style", "top", '290px'],
                ["transform", "rotateZ", '-16deg'],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '455px'],
                ["style", "width", '0px']
            ],
            "${_S5-Guy-Torso}": [
                ["style", "top", '651px'],
                ["style", "left", '362px']
            ],
            "${_ConfettiCopy5}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.57999'],
                ["transform", "skewX", '60deg'],
                ["transform", "scaleX", '0.57999'],
                ["motion", "location", '424.5px 83.5px'],
                ["style", "display", 'none'],
                ["transform", "skewY", '14deg']
            ],
            "${_ConfettiCopy4}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.86'],
                ["transform", "skewX", '-5deg'],
                ["transform", "scaleX", '0.86'],
                ["motion", "location", '437.5px 84.5px'],
                ["style", "display", 'none'],
                ["transform", "skewY", '-32deg']
            ],
            "${_S2-Girl-RLeg}": [
                ["style", "display", 'none'],
                ["style", "top", '269px'],
                ["style", "left", '855px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_S2-Girl-LArm}": [
                ["style", "display", 'none'],
                ["style", "top", '248px'],
                ["style", "left", '805px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_S5-Guy-LArm-2}": [
                ["style", "top", '707px'],
                ["style", "left", '336px'],
                ["transform", "rotateZ", '-63deg']
            ],
            "${_Rectangle9Copy}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "rotateZ", '-27deg'],
                ["style", "display", 'none'],
                ["style", "top", '267px'],
                ["style", "left", '533px'],
                ["style", "width", '0px']
            ],
            "${_Guy-LLeg}": [
                ["style", "top", '189px'],
                ["style", "left", '-154px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(234,99,45,1.00)'],
                ["style", "width", '800px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle7Copy4}": [
                ["style", "top", '118px'],
                ["style", "display", 'none'],
                ["style", "height", '8px'],
                ["color", "background-color", 'rgba(37,201,0,1.00)'],
                ["style", "left", '736px'],
                ["style", "width", '8px']
            ],
            "${_Fish-03}": [
                ["style", "display", 'none'],
                ["style", "top", '147px'],
                ["style", "left", '1239px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Ellipse2}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '299px'],
                ["style", "height", '10px'],
                ["style", "display", 'none'],
                ["style", "left", '296px'],
                ["style", "width", '10px']
            ],
            "${_Rectangle10Copy5}": [
                ["color", "background-color", 'rgba(234,99,45,1.00)'],
                ["style", "top", '169px'],
                ["style", "height", '30px'],
                ["style", "display", 'none'],
                ["style", "left", '679px'],
                ["style", "width", '20px']
            ],
            "${_Light-On}": [
                ["style", "top", '22px'],
                ["style", "display", 'none'],
                ["style", "height", '280px'],
                ["style", "opacity", '0.5'],
                ["style", "left", '-177px'],
                ["style", "width", '702px']
            ],
            "${_Scene-1-BG}": [
                ["style", "top", '-9px'],
                ["style", "height", '280px'],
                ["style", "left", '37px'],
                ["style", "width", '580px']
            ],
            "${_S2-Background}": [
                ["style", "display", 'none'],
                ["style", "left", '757px'],
                ["style", "top", '-73px']
            ],
            "${_BG}": [
                ["style", "top", '-55px'],
                ["style", "left", '811px'],
                ["style", "display", 'block']
            ],
            "${_Rectangle5}": [
                ["style", "height", '1px'],
                ["color", "background-color", 'rgba(42,42,42,1.00)'],
                ["style", "left", '1326px'],
                ["style", "top", '64px']
            ],
            "${_Guy-Arm-1}": [
                ["style", "top", '141px'],
                ["style", "display", 'none'],
                ["style", "left", '130px'],
                ["transform", "rotateZ", '40deg']
            ],
            "${_Text}": [
                ["style", "top", '264px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '291px'],
                ["style", "font-size", '18px']
            ],
            "${_Confetti}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.71'],
                ["transform", "skewX", '16deg'],
                ["transform", "scaleX", '0.71'],
                ["motion", "location", '413.5px 78.5px'],
                ["style", "display", 'none'],
                ["transform", "skewY", '-54deg']
            ],
            "${_ConfettiCopy6}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.65'],
                ["transform", "skewX", '46deg'],
                ["transform", "scaleX", '0.65'],
                ["motion", "location", '445.5px 93.5px'],
                ["style", "display", 'none'],
                ["transform", "skewY", '14deg']
            ],
            "${_S2-Guy}": [
                ["style", "display", 'none'],
                ["style", "top", '107px'],
                ["style", "left", '1111px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Rectangle7}": [
                ["style", "top", '118px'],
                ["style", "display", 'none'],
                ["style", "height", '8px'],
                ["color", "background-color", 'rgba(37,201,0,1.00)'],
                ["style", "left", '696px'],
                ["style", "width", '8px']
            ],
            "${_Scan-Bar}": [
                ["style", "top", '219px'],
                ["style", "height", '36px'],
                ["style", "left", '248px'],
                ["style", "width", '189px']
            ],
            "${_S3-Guy-Body}": [
                ["style", "display", 'none'],
                ["style", "left", '912px'],
                ["style", "top", '4px']
            ],
            "${_Rectangle10Copy4}": [
                ["color", "background-color", 'rgba(234,99,45,1.00)'],
                ["style", "top", '186px'],
                ["style", "height", '30px'],
                ["style", "display", 'none'],
                ["style", "left", '603px'],
                ["style", "width", '20px']
            ],
            "${_Rectangle10Copy}": [
                ["color", "background-color", 'rgba(234,99,45,1.00)'],
                ["style", "top", '252px'],
                ["style", "height", '30px'],
                ["style", "display", 'none'],
                ["style", "left", '368px'],
                ["style", "width", '20px']
            ],
            "${_Fish-01}": [
                ["style", "display", 'none'],
                ["style", "top", '125px'],
                ["style", "left", '1082px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Rectangle7Copy6}": [
                ["style", "top", '118px'],
                ["style", "display", 'none'],
                ["style", "height", '8px'],
                ["color", "background-color", 'rgba(37,201,0,1.00)'],
                ["style", "left", '756px'],
                ["style", "width", '8px']
            ],
            "${_Rectangle10Copy3}": [
                ["color", "background-color", 'rgba(234,99,45,1.00)'],
                ["style", "top", '217px'],
                ["style", "height", '30px'],
                ["style", "display", 'none'],
                ["style", "left", '523px'],
                ["style", "width", '20px']
            ],
            "${_Light-OnCopy}": [
                ["style", "top", '22px'],
                ["style", "height", '280px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0.5'],
                ["style", "left", '161px'],
                ["style", "width", '702px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '67px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-width", '0px'],
                ["style", "display", 'none'],
                ["style", "height", '205px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '1070px'],
                ["style", "width", '1px']
            ],
            "${_Light-OffCopy}": [
                ["style", "top", '22px'],
                ["style", "display", 'block'],
                ["style", "height", '280px'],
                ["style", "opacity", '0.5'],
                ["style", "left", '161px'],
                ["style", "width", '702px']
            ],
            "${_TextCopy4}": [
                ["style", "top", '191px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '593px'],
                ["style", "font-size", '18px']
            ],
            "${_S2-Girl-RArm}": [
                ["style", "display", 'none'],
                ["style", "top", '263px'],
                ["style", "left", '878px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_ConfettiCopy3}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.7'],
                ["transform", "skewX", '-5deg'],
                ["transform", "scaleX", '0.7'],
                ["motion", "location", '392.5px 103.5px'],
                ["style", "display", 'none'],
                ["transform", "skewY", '-32deg']
            ],
            "${_S5-Diamond}": [
                ["style", "top", '989px'],
                ["style", "left", '375px']
            ],
            "${_Rectangle7Copy5}": [
                ["style", "top", '118px'],
                ["style", "display", 'none'],
                ["style", "height", '8px'],
                ["color", "background-color", 'rgba(37,201,0,1.00)'],
                ["style", "left", '746px'],
                ["style", "width", '8px']
            ],
            "${_Rectangle9Copy2}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "rotateZ", '-12deg'],
                ["style", "display", 'none'],
                ["style", "top", '228px'],
                ["style", "left", '613px'],
                ["style", "width", '0px']
            ],
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(255,243,208,1.00)'],
                ["style", "top", '49px'],
                ["style", "height", '4px'],
                ["style", "display", 'none'],
                ["style", "left", '414px'],
                ["style", "width", '3px']
            ],
            "${_S3-Guy-Arm}": [
                ["style", "display", 'none'],
                ["style", "top", '46px'],
                ["style", "left", '930px'],
                ["transform", "rotateZ", '61deg']
            ],
            "${_Fish-02}": [
                ["style", "display", 'none'],
                ["style", "top", '209px'],
                ["style", "left", '1068px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_S5-Guy-RArm-2}": [
                ["style", "top", '707px'],
                ["style", "left", '408px'],
                ["transform", "rotateZ", '63deg']
            ],
            "${_Rectangle10}": [
                ["color", "background-color", 'rgba(234,99,45,1.00)'],
                ["style", "display", 'none'],
                ["style", "height", '30px'],
                ["style", "top", '259px'],
                ["style", "left", '291px'],
                ["style", "width", '20px']
            ],
            "${__21_Dot}": [
                ["color", "background-color", 'rgba(103,103,103,1.00)'],
                ["style", "top", '154px'],
                ["style", "height", '6px'],
                ["style", "display", 'block'],
                ["style", "left", '549px'],
                ["style", "width", '6px']
            ],
            "${_Scan-Gradient}": [
                ["style", "top", '81px'],
                ["style", "height", '219px'],
                ["style", "left", '272px'],
                ["style", "clip", [159,146,208,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '146px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(103,103,103,1.00)'],
                ["style", "display", 'block'],
                ["style", "left", '1291px'],
                ["style", "top", '47px']
            ],
            "${_S2-Wave3}": [
                ["style", "display", 'none'],
                ["style", "left", '1024px'],
                ["style", "top", '265px']
            ],
            "${_S2-Girl-Torso}": [
                ["style", "top", '232px'],
                ["style", "left", '835px'],
                ["style", "display", 'none']
            ],
            "${_TextCopy2}": [
                ["style", "top", '247px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '445px'],
                ["style", "font-size", '18px']
            ],
            "${_S2-Girl-LLeg}": [
                ["style", "display", 'none'],
                ["style", "top", '275px'],
                ["style", "left", '837px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(234,99,45,1.00)'],
                ["style", "height", '240px'],
                ["style", "top", '65px'],
                ["style", "left", '542px'],
                ["style", "display", 'none']
            ],
            "${_S2-Light-On}": [
                ["style", "top", '38px'],
                ["style", "left", '984px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle8}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '303px'],
                ["transform", "rotateZ", '-5deg'],
                ["style", "height", '2px'],
                ["style", "display", 'none'],
                ["style", "left", '298px'],
                ["style", "width", '0px']
            ],
            "${_Guy-RArm}": [
                ["style", "top", '149px'],
                ["style", "display", 'block'],
                ["style", "left", '-90px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_TextCopy3}": [
                ["style", "top", '222px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '516px'],
                ["style", "font-size", '18px']
            ],
            "${_Rectangle7Copy2}": [
                ["style", "top", '118px'],
                ["style", "display", 'none'],
                ["style", "height", '8px'],
                ["color", "background-color", 'rgba(37,201,0,1.00)'],
                ["style", "left", '716px'],
                ["style", "width", '8px']
            ],
            "${_TextCopy5}": [
                ["style", "top", '174px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '676px'],
                ["style", "font-size", '18px']
            ],
            "${_Ellipse2Copy}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '208px'],
                ["style", "height", '10px'],
                ["style", "display", 'none'],
                ["style", "left", '683px'],
                ["style", "width", '10px']
            ],
            "${_S5-Bottom}": [
                ["style", "left", '201px'],
                ["style", "top", '778px']
            ],
            "${_Guy-LArm}": [
                ["style", "top", '145px'],
                ["style", "left", '-128px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Rectangle10Copy2}": [
                ["color", "background-color", 'rgba(234,99,45,1.00)'],
                ["style", "top", '242px'],
                ["style", "height", '30px'],
                ["style", "display", 'none'],
                ["style", "left", '448px'],
                ["style", "width", '20px']
            ],
            "${_Guy-Torso}": [
                ["style", "top", '119px'],
                ["style", "left", '-109px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Male_Dot}": [
                ["color", "background-color", 'rgba(103,103,103,1.00)'],
                ["style", "top", '132px'],
                ["style", "height", '6px'],
                ["style", "display", 'block'],
                ["style", "left", '549px'],
                ["style", "width", '6px']
            ],
            "${_Board}": [
                ["style", "top", '174px'],
                ["style", "display", 'none'],
                ["style", "left", '1057px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Door-Open}": [
                ["style", "top", '94px'],
                ["style", "display", 'none'],
                ["style", "height", '193px'],
                ["style", "left", '553px'],
                ["style", "width", '90px']
            ],
            "${_S3-BG}": [
                ["style", "top", '-46px'],
                ["style", "left", '1361px'],
                ["style", "display", 'none']
            ],
            "${_Guy-Arm-2}": [
                ["style", "top", '160px'],
                ["style", "display", 'none'],
                ["style", "left", '130px'],
                ["transform", "rotateZ", '110deg']
            ],
            "${_Rectangle7Copy}": [
                ["style", "top", '118px'],
                ["style", "display", 'none'],
                ["style", "height", '8px'],
                ["color", "background-color", 'rgba(37,201,0,1.00)'],
                ["style", "left", '706px'],
                ["style", "width", '8px']
            ],
            "${_S5-Guy-RArm-1}": [
                ["style", "top", '702px'],
                ["style", "left", '401px'],
                ["transform", "rotateZ", '-71deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 35000,
            autoPlay: true,
            labels: {
                "screen_scan": 2000,
                "screen_buttonpress": 7000,
                "screen_end": 10085,
                "screen_begin": 12250
            },
            timeline: [
                { id: "eid1204", tween: [ "style", "${_Rectangle7Copy3}", "top", '118px', { fromValue: '118px'}], position: 17500, duration: 0 },
                { id: "eid1539", tween: [ "style", "${_Rectangle7Copy3}", "top", '-336px', { fromValue: '118px'}], position: 23500, duration: 1000 },
                { id: "eid1309", tween: [ "style", "${_Rectangle9}", "left", '455px', { fromValue: '455px'}], position: 19000, duration: 0 },
                { id: "eid1325", tween: [ "style", "${_Rectangle9}", "left", '455px', { fromValue: '455px'}], position: 20000, duration: 0 },
                { id: "eid1467", tween: [ "style", "${_Rectangle9}", "left", '455px', { fromValue: '455px'}], position: 23500, duration: 0 },
                { id: "eid448", tween: [ "style", "${_Guy-Arm-1}", "left", '134px', { fromValue: '130px'}], position: 9412, duration: 161 },
                { id: "eid454", tween: [ "style", "${_Guy-Arm-1}", "left", '137px', { fromValue: '134px'}], position: 9573, duration: 177 },
                { id: "eid459", tween: [ "style", "${_Guy-Arm-1}", "left", '138px', { fromValue: '137px'}], position: 9750, duration: 181 },
                { id: "eid569", tween: [ "style", "${_Guy-Arm-1}", "left", '-679px', { fromValue: '138px'}], position: 11500, duration: 1500 },
                { id: "eid417", tween: [ "style", "${_BG}", "top", '-57px', { fromValue: '-55px'}], position: 7000, duration: 2412 },
                { id: "eid555", tween: [ "style", "${_BG}", "top", '-57px', { fromValue: '-57px'}], position: 11500, duration: 0 },
                { id: "eid1068", tween: [ "style", "${_Rectangle7Copy2}", "display", 'none', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid1073", tween: [ "style", "${_Rectangle7Copy2}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid1226", tween: [ "style", "${_S3-BG}", "top", '-46px', { fromValue: '-46px'}], position: 17500, duration: 0 },
                { id: "eid1525", tween: [ "style", "${_S3-BG}", "top", '-500px', { fromValue: '-46px'}], position: 23500, duration: 1000 },
                { id: "eid382", tween: [ "style", "${_Rectangle}", "left", '206px', { fromValue: '542px'}], position: 4500, duration: 1250 },
                { id: "eid386", tween: [ "style", "${_Rectangle}", "left", '-103px', { fromValue: '206px'}], position: 5750, duration: 1170 },
                { id: "eid494", tween: [ "style", "${_Rectangle}", "left", '-29px', { fromValue: '-103px'}], position: 6920, duration: 80 },
                { id: "eid1213", tween: [ "style", "${_Rectangle7Copy5}", "left", '179px', { fromValue: '746px'}], position: 16500, duration: 1000 },
                { id: "eid1471", tween: [ "style", "${_Rectangle7Copy5}", "left", '179px', { fromValue: '179px'}], position: 23500, duration: 0 },
                { id: "eid1810", tween: [ "style", "${_S5-Guy-LArm-2}", "left", '336px', { fromValue: '336px'}], position: 24000, duration: 0 },
                { id: "eid1229", tween: [ "style", "${_Rectangle7Copy4}", "left", '169px', { fromValue: '736px'}], position: 16500, duration: 1000 },
                { id: "eid1472", tween: [ "style", "${_Rectangle7Copy4}", "left", '169px', { fromValue: '169px'}], position: 23500, duration: 0 },
                { id: "eid1621", tween: [ "style", "${_S5-Guy-RArm-2}", "top", '188px', { fromValue: '707px'}], position: 24000, duration: 1369 },
                { id: "eid1651", tween: [ "style", "${_S5-Guy-RArm-2}", "top", '181px', { fromValue: '188px'}], position: 26500, duration: 500 },
                { id: "eid1666", tween: [ "style", "${_S5-Guy-RArm-2}", "top", '170px', { fromValue: '181px'}], position: 27000, duration: 500 },
                { id: "eid1203", tween: [ "style", "${_Rectangle7Copy3}", "left", '159px', { fromValue: '726px'}], position: 16500, duration: 1000 },
                { id: "eid1473", tween: [ "style", "${_Rectangle7Copy3}", "left", '159px', { fromValue: '159px'}], position: 23500, duration: 0 },
                { id: "eid1774", tween: [ "motion", "${_ConfettiCopy3}", [[392.5, 103.5, 0, 0],[285.59, 179.09, -98.98, 272.41, -72.24, 198.81],[275.5, 425.5, 0, 0]]], position: 32000, duration: 3000 },
                { id: "eid690", tween: [ "style", "${_S2-Girl-RArm}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid716", tween: [ "style", "${_S2-Girl-RArm}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
                { id: "eid362", tween: [ "style", "${_Light-OnCopy}", "top", '22px', { fromValue: '22px'}], position: 4000, duration: 0 },
                { id: "eid1628", tween: [ "style", "${_S5-Diamond}", "left", '376px', { fromValue: '375px'}], position: 24000, duration: 3500 },
                { id: "eid1185", tween: [ "style", "${_Rectangle7Copy6}", "left", '189px', { fromValue: '756px'}], position: 16500, duration: 1000 },
                { id: "eid1301", tween: [ "style", "${_Rectangle7Copy6}", "left", '188px', { fromValue: '189px'}], position: 17500, duration: 1500 },
                { id: "eid1470", tween: [ "style", "${_Rectangle7Copy6}", "left", '188px', { fromValue: '188px'}], position: 23500, duration: 0 },
                { id: "eid636", tween: [ "style", "${_S2-Wave2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid639", tween: [ "style", "${_S2-Wave2}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
                { id: "eid80", tween: [ "style", "${_Light-On}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid81", tween: [ "style", "${_Light-On}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid135", tween: [ "style", "${_Light-On}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid1619", tween: [ "style", "${_S5-BG}", "top", '-57px', { fromValue: '462px'}], position: 24000, duration: 1369 },
                { id: "eid1622", tween: [ "style", "${_S5-Guy-LArm-1}", "top", '179px', { fromValue: '698px'}], position: 24000, duration: 1369 },
                { id: "eid1659", tween: [ "style", "${_S5-Guy-LArm-1}", "top", '148px', { fromValue: '179px'}], position: 26500, duration: 500 },
                { id: "eid1672", tween: [ "style", "${_S5-Guy-LArm-1}", "top", '105px', { fromValue: '148px'}], position: 27000, duration: 500 },
                { id: "eid1728", tween: [ "style", "${_ConfettiCopy3}", "display", 'none', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid1729", tween: [ "style", "${_ConfettiCopy3}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0 },
                { id: "eid1459", tween: [ "style", "${_Rectangle10Copy2}", "left", '448px', { fromValue: '448px'}], position: 23500, duration: 0 },
                { id: "eid1330", tween: [ "style", "${_Rectangle9}", "top", '279px', { fromValue: '290px'}], position: 19000, duration: 1000 },
                { id: "eid1515", tween: [ "style", "${_Rectangle9}", "top", '-175px', { fromValue: '279px'}], position: 23500, duration: 1000 },
                { id: "eid1222", tween: [ "style", "${_Fish-02}", "top", '209px', { fromValue: '209px'}], position: 17500, duration: 0 },
                { id: "eid685", tween: [ "style", "${_Rectangle4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid711", tween: [ "style", "${_Rectangle4}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
                { id: "eid1453", tween: [ "style", "${_Rectangle10Copy5}", "left", '679px', { fromValue: '679px'}], position: 23500, duration: 0 },
                { id: "eid996", tween: [ "transform", "${_Board}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 14000, duration: 500 },
                { id: "eid1008", tween: [ "transform", "${_Board}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 14500, duration: 500 },
                { id: "eid1011", tween: [ "transform", "${_Board}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 15000, duration: 500 },
                { id: "eid1014", tween: [ "transform", "${_Board}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 15500, duration: 500 },
                { id: "eid761", tween: [ "style", "${_Fish-03}", "left", '466px', { fromValue: '1239px'}], position: 12250, duration: 750 },
                { id: "eid918", tween: [ "style", "${_Fish-03}", "left", '466px', { fromValue: '466px'}], position: 14000, duration: 0 },
                { id: "eid1209", tween: [ "style", "${_Fish-03}", "left", '-101px', { fromValue: '466px'}], position: 16500, duration: 1000 },
                { id: "eid1263", tween: [ "style", "${_S3-Guy-Arm}", "left", '364px', { fromValue: '930px'}], position: 16500, duration: 1000 },
                { id: "eid1405", tween: [ "style", "${_S3-Guy-Arm}", "left", '376px', { fromValue: '364px'}], position: 22500, duration: 500 },
                { id: "eid1479", tween: [ "style", "${_S3-Guy-Arm}", "left", '376px', { fromValue: '376px'}], position: 23500, duration: 0 },
                { id: "eid938", tween: [ "transform", "${_Fish-04}", "rotateZ", '42deg', { fromValue: '0deg'}], position: 14000, duration: 500 },
                { id: "eid939", tween: [ "transform", "${_Fish-04}", "rotateZ", '0deg', { fromValue: '42deg'}], position: 14500, duration: 500 },
                { id: "eid940", tween: [ "transform", "${_Fish-04}", "rotateZ", '42deg', { fromValue: '0deg'}], position: 15000, duration: 500 },
                { id: "eid941", tween: [ "transform", "${_Fish-04}", "rotateZ", '0deg', { fromValue: '42deg'}], position: 15500, duration: 500 },
                { id: "eid522", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(15,255,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(15,255,0,1.00)'}], position: 10085, duration: 0 },
                { id: "eid1354", tween: [ "style", "${_Rectangle9Copy2}", "width", '78px', { fromValue: '0px'}], position: 21000, duration: 1000 },
                { id: "eid528", tween: [ "style", "${_Ellipse}", "left", '205px', { fromValue: '205px'}], position: 10085, duration: 0 },
                { id: "eid568", tween: [ "style", "${_Ellipse}", "left", '-612px', { fromValue: '205px'}], position: 11500, duration: 1500 },
                { id: "eid1367", tween: [ "style", "${_Rectangle10Copy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1390", tween: [ "style", "${_Rectangle10Copy4}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid509", tween: [ "style", "${_Rectangle2}", "top", '45px', { fromValue: '47px'}], position: 7000, duration: 2412 },
                { id: "eid1352", tween: [ "style", "${_Rectangle9Copy2}", "top", '220px', { fromValue: '228px'}], position: 21000, duration: 1000 },
                { id: "eid1542", tween: [ "style", "${_Rectangle9Copy2}", "top", '-234px', { fromValue: '220px'}], position: 23500, duration: 1000 },
                { id: "eid1545", tween: [ "style", "${_TextCopy3}", "top", '-232px', { fromValue: '222px'}], position: 23500, duration: 1000 },
                { id: "eid885", tween: [ "style", "${_S2-Girl-RLeg}", "top", '270px', { fromValue: '269px'}], position: 13250, duration: 250 },
                { id: "eid893", tween: [ "style", "${_S2-Girl-RLeg}", "top", '269px', { fromValue: '270px'}], position: 13500, duration: 250 },
                { id: "eid897", tween: [ "style", "${_S2-Girl-RLeg}", "top", '270px', { fromValue: '269px'}], position: 13750, duration: 250 },
                { id: "eid1208", tween: [ "style", "${_S2-Girl-RLeg}", "top", '271px', { fromValue: '270px'}], position: 14000, duration: 3500 },
                { id: "eid1526", tween: [ "style", "${_Rectangle10Copy}", "top", '-202px', { fromValue: '252px'}], position: 23500, duration: 1000 },
                { id: "eid1069", tween: [ "style", "${_Rectangle7Copy}", "display", 'none', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid1072", tween: [ "style", "${_Rectangle7Copy}", "display", 'block', { fromValue: 'none'}], position: 14750, duration: 0 },
                { id: "eid769", tween: [ "style", "${_S2-Girl-LArm}", "left", '32px', { fromValue: '805px'}], position: 12250, duration: 750 },
                { id: "eid870", tween: [ "style", "${_S2-Girl-LArm}", "left", '32px', { fromValue: '32px'}], position: 13250, duration: 0 },
                { id: "eid1219", tween: [ "style", "${_S2-Girl-LArm}", "left", '-535px', { fromValue: '32px'}], position: 16500, duration: 1000 },
                { id: "eid1457", tween: [ "style", "${_Rectangle10Copy3}", "left", '523px', { fromValue: '523px'}], position: 23500, duration: 0 },
                { id: "eid204", tween: [ "style", "${_Guy-Torso}", "left", '55px', { fromValue: '-109px'}], position: 0, duration: 523 },
                { id: "eid216", tween: [ "style", "${_Guy-Torso}", "left", '156px', { fromValue: '55px'}], position: 523, duration: 523 },
                { id: "eid240", tween: [ "style", "${_Guy-Torso}", "left", '267px', { fromValue: '156px'}], position: 1047, duration: 453 },
                { id: "eid530", tween: [ "style", "${_Guy-Torso}", "left", '298px', { fromValue: '267px'}], position: 1500, duration: 288 },
                { id: "eid531", tween: [ "style", "${_Guy-Torso}", "left", '321px', { fromValue: '298px'}], position: 1788, duration: 212 },
                { id: "eid282", tween: [ "style", "${_Guy-Torso}", "left", '440px', { fromValue: '321px'}], position: 4000, duration: 523 },
                { id: "eid292", tween: [ "style", "${_Guy-Torso}", "left", '559px', { fromValue: '440px'}], position: 4523, duration: 477 },
                { id: "eid501", tween: [ "style", "${_Guy-Torso}", "left", '519px', { fromValue: '559px'}], position: 5000, duration: 314 },
                { id: "eid503", tween: [ "style", "${_Guy-Torso}", "left", '505px', { fromValue: '519px'}], position: 5314, duration: 62 },
                { id: "eid408", tween: [ "style", "${_Guy-Torso}", "left", '111px', { fromValue: '505px'}], position: 5376, duration: 1624 },
                { id: "eid570", tween: [ "style", "${_Guy-Torso}", "left", '-706px', { fromValue: '111px'}], position: 11500, duration: 1500 },
                { id: "eid1516", tween: [ "style", "${_TextCopy5}", "top", '-280px', { fromValue: '174px'}], position: 23500, duration: 1000 },
                { id: "eid762", tween: [ "style", "${_S2-Girl-Torso}", "left", '62px', { fromValue: '835px'}], position: 12250, duration: 750 },
                { id: "eid1195", tween: [ "style", "${_S2-Girl-Torso}", "left", '-505px', { fromValue: '62px'}], position: 16500, duration: 1000 },
                { id: "eid438", tween: [ "style", "${_Guy-RArm}", "display", 'none', { fromValue: 'block'}], position: 9412, duration: 0 },
                { id: "eid1302", tween: [ "style", "${_Rectangle9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1303", tween: [ "style", "${_Rectangle9}", "display", 'block', { fromValue: 'none'}], position: 19000, duration: 0 },
                { id: "eid810", tween: [ "style", "${_S3-BG}", "left", '578px', { fromValue: '1361px'}], position: 12250, duration: 750 },
                { id: "eid1225", tween: [ "style", "${_S3-BG}", "left", '11px', { fromValue: '578px'}], position: 16500, duration: 1000 },
                { id: "eid1480", tween: [ "style", "${_S3-BG}", "left", '11px', { fromValue: '11px'}], position: 23500, duration: 0 },
                { id: "eid696", tween: [ "style", "${_Fish-03}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid721", tween: [ "style", "${_Fish-03}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
                { id: "eid416", tween: [ "style", "${_BG}", "left", '1px', { fromValue: '811px'}], position: 7000, duration: 2412 },
                { id: "eid564", tween: [ "style", "${_BG}", "left", '-816px', { fromValue: '1px'}], position: 11500, duration: 1500 },
                { id: "eid1744", tween: [ "style", "${_ConfettiCopy8}", "display", 'none', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid1745", tween: [ "style", "${_ConfettiCopy8}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0 },
                { id: "eid1368", tween: [ "style", "${_TextCopy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1386", tween: [ "style", "${_TextCopy3}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid377", tween: [ "style", "${_Door-Open}", "left", '217px', { fromValue: '553px'}], position: 4500, duration: 1250 },
                { id: "eid379", tween: [ "style", "${_Door-Open}", "left", '-92px', { fromValue: '217px'}], position: 5750, duration: 1170 },
                { id: "eid495", tween: [ "style", "${_Door-Open}", "left", '-184px', { fromValue: '-92px'}], position: 6920, duration: 80 },
                { id: "eid1523", tween: [ "style", "${_TextCopy2}", "top", '-207px', { fromValue: '247px'}], position: 23500, duration: 1000 },
                { id: "eid1066", tween: [ "style", "${_Rectangle7Copy4}", "display", 'none', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid1075", tween: [ "style", "${_Rectangle7Copy4}", "display", 'block', { fromValue: 'none'}], position: 15500, duration: 0 },
                { id: "eid1344", tween: [ "style", "${_Rectangle9Copy}", "width", '88px', { fromValue: '0px'}], position: 20000, duration: 1000 },
                { id: "eid75", tween: [ "style", "${_Light-Off}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid79", tween: [ "style", "${_Light-Off}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid136", tween: [ "style", "${_Light-Off}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid755", tween: [ "style", "${_S2-Background}", "left", '-16px', { fromValue: '757px'}], position: 12250, duration: 750 },
                { id: "eid1199", tween: [ "style", "${_S2-Background}", "left", '-583px', { fromValue: '-16px'}], position: 16500, duration: 1000 },
                { id: "eid1482", tween: [ "style", "${_S2-Background}", "left", '-583px', { fromValue: '-583px'}], position: 23500, duration: 0 },
                { id: "eid1478", tween: [ "style", "${_RoundRect}", "left", '414px', { fromValue: '414px'}], position: 23500, duration: 0 },
                { id: "eid1182", tween: [ "style", "${_Board}", "top", '175px', { fromValue: '174px'}], position: 14000, duration: 3500 },
                { id: "eid205", tween: [ "transform", "${_Guy-LLeg}", "rotateZ", '-77deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid219", tween: [ "transform", "${_Guy-LLeg}", "rotateZ", '0deg', { fromValue: '-77deg'}], position: 500, duration: 500 },
                { id: "eid243", tween: [ "transform", "${_Guy-LLeg}", "rotateZ", '-77deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid255", tween: [ "transform", "${_Guy-LLeg}", "rotateZ", '-46deg', { fromValue: '-77deg'}], position: 1500, duration: 500 },
                { id: "eid284", tween: [ "transform", "${_Guy-LLeg}", "rotateZ", '-77deg', { fromValue: '-46deg'}], position: 4000, duration: 500 },
                { id: "eid294", tween: [ "transform", "${_Guy-LLeg}", "rotateZ", '0deg', { fromValue: '-77deg'}], position: 4500, duration: 500 },
                { id: "eid323", tween: [ "transform", "${_Guy-LLeg}", "rotateZ", '-48deg', { fromValue: '0deg'}], position: 5000, duration: 314 },
                { id: "eid392", tween: [ "transform", "${_Guy-LLeg}", "rotateZ", '-48deg', { fromValue: '-48deg'}], position: 5314, duration: 0 },
                { id: "eid451", tween: [ "style", "${_Guy-Arm-2}", "top", '164px', { fromValue: '160px'}], position: 9412, duration: 161 },
                { id: "eid457", tween: [ "style", "${_Guy-Arm-2}", "top", '154px', { fromValue: '164px'}], position: 9573, duration: 177 },
                { id: "eid462", tween: [ "style", "${_Guy-Arm-2}", "top", '137px', { fromValue: '154px'}], position: 9750, duration: 181 },
                { id: "eid475", tween: [ "style", "${_Guy-Arm-2}", "top", '128px', { fromValue: '137px'}], position: 9931, duration: 154 },
                { id: "eid551", tween: [ "style", "${_Guy-Arm-2}", "top", '128px', { fromValue: '128px'}], position: 11500, duration: 0 },
                { id: "eid1373", tween: [ "style", "${_Rectangle10Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1382", tween: [ "style", "${_Rectangle10Copy}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0 },
                { id: "eid529", tween: [ "style", "${_Ellipse}", "top", '133px', { fromValue: '133px'}], position: 10085, duration: 0 },
                { id: "eid554", tween: [ "style", "${_Ellipse}", "top", '133px', { fromValue: '133px'}], position: 11500, duration: 0 },
                { id: "eid1001", tween: [ "transform", "${_S2-Guy}", "rotateZ", '-9deg', { fromValue: '0deg'}], position: 14000, duration: 500 },
                { id: "eid1009", tween: [ "transform", "${_S2-Guy}", "rotateZ", '0deg', { fromValue: '-9deg'}], position: 14500, duration: 500 },
                { id: "eid1010", tween: [ "transform", "${_S2-Guy}", "rotateZ", '-9deg', { fromValue: '0deg'}], position: 15000, duration: 500 },
                { id: "eid1013", tween: [ "transform", "${_S2-Guy}", "rotateZ", '0deg', { fromValue: '-9deg'}], position: 15500, duration: 500 },
                { id: "eid1456", tween: [ "style", "${_TextCopy3}", "left", '516px', { fromValue: '516px'}], position: 23500, duration: 0 },
                { id: "eid92", tween: [ "style", "${_Light-OnCopy}", "opacity", '0.5', { fromValue: '0.5'}], position: 2000, duration: 0 },
                { id: "eid374", tween: [ "style", "${_Scan-Bar}", "left", '-547px', { fromValue: '248px'}], position: 4000, duration: 3000 },
                { id: "eid623", tween: [ "style", "${_Scan-Bar}", "left", '-547px', { fromValue: '-547px'}], position: 12250, duration: 0 },
                { id: "eid694", tween: [ "style", "${_Fish-02}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid789", tween: [ "style", "${_Fish-02}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
                { id: "eid1533", tween: [ "style", "${_Rectangle10Copy4}", "top", '-268px', { fromValue: '186px'}], position: 23500, duration: 1000 },
                { id: "eid89", tween: [ "style", "${_Light-OffCopy}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
                { id: "eid993", tween: [ "style", "${_Rectangle3}", "height", '205px', { fromValue: '205px'}], position: 14000, duration: 0 },
                { id: "eid882", tween: [ "style", "${_S2-Girl-LArm}", "top", '244px', { fromValue: '248px'}], position: 13250, duration: 250 },
                { id: "eid890", tween: [ "style", "${_S2-Girl-LArm}", "top", '248px', { fromValue: '244px'}], position: 13500, duration: 250 },
                { id: "eid900", tween: [ "style", "${_S2-Girl-LArm}", "top", '244px', { fromValue: '248px'}], position: 13750, duration: 250 },
                { id: "eid1220", tween: [ "style", "${_S2-Girl-LArm}", "top", '245px', { fromValue: '244px'}], position: 14000, duration: 3500 },
                { id: "eid523", tween: [ "style", "${_Ellipse}", "display", 'block', { fromValue: 'none'}], position: 10085, duration: 0 },
                { id: "eid1287", tween: [ "style", "${_Rectangle8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1292", tween: [ "style", "${_Rectangle8}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0 },
                { id: "eid1532", tween: [ "style", "${_Ellipse2}", "top", '-155px', { fromValue: '299px'}], position: 23500, duration: 1000 },
                { id: "eid1618", tween: [ "style", "${_S5-Guy-RArm-1}", "top", '183px', { fromValue: '702px'}], position: 24000, duration: 1369 },
                { id: "eid1655", tween: [ "style", "${_S5-Guy-RArm-1}", "top", '149px', { fromValue: '183px'}], position: 26500, duration: 500 },
                { id: "eid1665", tween: [ "style", "${_S5-Guy-RArm-1}", "top", '105px', { fromValue: '149px'}], position: 27000, duration: 500 },
                { id: "eid1206", tween: [ "style", "${_Rectangle7Copy2}", "top", '118px', { fromValue: '118px'}], position: 17500, duration: 0 },
                { id: "eid1535", tween: [ "style", "${_Rectangle7Copy2}", "top", '-336px', { fromValue: '118px'}], position: 23500, duration: 1000 },
                { id: "eid121", tween: [ "style", "${_John_Dot}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid130", tween: [ "style", "${_John_Dot}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
                { id: "eid1738", tween: [ "style", "${_ConfettiCopy6}", "display", 'none', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid1739", tween: [ "style", "${_ConfettiCopy6}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0 },
                { id: "eid1202", tween: [ "style", "${_S2-Wave}", "top", '161px', { fromValue: '160px'}], position: 12250, duration: 5250 },
                { id: "eid139", tween: [ "style", "${_Door-Open}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid344", tween: [ "style", "${_Door-Open}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid146", tween: [ "style", "${_Door-Open}", "display", 'none', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid1210", tween: [ "style", "${_Fish-03}", "top", '148px', { fromValue: '147px'}], position: 14000, duration: 3500 },
                { id: "eid1719", tween: [ "style", "${_Confetti}", "display", 'none', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid1720", tween: [ "style", "${_Confetti}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0 },
                { id: "eid760", tween: [ "style", "${_S2-Girl-RLeg}", "left", '82px', { fromValue: '855px'}], position: 12250, duration: 750 },
                { id: "eid884", tween: [ "style", "${_S2-Girl-RLeg}", "left", '83px', { fromValue: '82px'}], position: 13250, duration: 250 },
                { id: "eid892", tween: [ "style", "${_S2-Girl-RLeg}", "left", '82px', { fromValue: '83px'}], position: 13500, duration: 250 },
                { id: "eid898", tween: [ "style", "${_S2-Girl-RLeg}", "left", '83px', { fromValue: '82px'}], position: 13750, duration: 250 },
                { id: "eid1207", tween: [ "style", "${_S2-Girl-RLeg}", "left", '-484px', { fromValue: '83px'}], position: 16500, duration: 1000 },
                { id: "eid759", tween: [ "style", "${_Fish-01}", "left", '309px', { fromValue: '1082px'}], position: 12250, duration: 750 },
                { id: "eid923", tween: [ "style", "${_Fish-01}", "left", '309px', { fromValue: '309px'}], position: 14000, duration: 0 },
                { id: "eid1193", tween: [ "style", "${_Fish-01}", "left", '-258px', { fromValue: '309px'}], position: 16500, duration: 1000 },
                { id: "eid1248", tween: [ "style", "${_S3-Guy-Body}", "top", '4px', { fromValue: '4px'}], position: 16500, duration: 0 },
                { id: "eid1529", tween: [ "style", "${_S3-Guy-Body}", "top", '-450px', { fromValue: '4px'}], position: 23500, duration: 1000 },
                { id: "eid1808", tween: [ "style", "${_S5-Guy-RArm-2}", "left", '408px', { fromValue: '408px'}], position: 24000, duration: 0 },
                { id: "eid1524", tween: [ "style", "${_Ellipse2Copy}", "top", '-246px', { fromValue: '208px'}], position: 23500, duration: 1000 },
                { id: "eid799", tween: [ "style", "${_S3-Guy-Body}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1243", tween: [ "style", "${_S3-Guy-Body}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0 },
                { id: "eid1370", tween: [ "style", "${_TextCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1384", tween: [ "style", "${_TextCopy2}", "display", 'block', { fromValue: 'none'}], position: 19000, duration: 0 },
                { id: "eid493", tween: [ "style", "${_Rectangle}", "top", '62px', { fromValue: '65px'}], position: 4500, duration: 1250 },
                { id: "eid1623", tween: [ "style", "${_S5-Bottom}", "top", '259px', { fromValue: '778px'}], position: 24000, duration: 1369 },
                { id: "eid1710", tween: [ "style", "${_S5-Shine}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1600", tween: [ "style", "${_S5-Shine}", "display", 'none', { fromValue: 'none'}], position: 24000, duration: 0 },
                { id: "eid1674", tween: [ "style", "${_S5-Shine}", "display", 'block', { fromValue: 'none'}], position: 27500, duration: 0 },
                { id: "eid526", tween: [ "style", "${_Ellipse}", "width", '4px', { fromValue: '4px'}], position: 10085, duration: 0 },
                { id: "eid1065", tween: [ "style", "${_Rectangle7Copy5}", "display", 'none', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid1076", tween: [ "style", "${_Rectangle7Copy5}", "display", 'block', { fromValue: 'none'}], position: 15750, duration: 0 },
                { id: "eid1775", tween: [ "motion", "${_ConfettiCopy4}", [[437.5, 84.5, 0, 0],[579.91, 126.84, 146.53, 346.92, 84.55, 200.17],[603.5, 477.5, 0, 0]]], position: 32000, duration: 3000 },
                { id: "eid217", tween: [ "style", "${_Guy-Torso}", "top", '117px', { fromValue: '119px'}], position: 0, duration: 1047 },
                { id: "eid321", tween: [ "style", "${_Guy-Torso}", "top", '113px', { fromValue: '117px'}], position: 4000, duration: 1000 },
                { id: "eid502", tween: [ "style", "${_Guy-Torso}", "top", '113px', { fromValue: '113px'}], position: 5000, duration: 376 },
                { id: "eid409", tween: [ "style", "${_Guy-Torso}", "top", '112px', { fromValue: '113px'}], position: 5376, duration: 1624 },
                { id: "eid553", tween: [ "style", "${_Guy-Torso}", "top", '112px', { fromValue: '112px'}], position: 11500, duration: 0 },
                { id: "eid754", tween: [ "style", "${_S2-Girl-RArm}", "left", '105px', { fromValue: '878px'}], position: 12250, duration: 750 },
                { id: "eid880", tween: [ "style", "${_S2-Girl-RArm}", "left", '109px', { fromValue: '105px'}], position: 13250, duration: 250 },
                { id: "eid888", tween: [ "style", "${_S2-Girl-RArm}", "left", '105px', { fromValue: '109px'}], position: 13500, duration: 250 },
                { id: "eid902", tween: [ "style", "${_S2-Girl-RArm}", "left", '109px', { fromValue: '105px'}], position: 13750, duration: 250 },
                { id: "eid1211", tween: [ "style", "${_S2-Girl-RArm}", "left", '-458px', { fromValue: '109px'}], position: 16500, duration: 1000 },
                { id: "eid1298", tween: [ "style", "${_Rectangle8}", "top", '297px', { fromValue: '303px'}], position: 18000, duration: 1000 },
                { id: "eid1540", tween: [ "style", "${_Rectangle8}", "top", '-157px', { fromValue: '297px'}], position: 23500, duration: 1000 },
                { id: "eid686", tween: [ "style", "${_Rectangle3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid712", tween: [ "style", "${_Rectangle3}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
                { id: "eid226", tween: [ "transform", "${_Guy-RArm}", "rotateZ", '30deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid230", tween: [ "transform", "${_Guy-RArm}", "rotateZ", '0deg', { fromValue: '30deg'}], position: 500, duration: 500 },
                { id: "eid247", tween: [ "transform", "${_Guy-RArm}", "rotateZ", '30deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid257", tween: [ "transform", "${_Guy-RArm}", "rotateZ", '49deg', { fromValue: '30deg'}], position: 1500, duration: 500 },
                { id: "eid285", tween: [ "transform", "${_Guy-RArm}", "rotateZ", '30deg', { fromValue: '49deg'}], position: 4000, duration: 500 },
                { id: "eid296", tween: [ "transform", "${_Guy-RArm}", "rotateZ", '0deg', { fromValue: '30deg'}], position: 4500, duration: 500 },
                { id: "eid324", tween: [ "transform", "${_Guy-RArm}", "rotateZ", '47deg', { fromValue: '0deg'}], position: 5000, duration: 314 },
                { id: "eid1778", tween: [ "motion", "${_ConfettiCopy7}", [[443.5, 119.5, 0, 0],[496.23, 180.6, 38.32, 296.59, 18.17, 160.22],[489.5, 475.5, 0, 0]]], position: 32000, duration: 3000 },
                { id: "eid758", tween: [ "style", "${_S2-Guy}", "left", '338px', { fromValue: '1111px'}], position: 12250, duration: 750 },
                { id: "eid998", tween: [ "style", "${_S2-Guy}", "left", '338px', { fromValue: '338px'}], position: 14000, duration: 0 },
                { id: "eid1197", tween: [ "style", "${_S2-Guy}", "left", '-229px', { fromValue: '338px'}], position: 16500, duration: 1000 },
                { id: "eid200", tween: [ "style", "${_Guy-LArm}", "left", '23px', { fromValue: '-128px'}], position: 0, duration: 500 },
                { id: "eid208", tween: [ "style", "${_Guy-LArm}", "left", '130px', { fromValue: '23px'}], position: 500, duration: 500 },
                { id: "eid236", tween: [ "style", "${_Guy-LArm}", "left", '246px', { fromValue: '130px'}], position: 1000, duration: 500 },
                { id: "eid250", tween: [ "style", "${_Guy-LArm}", "left", '310px', { fromValue: '246px'}], position: 1500, duration: 500 },
                { id: "eid278", tween: [ "style", "${_Guy-LArm}", "left", '413px', { fromValue: '310px'}], position: 4000, duration: 500 },
                { id: "eid288", tween: [ "style", "${_Guy-LArm}", "left", '540px', { fromValue: '413px'}], position: 4500, duration: 500 },
                { id: "eid312", tween: [ "style", "${_Guy-LArm}", "left", '504px', { fromValue: '540px'}], position: 5000, duration: 314 },
                { id: "eid402", tween: [ "style", "${_Guy-LArm}", "left", '95px', { fromValue: '504px'}], position: 5314, duration: 1686 },
                { id: "eid571", tween: [ "style", "${_Guy-LArm}", "left", '-722px', { fromValue: '95px'}], position: 11500, duration: 1500 },
                { id: "eid801", tween: [ "style", "${_S3-BG}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid802", tween: [ "style", "${_S3-BG}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
                { id: "eid626", tween: [ "style", "${_S2-Light-On}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid770", tween: [ "style", "${_S2-Light-On}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid1374", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1378", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0 },
                { id: "eid1617", tween: [ "style", "${_S5-Guy-Torso}", "top", '132px', { fromValue: '651px'}], position: 24000, duration: 1369 },
                { id: "eid1725", tween: [ "style", "${_ConfettiCopy2}", "display", 'none', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid1726", tween: [ "style", "${_ConfettiCopy2}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0 },
                { id: "eid363", tween: [ "style", "${_Light-On}", "top", '22px', { fromValue: '22px'}], position: 4000, duration: 0 },
                { id: "eid452", tween: [ "transform", "${_Guy-Arm-2}", "rotateZ", '99deg', { fromValue: '110deg'}], position: 9412, duration: 161 },
                { id: "eid456", tween: [ "transform", "${_Guy-Arm-2}", "rotateZ", '68deg', { fromValue: '99deg'}], position: 9573, duration: 177 },
                { id: "eid463", tween: [ "transform", "${_Guy-Arm-2}", "rotateZ", '30deg', { fromValue: '68deg'}], position: 9750, duration: 181 },
                { id: "eid476", tween: [ "transform", "${_Guy-Arm-2}", "rotateZ", '25deg', { fromValue: '30deg'}], position: 9931, duration: 154 },
                { id: "eid202", tween: [ "style", "${_Guy-LLeg}", "left", '62px', { fromValue: '-154px'}], position: 0, duration: 500 },
                { id: "eid212", tween: [ "style", "${_Guy-LLeg}", "left", '103px', { fromValue: '62px'}], position: 500, duration: 500 },
                { id: "eid238", tween: [ "style", "${_Guy-LLeg}", "left", '276px', { fromValue: '103px'}], position: 1000, duration: 500 },
                { id: "eid252", tween: [ "style", "${_Guy-LLeg}", "left", '313px', { fromValue: '276px'}], position: 1500, duration: 500 },
                { id: "eid280", tween: [ "style", "${_Guy-LLeg}", "left", '441px', { fromValue: '313px'}], position: 4000, duration: 500 },
                { id: "eid290", tween: [ "style", "${_Guy-LLeg}", "left", '516px', { fromValue: '441px'}], position: 4500, duration: 500 },
                { id: "eid316", tween: [ "style", "${_Guy-LLeg}", "left", '509px', { fromValue: '516px'}], position: 5000, duration: 314 },
                { id: "eid410", tween: [ "style", "${_Guy-LLeg}", "left", '101px', { fromValue: '509px'}], position: 5314, duration: 1686 },
                { id: "eid566", tween: [ "style", "${_Guy-LLeg}", "left", '-716px', { fromValue: '101px'}], position: 11500, duration: 1500 },
                { id: "eid1734", tween: [ "style", "${_ConfettiCopy5}", "display", 'none', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid1735", tween: [ "style", "${_ConfettiCopy5}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0 },
                { id: "eid691", tween: [ "style", "${_S2-Girl-LLeg}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid717", tween: [ "style", "${_S2-Girl-LLeg}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
                { id: "eid621", tween: [ "style", "${_S2-Background}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid622", tween: [ "style", "${_S2-Background}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
                { id: "eid228", tween: [ "transform", "${_Guy-LArm}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid229", tween: [ "transform", "${_Guy-LArm}", "rotateZ", '0deg', { fromValue: '15deg'}], position: 500, duration: 500 },
                { id: "eid246", tween: [ "transform", "${_Guy-LArm}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid259", tween: [ "transform", "${_Guy-LArm}", "rotateZ", '-20deg', { fromValue: '15deg'}], position: 1500, duration: 500 },
                { id: "eid286", tween: [ "transform", "${_Guy-LArm}", "rotateZ", '15deg', { fromValue: '-20deg'}], position: 4000, duration: 500 },
                { id: "eid297", tween: [ "transform", "${_Guy-LArm}", "rotateZ", '0deg', { fromValue: '15deg'}], position: 4500, duration: 500 },
                { id: "eid325", tween: [ "transform", "${_Guy-LArm}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 5000, duration: 314 },
                { id: "eid1531", tween: [ "style", "${_Rectangle10Copy3}", "top", '-237px', { fromValue: '217px'}], position: 23500, duration: 1000 },
                { id: "eid1455", tween: [ "style", "${_Rectangle10Copy4}", "left", '603px', { fromValue: '603px'}], position: 23500, duration: 0 },
                { id: "eid1454", tween: [ "style", "${_TextCopy4}", "left", '593px', { fromValue: '593px'}], position: 23500, duration: 0 },
                { id: "eid1186", tween: [ "style", "${_Rectangle7Copy6}", "top", '118px', { fromValue: '118px'}], position: 17500, duration: 0 },
                { id: "eid1517", tween: [ "style", "${_Rectangle7Copy6}", "top", '-336px', { fromValue: '118px'}], position: 23500, duration: 1000 },
                { id: "eid1812", tween: [ "style", "${_S5-Guy-RArm-1}", "left", '403px', { fromValue: '401px'}], position: 24000, duration: 2500 },
                { id: "eid1813", tween: [ "style", "${_S5-Guy-RArm-1}", "left", '428px', { fromValue: '403px'}], position: 26500, duration: 1000 },
                { id: "eid1228", tween: [ "style", "${_S2-Light-On}", "top", '39px', { fromValue: '38px'}], position: 13381, duration: 4119 },
                { id: "eid1543", tween: [ "style", "${_S2-Light-On}", "top", '-415px', { fromValue: '39px'}], position: 23500, duration: 1000 },
                { id: "eid1732", tween: [ "style", "${_ConfettiCopy4}", "display", 'none', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid1733", tween: [ "style", "${_ConfettiCopy4}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0 },
                { id: "eid1649", tween: [ "transform", "${_S5-Guy-RArm-2}", "rotateZ", '36deg', { fromValue: '63deg'}], position: 26500, duration: 500 },
                { id: "eid1664", tween: [ "transform", "${_S5-Guy-RArm-2}", "rotateZ", '0deg', { fromValue: '36deg'}], position: 27000, duration: 500 },
                { id: "eid1690", tween: [ "transform", "${_S5-Shine}", "scaleY", '1.12', { fromValue: '1'}], position: 27500, duration: 500 },
                { id: "eid1692", tween: [ "transform", "${_S5-Shine}", "scaleY", '1', { fromValue: '1.12'}], position: 28000, duration: 500 },
                { id: "eid1694", tween: [ "transform", "${_S5-Shine}", "scaleY", '1.12', { fromValue: '1'}], position: 28500, duration: 500 },
                { id: "eid1696", tween: [ "transform", "${_S5-Shine}", "scaleY", '1', { fromValue: '1.12'}], position: 29000, duration: 500 },
                { id: "eid688", tween: [ "style", "${_S2-Girl-Torso}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid714", tween: [ "style", "${_S2-Girl-Torso}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
                { id: "eid692", tween: [ "style", "${_S2-Girl-LArm}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid718", tween: [ "style", "${_S2-Girl-LArm}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
                { id: "eid371", tween: [ "style", "${_Scan-Gradient}", "left", '-523px', { fromValue: '272px'}], position: 4000, duration: 3000 },
                { id: "eid635", tween: [ "style", "${_S2-Wave3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid638", tween: [ "style", "${_S2-Wave3}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
                { id: "eid1285", tween: [ "style", "${_Ellipse2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1355", tween: [ "style", "${_Ellipse2Copy}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid1190", tween: [ "style", "${_Rectangle7}", "top", '118px', { fromValue: '118px'}], position: 17500, duration: 0 },
                { id: "eid1521", tween: [ "style", "${_Rectangle7}", "top", '-336px', { fromValue: '118px'}], position: 23500, duration: 1000 },
                { id: "eid1677", tween: [ "style", "${_S5-Shine}", "top", '6px', { fromValue: '6px'}], position: 27500, duration: 0 },
                { id: "eid1527", tween: [ "style", "${_Rectangle10Copy5}", "top", '-285px', { fromValue: '169px'}], position: 23500, duration: 1000 },
                { id: "eid120", tween: [ "style", "${_Male_Dot}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid131", tween: [ "style", "${_Male_Dot}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid1462", tween: [ "style", "${_Text}", "left", '291px', { fromValue: '291px'}], position: 23500, duration: 0 },
                { id: "eid766", tween: [ "style", "${_Fish-04}", "left", '493px', { fromValue: '1266px'}], position: 12250, duration: 750 },
                { id: "eid917", tween: [ "style", "${_Fish-04}", "left", '493px', { fromValue: '493px'}], position: 14000, duration: 0 },
                { id: "eid1215", tween: [ "style", "${_Fish-04}", "left", '-74px', { fromValue: '493px'}], position: 16500, duration: 1000 },
                { id: "eid1464", tween: [ "style", "${_Ellipse2Copy}", "left", '683px', { fromValue: '683px'}], position: 23500, duration: 0 },
                { id: "eid790", tween: [ "style", "${_Fish-02}", "left", '295px', { fromValue: '1068px'}], position: 12250, duration: 750 },
                { id: "eid914", tween: [ "style", "${_Fish-02}", "left", '295px', { fromValue: '295px'}], position: 14000, duration: 0 },
                { id: "eid1221", tween: [ "style", "${_Fish-02}", "left", '-272px', { fromValue: '295px'}], position: 16500, duration: 1000 },
                { id: "eid765", tween: [ "style", "${_S2-Wave2}", "left", '366px', { fromValue: '1139px'}], position: 12250, duration: 750 },
                { id: "eid1217", tween: [ "style", "${_S2-Wave2}", "left", '-201px', { fromValue: '366px'}], position: 16500, duration: 1000 },
                { id: "eid955", tween: [ "transform", "${_Fish-01}", "rotateZ", '40deg', { fromValue: '0deg'}], position: 14000, duration: 500 },
                { id: "eid956", tween: [ "transform", "${_Fish-01}", "rotateZ", '0deg', { fromValue: '40deg'}], position: 14500, duration: 500 },
                { id: "eid957", tween: [ "transform", "${_Fish-01}", "rotateZ", '40deg', { fromValue: '0deg'}], position: 15000, duration: 500 },
                { id: "eid958", tween: [ "transform", "${_Fish-01}", "rotateZ", '0deg', { fromValue: '40deg'}], position: 15500, duration: 500 },
                { id: "eid368", tween: [ "style", "${_Scene-1-BG}", "left", '-758px', { fromValue: '37px'}], position: 4000, duration: 3000 },
                { id: "eid1465", tween: [ "style", "${_Ellipse2}", "left", '296px', { fromValue: '296px'}], position: 23500, duration: 0 },
                { id: "eid1519", tween: [ "style", "${_Text}", "top", '-190px', { fromValue: '264px'}], position: 23500, duration: 1000 },
                { id: "eid477", tween: [ "style", "${_Guy-Arm-1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid480", tween: [ "style", "${_Guy-Arm-1}", "display", 'block', { fromValue: 'none'}], position: 9412, duration: 0 },
                { id: "eid527", tween: [ "style", "${_Ellipse}", "height", '4px', { fromValue: '4px'}], position: 10085, duration: 0 },
                { id: "eid373", tween: [ "style", "${_Light-OnCopy}", "left", '-634px', { fromValue: '161px'}], position: 4000, duration: 3000 },
                { id: "eid1530", tween: [ "style", "${_RoundRect}", "top", '-405px', { fromValue: '49px'}], position: 23500, duration: 1000 },
                { id: "eid91", tween: [ "style", "${_Light-On}", "opacity", '0.5', { fromValue: '0.5'}], position: 750, duration: 0 },
                { id: "eid1353", tween: [ "style", "${_Rectangle9Copy2}", "left", '613px', { fromValue: '613px'}], position: 21000, duration: 0 },
                { id: "eid1469", tween: [ "style", "${_Rectangle9Copy2}", "left", '613px', { fromValue: '613px'}], position: 23500, duration: 0 },
                { id: "eid1723", tween: [ "style", "${_ConfettiCopy}", "display", 'none', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid1724", tween: [ "style", "${_ConfettiCopy}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0 },
                { id: "eid1192", tween: [ "style", "${_Rectangle5}", "top", '65px', { fromValue: '64px'}], position: 12250, duration: 5250 },
                { id: "eid1522", tween: [ "style", "${_Rectangle5}", "top", '-389px', { fromValue: '65px'}], position: 23500, duration: 1000 },
                { id: "eid207", tween: [ "transform", "${_Guy-RLeg}", "rotateZ", '64deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid218", tween: [ "transform", "${_Guy-RLeg}", "rotateZ", '0deg', { fromValue: '64deg'}], position: 500, duration: 500 },
                { id: "eid241", tween: [ "transform", "${_Guy-RLeg}", "rotateZ", '64deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid261", tween: [ "transform", "${_Guy-RLeg}", "rotateZ", '36deg', { fromValue: '64deg'}], position: 1500, duration: 500 },
                { id: "eid283", tween: [ "transform", "${_Guy-RLeg}", "rotateZ", '64deg', { fromValue: '36deg'}], position: 4000, duration: 500 },
                { id: "eid293", tween: [ "transform", "${_Guy-RLeg}", "rotateZ", '0deg', { fromValue: '64deg'}], position: 4500, duration: 500 },
                { id: "eid322", tween: [ "transform", "${_Guy-RLeg}", "rotateZ", '40deg', { fromValue: '0deg'}], position: 5000, duration: 314 },
                { id: "eid389", tween: [ "transform", "${_Guy-RLeg}", "rotateZ", '40deg', { fromValue: '40deg'}], position: 5314, duration: 0 },
                { id: "eid1070", tween: [ "style", "${_Rectangle7}", "display", 'none', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid1071", tween: [ "style", "${_Rectangle7}", "display", 'block', { fromValue: 'none'}], position: 14500, duration: 0 },
                { id: "eid1188", tween: [ "style", "${_S2-Wave3}", "top", '266px', { fromValue: '265px'}], position: 12250, duration: 5250 },
                { id: "eid637", tween: [ "style", "${_S2-Wave}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid640", tween: [ "style", "${_S2-Wave}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
                { id: "eid1296", tween: [ "style", "${_Rectangle8}", "width", '160px', { fromValue: '0px'}], position: 18000, duration: 1000 },
                { id: "eid450", tween: [ "style", "${_Guy-Arm-2}", "left", '144px', { fromValue: '130px'}], position: 9412, duration: 161 },
                { id: "eid455", tween: [ "style", "${_Guy-Arm-2}", "left", '156px', { fromValue: '144px'}], position: 9573, duration: 177 },
                { id: "eid461", tween: [ "style", "${_Guy-Arm-2}", "left", '159px', { fromValue: '156px'}], position: 9750, duration: 181 },
                { id: "eid474", tween: [ "style", "${_Guy-Arm-2}", "left", '162px', { fromValue: '159px'}], position: 9931, duration: 154 },
                { id: "eid565", tween: [ "style", "${_Guy-Arm-2}", "left", '-655px', { fromValue: '162px'}], position: 11500, duration: 1500 },
                { id: "eid1466", tween: [ "style", "${_Rectangle8}", "left", '298px', { fromValue: '298px'}], position: 23500, duration: 0 },
                { id: "eid1224", tween: [ "style", "${_Rectangle3}", "top", '68px', { fromValue: '67px'}], position: 14000, duration: 3500 },
                { id: "eid1689", tween: [ "transform", "${_S5-Shine}", "scaleX", '1.12', { fromValue: '1'}], position: 27500, duration: 500 },
                { id: "eid1691", tween: [ "transform", "${_S5-Shine}", "scaleX", '1', { fromValue: '1.12'}], position: 28000, duration: 500 },
                { id: "eid1693", tween: [ "transform", "${_S5-Shine}", "scaleX", '1.12', { fromValue: '1'}], position: 28500, duration: 500 },
                { id: "eid1695", tween: [ "transform", "${_S5-Shine}", "scaleX", '1', { fromValue: '1.12'}], position: 29000, duration: 500 },
                { id: "eid695", tween: [ "style", "${_Fish-04}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid720", tween: [ "style", "${_Fish-04}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
                { id: "eid203", tween: [ "style", "${_Guy-RArm}", "left", '62px', { fromValue: '-90px'}], position: 0, duration: 500 },
                { id: "eid214", tween: [ "style", "${_Guy-RArm}", "left", '165px', { fromValue: '62px'}], position: 500, duration: 500 },
                { id: "eid239", tween: [ "style", "${_Guy-RArm}", "left", '279px', { fromValue: '165px'}], position: 1000, duration: 500 },
                { id: "eid254", tween: [ "style", "${_Guy-RArm}", "left", '326px', { fromValue: '279px'}], position: 1500, duration: 500 },
                { id: "eid281", tween: [ "style", "${_Guy-RArm}", "left", '452px', { fromValue: '326px'}], position: 4000, duration: 500 },
                { id: "eid291", tween: [ "style", "${_Guy-RArm}", "left", '582px', { fromValue: '452px'}], position: 4500, duration: 500 },
                { id: "eid318", tween: [ "style", "${_Guy-RArm}", "left", '523px', { fromValue: '582px'}], position: 5000, duration: 314 },
                { id: "eid404", tween: [ "style", "${_Guy-RArm}", "left", '116px', { fromValue: '523px'}], position: 5314, duration: 1686 },
                { id: "eid1257", tween: [ "transform", "${_S3-Guy-Arm}", "rotateZ", '61deg', { fromValue: '61deg'}], position: 16500, duration: 0 },
                { id: "eid1404", tween: [ "transform", "${_S3-Guy-Arm}", "rotateZ", '25deg', { fromValue: '61deg'}], position: 22500, duration: 500 },
                { id: "eid689", tween: [ "style", "${_S2-Girl-RLeg}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid715", tween: [ "style", "${_S2-Girl-RLeg}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
                { id: "eid800", tween: [ "style", "${_S3-Guy-Arm}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1244", tween: [ "style", "${_S3-Guy-Arm}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0 },
                { id: "eid201", tween: [ "style", "${_Guy-RLeg}", "left", '16px', { fromValue: '-100px'}], position: 0, duration: 500 },
                { id: "eid210", tween: [ "style", "${_Guy-RLeg}", "left", '156px', { fromValue: '16px'}], position: 500, duration: 500 },
                { id: "eid237", tween: [ "style", "${_Guy-RLeg}", "left", '233px', { fromValue: '156px'}], position: 1000, duration: 500 },
                { id: "eid251", tween: [ "style", "${_Guy-RLeg}", "left", '302px', { fromValue: '233px'}], position: 1500, duration: 500 },
                { id: "eid279", tween: [ "style", "${_Guy-RLeg}", "left", '404px', { fromValue: '302px'}], position: 4000, duration: 500 },
                { id: "eid289", tween: [ "style", "${_Guy-RLeg}", "left", '568px', { fromValue: '404px'}], position: 4500, duration: 500 },
                { id: "eid314", tween: [ "style", "${_Guy-RLeg}", "left", '499px', { fromValue: '568px'}], position: 5000, duration: 314 },
                { id: "eid406", tween: [ "style", "${_Guy-RLeg}", "left", '91px', { fromValue: '499px'}], position: 5314, duration: 1686 },
                { id: "eid567", tween: [ "style", "${_Guy-RLeg}", "left", '-726px', { fromValue: '91px'}], position: 11500, duration: 1500 },
                { id: "eid1230", tween: [ "style", "${_Rectangle7Copy4}", "top", '118px', { fromValue: '118px'}], position: 17500, duration: 0 },
                { id: "eid1544", tween: [ "style", "${_Rectangle7Copy4}", "top", '-336px', { fromValue: '118px'}], position: 23500, duration: 1000 },
                { id: "eid886", tween: [ "transform", "${_S2-Girl-LLeg}", "rotateZ", '7deg', { fromValue: '0deg'}], position: 13250, duration: 250 },
                { id: "eid896", tween: [ "transform", "${_S2-Girl-LLeg}", "rotateZ", '0deg', { fromValue: '7deg'}], position: 13500, duration: 250 },
                { id: "eid905", tween: [ "transform", "${_S2-Girl-LLeg}", "rotateZ", '7deg', { fromValue: '0deg'}], position: 13750, duration: 250 },
                { id: "eid222", tween: [ "style", "${_Guy-LLeg}", "top", '187px', { fromValue: '189px'}], position: 0, duration: 1000 },
                { id: "eid256", tween: [ "style", "${_Guy-LLeg}", "top", '192px', { fromValue: '187px'}], position: 1500, duration: 500 },
                { id: "eid287", tween: [ "style", "${_Guy-LLeg}", "top", '186px', { fromValue: '192px'}], position: 4000, duration: 500 },
                { id: "eid295", tween: [ "style", "${_Guy-LLeg}", "top", '184px', { fromValue: '186px'}], position: 4500, duration: 500 },
                { id: "eid317", tween: [ "style", "${_Guy-LLeg}", "top", '186px', { fromValue: '184px'}], position: 5000, duration: 314 },
                { id: "eid411", tween: [ "style", "${_Guy-LLeg}", "top", '186px', { fromValue: '186px'}], position: 5314, duration: 1686 },
                { id: "eid549", tween: [ "style", "${_Guy-LLeg}", "top", '186px', { fromValue: '186px'}], position: 11500, duration: 0 },
                { id: "eid764", tween: [ "style", "${_Rectangle4}", "left", '454px', { fromValue: '1222px'}], position: 12250, duration: 750 },
                { id: "eid985", tween: [ "style", "${_Rectangle4}", "left", '454px', { fromValue: '454px'}], position: 14000, duration: 0 },
                { id: "eid1183", tween: [ "style", "${_Rectangle4}", "left", '-113px', { fromValue: '454px'}], position: 16500, duration: 1000 },
                { id: "eid1460", tween: [ "style", "${_TextCopy}", "left", '362px', { fromValue: '362px'}], position: 23500, duration: 0 },
                { id: "eid1002", tween: [ "style", "${_Rectangle4}", "height", '136px', { fromValue: '132px'}], position: 14000, duration: 500 },
                { id: "eid1007", tween: [ "style", "${_Rectangle4}", "height", '132px', { fromValue: '136px'}], position: 14500, duration: 500 },
                { id: "eid1012", tween: [ "style", "${_Rectangle4}", "height", '136px', { fromValue: '132px'}], position: 15000, duration: 500 },
                { id: "eid1015", tween: [ "style", "${_Rectangle4}", "height", '132px', { fromValue: '136px'}], position: 15500, duration: 500 },
                { id: "eid1064", tween: [ "style", "${_Rectangle7Copy6}", "display", 'none', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid1077", tween: [ "style", "${_Rectangle7Copy6}", "display", 'block', { fromValue: 'none'}], position: 16000, duration: 0 },
                { id: "eid1366", tween: [ "style", "${_TextCopy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1389", tween: [ "style", "${_TextCopy4}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid1658", tween: [ "transform", "${_S5-Guy-LArm-1}", "rotateZ", '46deg', { fromValue: '71deg'}], position: 26500, duration: 500 },
                { id: "eid1662", tween: [ "transform", "${_S5-Guy-LArm-1}", "rotateZ", '0deg', { fromValue: '46deg'}], position: 27000, duration: 500 },
                { id: "eid1375", tween: [ "style", "${_Rectangle10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1379", tween: [ "style", "${_Rectangle10}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0 },
                { id: "eid1198", tween: [ "style", "${_S2-Guy}", "top", '108px', { fromValue: '107px'}], position: 14000, duration: 3500 },
                { id: "eid687", tween: [ "style", "${_S2-Guy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid713", tween: [ "style", "${_S2-Guy}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
                { id: "eid348", tween: [ "style", "${_Scan-Gradient}", "top", '81px', { fromValue: '81px'}], position: 4000, duration: 0 },
                { id: "eid1777", tween: [ "motion", "${_ConfettiCopy6}", [[445.5, 93.5, 0, 0],[583.52, 162.63, 152.12, 272.31, 113.71, 203.54],[626.5, 417.5, 0, 0]]], position: 32000, duration: 3000 },
                { id: "eid1740", tween: [ "style", "${_ConfettiCopy7}", "display", 'none', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid1741", tween: [ "style", "${_ConfettiCopy7}", "display", 'block', { fromValue: 'none'}], position: 32000, duration: 0 },
                { id: "eid883", tween: [ "transform", "${_S2-Girl-RLeg}", "rotateZ", '-4deg', { fromValue: '0deg'}], position: 13250, duration: 250 },
                { id: "eid894", tween: [ "transform", "${_S2-Girl-RLeg}", "rotateZ", '0deg', { fromValue: '-4deg'}], position: 13500, duration: 250 },
                { id: "eid899", tween: [ "transform", "${_S2-Girl-RLeg}", "rotateZ", '-4deg', { fromValue: '0deg'}], position: 13750, duration: 250 },
                { id: "eid124", tween: [ "style", "${_Scan-Bar}", "top", '76px', { fromValue: '219px'}], position: 2000, duration: 1000 },
                { id: "eid126", tween: [ "style", "${_Scan-Bar}", "top", '219px', { fromValue: '76px'}], position: 3000, duration: 1000 },
                { id: "eid225", tween: [ "style", "${_Guy-RLeg}", "top", '189px', { fromValue: '191px'}], position: 0, duration: 1000 },
                { id: "eid242", tween: [ "style", "${_Guy-RLeg}", "top", '192px', { fromValue: '189px'}], position: 1000, duration: 500 },
                { id: "eid262", tween: [ "style", "${_Guy-RLeg}", "top", '189px', { fromValue: '192px'}], position: 1500, duration: 500 },
                { id: "eid299", tween: [ "style", "${_Guy-RLeg}", "top", '186px', { fromValue: '189px'}], position: 4000, duration: 1000 },
                { id: "eid315", tween: [ "style", "${_Guy-RLeg}", "top", '183px', { fromValue: '186px'}], position: 5000, duration: 314 },
                { id: "eid407", tween: [ "style", "${_Guy-RLeg}", "top", '182px', { fromValue: '183px'}], position: 5314, duration: 1686 },
                { id: "eid548", tween: [ "style", "${_Guy-RLeg}", "top", '182px', { fromValue: '182px'}], position: 11500, duration: 0 },
                { id: "eid763", tween: [ "style", "${_S2-Wave}", "left", '244px', { fromValue: '1017px'}], position: 12250, duration: 750 },
                { id: "eid1201", tween: [ "style", "${_S2-Wave}", "left", '-323px', { fromValue: '244px'}], position: 16500, duration: 1000 },
                { id: "eid1067", tween: [ "style", "${_Rectangle7Copy3}", "display", 'none', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid1074", tween: [ "style", "${_Rectangle7Copy3}", "display", 'block', { fromValue: 'none'}], position: 15250, duration: 0 },
                { id: "eid1770", tween: [ "motion", "${_Confetti}", [[413.5, 78.5, 0, 0],[341.53, 106.97, -60.3, 307.71, -27.69, 141.31],[345.5, 425.5, 0, 0]]], position: 32000, duration: 3000 },
                { id: "eid85", tween: [ "style", "${_Light-OnCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid86", tween: [ "style", "${_Light-OnCopy}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid137", tween: [ "style", "${_Light-OnCopy}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid1200", tween: [ "style", "${_S2-Background}", "top", '-73px', { fromValue: '-73px'}], position: 17500, duration: 0 },
                { id: "eid1520", tween: [ "style", "${_S2-Background}", "top", '-527px', { fromValue: '-73px'}], position: 23500, duration: 1000 },
                { id: "eid1371", tween: [ "style", "${_Rectangle10Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1383", tween: [ "style", "${_Rectangle10Copy2}", "display", 'block', { fromValue: 'none'}], position: 19000, duration: 0 },
                { id: "eid1407", tween: [ "style", "${_RoundRect}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1408", tween: [ "style", "${_RoundRect}", "display", 'block', { fromValue: 'none'}], position: 23000, duration: 0 },
                { id: "eid1803", tween: [ "style", "${_S5-Guy-Torso}", "left", '362px', { fromValue: '362px'}], position: 24000, duration: 0 },
                { id: "eid1463", tween: [ "style", "${_Rectangle10}", "left", '291px', { fromValue: '291px'}], position: 23500, duration: 0 },
                { id: "eid942", tween: [ "transform", "${_Fish-03}", "rotateZ", '-17deg', { fromValue: '0deg'}], position: 14000, duration: 500 },
                { id: "eid943", tween: [ "transform", "${_Fish-03}", "rotateZ", '0deg', { fromValue: '-17deg'}], position: 14500, duration: 500 },
                { id: "eid944", tween: [ "transform", "${_Fish-03}", "rotateZ", '-17deg', { fromValue: '0deg'}], position: 15000, duration: 500 },
                { id: "eid945", tween: [ "transform", "${_Fish-03}", "rotateZ", '0deg', { fromValue: '-17deg'}], position: 15500, duration: 500 },
                { id: "eid1288", tween: [ "style", "${_Rectangle9Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1347", tween: [ "style", "${_Rectangle9Copy2}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid349", tween: [ "style", "${_Scene-1-BG}", "top", '-9px', { fromValue: '-9px'}], position: 4000, duration: 0 },
                { id: "eid1773", tween: [ "motion", "${_ConfettiCopy2}", [[401.5, 115.5, 0, 0],[318.66, 171.65, -76.44, 263.08, -37.53, 129.17],[315.5, 411.5, 0, 0]]], position: 32000, duration: 3000 },
                { id: "eid179", tween: [ "transform", "${_Guy-Torso}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid498", tween: [ "transform", "${_Guy-Torso}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4000, duration: 0 },
                { id: "eid499", tween: [ "transform", "${_Guy-Torso}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4523, duration: 0 },
                { id: "eid500", tween: [ "transform", "${_Guy-Torso}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 5376, duration: 0 },
                { id: "eid1329", tween: [ "style", "${_Rectangle9}", "width", '79px', { fromValue: '0px'}], position: 19000, duration: 1000 },
                { id: "eid1231", tween: [ "style", "${_Rectangle7Copy}", "left", '139px', { fromValue: '706px'}], position: 16500, duration: 1000 },
                { id: "eid1475", tween: [ "style", "${_Rectangle7Copy}", "left", '139px', { fromValue: '139px'}], position: 23500, duration: 0 },
                { id: "eid412", tween: [ "style", "${_BG}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid934", tween: [ "transform", "${_Fish-02}", "rotateZ", '23deg', { fromValue: '0deg'}], position: 14000, duration: 500 },
                { id: "eid935", tween: [ "transform", "${_Fish-02}", "rotateZ", '0deg', { fromValue: '23deg'}], position: 14500, duration: 500 },
                { id: "eid936", tween: [ "transform", "${_Fish-02}", "rotateZ", '23deg', { fromValue: '0deg'}], position: 15000, duration: 500 },
                { id: "eid937", tween: [ "transform", "${_Fish-02}", "rotateZ", '0deg', { fromValue: '23deg'}], position: 15500, duration: 500 },
                { id: "eid1216", tween: [ "style", "${_Fish-04}", "top", '252px', { fromValue: '251px'}], position: 14000, duration: 3500 },
                { id: "eid449", tween: [ "style", "${_Guy-Arm-1}", "top", '142px', { fromValue: '141px'}], position: 9412, duration: 161 },
                { id: "eid460", tween: [ "style", "${_Guy-Arm-1}", "top", '138px', { fromValue: '142px'}], position: 9573, duration: 358 },
                { id: "eid472", tween: [ "style", "${_Guy-Arm-1}", "top", '132px', { fromValue: '138px'}], position: 9931, duration: 154 },
                { id: "eid550", tween: [ "style", "${_Guy-Arm-1}", "top", '132px', { fromValue: '132px'}], position: 11500, duration: 0 },
                { id: "eid510", tween: [ "style", "${_Rectangle2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid511", tween: [ "style", "${_Rectangle2}", "display", 'none', { fromValue: 'block'}], position: 10085, duration: 0 },
                { id: "eid90", tween: [ "style", "${_Light-Off}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
                { id: "eid1624", tween: [ "style", "${_S5-Guy-LArm-2}", "top", '188px', { fromValue: '707px'}], position: 24000, duration: 1369 },
                { id: "eid1654", tween: [ "style", "${_S5-Guy-LArm-2}", "top", '183px', { fromValue: '188px'}], position: 26500, duration: 500 },
                { id: "eid1670", tween: [ "style", "${_S5-Guy-LArm-2}", "top", '170px', { fromValue: '183px'}], position: 27000, duration: 500 },
                { id: "eid1234", tween: [ "style", "${_S2-Girl-LLeg}", "top", '276px', { fromValue: '275px'}], position: 13250, duration: 4250 },
                { id: "eid1345", tween: [ "style", "${_Rectangle9Copy}", "top", '248px', { fromValue: '267px'}], position: 20000, duration: 1000 },
                { id: "eid1534", tween: [ "style", "${_Rectangle9Copy}", "top", '-206px', { fromValue: '248px'}], position: 23500, duration: 1000 },
                { id: "eid1779", tween: [ "motion", "${_ConfettiCopy8}", [[444.5, 102.5, 0, 0],[510.68, 175.85, 45.1, 289.14, 25.54, 163.78],[495.5, 429.5, 0, 0]]], position: 32000, duration: 3000 },
                { id: "eid1364", tween: [ "style", "${_TextCopy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1387", tween: [ "style", "${_TextCopy5}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid1537", tween: [ "style", "${_Rectangle10}", "top", '-195px', { fromValue: '259px'}], position: 23500, duration: 1000 },
                { id: "eid1546", tween: [ "style", "${_Rectangle10Copy2}", "top", '-212px', { fromValue: '242px'}], position: 23500, duration: 1000 },
                { id: "eid1811", tween: [ "style", "${_S5-Guy-LArm-1}", "left", '357px', { fromValue: '361px'}], position: 24000, duration: 2500 },
                { id: "eid1814", tween: [ "style", "${_S5-Guy-LArm-1}", "left", '324px', { fromValue: '357px'}], position: 26500, duration: 1000 },
                { id: "eid478", tween: [ "style", "${_Guy-Arm-2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid481", tween: [ "style", "${_Guy-Arm-2}", "display", 'block', { fromValue: 'none'}], position: 9412, duration: 0 },
                { id: "eid879", tween: [ "transform", "${_S2-Girl-RArm}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 13250, duration: 250 },
                { id: "eid889", tween: [ "transform", "${_S2-Girl-RArm}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 13500, duration: 250 },
                { id: "eid903", tween: [ "transform", "${_S2-Girl-RArm}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 13750, duration: 250 },
                { id: "eid757", tween: [ "style", "${_Rectangle3}", "left", '304px', { fromValue: '1070px'}], position: 12250, duration: 750 },
                { id: "eid986", tween: [ "style", "${_Rectangle3}", "left", '304px', { fromValue: '304px'}], position: 14000, duration: 0 },
                { id: "eid1223", tween: [ "style", "${_Rectangle3}", "left", '-263px', { fromValue: '304px'}], position: 16500, duration: 1000 },
                { id: "eid1392", tween: [ "style", "${_Rectangle9Copy}", "left", '530px', { fromValue: '533px'}], position: 20000, duration: 1000 },
                { id: "eid1468", tween: [ "style", "${_Rectangle9Copy}", "left", '530px', { fromValue: '530px'}], position: 23500, duration: 0 },
                { id: "eid1801", tween: [ "style", "${_S5-BG}", "left", '201px', { fromValue: '201px'}], position: 24000, duration: 0 },
                { id: "eid215", tween: [ "style", "${_Guy-RArm}", "top", '164px', { fromValue: '149px'}], position: 0, duration: 500 },
                { id: "eid227", tween: [ "style", "${_Guy-RArm}", "top", '147px', { fromValue: '164px'}], position: 500, duration: 500 },
                { id: "eid248", tween: [ "style", "${_Guy-RArm}", "top", '159px', { fromValue: '147px'}], position: 1000, duration: 500 },
                { id: "eid258", tween: [ "style", "${_Guy-RArm}", "top", '161px', { fromValue: '159px'}], position: 1500, duration: 500 },
                { id: "eid298", tween: [ "style", "${_Guy-RArm}", "top", '151px', { fromValue: '161px'}], position: 4000, duration: 1000 },
                { id: "eid319", tween: [ "style", "${_Guy-RArm}", "top", '154px', { fromValue: '151px'}], position: 5000, duration: 314 },
                { id: "eid405", tween: [ "style", "${_Guy-RArm}", "top", '153px', { fromValue: '154px'}], position: 5314, duration: 1686 },
                { id: "eid771", tween: [ "style", "${_S2-Light-On}", "left", '214px', { fromValue: '984px'}], position: 13381, duration: 0 },
                { id: "eid1227", tween: [ "style", "${_S2-Light-On}", "left", '-353px', { fromValue: '214px'}], position: 16500, duration: 1000 },
                { id: "eid1483", tween: [ "style", "${_S2-Light-On}", "left", '-353px', { fromValue: '-353px'}], position: 23500, duration: 0 },
                { id: "eid508", tween: [ "style", "${_Rectangle2}", "left", '483px', { fromValue: '1291px'}], position: 7000, duration: 2412 },
                { id: "eid756", tween: [ "style", "${_S2-Girl-LLeg}", "left", '62px', { fromValue: '837px'}], position: 12250, duration: 750 },
                { id: "eid887", tween: [ "style", "${_S2-Girl-LLeg}", "left", '58px', { fromValue: '62px'}], position: 13250, duration: 250 },
                { id: "eid895", tween: [ "style", "${_S2-Girl-LLeg}", "left", '60px', { fromValue: '58px'}], position: 13500, duration: 250 },
                { id: "eid904", tween: [ "style", "${_S2-Girl-LLeg}", "left", '58px', { fromValue: '62px'}], position: 13750, duration: 250 },
                { id: "eid1233", tween: [ "style", "${_S2-Girl-LLeg}", "left", '-509px', { fromValue: '58px'}], position: 16500, duration: 1000 },
                { id: "eid693", tween: [ "style", "${_Board}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid719", tween: [ "style", "${_Board}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
                { id: "eid1189", tween: [ "style", "${_Rectangle7}", "left", '129px', { fromValue: '696px'}], position: 16500, duration: 1000 },
                { id: "eid1476", tween: [ "style", "${_Rectangle7}", "left", '129px', { fromValue: '129px'}], position: 23500, duration: 0 },
                { id: "eid825", tween: [ "style", "${_Rectangle5}", "left", '550px', { fromValue: '1326px'}], position: 12250, duration: 750 },
                { id: "eid1191", tween: [ "style", "${_Rectangle5}", "left", '-17px', { fromValue: '550px'}], position: 16500, duration: 1000 },
                { id: "eid1481", tween: [ "style", "${_Rectangle5}", "left", '-17px', { fromValue: '-17px'}], position: 23500, duration: 0 },
                { id: "eid1205", tween: [ "style", "${_Rectangle7Copy2}", "left", '149px', { fromValue: '716px'}], position: 16500, duration: 1000 },
                { id: "eid1474", tween: [ "style", "${_Rectangle7Copy2}", "left", '149px', { fromValue: '149px'}], position: 23500, duration: 0 },
                { id: "eid143", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid144", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid145", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid1365", tween: [ "style", "${_Rectangle10Copy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1388", tween: [ "style", "${_Rectangle10Copy5}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid767", tween: [ "style", "${_S2-Wave3}", "left", '251px', { fromValue: '1024px'}], position: 12250, duration: 750 },
                { id: "eid1187", tween: [ "style", "${_S2-Wave3}", "left", '-316px', { fromValue: '251px'}], position: 16500, duration: 1000 },
                { id: "eid1452", tween: [ "style", "${_TextCopy5}", "left", '676px', { fromValue: '676px'}], position: 23500, duration: 0 },
                { id: "eid1194", tween: [ "style", "${_Fish-01}", "top", '126px', { fromValue: '125px'}], position: 14000, duration: 3500 },
                { id: "eid1196", tween: [ "style", "${_S2-Girl-Torso}", "top", '232px', { fromValue: '232px'}], position: 17500, duration: 0 },
                { id: "eid768", tween: [ "style", "${_Board}", "left", '289px', { fromValue: '1057px'}], position: 12250, duration: 750 },
                { id: "eid984", tween: [ "style", "${_Board}", "left", '289px', { fromValue: '289px'}], position: 14000, duration: 0 },
                { id: "eid1181", tween: [ "style", "${_Board}", "left", '-278px', { fromValue: '289px'}], position: 16500, duration: 1000 },
                { id: "eid1372", tween: [ "style", "${_TextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1380", tween: [ "style", "${_TextCopy}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0 },
                { id: "eid1212", tween: [ "style", "${_S2-Girl-RArm}", "top", '264px', { fromValue: '263px'}], position: 13250, duration: 4250 },
                { id: "eid1538", tween: [ "style", "${_TextCopy4}", "top", '-263px', { fromValue: '191px'}], position: 23500, duration: 1000 },
                { id: "eid1458", tween: [ "style", "${_TextCopy2}", "left", '445px', { fromValue: '445px'}], position: 23500, duration: 0 },
                { id: "eid119", tween: [ "style", "${__21_Dot}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid132", tween: [ "style", "${__21_Dot}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid1802", tween: [ "style", "${_S5-Bottom}", "left", '201px', { fromValue: '201px'}], position: 24000, duration: 0 },
                { id: "eid128", tween: [ "style", "${_Scan-Gradient}", "clip", [16,146,205,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [159,146,208,0]}], position: 2000, duration: 1000 },
                { id: "eid129", tween: [ "style", "${_Scan-Gradient}", "clip", [160,146,211,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [16,146,205,0]}], position: 3000, duration: 1000 },
                { id: "eid1289", tween: [ "style", "${_Rectangle9Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1339", tween: [ "style", "${_Rectangle9Copy}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid1541", tween: [ "style", "${_TextCopy}", "top", '-197px', { fromValue: '257px'}], position: 23500, duration: 1000 },
                { id: "eid1232", tween: [ "style", "${_Rectangle7Copy}", "top", '118px', { fromValue: '118px'}], position: 17500, duration: 0 },
                { id: "eid1528", tween: [ "style", "${_Rectangle7Copy}", "top", '-336px', { fromValue: '118px'}], position: 23500, duration: 1000 },
                { id: "eid1772", tween: [ "motion", "${_ConfettiCopy}", [[400.5, 86.5, 0, 0],[324.69, 120.02, -56.2, 304.32, -37.35, 202.24],[291.5, 438.5, 0, 0]]], position: 32000, duration: 3000 },
                { id: "eid1657", tween: [ "transform", "${_S5-Guy-RArm-1}", "rotateZ", '-46deg', { fromValue: '-71deg'}], position: 26500, duration: 500 },
                { id: "eid1663", tween: [ "transform", "${_S5-Guy-RArm-1}", "rotateZ", '0deg', { fromValue: '-46deg'}], position: 27000, duration: 500 },
                { id: "eid881", tween: [ "transform", "${_S2-Girl-LArm}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 13250, duration: 250 },
                { id: "eid891", tween: [ "transform", "${_S2-Girl-LArm}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 13500, duration: 250 },
                { id: "eid901", tween: [ "transform", "${_S2-Girl-LArm}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 13750, duration: 250 },
                { id: "eid1260", tween: [ "style", "${_S3-Guy-Arm}", "top", '46px', { fromValue: '46px'}], position: 16500, duration: 0 },
                { id: "eid1406", tween: [ "style", "${_S3-Guy-Arm}", "top", '39px', { fromValue: '46px'}], position: 22500, duration: 500 },
                { id: "eid1518", tween: [ "style", "${_S3-Guy-Arm}", "top", '-415px', { fromValue: '39px'}], position: 23500, duration: 1000 },
                { id: "eid375", tween: [ "style", "${_Light-On}", "left", '-502px', { fromValue: '-177px'}], position: 4000, duration: 917 },
                { id: "eid376", tween: [ "style", "${_Light-On}", "left", '-506px', { fromValue: '-502px'}], position: 4917, duration: 83 },
                { id: "eid1218", tween: [ "style", "${_S2-Wave2}", "top", '255px', { fromValue: '254px'}], position: 12250, duration: 5250 },
                { id: "eid369", tween: [ "style", "${_Light-Off}", "left", '-972px', { fromValue: '-972px'}], position: 6250, duration: 0 },
                { id: "eid74", tween: [ "style", "${_Light-OffCopy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid82", tween: [ "style", "${_Light-OffCopy}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid1620", tween: [ "style", "${_S5-Diamond}", "top", '470px', { fromValue: '989px'}], position: 24000, duration: 1369 },
                { id: "eid1625", tween: [ "style", "${_S5-Diamond}", "top", '212px', { fromValue: '470px'}], position: 25369, duration: 1131 },
                { id: "eid1627", tween: [ "style", "${_S5-Diamond}", "top", '83px', { fromValue: '212px'}], position: 26500, duration: 1000 },
                { id: "eid209", tween: [ "style", "${_Guy-LArm}", "top", '143px', { fromValue: '145px'}], position: 0, duration: 1000 },
                { id: "eid249", tween: [ "style", "${_Guy-LArm}", "top", '141px', { fromValue: '143px'}], position: 1000, duration: 500 },
                { id: "eid260", tween: [ "style", "${_Guy-LArm}", "top", '145px', { fromValue: '141px'}], position: 1500, duration: 500 },
                { id: "eid313", tween: [ "style", "${_Guy-LArm}", "top", '140px', { fromValue: '145px'}], position: 4000, duration: 1314 },
                { id: "eid403", tween: [ "style", "${_Guy-LArm}", "top", '139px', { fromValue: '140px'}], position: 5314, duration: 1686 },
                { id: "eid552", tween: [ "style", "${_Guy-LArm}", "top", '139px', { fromValue: '139px'}], position: 11500, duration: 0 },
                { id: "eid1184", tween: [ "style", "${_Rectangle4}", "top", '67px', { fromValue: '66px'}], position: 14000, duration: 3500 },
                { id: "eid1461", tween: [ "style", "${_Rectangle10Copy}", "left", '368px', { fromValue: '368px'}], position: 23500, duration: 0 },
                { id: "eid1652", tween: [ "transform", "${_S5-Guy-LArm-2}", "rotateZ", '-36deg', { fromValue: '-63deg'}], position: 26500, duration: 500 },
                { id: "eid1661", tween: [ "transform", "${_S5-Guy-LArm-2}", "rotateZ", '0deg', { fromValue: '-36deg'}], position: 27000, duration: 500 },
                { id: "eid697", tween: [ "style", "${_Fish-01}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid722", tween: [ "style", "${_Fish-01}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
                { id: "eid1214", tween: [ "style", "${_Rectangle7Copy5}", "top", '118px', { fromValue: '118px'}], position: 17500, duration: 0 },
                { id: "eid1536", tween: [ "style", "${_Rectangle7Copy5}", "top", '-336px', { fromValue: '118px'}], position: 23500, duration: 1000 },
                { id: "eid1264", tween: [ "style", "${_S3-Guy-Body}", "left", '346px', { fromValue: '912px'}], position: 16500, duration: 1000 },
                { id: "eid1477", tween: [ "style", "${_S3-Guy-Body}", "left", '346px', { fromValue: '346px'}], position: 23500, duration: 0 },
                { id: "eid1776", tween: [ "motion", "${_ConfettiCopy5}", [[424.5, 83.5, 0, 0],[553.46, 153.82, 136.83, 297.05, 90.14, 195.68],[582.5, 426.5, 0, 0]]], position: 32000, duration: 3000 },
                { id: "eid447", tween: [ "transform", "${_Guy-Arm-1}", "rotateZ", '28deg', { fromValue: '40deg'}], position: 9412, duration: 161 },
                { id: "eid453", tween: [ "transform", "${_Guy-Arm-1}", "rotateZ", '7deg', { fromValue: '28deg'}], position: 9573, duration: 177 },
                { id: "eid458", tween: [ "transform", "${_Guy-Arm-1}", "rotateZ", '-7deg', { fromValue: '7deg'}], position: 9750, duration: 181 },
                { id: "eid470", tween: [ "transform", "${_Guy-Arm-1}", "rotateZ", '-26deg', { fromValue: '-7deg'}], position: 9931, duration: 154 },
                { id: "eid1369", tween: [ "style", "${_Rectangle10Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1385", tween: [ "style", "${_Rectangle10Copy3}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid1286", tween: [ "style", "${_Ellipse2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1290", tween: [ "style", "${_Ellipse2}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0 },
                { id: "eid1815", tween: [ "style", "${_S5-Shine}", "left", '295px', { fromValue: '295px'}], position: 27500, duration: 0 }            ]
        }
    }
},
"Symbol_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['232px', '111px', '427px', '346px', 'auto', 'auto'],
                    id: 'Light-On',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/Light-On3.svg', '0px', '0px']
                },
                {
                    id: 'Fish-012',
                    type: 'image',
                    rect: ['325px', '202px', '71px', '75px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Fish-01.svg', '0px', '0px']
                },
                {
                    id: 'Wave3',
                    type: 'image',
                    rect: ['281px', '233px', '160px', '106px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Wave.svg', '0px', '0px']
                },
                {
                    id: 'Fish-02',
                    type: 'image',
                    rect: ['325px', '265px', '105px', '147px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Fish-02.svg', '0px', '0px']
                },
                {
                    id: 'Background',
                    type: 'image',
                    rect: ['0px', '0px', '650px', '500px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Background.svg', '0px', '0px']
                },
                {
                    rect: ['321px', '141px', '1px', '198px', 'auto', 'auto'],
                    id: 'Left_Line',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['471px', '141px', '1px', '118px', 'auto', 'auto'],
                    id: 'Right_Line',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    id: 'Board',
                    type: 'image',
                    rect: ['307px', '240px', '198px', '119px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Board.svg', '0px', '0px']
                },
                {
                    id: 'Fish-03',
                    type: 'image',
                    rect: ['471px', '216px', '53px', '167px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Fish-03.svg', '0px', '0px']
                },
                {
                    id: 'Fish-04',
                    type: 'image',
                    rect: ['480px', '300px', '60px', '75px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Fish-04.svg', '0px', '0px']
                },
                {
                    id: 'Wave',
                    type: 'image',
                    rect: ['361px', '311px', '160px', '106px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Wave.svg', '0px', '0px']
                },
                {
                    id: 'Wave2',
                    type: 'image',
                    rect: ['253px', '330px', '160px', '106px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Wave.svg', '0px', '0px']
                },
                {
                    id: 'Guy',
                    type: 'image',
                    rect: ['363px', '174px', '100px', '151px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Guy.svg', '0px', '0px']
                },
                {
                    id: 'Girl-Torso',
                    type: 'image',
                    rect: ['77px', '295px', '88px', '80px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Girl-Torso.svg', '0px', '0px']
                },
                {
                    id: 'Girl-RLeg',
                    type: 'image',
                    rect: ['97px', '339px', '48px', '114px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Girl-RLeg.svg', '0px', '0px']
                },
                {
                    id: 'Girl-LLeg',
                    type: 'image',
                    rect: ['78px', '341px', '43px', '114px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Girl-LLeg.svg', '0px', '0px']
                },
                {
                    id: 'Girl-LArm',
                    type: 'image',
                    rect: ['47px', '312px', '72px', '32px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Girl-LArm.svg', '0px', '0px']
                },
                {
                    id: 'Girl-RArm',
                    type: 'image',
                    rect: ['120px', '329px', '38px', '69px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Girl-RArm.svg', '0px', '0px']
                }
            ],
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
                ["style", "top", '341px'],
                ["style", "-webkit-transform-origin", [48,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [48,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [48,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [48,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [48,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '78px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '500px'],
                ["style", "width", '659px']
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
                ["transform", "skewX", '0deg'],
                ["style", "left", '97px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Wave2}": [
                ["style", "left", '253px'],
                ["style", "top", '330px']
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
            "${_Light-On}": [
                ["style", "top", '111px'],
                ["style", "left", '232px'],
                ["style", "display", 'none']
            ],
            "${_Fish-04}": [
                ["style", "top", '300px'],
                ["style", "left", '480px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Girl-RArm}": [
                ["style", "top", '329px'],
                ["style", "left", '120px'],
                ["transform", "rotateZ", '0deg']
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
            "${_Wave}": [
                ["style", "left", '361px'],
                ["style", "top", '311px']
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
                { id: "eid19", tween: [ "transform", "${_Fish-03}", "rotateZ", '0deg', { fromValue: '24deg'}], position: 2000, duration: 750 },
                { id: "eid18", tween: [ "transform", "${_Fish-03}", "rotateZ", '24deg', { fromValue: '0deg'}], position: 2750, duration: 750 },
                { id: "eid29", tween: [ "transform", "${_Fish-03}", "rotateZ", '0deg', { fromValue: '24deg'}], position: 3500, duration: 750 },
                { id: "eid28", tween: [ "transform", "${_Fish-03}", "rotateZ", '24deg', { fromValue: '0deg'}], position: 4250, duration: 750 },
                { id: "eid200", tween: [ "transform", "${_Fish-03}", "rotateZ", '0deg', { fromValue: '24deg'}], position: 5000, duration: 750 },
                { id: "eid201", tween: [ "transform", "${_Fish-03}", "rotateZ", '24deg', { fromValue: '0deg'}], position: 5750, duration: 750 },
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
                { id: "eid199", tween: [ "transform", "${_Fish-04}", "rotateZ", '1deg', { fromValue: '39deg'}], position: 5750, duration: 750 },
                { id: "eid138", tween: [ "style", "${_Girl-RLeg}", "top", '339px', { fromValue: '339px'}], position: 0, duration: 0 },
                { id: "eid170", tween: [ "style", "${_Girl-RLeg}", "top", '339px', { fromValue: '339px'}], position: 1000, duration: 0 },
                { id: "eid9", tween: [ "transform", "${_Fish-02}", "rotateZ", '-23deg', { fromValue: '0deg'}], position: 2000, duration: 750 },
                { id: "eid10", tween: [ "transform", "${_Fish-02}", "rotateZ", '0deg', { fromValue: '-23deg'}], position: 2750, duration: 750 },
                { id: "eid32", tween: [ "transform", "${_Fish-02}", "rotateZ", '-23deg', { fromValue: '0deg'}], position: 3500, duration: 750 },
                { id: "eid33", tween: [ "transform", "${_Fish-02}", "rotateZ", '0deg', { fromValue: '-23deg'}], position: 4250, duration: 750 },
                { id: "eid208", tween: [ "transform", "${_Fish-02}", "rotateZ", '-23deg', { fromValue: '0deg'}], position: 5000, duration: 750 },
                { id: "eid209", tween: [ "transform", "${_Fish-02}", "rotateZ", '0deg', { fromValue: '-23deg'}], position: 5750, duration: 750 },
                { id: "eid96", tween: [ "style", "${_Girl-RArm}", "top", '327px', { fromValue: '329px'}], position: 0, duration: 500 },
                { id: "eid98", tween: [ "style", "${_Girl-RArm}", "top", '329px', { fromValue: '327px'}], position: 500, duration: 500 },
                { id: "eid153", tween: [ "style", "${_Girl-RArm}", "top", '327px', { fromValue: '329px'}], position: 1000, duration: 500 },
                { id: "eid154", tween: [ "style", "${_Girl-RArm}", "top", '329px', { fromValue: '327px'}], position: 1500, duration: 500 },
                { id: "eid178", tween: [ "style", "${_Girl-Torso}", "left", '77px', { fromValue: '77px'}], position: 0, duration: 0 },
                { id: "eid152", tween: [ "style", "${_Girl-LLeg}", "-webkit-transform-origin", [48,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [48,50]}], position: 0, duration: 0 },
                { id: "eid1834", tween: [ "style", "${_Girl-LLeg}", "-moz-transform-origin", [48,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [48,50]}], position: 0, duration: 0 },
                { id: "eid1835", tween: [ "style", "${_Girl-LLeg}", "-ms-transform-origin", [48,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [48,50]}], position: 0, duration: 0 },
                { id: "eid1836", tween: [ "style", "${_Girl-LLeg}", "msTransformOrigin", [48,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [48,50]}], position: 0, duration: 0 },
                { id: "eid1837", tween: [ "style", "${_Girl-LLeg}", "-o-transform-origin", [48,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [48,50]}], position: 0, duration: 0 },
                { id: "eid165", tween: [ "style", "${_Girl-LLeg}", "-webkit-transform-origin", [48,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [48,50]}], position: 1000, duration: 0 },
                { id: "eid1838", tween: [ "style", "${_Girl-LLeg}", "-moz-transform-origin", [48,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [48,50]}], position: 1000, duration: 0 },
                { id: "eid1839", tween: [ "style", "${_Girl-LLeg}", "-ms-transform-origin", [48,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [48,50]}], position: 1000, duration: 0 },
                { id: "eid1840", tween: [ "style", "${_Girl-LLeg}", "msTransformOrigin", [48,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [48,50]}], position: 1000, duration: 0 },
                { id: "eid1841", tween: [ "style", "${_Girl-LLeg}", "-o-transform-origin", [48,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [48,50]}], position: 1000, duration: 0 },
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
                { id: "eid120", tween: [ "style", "${_Girl-LArm}", "top", '308px', { fromValue: '312px'}], position: 0, duration: 500 },
                { id: "eid121", tween: [ "style", "${_Girl-LArm}", "top", '312px', { fromValue: '308px'}], position: 500, duration: 500 },
                { id: "eid159", tween: [ "style", "${_Girl-LArm}", "top", '308px', { fromValue: '312px'}], position: 1000, duration: 500 },
                { id: "eid160", tween: [ "style", "${_Girl-LArm}", "top", '312px', { fromValue: '308px'}], position: 1500, duration: 500 },
                { id: "eid181", tween: [ "style", "${_Girl-LArm}", "left", '49px', { fromValue: '47px'}], position: 0, duration: 500 },
                { id: "eid182", tween: [ "style", "${_Girl-LArm}", "left", '47px', { fromValue: '49px'}], position: 500, duration: 500 },
                { id: "eid183", tween: [ "style", "${_Girl-LArm}", "left", '49px', { fromValue: '47px'}], position: 1000, duration: 500 },
                { id: "eid184", tween: [ "style", "${_Girl-LArm}", "left", '47px', { fromValue: '49px'}], position: 1500, duration: 500 },
                { id: "eid180", tween: [ "transform", "${_Girl-Torso}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid185", tween: [ "transform", "${_Girl-Torso}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 500, duration: 500 },
                { id: "eid186", tween: [ "transform", "${_Girl-Torso}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid187", tween: [ "transform", "${_Girl-Torso}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 1500, duration: 500 },
                { id: "eid38", tween: [ "transform", "${_Board}", "rotateZ", '20deg', { fromValue: '0deg'}], position: 2000, duration: 750 },
                { id: "eid42", tween: [ "transform", "${_Board}", "rotateZ", '0deg', { fromValue: '20deg'}], position: 2750, duration: 750 },
                { id: "eid46", tween: [ "transform", "${_Board}", "rotateZ", '20deg', { fromValue: '0deg'}], position: 3500, duration: 750 },
                { id: "eid47", tween: [ "transform", "${_Board}", "rotateZ", '0deg', { fromValue: '20deg'}], position: 4250, duration: 750 },
                { id: "eid202", tween: [ "transform", "${_Board}", "rotateZ", '20deg', { fromValue: '0deg'}], position: 5000, duration: 750 },
                { id: "eid203", tween: [ "transform", "${_Board}", "rotateZ", '0deg', { fromValue: '20deg'}], position: 5750, duration: 750 },
                { id: "eid54", tween: [ "transform", "${_Guy}", "rotateZ", '-9deg', { fromValue: '0deg'}], position: 2000, duration: 750 },
                { id: "eid55", tween: [ "transform", "${_Guy}", "rotateZ", '0deg', { fromValue: '-9deg'}], position: 2750, duration: 750 },
                { id: "eid56", tween: [ "transform", "${_Guy}", "rotateZ", '-9deg', { fromValue: '0deg'}], position: 3500, duration: 750 },
                { id: "eid57", tween: [ "transform", "${_Guy}", "rotateZ", '0deg', { fromValue: '-9deg'}], position: 4250, duration: 750 },
                { id: "eid196", tween: [ "transform", "${_Guy}", "rotateZ", '-9deg', { fromValue: '0deg'}], position: 5000, duration: 750 },
                { id: "eid197", tween: [ "transform", "${_Guy}", "rotateZ", '0deg', { fromValue: '-9deg'}], position: 5750, duration: 750 },
                { id: "eid12", tween: [ "transform", "${_Fish-012}", "rotateZ", '0deg', { fromValue: '-11deg'}], position: 2000, duration: 750 },
                { id: "eid21", tween: [ "transform", "${_Fish-012}", "rotateZ", '-11deg', { fromValue: '0deg'}], position: 2750, duration: 750 },
                { id: "eid34", tween: [ "transform", "${_Fish-012}", "rotateZ", '0deg', { fromValue: '-11deg'}], position: 3500, duration: 750 },
                { id: "eid35", tween: [ "transform", "${_Fish-012}", "rotateZ", '-11deg', { fromValue: '0deg'}], position: 4250, duration: 750 },
                { id: "eid211", tween: [ "transform", "${_Fish-012}", "rotateZ", '0deg', { fromValue: '-11deg'}], position: 5000, duration: 750 },
                { id: "eid210", tween: [ "transform", "${_Fish-012}", "rotateZ", '-11deg', { fromValue: '0deg'}], position: 5750, duration: 750 },
                { id: "eid179", tween: [ "style", "${_Girl-Torso}", "top", '295px', { fromValue: '295px'}], position: 0, duration: 0 },
                { id: "eid133", tween: [ "style", "${_Girl-LLeg}", "left", '79px', { fromValue: '78px'}], position: 0, duration: 500 },
                { id: "eid134", tween: [ "style", "${_Girl-LLeg}", "left", '78px', { fromValue: '79px'}], position: 500, duration: 500 },
                { id: "eid166", tween: [ "style", "${_Girl-LLeg}", "left", '79px', { fromValue: '78px'}], position: 1000, duration: 500 },
                { id: "eid167", tween: [ "style", "${_Girl-LLeg}", "left", '78px', { fromValue: '79px'}], position: 1500, duration: 500 },
                { id: "eid119", tween: [ "transform", "${_Girl-LArm}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid122", tween: [ "transform", "${_Girl-LArm}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 500, duration: 500 },
                { id: "eid162", tween: [ "transform", "${_Girl-LArm}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid163", tween: [ "transform", "${_Girl-LArm}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 1500, duration: 500 }            ]
        }
    }
},
"Confetti": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], ['18', '14']],
                    type: 'rect',
                    display: 'none',
                    id: 'Confetti',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['52px', '25px', '5px', '9px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    transform: [[0, 0], [], ['-22', '14'], ['0.65', '0.65']],
                    type: 'rect',
                    display: 'none',
                    id: 'ConfettiCopy2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['51px', '42px', '5px', '9px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    transform: [[0, 0], [], ['46', '14'], ['0.65', '0.65']],
                    type: 'rect',
                    display: 'none',
                    id: 'ConfettiCopy3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['53px', '16px', '5px', '9px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    transform: [[0, 0], [], ['60', '14'], ['0.57999', '0.57999']],
                    type: 'rect',
                    display: 'none',
                    id: 'ConfettiCopy4',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['32px', '6px', '5px', '9px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    transform: [[0, 0], [], ['-5', '-32'], ['0.86', '0.86']],
                    type: 'rect',
                    display: 'none',
                    id: 'ConfettiCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['45px', '7px', '5px', '9px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    transform: [[0, 0], [], ['-5', '-32'], ['0.7', '0.7']],
                    type: 'rect',
                    display: 'none',
                    id: 'ConfettiCopy5',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '26px', '5px', '9px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    transform: [[0, 0], [], ['43', '-32'], ['0.87', '0.87']],
                    type: 'rect',
                    display: 'none',
                    id: 'ConfettiCopy6',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['9px', '38px', '5px', '9px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    transform: [[0, 0], [], ['2', '-32'], ['0.71', '0.71']],
                    type: 'rect',
                    display: 'none',
                    id: 'ConfettiCopy7',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['8px', '9px', '5px', '9px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    transform: [[0, 0], [], ['16', '-54'], ['0.71', '0.71']],
                    type: 'rect',
                    display: 'none',
                    id: 'ConfettiCopy8',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['21px', '1px', '5px', '9px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ConfettiCopy4}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.57999'],
                ["transform", "skewX", '60deg'],
                ["transform", "scaleX", '0.57999'],
                ["motion", "location", '34.120855564024px 10.638124047256px'],
                ["style", "display", 'none'],
                ["transform", "skewY", '14deg']
            ],
            "${_ConfettiCopy}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.86'],
                ["transform", "skewX", '-5deg'],
                ["transform", "scaleX", '0.86'],
                ["motion", "location", '47.120855564024px 11.638124047256px'],
                ["style", "display", 'none'],
                ["transform", "skewY", '-32deg']
            ],
            "${_ConfettiCopy8}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.71'],
                ["transform", "skewX", '16deg'],
                ["transform", "scaleX", '0.71'],
                ["motion", "location", '23.120855564024px 5.6381240472561px'],
                ["style", "display", 'none'],
                ["transform", "skewY", '-54deg']
            ],
            "${_ConfettiCopy7}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.71'],
                ["transform", "skewX", '2deg'],
                ["transform", "scaleX", '0.71'],
                ["motion", "location", '10.120855564024px 13.638124047256px'],
                ["style", "display", 'none'],
                ["transform", "skewY", '-32deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '60px']
            ],
            "${_ConfettiCopy2}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.65'],
                ["transform", "skewX", '-22deg'],
                ["transform", "scaleX", '0.65'],
                ["motion", "location", '53.120855564024px 46.638124047256px'],
                ["style", "display", 'none'],
                ["transform", "skewY", '14deg']
            ],
            "${_ConfettiCopy5}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.7'],
                ["transform", "skewX", '-5deg'],
                ["transform", "scaleX", '0.7'],
                ["motion", "location", '2.1208555640244px 30.638124047256px'],
                ["style", "display", 'none'],
                ["transform", "skewY", '-32deg']
            ],
            "${_Confetti}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "skewY", '14deg'],
                ["transform", "skewX", '18deg'],
                ["style", "display", 'none'],
                ["motion", "location", '54.120855564024px 29.638124047256px']
            ],
            "${_ConfettiCopy3}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.65'],
                ["transform", "skewX", '46deg'],
                ["transform", "scaleX", '0.65'],
                ["motion", "location", '55.120855564024px 20.638124047256px'],
                ["style", "display", 'none'],
                ["transform", "skewY", '14deg']
            ],
            "${_ConfettiCopy6}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.87'],
                ["transform", "skewX", '43deg'],
                ["transform", "scaleX", '0.87'],
                ["motion", "location", '11.120855564024px 42.638124047256px'],
                ["style", "display", 'none'],
                ["transform", "skewY", '-32deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 31750,
            autoPlay: true,
            timeline: [
                { id: "eid125", tween: [ "style", "${_ConfettiCopy4}", "display", 'none', { fromValue: 'none'}], position: 28000, duration: 0 },
                { id: "eid134", tween: [ "style", "${_ConfettiCopy4}", "display", 'block', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid127", tween: [ "style", "${_ConfettiCopy2}", "display", 'none', { fromValue: 'none'}], position: 28000, duration: 0 },
                { id: "eid136", tween: [ "style", "${_ConfettiCopy2}", "display", 'block', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid122", tween: [ "style", "${_ConfettiCopy6}", "display", 'none', { fromValue: 'none'}], position: 28000, duration: 0 },
                { id: "eid131", tween: [ "style", "${_ConfettiCopy6}", "display", 'block', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid157", tween: [ "motion", "${_ConfettiCopy2}", [[53.12, 46.64, 0, 0],[155.5, 67.81, 92.98, 395.44, 41.01, 174.41],[158.26, 493.81, 0, 0]]], position: 30000, duration: 1560 },
                { id: "eid160", tween: [ "motion", "${_ConfettiCopy}", [[47.12, 11.64, 0, 0],[91.38, 18, 36.78, 341.29, 9.64, 89.45],[94.13, 447.94, 0, 0]]], position: 30000, duration: 1560 },
                { id: "eid121", tween: [ "style", "${_ConfettiCopy7}", "display", 'none', { fromValue: 'none'}], position: 28000, duration: 0 },
                { id: "eid130", tween: [ "style", "${_ConfettiCopy7}", "display", 'block', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid156", tween: [ "motion", "${_Confetti}", [[54.12, 29.64, 0, 0],[130.53, 118.79, 77.58, 345.72, 54.08, 241],[144.78, 433.65, 0, 0]]], position: 30000, duration: 1750 },
                { id: "eid164", tween: [ "motion", "${_ConfettiCopy8}", [[23.12, 5.64, 0, 0],[-90.62, 38.66, -98.06, 355.98, -79.28, 250.64],[-98.39, 446.77, 0, 0]]], position: 30000, duration: 1750 },
                { id: "eid128", tween: [ "style", "${_Confetti}", "display", 'none', { fromValue: 'none'}], position: 28000, duration: 0 },
                { id: "eid137", tween: [ "style", "${_Confetti}", "display", 'block', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid124", tween: [ "style", "${_ConfettiCopy}", "display", 'none', { fromValue: 'none'}], position: 28000, duration: 0 },
                { id: "eid133", tween: [ "style", "${_ConfettiCopy}", "display", 'block', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid126", tween: [ "style", "${_ConfettiCopy3}", "display", 'none', { fromValue: 'none'}], position: 28000, duration: 0 },
                { id: "eid135", tween: [ "style", "${_ConfettiCopy3}", "display", 'block', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid158", tween: [ "motion", "${_ConfettiCopy3}", [[55.12, 20.64, 0, 0],[182.98, 77.2, 121.89, 374.62, 69.97, 215.05],[193.13, 444.81, 0, 0]]], position: 30000, duration: 1250 },
                { id: "eid120", tween: [ "style", "${_ConfettiCopy8}", "display", 'none', { fromValue: 'none'}], position: 28000, duration: 0 },
                { id: "eid129", tween: [ "style", "${_ConfettiCopy8}", "display", 'block', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid161", tween: [ "motion", "${_ConfettiCopy5}", [[2.12, 30.64, 0, 0],[-59.27, 64.41, -59.44, 351.21, -23.69, 140],[-65.87, 432.38, 0, 0]]], position: 30000, duration: 1250 },
                { id: "eid159", tween: [ "motion", "${_ConfettiCopy4}", [[34.12, 10.64, 0, 0],[220.42, 51.64, 157.18, 366.3, 115.19, 268.45],[220.12, 444.11, 0, 0]]], position: 30000, duration: 1560 },
                { id: "eid123", tween: [ "style", "${_ConfettiCopy5}", "display", 'none', { fromValue: 'none'}], position: 28000, duration: 0 },
                { id: "eid132", tween: [ "style", "${_ConfettiCopy5}", "display", 'block', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid162", tween: [ "motion", "${_ConfettiCopy6}", [[11.12, 42.64, 0, 0],[-146.57, 103.65, -164.77, 376.62, -106.5, 251.44],[-174.82, 467.64, 0, 0]]], position: 30000, duration: 1560 },
                { id: "eid163", tween: [ "motion", "${_ConfettiCopy7}", [[10.12, 13.64, 0, 0],[-168.4, 79.98, -187.55, 449.58, -92.91, 222.73],[-200.88, 519.44, 0, 0]]], position: 30000, duration: 1250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-8740435547");
