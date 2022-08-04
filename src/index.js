const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    const res = expr.length;
    let cutExp = [];
    for (let i = 0; i < res / 10; i++) {
        cutExp.push((((expr.slice(0, 10)).replaceAll('10', '.')).replaceAll('11', '-')).replaceAll('00', ''));
        expr = expr.slice(10);
    }
    let str = '';
    for (let i = 0; i < cutExp.length; i++) {
        if(cutExp[i] === '**********') {
            str = str + ' ';
        }else{
            for (const k in MORSE_TABLE) {
                if (cutExp[i] === k) {
                    str = str + MORSE_TABLE[k];
                }
                    
                    }
        }
    }return str;
}

module.exports = {
    decode
}
