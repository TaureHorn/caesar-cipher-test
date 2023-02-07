
// const message = encrypt(input, key)
// console.log("Encrypted message: ", message);
// const decrypted = decrypt(message, key);
// console.log("Decrypted message: ", decrypted);


///////////////////////////////// VISUAL CONTROL  ////////////////////////////////////////


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

const themeSet = ["caesar-cipher_dark.css", "caesar-cipher-light.css"];

function themeChange(theme) {
    document.getElementById("css").setAttribute("href", theme);
}

//////////////////////////////////// FUNCTIONAL CONTROL //////////////////////////////////////

// const pasteLocation = ["input", "encryption-key"];

// function pasteText(section) {
//     const location = document.getElementById(section);
//     // const input = navigator.clipboard.readText();
//     // location.value = input
//     navigator.clipboard.readText(location.value)
// }

// function pasteText(section) {
//     console.log(section)
//     .clipboard.read()
//         .then(cliptext => 
//             (document.getElementById(section).value = cliptext))
//     // (document.getElementById(section).value);
// }

function copyText() {
    let copyText = document.getElementById("result");
    if (copyText.value === "") {
        alert("There's nothing there to copy.")
    } else {
        navigator.clipboard.writeText(copyText.value);
        alert("Copied " + `${copyText.value}` + " to the clipboard")
        document.getElementById("result").value = '';

    }
}


function reset() {
    document.getElementById("input").value = '';
    document.getElementById("encryption-key").value = '';
    document.getElementById("result").value = '';
    cryptKeyArray = []
}


///////////////////////////////// ENCRYPT / DECRYPT  ////////////////////////////////////////

function keyConv(crypt) {
    cryptKeyArray = [];
    console.log("keyConv is being called")
    for (let x = 0; x < crypt.length; x++) {
        cryptKeyArray.push(crypt.charCodeAt(x));
    }
    return cryptKeyArray;
}

function encrypt() {
    let input = document.getElementById("input").value
    let cryptkey = document.getElementById("encryption-key").value
    console.log(input, cryptkey)
    if (cryptkey.length > input.length || input === "") { alert(`key is too long`); console.log(`key is too long`); return null }
    let answer = "";
    keyConv(cryptkey);
    let i = 0;
    while (i <= input.length) {
        let j = 0;
        for (j = 0; j < cryptKeyArray.length; j++) {
            if (i === input.length) {
                document.getElementById("result").value = `${answer}`;
                console.log(answer)
                return answer
            }
            let cipherResult = input.charCodeAt(i) - cryptKeyArray[j];
            if (cipherResult < 33) {
                cipherResult += 93
                if (cipherResult < 33) {
                    cipherResult += 93
                }
            }
            answer += String.fromCharCode(cipherResult);
            i++;
        }
    }
}

function decrypt() {
    let input = document.getElementById("input").value
    let cryptkey = document.getElementById("encryption-key").value
    console.log(input, cryptkey)
    if (input === null || cryptkey.length > input.length) { alert(`key is too long / too short`); console.log(`key is too long`); return null }
    let decryptedAnswer = "";
    keyConv(cryptkey);
    let i = 0;
    while (i <= input.length) {
        let j = 0;
        for (j = 0; j < cryptKeyArray.length; j++) {
            if (i === input.length) {
                document.getElementById("result").value = `${decryptedAnswer}`;
                console.log(decryptedAnswer)
                return decryptedAnswer
            }
            let cipherResult = input.charCodeAt(i) + cryptKeyArray[j];
            if (cipherResult >= 125) {
                cipherResult -= 93
                if (cipherResult >= 125) {
                    cipherResult -= 93
                }
            }
            decryptedAnswer += String.fromCharCode(cipherResult);
            i++;
        }
    }
}