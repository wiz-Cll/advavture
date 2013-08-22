window.onload = function(){

    var canvas = document.querySelector('#movie');

    var W = 700;
    var rw = 600;
    canvas.width = W;
    canvas.height = W;

    var ctx = canvas.getContext('2d');

    var center = W/2;
    var A = {
        x: center-rw/2,
        y: center-rw/2
    },
    B={
        x: center+rw/2,
        y: center-rw/2
    },
    C={
        x: center+rw/2,
        y: center+rw/2
    },
    D={
        x: center-rw/2,
        y: center+rw/2
    };


    ctx.fillStyle = "rgba(0, 187, 246, 1)";
    // ctx.fillRect (center, center, 55, 50);

    ctx.beginPath();
    var radius = 1;
    // ctx.arc( A.x, A.y, 20, 0, Math.PI*2, true);

    var stID = setInterval(function(){
        if(  radius < 40 ){
            ctx.moveTo( A.x, A.y);
            ctx.arc( A.x, A.y, radius, 0, Math.PI*2, true);
            // ctx.fill();

            ctx.moveTo( B.x, B.y);
            ctx.arc( B.x, B.y, radius, 0, Math.PI*2, true);
            // ctx.fill();

            ctx.moveTo( C.x, C.y);
            ctx.arc( C.x, C.y, radius, 0, Math.PI*2, true);
            // ctx.fill();

            ctx.moveTo( D.x, D.y);
            ctx.arc( D.x, D.y, radius, 0, Math.PI*2, true);
            ctx.fill();

            radius +=2;
        }
        else{
            clearInterval( stID );
            ctx.closePath();
            draw4Line();
        }
    }, 10);

    function draw4Line(){
        ctx.beginPath();
        ctx.fillStyle = "rgba(0, 187, 246, 0.9)";
        var len = 0;
        var stIDline =setInterval(function(){
            if( len <= 600 ){
                ctx.moveTo( A.x, A.y);
                ctx.lineTo( A.x + len, A.y);

                ctx.moveTo( B.x, B.y);
                ctx.lineTo( B.x, B.y + len);

                ctx.moveTo( C.x, C.y);
                ctx.lineTo( C.x -len, C.y);

                ctx.moveTo( D.x, D.y);
                ctx.lineTo( D.x, D.y-len);

                ctx.stroke(); 

                len += 600/80;
            }
            else{
                ctx.closePath();
                clearInterval( stIDline );
            }

        },10);
    }

};