
Status1="";
Value="";

function setup(){
canvas=createCanvas(500,500)
canvas.position(300,330)
video=createCapture(VIDEO);
video.hide()
}

objectDetector=ml5.objectDetector('cocossd', model_loaded);
document.getElementById("statuss").innerHTML="Status:Detecting Objects";
Value=document.getElementById("Input").value;

function model_loaded(){
    console.log("Model has loaded");
    Status1=true;
}

function draw(){
    image(video, 0, 0, 500, 500);
}
