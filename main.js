x=0;
y=0;
drawcircle="";
drawrect="";
var SpeechRecognition=window.webkitspeechRecognition;
var Recognition=new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="system is litsning please speak";
    Recognition.start();

}
Recognition.onresult=function(event)
{
console.log(event)
var content = event.results[0][0].transcript;
document.getElementById("status").innerHTML = "the speech has been recognized as: " + content;
if(content == "circle"){
    x=math.floor(math.random() *900);
    y=math.floor(math.random() *600);
    document.getElementById("status").innerHTML= "started drawing circle";
    drawcircle = "set";

}
}
function setup(){
    canvas = creatCanvas(900,600);

}
function draw(){
    if(drawcircle == "set")
    {
        r=math.floor(math.random()*100);
        circle(x,y,radius);
        drawcircle="";
    }
}
