export default function getImgSize (imgSrc, callback) {
    
    var newImg = new Image();

    newImg.onload = function () {
        if (callback !== undefined)
            callback({width: newImg.width, height: newImg.height})
    }

    newImg.src = imgSrc;
}