//Searching for Elements by ID
/* We can access any element that has a particular ID attribute by using the 
getElementById method of the document object:
*/

//To access any element that has a particular ID
element = document.getElementById(id)
var element = document.getElementById("cat");
=> undefined

//To change the content of an element, we can use the element.innerHTML property:
element.innerHTML = "I'm a cat";
    // set the HTML content of "otherElement" to "I'm a cat"
    otherElement.innerHTML = element.innerHTML;

//To change the style from JavaScript - element.style, allows us 
var element = document.getElementById("cat");
=> undefined

element.style.backgroundColor = "red";
element.style.border = "2px green solid";
//property names may differ from CSS; (i.e. backgroundColor instead of background-color)

///Styling an HTML Element
HTMLElement.style // A property that is an object that represents the element’s style attribute. 

//To get the values of all CSS properties for an element
window.getComputedStyle() 
element.style.color = "#ff3300";
element.style.marginTop = "30px";
element.style.paddingBottom = "30px";

//Getting and Setting the Class Name
The function className gets and sets the value of the class attribute of the specified element.

// get the class name of "element"
var cName = element.className;
// set the class name of "otherElement"
otherElement.className = cName;

//Getting and Setting the ID: Gets or sets the element’s identifier (attribute id).

// get the id of "element"
var idStr = element.id;
// set the id of "otherElement"
otherElement.id = "some-value";

//Accessing Elements by Class Name
//To access elements based on the class they contain: 
document.getElementsByClassName() //returns an array of all child elements which have all of the given class names.

var elements = document.getElementsByClassName(names);
elements is a HTMLCollection of found elements
//names is a string representing the list of class names to match; class names are separated by whitespace, not commas
//The element on which it is called will be used as the root of the search: var mice = document.getElementsByClassName('mouse');

//Iterate over an HTML Collection
//The HTMLCollection is an array-like object but is not an array. So we can not use array method like forEach, map, push, etc.
//For iterate over an HTMLCollection, we should use a for loop.
//Other option we have is to turn our HTML collection into an array, using the following code:

var arr = [].slice.call(htmlCollection)

//After this, we can use any array method to manipulate it.

//Accessing by Tag Name
//The function getElementsByTagName returns an HTMLCollection of elements with the given HTML tag name. 
//The complete document is searched, including the root node.

var elements = document.getElementsByTagName(name);
//elements is a live HTMLCollection of found elements in the order they appear in the tree.
//name is a string representing the name of the elements. The special string “*” represents all elements.
//An example:

var divs = document.getElementsByTagName('div');

//Accessing First Found Selector
//The querySelector() returns the first element within the document (using depth-first pre-order traversal of the document’s nodes) 
//that matches the specified group of selectors. Supported by IE8 and up.

document.querySelector(selectors);
//element is an element object.
//selectors is a string containing one or more CSS selectors separated by commas.
//In this example, the first element in the document with the class “mouse” is returned:

var firstMouse = document.querySelector('.mouse');

//Accessing First Found Selector
//The querySelector() returns the first element within the document (using depth-first pre-order traversal of the document’s nodes) 
//that matches the specified group of selectors. Supported by IE8 and up.

document.querySelector(selectors);
/*element is an element object.
selectors is a string containing one or more CSS selectors separated by commas.
In this example, the first element in the document with the class “mouse” is returned:
*/
var firstMouse = document.querySelector('.mouse');

//Accessing an Array of Selectors
//The function querySelectorAll returns a list of the elements within the document that match the specified group of selectors. 
//It is very similar to querySelector, except it doesn’t stop on the first element. The object returned is a NodeList. 

var elementList = document.querySelectorAll(selectors);
//elementList is a non-live NodeList of element objects.
//selectors is a string containing one or more CSS selectors separated by commas.
//This example returns a list of all div elements within the document with either a mouse class or a cat id:

var matches = document.querySelectorAll(".mouse, #cat");