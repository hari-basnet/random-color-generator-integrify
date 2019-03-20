// getting the value from the input 

const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click', generateColor);

// const action = () => {
//     clearGeneratedColors()
//      clearInput()
// }

const clearButton = document.querySelector('#clear-btn');
clearButton.addEventListener('click', function(){clearGeneratedColors(); clearInput();});
// clearButton.addEventListener('click', clearInput);

function clearGeneratedColors() {
    const childDivs = document.querySelectorAll('.gen-div');
    childDivs.forEach(element => {

        element.remove();
    })

}

//creating random hexadecimal number that equals to hexa colors
function randomHexaNumberGenerator() {
    return `#${Math.random().toString(16).substring(2, 8)}`;
}
//console.log(randomHexaNumberGenerator());

// A function that creates number of divs that user inputs
// and appends to the parent div 
function generateColor() {
    
    clearGeneratedColors();
    // setting number equals to the value of the input from the user
    // selecting the result section class to the result variable 
    const result = document.querySelector('.result-section');
    // here when the user puts the value loop as many as that number and create html elements
    // when created the html element append to the parent
    for (let i = 0; i < input.value; i++) {
        // before I was doing thisway ...
        // const hexArray = [];
        // const color = randomHexaNumberGenerator();
        // hexArray.push(color);
        // const hashColor = hexArray.map(element => {
        //     return element;
        // });

        //create a variable and push it to empty array 
        const color = randomHexaNumberGenerator();
        const copyColor = color;


        // creating new div and set the color of our choice
        const newDiv = document.createElement('div');
        newDiv.style.backgroundColor = copyColor;

        newDiv.setAttribute('class', 'gen-div');

        // get the background color from the document

        // create a label and put the background color form line 31 to span
        const hexLabel = document.createElement('span');
        hexLabel.textContent = `${copyColor}`;
        hexLabel.setAttribute('class', 'hex-text');

        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy';
        copyButton.setAttribute('class', 'copy-button');
        copyButton.addEventListener('click', function () {

            // let hexText = document.querySelector('.hex-text');

            try {
                var range = document.createRange();// create new range object
                range.selectNodeContents(hexLabel); // set range to encompass desired element text
                var selection = window.getSelection(); // get Selection object from currently user selected text
                selection.removeAllRanges(); // unselect any user selected text (if any)
                selection.addRange(range);// add range to Selection object t;
            }
            catch (err) {
                console.log(err);
            }
            document.execCommand("copy");
        })

        newDiv.appendChild(hexLabel);
        newDiv.appendChild(copyButton);
        result.appendChild(newDiv);


    }

}

// create function to clear input 
function clearInput() {

    if (button.click) {
        input.value = '';
    }
}