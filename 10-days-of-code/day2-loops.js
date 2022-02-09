'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var listVovel = ['a', 'e', 'i', 'o', 'u'];
    //Eger indexi -1 den buyuk ise listVovel içindedir.Seslidir.
    for (let i=0; i<s.length; i++) {
        if(listVovel.indexOf(s[i])>-1) {
            console.log(s[i])
        }
    }
    //Eger indexi 0 den kucuk ise listVovel içinde degildir.Sessizdir.
    for (let i=0; i<s.length; i++) {
        if(listVovel.indexOf(s[i])<0) {
            console.log(s[i])
        }
    }
}

