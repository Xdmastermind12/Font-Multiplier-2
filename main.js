noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX:0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,100);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#808080');
    text(noseX,noseY,difference);
    fill('#87bb1a');
    stroke('#326a6f');
    document.getElementById("square_side").innerHTML="width and height of a sqaure will be= "+difference+" px";
}
function modelLoaded(){
    console.log('poseNetisInitialized!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
}
function gotPoses(results){
    if (results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX= "+noseX+"noseY= "+noseY);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("leftwristX= "+leftwristX+"rightwristX= "+rightwristX);
        console.log("difference= "+difference);
    }
}

