# Asana Gallery

For this challenge, we'd like to build a photo gallery with a fixed-width, multiple-row layout ![alt text](https://github.com/dafabulousteach/ImageGallery/blob/master/example.png).

## Constraints
There are a few constraints to consider when laying out the images in our photo gallery:

-The order of images must be maintained.​

-Images in the same row must have the same height, but must also maintain their aspect ratio (+/- 1px) and not be cropped.

-Rows are variable-height, but must be less than the maximum row height.

-Every row except the last must have total width (including spacing between images) equal to the container width.

-The last row must have total width less than or equal to the container width.

So the idea is to resize images so that they fit into neat fixed-width rows. You may assume that the input images are really high resolution.

## Part I
Implement the following algorithm to layout an array of frames satisfying the above constraints.

 
  * @param {Array<Object>} array of frame objects with height/width properties
  * @param {number} width of the containing element, in pixels
  * @param {number} maximum height of each row of images, in pixels
  * @param {number} spacing between images in a row, in pixels
  * @returns {Array<Array<Object>>} array of rows of resized frames

 ```javascript
 layoutFrames: function(images, containerWidth, maxRowHeight, spacing) {
   // your solution~
 }
```
## Part II
Use the function that you implemented above to build a prototype gallery with HTML/CSS. Please include all the UI elements in the attached image. Feel free to include additional UI polish, however.

Your HTML should be easily modifiable to display arbitrary image sets. The attached image uses the following data:
```javascript
var frames =
    [{ height: 360, width: 1000 },
     { height: 600, width: 400 },
     { height: 400, width: 600 },
     { height: 400, width: 600 },
     { height: 400, width: 300 },
     { height: 400, width: 300 }];

layoutFrames(frames, 800, 360, 10);
```

## Part III
Throw in some fun pictures that will make us smile :-).  (P.S. [http://www.placekitten.com](http://www.placekitten.com)

When you send your work, feel free to include a few words about your approach. 