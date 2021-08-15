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
    	const morseBinarArr = expr.split('').join('');

	if (expr.length % 10 !== 0) {
		return false;
		const morseSubstr = '';
	}
	for (let i = 0; i < morseBinarArr.length; i + 10) {
		morseSubstr = morseBinarArr.substr(i, 10);

		if (morseSubstr[i].includes('**********')) {
			return (`$ {' '}`);
		}
		let dot = '.';
		let dash = '-';
		if (morseSubstr[i].includes('11')) {
			return (`${dash}`);
		}
		if (morseSubstr[i].includes('10')) {
			return (`$ {
					dot
				}`);
		}
		if (morseSubstr[i].includes('00')) {
			return (`$ {
						''
					}`);
		}
		let morseDecode = morseSubstr.includes(MORSE_TABLE.key);
		morseDecode = MORSE_TABLE.value;
	}
	return morseDecode;
}

module.exports = {
    decode
}
