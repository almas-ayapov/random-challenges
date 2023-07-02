function pascalsTriangle(maxRows, triangle = [], rowNum = 0) {
  const newRow = new Array(rowNum);
  newRow[0] = 1;
  newRow[rowNum] = 1;
  for (let i = 1; i <= rowNum - 1; i++) {
    newRow[i] = triangle[rowNum - 1][i - 1] + triangle[rowNum - 1][i];
  }
  triangle.push(newRow);
  if (triangle.length < maxRows)
    return pascalsTriangle(maxRows, triangle, rowNum + 1);
  return triangle;
}

module.exports = pascalsTriangle;
