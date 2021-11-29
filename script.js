// JavaScript Document

leftArrow.addEventListener('click', function() {
	i--// уменьшаем i на 1
	// и выводим текст с номером i
});
rightArrow.addEventListener('click', function() {
	i++// увеличиваем i на 1
	// и выводим текст с номером i
});


function getImages(n){
  for( let image, photosArray = [], i = 1; i <= n; i++ ){
    image = new Image;
    image.src = "img/favorit/" + i + ".jpg";
    photosArray.push( image );
  };
  return photosArray;
};
getImages (35);
console.log (photosArray);