document.body.style.backgroundColor = '#00001c'

var originalPoints = [
    [590,590,588,576,573,567,567,579,582,573,565,561,556,550,549,555,553,562,530,538,535,539,532,507,497,480,463,451,442,437,427,419,413,409,409,397,363,341,333,314,309,294,282,266,241,255,251,235,221,212,214,198,172,137,113,93,73,45,27,28,32,43,60,80,98,108,107,111,112,108,115,116,114,105,104,118,119,110,103,96,93,99,108,118,133],
    [415,405,401,404,408,401,394,385,364,357,356,360,351,351,348,338,334,314,285,261,259,243,246,244,248,246,237,221,200,172,156,153,158,156,148,155,152,144,158,153,155,172,177,194,199,178,174,180,190,210,221,234,253,266,276,291,311,340,368,384,390,389,374,361,353,346,350,347,349,355,353,356,361,371,373,361,365,373,373,376,385,391,386,394,394],
    [132,150,225,259,275,285,299,304,303,317,326,329,323,323,334,337,337,331,338,351,362,372,379,383,387,400,407,417,412,413,419,434,437,450,467,465,488,495,513,520,534,545,557,563,561,561,572,583,603,623,626,636,648,654,644,635,630,626,620,623,605,603,603,600,590,568,563,552,535,535,539,531,515,503,497,471,452,445,417,412,408,402,393,388,373,362,357,345,335,326,310,297,304,298,289,280,276,273,275,277,272,270,271,278,279,281,290,296,308,318,314,318,334,334,329,315,302,284,271,264,264,269,264,262,256,250,242,241,236,228,218,202,188,177,168,161,150,139,132],
    [394,417,440,460,458,462,461,469,480,482,491,512,525,531,524,534,534,546,556,538,520,494,493,488,494,490,476,479,489,496,494,482,471,462,468,462,464,449,449,451,455,467,476,476,464,455,456,466,461,464,462,467,467,460,449,449,453,462,461,454,438,421,407,401,405,410,405,409,404,379,372,376,374,381,385,383,386,384,402,396,396,402,407,400,404,406,404,384,367,361,359,359,351,352,358,365,376,376,362,348,345,338,336,340,346,348,339,326,316,311,307,306,305,300,296,293,297,304,318,322,329,336,327,324,331,333,339,344,349,348,358,366,368,366,370,379,385,388,394],
    [350,367,388,410,417,439,429,410],
    [349,361,369,362,375,360,351,362],
    [514,481,469,453,456,423,408,453],
    [329,321,304,287,265,251,271,287],
    [165,145,176,176,206],
    [343,314,301,275,259],
    [339,307,293,307,291,254,291,313,314,313,344,340,350,357,370,378,389],
    [217,239,288,239,236,262,236,183,165,183,193,217,262,262,253,248,232],
    [598,585,563,558,559,540,530,512,474,465,446,427,411,402,398,382,363,351,332,311,290,267,256,244,225,211,199,183,166,160,145,160,177,197,213,227,229,245,257,266,268,272,272,270,276,277,274,276,295,302,312,321,334,341,351,359,373,384,397,412,413,426,460,493,495,527,542,575,593],
    [407,426,449,457,474,458,449,447,449,462,462,475,471,471,487,486,490,493,486,475,446,446,441,439,428,426,417,412,404,402,406,401,394,391,396,398,376,362,354,342,336,353,366,378,380,384,390,393,395,398,401,403,403,402,399,408,410,407,410,405,413,419,419,419,421,421,417,415,415],
    [290,283,278,276,244,227],
    [446,427,405,393,398,398],
    [474,474,474,470],
    [449,431,428,419],
    [367,375,383,392,401,402],
    [409,423,432,439,443,473]
]

var starsX = [148,160,268,311,351,598,289,557,292,145,178,298,339,307,293,307,291,254,291,313,314,313,344,340,350,357,370,378,389,165,145,176,176,206,514,481,469,453,456,423,408,453,350,367,388,410,417,439,429,410]
var starsY = [389,402,336,475,399,407,424,413,314,406,370,237,217,239,288,239,236,262,236,183,165,183,193,217,262,262,253,248,232,343,314,301,275,259,329,321,304,287,265,251,271,287,349,361,369,362,375,360,351,362]
var starTwinkle = new Array(50)
var smoothTwinkle = new Array(50)
for (var i = 0; i < starTwinkle.length; i++) {starTwinkle[i] = Math.random() + 0.5}
for (var i = 0; i < smoothTwinkle.length; i++) {smoothTwinkle[i] = (Math.random() < 0.5 ? 0.075 : -0.075)}

var fieldX = [219,279,279,319,379,322,410,444,463,537,405,544,500,500,484,465,463,478,353,389,375,362,386,181,408,358,434,87,245,200,328,277,563,539,384,300,430,493,508,468,383,150,373,419,328,203,107,78,71,319,568,605,235,534,331,140,149,194,172,357,184,111,287,427,452,565,635,626,531,339,458,483,501,498,280,250,168,134,154,110,53,50,112,172,226,167,103,109,86,63,44,87,82,81,108,215,265,301,392,422,322,319,381,496,481,553,586,581,480,451,512,496,569,403,524,412,472,165,287,339,367,501,489,524,512,575,508,454,398,398,384,302,311,319,244,178,220,96,113,61,169,97,164,233,227,231,317,426,514,582,616,641,582,629,578,496,540,635,658,591,566,574,605,597,581,560,545,432,385,353,325,283,246,224,215,330,414,432,366,246,186,136,130,252,348,422,482,372,286,167,91,79,116,205,308,422,491,537,435,306,164,125,322,412,386,344,330,334,328,295,230,413,537,521,429,356,348,346,306,233,126,250,360,443,434,440,506,559,582,577,562,514,477,385,317,263,195,153,110,72,56,67,150,350,346,187,132,257,270,410,489,366,559,527,476,367,279,258,382,492,534,439,324,229,166,177,258,305,344,384,421,445,502,453,620,148,160,268,311,351,598,289,557,292,145,178,298,339,307,293,307,291,254,291,313,314,313,344,340,350,357,370,378,389,165,145,176,176,206,514,481,469,453,456,423,408,453,350,367,388,410,417,439,429,410]
var fieldY = [411,380,414,481,456,419,432,438,394,435,357,269,394,392,381,390,354,432,327,337,342,298,75,244,355,416,61,389,498,532,570,606,498,566,546,607,481,460,278,75,91,155,386,240,131,98,268,369,464,469,314,184,243,495,178,449,214,437,507,467,584,476,600,520,606,523,347,212,91,58,116,231,120,225,86,63,108,187,255,234,262,239,153,92,145,144,235,175,301,278,309,379,424,447,531,586,623,636,616,574,655,571,616,603,636,541,504,396,426,541,457,486,395,323,323,421,261,256,125,92,83,192,224,189,304,274,149,105,189,106,83,165,38,115,60,136,204,258,325,428,463,407,470,530,598,606,635,625,584,545,500,388,364,463,504,467,378,333,310,260,339,383,331,300,253,206,172,82,74,90,124,211,268,308,328,339,293,246,235,288,309,345,404,455,476,486,483,531,539,491,435,361,297,438,364,321,423,342,174,160,262,319,330,253,216,413,375,291,213,192,270,278,283,304,365,383,241,217,184,148,213,377,389,224,160,280,414,380,275,173,143,110,107,92,74,72,110,148,188,263,373,400,432,424,497,605,585,637,656,631,636,661,591,519,490,431,442,507,543,454,294,180,173,180,212,193,83,53,30,34,62,101,196,61,252,389,402,336,475,399,407,424,413,314,406,370,237,217,239,288,239,236,262,236,183,165,183,193,217,262,262,253,248,232,343,314,301,275,259,329,321,304,287,265,251,271,287,349,361,369,362,375,360,351,362]
var fieldTwinkle = new Array(325)
for (var i = 0; i < fieldTwinkle.length; i++) {fieldTwinkle[i] = 0.5}

var pi = Math.PI
var scaler, ctf, ch, cw, fiddy, twofive
carIndex = Math.floor(Math.random() * 69)
var points = new Array()
for (var i = 0; i < originalPoints.length; i++) {
    points.push(originalPoints[i].slice())
}

function background() {
    height = $('#canvasWrapper').innerWidth() *.9
    width = $('#canvasWrapper').innerHeight() *.9
    d = (width <= height ? width : height)

    var cf = document.getElementById('mainCanvas')
    cw = cf.width = d
    ch = cf.height = d
    ctf = cf.getContext('2d')
    outlineColor = 0x70
    colorStep = 0x1
    ctf.lineJoin='round'

    scaler = d/700
    fiddy = 350 * scaler
    twofive = 325 * scaler

    for (var i = 0; i < originalPoints.length; i++) {
        for (var j = 0; j < originalPoints[i].length; j++) {
            points[i][j] = Math.round(originalPoints[i][j] * scaler)
        }
    }
    breathe()
}
window.onresize = function() {background()}


// Breathing **********************************************************
angle = Math.random()*2*pi
function breathe() {
    ctf.clearRect(0, 0, cw, ch);
    ctf.strokeStyle = 'dimgrey'
    ctf.lineWidth= 2 * scaler;
    ctf.beginPath();
    for (var i = 1*pi/16; i < 7*pi; i+=3*pi/4) {
        ctf.arc(fiddy,fiddy,330 * scaler, i, i + 3*pi/8)
        ctf.arc(fiddy,fiddy,345 * scaler, i + 3*pi/8, i + 3*pi/8*2)
    }
    ctf.moveTo(670 * scaler,fiddy)
    var ci = twofive
    for (var i = 0; i < 2*pi; i+=pi/8) {
        ctf.arc(fiddy,fiddy,ci, i, i)
        ci = (ci == twofive ? 240 * scaler : twofive)
        ctf.arc(fiddy,fiddy,ci, i + pi + pi/8, i + pi + pi/8)
    }
    ctf.stroke()

    ctf.lineWidth= 6 * scaler;
    ctf.strokeStyle = '#444'
    ctf.beginPath()
    ctf.arc(fiddy,fiddy,347 * scaler, 0, 2*pi)
    ctf.stroke()

    ctf.strokeStyle = 'rgb(0,' + Math.floor(outlineColor/2) +',' + outlineColor + ')'
    ctf.lineWidth= 2 * scaler;
    outlineColor = outlineColor + colorStep
    if (outlineColor > 0x90 || outlineColor < 0x50) {colorStep = colorStep * -0x1}
    for (var i = 0; i < 3; i+=2) {
        ctf.beginPath();
        for (var j = 0; j < points[i].length; j++) {
            ctf.lineTo(points[i][j], points[i + 1][j])
        }
        ctf.fillStyle = document.body.style.backgroundColor
        ctf.fill()
        ctf.stroke()
    }

    ctf.lineWidth= 2 * scaler;
    ctf.strokeStyle = '#ccc'
    ctf.fillStyle = '#fff'
    for (var i = 0; i < fieldX.length; i++) {
        x = fieldX[i] - 350
        y = fieldY[i] - 350
        xPrime = (Math.cos(angle)*x + Math.sin(angle)*y + 350) * scaler
        yPrime = (-Math.sin(angle)*x + Math.cos(angle)*y + 350) * scaler
        ctf.beginPath()
        if (Math.random() < 0.1) {
            fieldTwinkle[i] = (fieldTwinkle[i]*3 + Math.random())/4
        }
        ctf.arc(xPrime, yPrime,fieldTwinkle[i] * scaler,0,2*pi)
        ctf.fill()
        ctf.stroke();
    }
    angle+= 0.001

    ctf.strokeStyle = 'grey'
    for (var i = 4; i < points.length; i+=2) {
        ctf.beginPath()
        for (var j = 0; j < points[i].length; j++) {
            ctf.lineTo(points[i][j], points[i + 1][j])
        }
        ctf.stroke()
    }

    car = Math.floor(carIndex)
    ctf.beginPath()
    var cc = 0xdd
    for (var j = car; j < car + 16; j++) {
        ctf.beginPath()
        ctf.strokeStyle = 'rgb(' + cc +',' + cc +',' + cc + ')'
        cc = cc - 7
        ctf.lineTo(points[12][j], points[13][j])
        ctf.lineTo(points[12][j + 1], points[13][j + 1])
        ctf.stroke()
    }
    cc = 0xdd
    for (var j = car; j > car - 16; j--) {
        ctf.beginPath()
        ctf.strokeStyle = 'rgb(' + cc +',' + cc +',' + cc + ')'
        cc = cc - 7
        ctf.lineTo(points[12][j], points[13][j])
        ctf.lineTo(points[12][j - 1], points[13][j - 1])
        ctf.stroke()
    }
    carIndex = carIndex + 0.1
    if (carIndex > 76) {carIndex = -8}

    ctf.strokeStyle = '#fff'
    ctf.fillStyle = '#ddd'
    for (var i = 0; i < starsX.length; i++) {
        ctf.beginPath()
        if (starTwinkle[i] > 1.75 || starTwinkle[i] < 0.5) {
            smoothTwinkle[i] = smoothTwinkle[i] * -1
        }
        starTwinkle[i] += smoothTwinkle[i]
        ctf.arc(starsX[i] * scaler,starsY[i] * scaler,starTwinkle[i] * scaler,0,2*pi)
        ctf.fill()
        ctf.stroke()
    }
}
background()
setInterval(breathe, 75)
