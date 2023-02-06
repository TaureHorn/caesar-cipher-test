
// alphabet library = unicode
const cryptKeyArray = []

function keyConv(crypt) {
    for (let x = 0; x < crypt.length; x++) {
        cryptKeyArray.push(crypt.charCodeAt(x));
        // console.log(cryptKeyArray)
    }
    return cryptKeyArray;
}
////// original ceasar cipher
function caesarEncrypt(input, cryptkey) {
    let encrypted = ""
    for (let i = 0; i < input.length; i++) {
        let cipherResult = input.charCodeAt(i);
        let cipherKey = cipherResult + cryptkey;

        encrypted = encrypted + String.fromCharCode(cipherKey);
    }
    return encrypted
}

////// cipher with complex key parsing
function caesarEncryptComplex(input, cryptkey) {
    let encrypted = ""
    for (let i = 0; i < input.length; i++) {

        for(let j = 0; j < cryptKeyArray.length; j++) {
            let cipherResult = input.charCodeAt();
            cryptKeyArray[]
            
        }


        // let cipherKey = cipherResult + cryptkey;

        encrypted = encrypted + String.fromCharCode(cipherKey);
    }
    return encrypted
}
// function caesarDecryption {
// }


///////////////// console log charCodeAt values because some of the decryptions look a little fucky

// console.log("hello this a caesar cipher, wow! so good at coding lol");

// document.addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//         let inputText = document.getElementById("input").value
//         inputText.value = '';

//         let cryptKey = document.getElementById("encryption-key").value
//         cryptKey.value = '';

//         let output = document.getElementById("output-box")

//         // console.log(inputText, cryptKey)
        
//         // let decrypt =  caesarEncrypt(inputText, cryptKey);
//         console.log(caesarEncrypt(inputText, cryptKey))

//         // output.innerHTML = `${decrypt}`

//         output.innerHTML = "";      
//         }
// })

