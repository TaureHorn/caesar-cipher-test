
// alphabet library = unicode
///////////////////////////////////// CAESAR CIPHER ////////////////////////

// function caesarEncrypt(input, cryptkey) {
//     let encrypted = ""
//     for (let i = 0; i < input.length; i++) {
//         let cipherResult = input.charCodeAt(i);
//         let cipherKey = cipherResult + cryptkey;

//         encrypted = encrypted + String.fromCharCode(cipherKey);
//     }
//     return encrypted
// }

////////////////////////////// function activation 

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

function caesarEncrypt() {
    let inputVal = document.getElementById("input").value
    let keyVal = document.getElementById("encryption-key").value
    let encrypted = ""
    for (let i = 0; i < inputVal.length; i++) {
        let cipherResult = inputVal.charCodeAt(i);
        let cipherKey = cipherResult + keyVal;

        encrypted = encrypted + String.fromCharCode(cipherKey);        
    }
    document.getElementById("output-box").innerText = encrypted;
    inputVal = " ";
    keyVal = " ";
}

// function caesarDecryption {
// }

///////////////////////////////////// CIPHER WITH COMPLEX KEY PARSING ///////////////

// const cryptKeyArray = []

// function keyConv(crypt) {
//     for (let x = 0; x < crypt.length; x++) {
//         cryptKeyArray.push(crypt.charCodeAt(x));
//         // console.log(cryptKeyArray)
//     }
//     return cryptKeyArray;
// }
// function caesarEncryptComplex(input, cryptkey) {
//     let encrypted = ""
//     for (let i = 0; i < input.length; i++) {

//         for(let j = 0; j < cryptKeyArray.length; j++) {
//             let cipherResult = input.charCodeAt();
//             cryptKeyArray[]
            
//         }
//         // let cipherKey = cipherResult + cryptkey;
//         encrypted = encrypted + String.fromCharCode(cipherKey);
//     }
//     return encrypted
// }

// ///////////////// console log charCodeAt values because some of the decryptions look a little fucky


