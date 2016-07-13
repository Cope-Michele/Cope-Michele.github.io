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
            
            //get url using the randomNumber and response variables
            //and check if it is the same as the last url
            
            //get the last url stored in local storage
            var lastUrl = localStorage.getItem("last-url");
            
            //if there is no "last url" javascript will skip over this
            if (lastUrl) {
            
                //if the last url displayed is the same as the url that has been chosen, 
                //then we will pick a new randomNumber
                while(lastUrl === response[randomNumber].url){
                    randomNumber = getRandomIntInclusive(0,2);    
                }
            }
            
            addImage(response, randomNumber);
            
            //saves the url that was used last into local storage            
            localStorage.setItem("last-url",response[randomNumber].url);
            
            bounce();
        }
        
    };
        
    request.open("GET", "image-grab.txt", true);
    request.send();
    
    //restyle the random image button once it has been clicked
    var newClass = document.createAttribute("class");
    newClass.value = "image-button";
    var button = document.getElementById("the-special-button");
    button.setAttributeNode(newClass);
}

//prepare HTML image to show
//create function to add an image element
function addImage(response, randomNumber) {
    //create img element
    var newImg = document.createElement("img");
    //add img source attribute to element
    var srcAtt = document.createAttribute("src");
    srcAtt.value = response[randomNumber].url;
    newImg.setAttributeNode(srcAtt);
    //add new image element with it's content to the DOM
    var newDiv = document.getElementById("example-image-container");
    //add the new image to the bottom of the image container div
    newDiv.appendChild(newImg);
} 

//animate image to bounce
function bounce() {
    document.getElementById('example-image-container').className = "bounce";
}

