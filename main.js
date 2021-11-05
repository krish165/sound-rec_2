function start()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/lWOErEdVx/model.jason",modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
    
}

function gotResults(error,results)
{
   console.log("Got the results")
}
