$(document).ready(function(){
    var i=0;
    var imageArray = [
        "dailyScheduler",
        "passwordGenerator",
        "timer",
        "weatherApp"
    ];
    function newImage(i){
            var alt = imageArray[i];
            console.log(alt);
            var url = "./assets/portfolioImg/"+alt+".PNG";
            var image = $('<img src="'+url+'" alt='+alt+'>');
            console.log(image);
            $('#portfolioImages').append(image);
    }
    var nextImage = setInterval(function(){
        newImage(i);
        i++;
        if(i >= imageArray.length){
            clearInterval(nextImage);
        }
    },50000)
})