$(document).ready(function() {

    var array_xy = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ];

    const array_xy2 = [
        [494, 164, 22, 0],
        [660, 234, 15.5, -15.5],
        [728, 400, 0, -22],
        [660, 566, -15.5, -15.5],
        [494, 635, -22, 0],
        [328, 566, -15.5, 15.5],
        [258, 400, 0, 22],
        [327, 233, 15.5, 15.5]
    ];

    const array_xy3 = [
        [494, 164],
        [660, 234],
        [728, 400],
        [660, 566],
        [494, 635],
        [328, 566],
        [258, 400],
        [327, 233]
    ];

    var radius = 15;
    var color = '#fff';

    var actCl = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];

    function RemAct(){

        var key = 0;
        for(i = 1; i <= 8; i++){
            var attrNum = $('#butt-el' + i + ' > .active');
            var num = attrNum.index();
            actCl[key][0] = attrNum;
            actCl[key][1] = num;
            key++;
        }

        console.log(actCl);
    }

    RemAct();

    // draw diagram
    function DrawDiagram(array_xy){

        var myCanvas = $('#myChart');
        var amount = 0.05;

        // myCanvas.drawLine({
        //     strokeStyle: '#035336',
        //     strokeWidth: 2,
        //     rounded: true,
        //     closed: true,
        //     name: 'paths',
        //     x1: array_xy[0][0], y1: array_xy[0][1],
        //     x2: array_xy[1][0], y2: array_xy[1][1],
        //     x3: array_xy[2][0], y3: array_xy[2][1],
        //     x4: array_xy[3][0], y4: array_xy[3][1],
        //     x5: array_xy[4][0], y5: array_xy[4][1],
        //     x6: array_xy[5][0], y6: array_xy[5][1],
        //     x7: array_xy[6][0], y7: array_xy[6][1],
        //     x8: array_xy[7][0], y8: array_xy[7][1]
        // });

        var val = 0;
        var val2 = 0;
        var increm = 0.05;
        var color

        var oneInterv =  setInterval(function(){
            amount += increm;
            var val  = array_xy[0][0] + (array_xy[1][0] - array_xy[0][0]) * amount;
            var val2 = array_xy[0][1] + (array_xy[1][1] - array_xy[0][1]) * amount;
            console.log('val= '+ val);
            myCanvas.drawLine({
                strokeStyle: '#035336',
                strokeWidth: 2,
                rounded: true,
                closed: true,
                x1: array_xy[0][0], y1: array_xy[0][1],
                x2: val, y2: val2
            });

            if(val == array_xy[1][0]) {
                amount = 0.05;
                val = 0;
                val2 = 0;
                clearInterval(oneInterv);
                twoDr();
            }

        }, 7);

        function twoDr(){
            var twoInterv =  setInterval(function(){
                amount += increm;
                var val  = array_xy[1][0] + (array_xy[2][0] - array_xy[1][0]) * amount;
                var val2 = array_xy[1][1] + (array_xy[2][1] - array_xy[1][1]) * amount;
                console.log('val= '+ val);
                myCanvas.drawLine({
                    strokeStyle: '#035336',
                    strokeWidth: 2,
                    rounded: true,
                    closed: true,
                    x1: array_xy[1][0], y1: array_xy[1][1],
                    x2: val, y2: val2
                });

                if(val == array_xy[2][0]) {
                    amount = 0.05;
                    val = 0;
                    val2 = 0;
                    clearInterval(twoInterv);
                    threeDr();
                }

            }, 7);
        }

        function threeDr(){
            var threeInterv =  setInterval(function(){
                amount += increm;
                var val  = array_xy[2][0] + (array_xy[3][0] - array_xy[2][0]) * amount;
                var val2 = array_xy[2][1] + (array_xy[3][1] - array_xy[2][1]) * amount;
                console.log('val= '+ val);
                myCanvas.drawLine({
                    strokeStyle: '#035336',
                    strokeWidth: 2,
                    rounded: true,
                    closed: true,
                    x1: array_xy[2][0], y1: array_xy[2][1],
                    x2: val, y2: val2
                });

                if(val == array_xy[3][0]) {
                    amount = 0.05;
                    val = 0;
                    val2 = 0;
                    clearInterval(threeInterv);
                    fourDr();
                }

            }, 7);
        }

        function fourDr(){
            var fourInterv =  setInterval(function(){
                amount += increm;
                var val  = array_xy[3][0] + (array_xy[4][0] - array_xy[3][0]) * amount;
                var val2 = array_xy[3][1] + (array_xy[4][1] - array_xy[3][1]) * amount;
                console.log('val= '+ val);
                myCanvas.drawLine({
                    strokeStyle: '#035336',
                    strokeWidth: 2,
                    rounded: true,
                    closed: true,
                    x1: array_xy[3][0], y1: array_xy[3][1],
                    x2: val, y2: val2
                });

                if(val == array_xy[4][0]) {
                    amount = 0.05;
                    val = 0;
                    val2 = 0;
                    clearInterval(fourInterv);
                    fiveDr()
                }

            }, 7);
        }

        function fiveDr(){
            var fiveInterv =  setInterval(function(){
                amount += increm;
                var val  = array_xy[4][0] + (array_xy[5][0] - array_xy[4][0]) * amount;
                var val2 = array_xy[4][1] + (array_xy[5][1] - array_xy[4][1]) * amount;
                console.log('val= '+ val);
                myCanvas.drawLine({
                    strokeStyle: '#035336',
                    strokeWidth: 2,
                    rounded: true,
                    closed: true,
                    x1: array_xy[4][0], y1: array_xy[4][1],
                    x2: val, y2: val2
                });

                if(val == array_xy[5][0]) {
                    amount = 0.05;
                    val = 0;
                    val2 = 0;
                    clearInterval(fiveInterv);
                    sixDr();
                }

            }, 7);
        }

        function sixDr(){
            var sixInterv =  setInterval(function(){
                amount += increm;
                var val  = array_xy[5][0] + (array_xy[6][0] - array_xy[5][0]) * amount;
                var val2 = array_xy[5][1] + (array_xy[6][1] - array_xy[5][1]) * amount;
                console.log('val= '+ val);
                myCanvas.drawLine({
                    strokeStyle: '#035336',
                    strokeWidth: 2,
                    rounded: true,
                    closed: true,
                    x1: array_xy[5][0], y1: array_xy[5][1],
                    x2: val, y2: val2
                });

                if(val == array_xy[6][0]) {
                    amount = 0.05;
                    val = 0;
                    val2 = 0;
                    clearInterval(sixInterv);
                    sevenDr();
                }

            }, 7);
        }

        function sevenDr(){
            var sevenInterv =  setInterval(function(){
                amount += increm;
                var val  = array_xy[6][0] + (array_xy[7][0] - array_xy[6][0]) * amount;
                var val2 = array_xy[6][1] + (array_xy[7][1] - array_xy[6][1]) * amount;
                console.log('val= '+ val);
                myCanvas.drawLine({
                    strokeStyle: '#035336',
                    strokeWidth: 2,
                    rounded: true,
                    closed: true,
                    x1: array_xy[6][0], y1: array_xy[6][1],
                    x2: val, y2: val2
                });

                if(val == array_xy[7][0]) {
                    amount = 0.05;
                    val = 0;
                    val2 = 0;
                    clearInterval(sevenInterv);
                    eightDr();
                }

            }, 7);
        }

        function eightDr(){
            var eightInterv =  setInterval(function(){
                amount += increm;
                var val  = array_xy[7][0] + (array_xy[0][0] - array_xy[7][0]) * amount;
                var val2 = array_xy[7][1] + (array_xy[0][1] - array_xy[7][1]) * amount;
                console.log('val= '+ val);
                myCanvas.drawLine({
                    strokeStyle: '#035336',
                    strokeWidth: 2,
                    rounded: true,
                    closed: true,
                    x1: array_xy[7][0], y1: array_xy[7][1],
                    x2: val, y2: val2
                });

                if(val == array_xy[0][0]) {
                    amount = 0.05;
                    val = 0;
                    val2 = 0;
                    clearInterval(eightInterv);
                }

            }, 7);
        }

        function drawArcs(){

            // 1th arc y + 21
            myCanvas.drawArc({
                fillStyle: color,
                strokeStyle: '#015c3b',
                strokeWidth: 2,
                x: array_xy[0][0],
                y: array_xy[0][1],
                radius: radius
            });

            // 2th arc y + 15, x - 15
            myCanvas.drawArc({
                fillStyle: color,
                strokeStyle: '#015c3b',
                strokeWidth: 2,
                x: array_xy[1][0],
                y: array_xy[1][1],
                radius: radius
            });

            // 3th arc x - 21
            myCanvas.drawArc({
                fillStyle: color,
                strokeStyle: '#015c3b',
                strokeWidth: 2,
                x: array_xy[2][0],
                y: array_xy[2][1],
                radius: radius
            });

            // 4th arc y - 15, x - 15
            myCanvas.drawArc({
                fillStyle: color,
                strokeStyle: '#015c3b',
                strokeWidth: 2,
                x: array_xy[3][0],
                y: array_xy[3][1],
                radius: radius
            });

            // 5th arc y + 21
            myCanvas.drawArc({
                fillStyle: color,
                strokeStyle: '#015c3b',
                strokeWidth: 2,
                x: array_xy[4][0],
                y: array_xy[4][1],
                radius: radius
            });

            // 6th arc y - 15, x + 15
            myCanvas.drawArc({
                fillStyle: color,
                strokeStyle: '#015c3b',
                strokeWidth: 2,
                x: array_xy[5][0],
                y: array_xy[5][1],
                radius: radius
            });

            // 7th arc x + 21
            myCanvas.drawArc({
                fillStyle: color,
                strokeStyle: '#015c3b',
                strokeWidth: 2,
                x: array_xy[6][0],
                y: array_xy[6][1],
                radius: radius
            });

            // 8th arc y + 15, x + 15
            myCanvas.drawArc({
                fillStyle: color,
                strokeStyle: '#015c3b',
                strokeWidth: 2,
                x: array_xy[7][0],
                y: array_xy[7][1],
                radius: radius
            });

        }

        // drawScreen();

    }

    // click on number
    $('.num-but > div').click(function () {
        $('#button').removeAttr('disabled');
        var attr_par = $(this).parent().attr("id");
        var n = $(this).index();
        // console.log('n = '+n);
        changeClass(attr_par, n);
    });

    // change class
    function changeClass(attr_par, n) {
        $('#' + attr_par + '> div').removeClass('active');
        $('#' + attr_par + '> div:nth-child('+(n+1)+')').addClass('active');
    }

    // search .active
    function searchActive(){

        var key = 0;
        var input = 1;

        for(i = 1; i <= 8; i++){
            var attrNum = $('#butt-el' + i + ' > .active');
            var num = attrNum.index();
            if(num < 0){
                $('.title-d'+i).addClass('t-error');
                input = 0;
                break;
            } else $('.title-d'+i).removeClass('t-error');
            change_xy(attrNum, num, key);
            key++;
            // console.log(key);
        }
        if(input == 1) DrawDiagram(array_xy);

    }

    // change_xy
    function change_xy(attrNum, num, key){
        array_xy[key][0] = array_xy3[key][0];
        array_xy[key][1] = array_xy3[key][1];
        console.log(array_xy[key][0]);
        console.log(array_xy[key][1]);

        if(num == 0){

            array_xy[key][0] = array_xy2[key][0];
            array_xy[key][1] = array_xy2[key][1];

        } else{

            array_xy[key][0] += ((num) * array_xy2[key][3]);
            array_xy[key][1] += ((num) * array_xy2[key][2]);

        }
    }

    // searchActive();

    $('#button').click(function(){

        $('#myChart').clearCanvas();
        searchActive();

    });

    $('#reset').click(function(){

        $('#myChart').clearCanvas();

        var key = 0;
        //
        for(i = 1; i <= 8; i++){
            $('#butt-el' + i + ' > div').removeClass('active');
        }
        // DrawDiagram(array_xy);

    });
    // $('#save').trigger('click');
    //
    // $('#save').click(function () {
    //         html2canvas(document.querySelector(".main-block")).then(canvas => {
    //             document.getElementById('screen').appendChild(canvas);
    //             $('#save').attr('href', canvas.toDataURL("image/png"));
    //             $('#save').attr('download', "Test file.png");
    //         });
    // });

    function drawScreen(){
        html2canvas(document.querySelector(".main-block")).then(canvas => {
            $('#screen').prepend(canvas);
            $('#screen > canvas').attr('id', 'sv_img');
        });
    }

    function getImage(canvas){
        var imageData = canvas.toDataURL();
        var image = new Image();
        image.src = imageData;
        return image;
    }

    function saveCanvasAsImageFile(){
        drawScreen();
        var image = getImage(document.getElementById("sv_img"));
        saveImage(image);
    }

    function saveImage(image) {
        var link = document.createElement("a");

        link.setAttribute("href", image.src);
        link.setAttribute("download", "Diagram");
        link.click();
    }

    $('#save').click(saveCanvasAsImageFile);
});