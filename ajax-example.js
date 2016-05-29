//JSON objects containing image information
var imageList = [
    {
        "url": "images/about-me-hubby.jpg",
        "name": "Me and Mack"
    },
    {
        "url": "images/piggy-back.jpg",
        "name": "Family Piggyback Ride"
    },
    {
        "url": "images/peter-pan-lit.jpg",
        "name": "Peter Pan Portrait"
    }
]



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
        if (request.readyState == 4) {
            document.getElementById("example-image-container").innerHTML = request.responseText;
        }
    };
      
    
    request.open("GET", "image-grab.txt", true);
    request.send();
}