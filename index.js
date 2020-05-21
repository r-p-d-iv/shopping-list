//Users must be able to:
    // enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
    // check and uncheck items on the list by clicking the "Check" button
    // permanently remove items from the list

//Technical Specifications:
    // You must use a CDN-hosted version of jQuery
    // Put your application code in a file called index.js and link to it in index.html
    // Be sure to put both script elements at the bottom of the <body> element.
    // Do not alter index.html or main.css other than adding the links to the external
        // JavaScript inside index.html. Write JavaScript code that works with the
        // existing HTML and CSS to implement the required features.




// function handleButton(){
//     // on submit
//     // find the closest button element
//     // run that function
// };
const addItems = function () {
    //when addItem is submitted
    $('#js-shopping-list-form').on('submit', event => {
        event.preventDefault();
        const itemToAdd = $('#shopping-list-entry').val();
        console.log(`${itemToAdd}`);
        $('.shopping-list').append(tagFrom(itemToAdd));
        });
    };
    const tagFrom = function(item) {
        const tag = `<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
        <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
        <span class="button-label">delete</span>
        </button>
        </div>
        </li>`;
        return tag;
    };
    
    const toggle = function () {
        //when addItem is submitted
        $('#shopping-item-toggle').on('click', event => {
            if (this.hasClass('.shopping-item__checked')) {

            }

        } 
    //get user form data
    //after string is obtained
    //use the HTML selector to add a li under '.shopping-list'
    
//     {/* <li>
//         <span class="shopping-item">apples</span>
//         <div class="shopping-item-controls">
//           <button class="shopping-item-toggle">
//           <span class="button-label">check</span>
//           </button>
//           <button class="shopping-item-delete">
//           <span class="button-label">delete</span>
//           </button>
//           </div>
//         </li> */}
// 
//     }
    
//     function toggleItems() {
//         // function(event) {
//             // target currentEvent
//             // if ".shopping-item-toggle" label
//             // === checked, label = unchecked
// // "" reversed
//     // }
    
// }



//'''^'^'^'^'*+*+*+*+*=#+#=#+#=#-O-Functions for Rendering-O-#=#=#=#=#=*+*+*+*+*^'^'^'^'''\\

//puts an li string in ul
// function render(str) {

// };
// adds html tags to user string
// function drawListTag(str) {

// };
// this is the master event listener
const handleWholeApp = function () {
    console.log('handleWholeApp is running');
    addItems();
};

$(handleWholeApp());