// let input = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');

// let string ="";
// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click', (e) => {
//         if (e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }
//         else if (e.target.innerHTML = 'AC'){
//             string = "";
//             input.value = string;
//         }
//         else if (e.target.innerHTML = 'DEL'){
//             string = string.substring(0, string.length - 1);    
//             input.value = string;
//         }

//         else {string += e.target.innerHTML;
//             input.value = string;
//         }
//     })
// })



// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Accessing the input box
    const inputBox = document.getElementById("inputBox");
  
    // Adding click event listeners to all buttons
    const buttons = document.querySelectorAll(".calculator button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => handleButtonClick(button.innerText));
    });
  
    // Function to handle button clicks
    function handleButtonClick(value) {
      if (value === "AC") {
        // Clear the input box
        inputBox.value = "";
      } else if (value === "DEL") {
        // Delete the last character
        inputBox.value = inputBox.value.slice(0, -1);
      } else if (value === "=") {
        // Evaluate the expression and display the result
        try {
          inputBox.value = eval(inputBox.value);
        } catch (error) {
          inputBox.value = "Error";
        }
      } else {
        // Append the clicked button value to the input box
        inputBox.value += value;
      }
    }
  });
  