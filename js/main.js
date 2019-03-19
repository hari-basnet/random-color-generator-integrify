// getting the value from the input 

const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click', generateColor);

function randomHexaNumberGenerator(){
    return `#${Math.random().toString(16).substring(2, 10)}`;
}
//console.log(randomHexaNumberGenerator());

console.log(randomHexaNumberGenerator());

function generateColor(num){

    // setting number equals to the value of the input from the user
    // selecting the result section class to the result variable 
    num = input.value;
    const result = document.querySelector('.result-section');

    
    // here when the user puts the value loop as many as that number and create html elements
    // when created the html element append to the parent
    for (let i = 0; i < num; i++){
        const newDiv = document.createElement('div');
        newDiv.textContent = 'Hello' + i;
        newDiv.style.backgroundColor = randomHexaNumberGenerator();

        const hexLabel = document.createElement('span');
        hexLabel.textContent = `${randomHexaNumberGenerator()}`;

        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy';

        newDiv.appendChild(hexLabel);
        newDiv.appendChild(copyButton);
        result.appendChild(newDiv);
    }  
}

