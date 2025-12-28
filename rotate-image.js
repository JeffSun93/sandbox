function rotateImage(matrix) {
  for (let layer = 0; layer < Math.floor(matrix.length / 2); layer++) {
    for (let i = 0; i < matrix.length - 2 * layer - 1; i++) {
      rotate(matrix, layer, i);
    }
  }
  return matrix;
}

function rotate(matrix, layer, i) {
  const length = matrix.length - layer - 1;
  const top = matrix[layer][layer + i];
  matrix[layer][layer + i] = matrix[length - i][layer];
  matrix[length - i][layer] = matrix[length][length - i];
  matrix[length][length - i] = matrix[layer + i][length];
  matrix[layer + i][length] = top;
  return;
}

const rotatedImage = rotateImage([
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36],
]);
for (const row of rotatedImage) {
  console.log(row);
}
