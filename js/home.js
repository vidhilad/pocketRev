let myImagesArray = ["images/home_camera_shared/smartphone.jpg",
    "images/home_camera_shared/smartphone2.jpg",
    "images/home_camera_shared/smartphone3.jpg",
    "images/home_camera_shared/smartphone4.jpg"];
    
let ImageNumber = 0;
let difference = myImagesArray.length -1;
let delay = 3000; 
  
setInterval('ChangeImages(1)', delay);

function ChangeImages(direction){
    ImageNumber = ImageNumber + direction;

    if(ImageNumber > difference){
        ImageNumber = 0;
    }

    if(ImageNumber < 0){
        ImageNumber = difference;
    }
    
    document.getElementById('slide1').src = myImagesArray[ImageNumber];

}