/*
  Do NOT uncomment the example lines of code below (rows 8-10), they will cause errors.  
  But I am providing it as a template.
  */


/* 
document.querySelector("ELEMENT").addEventListener("EVENT",function(){
     //YOUR CODE
 })
 */



// Problem 1 - make your name show up in the console log when the page loads
window.addEventListener("load",function(){
     console.log("Evelyn");
 })

// Problem 1b - add an eventListener to add an <em> tag onmouseover

//do this instead of this.textContent (which adds the text). innerHTML changes the HTML structure (ex. for adding a tag)
// document.querySelector("h1").addEventListener("mouseover",function(){
//     this.innerHTML = "<em>" + this.innerHTML + "</em>"
//  })

// Problem 2
document.querySelector("h1").addEventListener("click",function(){
    this.style.display = "none";
 })


// Problem 3
document.querySelector("figure:nth-of-type(5)").addEventListener("dblclick",function(){
    this.style.visibility = "hidden";
 })


// Problem 4
// Use an external EventListener to change the text color of the first figure caption to blue and give it a 5px solid red border when the mouse is over it.
// Restore the text color to black and remove the border when the mouse leaves. 
// Part 1
document.querySelector("figure:nth-of-type(1) figcaption").addEventListener("mouseover",function(){
    this.style.color = "blue";
    this.style.border = "5px solid red";
 })

// Problem 4
// Part 2
document.querySelector("figcaption").addEventListener("mouseout",function(){
    this.style.color = "black";
    this.style.border = "none";
 })


// Problem 5
// Use an external EventListener to change the text color of the first figure caption to blue and give it a 5px solid red border when the figure caption is in focus.
// Restore the text color to black and remove the border when the focus is removed. 
document.querySelector("figcaption").addEventListener("focus",function(){
    this.style.color = "blue";
    this.style.border = "5px solid red";
 })
document.querySelector("figcaption").addEventListener("blur",function(){
    this.style.color = "black";
    this.style.border = "none";
 })

// Problem 6
// Use an external EventListener to change the font family of the second figure caption to Cursive when the figure caption is in focus and restore the font family to “Times” when the focus is removed.

//adding tab index for second figure
document.querySelector("figure:nth-of-type(2) figcaption").setAttribute("tabindex", "0");

document.querySelector("figure:nth-of-type(2) figcaption").addEventListener("focus",function(){
    console.log("Change figcaption font to 'Cursive'")
    this.style.fontFamily = "Cursive";
 })
 document.querySelector("figure:nth-of-type(2) figcaption").addEventListener("blur",function(){
    console.log("Change figcaption font to 'Times'")
    this.style.fontFamily = "Times";
 })


// Problem 7
// Use an external EventListener to style the parent element of all of the figures when the first button “Style The Parent” is clicked. 
// Part A:  It should utilize the one-third class
// Part B: It should use the Purple-Haze.jpg as the background image.
document.querySelector("#style").addEventListener("click",function(){
    document.querySelector(".container").classList.toggle("one-third");
 })

document.querySelector("#style").addEventListener("click",function(){
  console.log("adding purple backgroung image")
  document.querySelector(".container").style.backgroundImage = "url(./images/Purple-Haze.jpg)";
 })


// Problem 8
// When any image is clicked, use an external listener to log the src file to the console and toggle the .pizazz class 

const imgs = document.querySelectorAll("img");

imgs.forEach(function(img){
  img.addEventListener("click", function() {
    console.log("pizazz class");
    console.log(img.src);
    img.classList.toggle("pizazz");
    });
    
 });