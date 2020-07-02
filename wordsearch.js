const wordSearch = (letters, word) => {
  if (letters.length === 0) return false;
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (words of horizontalJoin) {
    if (words.includes(word)) return true;
  }
  for (words of verticalJoin) {
    if (words.includes(word)) return true;
  }
  return false;
};
const transpose = function(matrix) {
  let newArray = [];
  let length = matrix[0].length;
  let height = matrix.length;
  for (let i = 0; i < length; i ++) {
    newArray[i] = [];
    for (let j = 0; j < height; j ++) {
      newArray[i][j] = matrix[j][i];
    }
  }
  return newArray;
};