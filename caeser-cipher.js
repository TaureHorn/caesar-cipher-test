document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let input = document.getElementById("input").value
        input.value = '';
        let cryptkey = document.getElementById("encryption-key").value
        cryptkey.value = '';
        let output = document.getElementById("output-box")
        output = encryptLetters(input, cryptkey);
        
    }
})

let cryptKeyArray = [];
function keyConv(crypt) {
    cryptKeyArray = [];
    for (let x = 0; x < crypt.length; x++) {
        cryptKeyArray.push(crypt.charCodeAt(x));
    }
    return cryptKeyArray;
}
function encryptLetters(input, cryptkey) {
    let answer = "";
    keyConv(cryptkey);
    let i = 0;
    while (i < input.length) {
        let j = 0;
        for (j = 0; j < cryptKeyArray.length; j++) {
            if (i === input.length) { return answer }
            let cipherResult = input.charCodeAt(i);
            answer += String.fromCharCode(cipherResult - cryptKeyArray[j]);
            i++;
        }
    }
}
function decryptLetters(input, cryptkey) {
    let decryptedAnswer = "";
    keyConv(cryptkey);
    let i = 0;
    while (i < input.length) {
        let j = 0;
        for (j = 0; j < cryptKeyArray.length; j++) {
            if (i === input.length) { return decryptedAnswer }
            let cipherResult = input.charCodeAt(i);
            decryptedAnswer += String.fromCharCode(cipherResult + cryptKeyArray[j]);
            i++;
        }
    }
}
function encryptNumbers(input, cryptkey) {
    let answer = "";
    keyConv(cryptkey);
    let i = 0;
    while (i < input.length) {
        let j = 0;
        for (j = 0; j < cryptKeyArray.length; j++) {
            if (i === input.length) { return answer }
            let cipherResult = input.charCodeAt(i);
            answer += String.fromCharCode(cipherResult + cryptKeyArray[j]);
            i++;
        }
    }
}
function decryptNumbers(input, cryptkey) {
    let decryptedAnswer = "";
    keyConv(cryptkey);
    let i = 0;
    while (i < input.length) {
        let j = 0;
        for (j = 0; j < cryptKeyArray.length; j++) {
            if (i === input.length) { return decryptedAnswer }
            let cipherResult = input.charCodeAt(i);
            decryptedAnswer += String.fromCharCode(cipherResult - cryptKeyArray[j]);
            i++;
        }
    }
}

