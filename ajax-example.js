function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function to load a image using my JSON objects listed above
function loadRandomImage() {
    
    //create a new object to perform AJAX request
    var request = new XMLHttpRequest();
    
    //will get called when the request ready state changes
    request.onreadystatechange = function() {
        
        //if the request is done (readyState 4) and HTTP status is 200 (successful)
        if (request.readyState === 4) {
            
            //the text retrieved in the request is a string representing a JSON object
            var response = JSON.parse(request.responseText);
            
            // The array we are retrieving has 3 entries, so get a random number between 
            // 0 and 2 so we can chose one of the entries at random
            var randomNumber = getRandomIntInclusive(0,2);
            
            //get url and check if it is the same as the last url
            var lastUrl = localStorage.getItem("last-url");
            
            //if there is no "last url" javascript will skip over this
            if (lastUrl) {
            
                //if the last url is the same random number as the one currently 
                //chosen by the imagetag then pick a new random number
                while(lastUrl === response[randomNumber].url){
                    randomNumber = getRandomIntInclusive(0,2);    
                }
            }
            
            //prepare HTML image to show
            var imageTag = '<img style="width:400px" src="' + response[randomNumber].url + '"/>';
            
            document.getElementById("example-image-container").innerHTML = imageTag;
            
            //saves the url that was used last into local storage            
            localStorage.setItem("last-url",response[randomNumber].url);
        }
    };
      
    
    request.open("GET", "image-grab.txt", true);
    request.send();
}