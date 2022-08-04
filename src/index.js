function decode(expr) {
    // write your solution here

	 let arr = expr.split('**********');
  let arr2 = [];
  let arrWithoutZir = [];
  let arrStr = [];
  let strItem = '';
  let str = '';
  let number = 0;

  for (item of arr){
		for (let i = 0; i < item.length; i+=10){
			arr2.push(item.slice(i, i+10));
		}
		arr2.push(' ');
	}

	arr2.pop();

  for (item of arr2){
	while (item[0] == '0'){
		item = item.slice(1);
	}
	arrWithoutZir.push(item);
  }

  for(item of arrWithoutZir){
	strItem = '';
	if (item == ' ') arrStr.push(' ');
	else{
		for (let i = 0; i < item.length/2; i++){
			if (item[2*i] + item[2*i+1] == '11'){
				strItem = strItem.concat('-');
			}
			else {
				strItem = strItem.concat('.');
			}
		}
		arrStr.push(strItem);
	}
  }

  for (item of arrStr){
	if (item == ' ') str+=' ';
	else{
		number = Object.keys(MORSE_TABLE).indexOf(item);
		str += (Object.values(MORSE_TABLE))[number];
	}	
  }
 

  return str;
}

module.exports = {
    decode
}

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
    // write your solution here
}

module.exports = {
    decode
}
