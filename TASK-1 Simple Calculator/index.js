let screen = document.getElementById('screen');
let decimal = document.getElementById('decimal');
let buttons = document.querySelectorAll('button');
let screenValue = '';
const viewer = document.querySelector('.viewer');



for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log('Button text is ', buttonText);
        if (buttonText == 'AC') {
            screenValue = '';
            screen.value = screenValue;
            viewer.innerHTML = screenValue;
        }
        else if (buttonText == 'CE') {
            screen.value = screen.value.slice(0, -1);
            screenValue = screen.value;
        }
        else if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '÷') {
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '^2') {
            buttonText = '**2';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '%') {
            buttonText = '/100';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '^3') {
            buttonText = '**3';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '^n') {
            buttonText = '**';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            viewer.innerHTML = screenValue;
            screen.value = eval(screenValue);
            screenValue = screen.value;
            screen.value = eval(screenValue);
            
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
