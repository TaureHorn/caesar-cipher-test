
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
let cryptKeyArray = [];
function keyConv(crypt) {
    cryptKeyArray = [];
    for (let x = 0; x < crypt.length; x++) {
        cryptKeyArray.push(crypt.charCodeAt(x));
    }
    return cryptKeyArray;
}

function encryptLetters() {
    let input = document.getElementById("input").value
    let cryptkey = document.getElementById("encryption-key").value
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
    }   document.getElementById("output-box").innerHTML = answer;
}

function decryptLetters() {
    let input = document.getElementById("input").value
    let cryptkey = document.getElementById("encryption-key").value
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
    }   document.getElementById("output-box").innerHTML = decryptedAnswer
}

////////// original (for event listener input)
//
// function encryptLetters(input, cryptkey) {
//     let answer = "";
//     keyConv(cryptkey);
//     let i = 0;
//     while (i < input.length) {
//         let j = 0;
//         for (j = 0; j < cryptKeyArray.length; j++) {
//             if (i === input.length) { return answer }
//             let cipherResult = input.charCodeAt(i);
//             answer += String.fromCharCode(cipherResult - cryptKeyArray[j]);
//             i++;
//         }
//     }
// }
//
// function decryptLetters() {
//     let decryptedAnswer = "";
//     keyConv(cryptkey);
//     let i = 0;
//     while (i < input.length) {
//         let j = 0;
//         for (j = 0; j < cryptKeyArray.length; j++) {
//             if (i === input.length) { return decryptedAnswer }
//             let cipherResult = input.charCodeAt(i);
//             decryptedAnswer += String.fromCharCode(cipherResult + cryptKeyArray[j]);
//             i++;
//         }
//     }
// }
//
// function encryptNumbers(input, cryptkey) {
//     let answer = "";
//     keyConv(cryptkey);
//     let i = 0;
//     while (i < input.length) {
//         let j = 0;
//         for (j = 0; j < cryptKeyArray.length; j++) {
//             if (i === input.length) { return answer }
//             let cipherResult = input.charCodeAt(i);
//             answer += String.fromCharCode(cipherResult + cryptKeyArray[j]);
//             i++;
//         }
//     }
// }
// function decryptNumbers(input, cryptkey) {
//     let decryptedAnswer = "";
//     keyConv(cryptkey);
//     let i = 0;
//     while (i < input.length) {
//         let j = 0;
//         for (j = 0; j < cryptKeyArray.length; j++) {
//             if (i === input.length) { return decryptedAnswer }
//             let cipherResult = input.charCodeAt(i);
//             decryptedAnswer += String.fromCharCode(cipherResult - cryptKeyArray[j]);
//             i++;
//         }
//     }
// }



///////////////////////////////////   EXPLAINER BUTTON   ///////////////////////////////

const toggleExplainer = ["encode-explainer", "decode-explainer"]

function buttonHover(section) {
    let a = document.getElementById(section);
    let b = document.getElementById("explainer-hint");
    if (a.style.display === "none") {
        a.style.display = "block";
        b.style.display = "none";
    } else {
        a.style.display = "none";
        b.style.display = "block";
    }
}

function reset(){
    document.getElementById("input").value = '';
    document.getElementById("encryption-key").value = '';
}
//////////////////////////////////// defunct event listener code /////////////////////////
//
// document.addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//         let inputText = document.getElementById("input").value
//         input.value = '';
//         let cryptkeyNumber = document.getElementById("encryption-key").value
//         cryptkeyNumber.value = '';
//         let output = document.getElementById("output-box");

//         console.log(inputText, cryptkeyNumber)
//         let encryptAnswer = encryptLetters(inputText, cryptkeyNumber); 
//         console.log(encryptAnswer)
//         output.innerHTML = `${encryptAnswer}`
//     }
// })

//////////////// doesn't parse inputs with spaces well yet
