const wordSearch = (letters, word) => {
    // if pass in empty letters matrix or empty string, return false immediately
    if (letters.length === 0 || !word) {
        return false;
    }

    // create array of words from horizontal matrix
    const horizontalJoin = letters.map(ls => ls.join(''));
    // check to see if word is present horizontally in letters matrix
    for (let l of horizontalJoin) {
        if (l.includes(word)) return true;
    }

    // create array of words from vertical matrix
    const verticalJoin = [];
    for (let i = 0; i < letters.length; i ++) {
        let line = "";
        for (let j = 0; j < letters[i].length; j ++) {
            line += letters[j][i];
        }
        verticalJoin.push(line);
    }
    // check to see if word is present vertically in letters matrix
    for (let l of verticalJoin) {
        if (l.includes(word)) return true;
    }

    // create array of words from reverse vertical matrix
    const reverseVerticalJoin = [];
    for (let i = letters.length - 2; i >= 0; i --) {
        let line = "";
        for (let j = letters.length - 1; j >= 0; j --) {
            line += letters[j][i];
        }
        reverseVerticalJoin.push(line);
    }
    // check to see if word is present reverse vertically in letters matrix
    for (let l of reverseVerticalJoin) {
        if (l.includes(word)) return true;
    }

     // create array of words from reverse horizontal matrix
     const reverseHorizontalJoin = letters.map(x => x.reverse()).map(ls => ls.join(''));
     // check to see if word is present reverse horizontally in letters matrix
     for (let l of reverseHorizontalJoin) {
         if (l.includes(word)) return true;
     }

    // return false if word isnt present in either horizontal or vertical matrix
    return false;
};

module.exports = wordSearch;

