function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XfNzG71v_/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
        else{
            console.log(results);
            document.getElementById("result_label").innerHTML = 'I can here - '+ results[0].label;
            if(results[0].label == "Background Noise"){
                img.src = "listen.gif";
            }
            else if(results[0].label == "barking"){
               img.src = "bark.gif";
            }
            else if(results[0].label == "meow"){
               img.src = "meow.gif";
            }
            else{
               img.src = "goat.gif";
            }
        }
       }
    