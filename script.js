const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const resultDiv = document.getElementById('result');

//funzione che controlla la stringa, la ripulisce da caratteri fuorivianti
//fare lower case
//togliere spazi
//trovare la metà della lunghezza della 
//con un for loop controlliamo se la prima lettera è uguale all'ultima
//se è uguale si va avanti fino alla metà della lunghezza dell'input
// non passiamo textInput come argomento perchè 

const checkTextInput = () => {
    const cleanedStr = textInput.value.toLowerCase().replaceAll(/[^a-z0-9]/g, '');
    const isPalindrome = cleanedStr === cleanedStr.split('').reverse().join('');
    if (textInput.value === '') {
        alert('Please input a value.');
        return;
    }
    const resultMessage = isPalindrome
        ? `${textInput.value} is a palindrome.`
        : `${textInput.value} is not a palindrome.`;

    resultDiv.innerHTML = resultMessage;
}

checkButton.addEventListener('click', checkTextInput);

