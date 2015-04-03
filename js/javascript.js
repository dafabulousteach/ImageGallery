var MAX_ROW_WIDTH = 900;
var MAX_ROW_HEIGHT = 600;
var HTMLImage = '<div id="image"><img src="%data"/></img></div>'
var HTMLPic = "http://placekitten.com/g/200/300";
var frames = [{ height: 360, width: 1000 },
     { height: 600, width: 400 },
     { height: 400, width: 600 },
     { height: 400, width: 600 },
     { height: 400, width: 300 },
     { height: 400, width: 300 }];

var containerWidth = MAX_ROW_WIDTH;
var maxRowHeight = MAX_ROW_HEIGHT;
var spacing = 1;

layoutFrames = function(frames, containerWidth, maxRowHeight, spacing) {
 	if(Object.prototype.toString.call(frames) == "[object Array]" 
 		&& Object.prototype.toString.call(containerWidth)== "[object Number]"
 		&& Object.prototype.toString.call(maxRowHeight) == "[object Number]"
 		&& Object.prototype.toString.call(spacing) == "[object Number]"){
 			
 	} else {
 		return 0;
 	}
}
var picArray = document.getElementById("image");

var onLoad = function(){
		picArray.setAttribute("src", "HTMLPic");

};

/*var names = document.getElementsByTagName("h1");
        for(var i=0; i<names.length; i++){
            names[i].innerHTML="Buenos Tardes";
        }*/

//document.getElementById("myImg").src = "hackanm.gif";
//setImage
	// loop through the array of images
		// if the width of the image can fit
			// setContainerWidth
			// set the size of the image
			// place image in row
		// else
			// set the size of the image
			// place in row
			// subtract the width of the container
	
// setContainerWidth
	//subtract the size of the frame from the max container width
	//setContainerHeight

// setContainerHeight
	//subtract the height of the frame from max container height
	//setSpacing

// setSpacing

// setRowArray

jQuery(function(){
	var box = [300, 200]; 
	var number_boxes_per_row = MAX_ROW_WIDTH / box[0];
	//console.log(jQuery("#main").width())

	//for (var i = frame.length; i = 0; i--) {
	//	frame[i]
	//};
	for (var i = 0; i < frame.width; i++) {
		console.log(frame[i].width);
	};
	for (var i = 0; i < frame.length; i++) {
		console.log(frame[i].height);
	};
});

/*
The order of images must be maintained.​
Images in the same row must have the same height, but must also maintain their aspect ratio (+/- 1px) and not be cropped. 
Rows are variable-height, but must be less than the maximum row height.
Every row except the last must have total width (including spacing between images) equal to the container width.
The last row must have total width less than or equal to the container width.
So the idea is to resize images so that they fit into neat fixed-width rows. You may assume that the input images are really high resolution.

Part I: Implement the following algorithm to layout an array of frames satisfying the above constraints.

 /**
  * @param {Array<Object>} array of frame objects with height/width properties
  * @param {number} width of the containing element, in pixels
  * @param {number} maximum height of each row of images, in pixels
  * @param {number} spacing between images in a row, in pixels
  * @returns {Array<Array<Object>>} array of rows of resized frames
  */
  //layoutFrames: function(images, containerWidth, maxRowHeight, spacing) {
   // your solution~
 


 	
 




