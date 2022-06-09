
// Select some elements...
//. Select an Element
//Start by selecting the Doggos header from the top of the page.
//Look for the header in index.html (it will be represented by a div).
//What property of the header div could you use to select it with querySelector?
//Open index.js in your code editor.
//Select the header by its ID:

//let header = document.querySelector('#page-header')

//Now that the header is defined as a DOM element, try changing how the header text is aligned:
let header = document.querySelector('#page-header')
header.style.textAlign = "left"

//Let's see how this works if we want to change the styling of multiple elements:
//Look for the dog images in index.html (they will be represented by img tags).
//Find a property that all the dog images have so you can use it to select them with querySelectorAll.
//Return to index.js in your code editor.
//Select the dog images:

let dogImages = document.querySelectorAll('.dog-image')

//Now that dogImages is defined as an array of DOM elements, 
//you can manipulate the styling of those elements. 
//You will need to run code to change the styling of each element in the array,
 //so use a loop:


for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50px'
}

//In the time remaining, try making the following modifications to the DOM with JavaScript:
//Below are some steps to think through if you get stuck:
// 1. Look at the page in your browser.
// 2. Think of something you would like to change visually.
// 3. Next, look at the HTML in your code editor.
// 4. Find an attribute you can use to select the element(s) you want to change.
// 5. Select that element in your JavaScript file using querySelector or querySelectorAll. Use console.log to ensure you have selected the element(s) you want.
// 6. Determine which CSS property you want to use to make the change. You can utilize the W3Schools resource to search for applicable styling rules.
// 7. Change the property of the DOM element you've selected. 
//For example, you may want to change the border-style of an element named footer:
//footer.style.borderStyle = 'solid'

//Make the dogs' names align to the left.
let dogName = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogName.length; i++){
	dogName[i].style.textAlign = "left"
}

//Change the color of the footer text.
let footer = document.querySelector('.footer')
footer.style.color = "red"


//Flip the images so they are upside down.
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.transform = 'rotate(180deg)'
}