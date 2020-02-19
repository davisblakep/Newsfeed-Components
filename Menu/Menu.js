/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/


let createMenu = (items) => {

let headerDiv = document.querySelector('.header');


let menu = document.createElement('div');
menu.classList.add('menu');
menu.classList.add('menu--open');
menu.classList.add('menu-button');


// let mButton = querySelector('.menu-button');

menu.addEventListener('click', ()=> 
menu.classList.toggle('menu'),
// menu.classList.toggle('menu-button'),

);

headerDiv.appendChild(menu);

let listGroup = document.createElement('ul');

menu.appendChild(listGroup);


items.forEach(x => {
  let lister = document.createElement('li');
  lister.textContent = x;
  listGroup.appendChild(lister);
})

// let lister = document.createElement('li');




// let lister = document.createElement('li');
// menu.appendChild(lister);

// items.forEach(x =>
//   document.createElement('li').textContent = x
//   )

// listGroup.appendChild(lister);

//  menu.appendChild(listings);

return menu;

}

createMenu(menuItems);


// let test40 = document.createElement('li');
// let test50 = menuItems.forEach((x) => test40.textContent = x)