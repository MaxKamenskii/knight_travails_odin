console.log("It is working juuuust fineeeee");

/*
all the possible candidates from [0, 0]
[1, 2], [2, 1], [2, -1], [1, -2], [-2, -1], [-1, -2], [-2, 1], [-1, 2]


[4, 5], [5, 4], [5, 2], [4, 1], [2, 1], [1, 2], [1, 4], [2, 5]
*/

// Key understandings
/*
1. Each square stores:
currentSquare
previousSquare


*/
/*
Layer 0 [0, 0]
Layer 1 [1, 2], [2, 1]
Layer 2 [0, 2], [2, 0], [3, 1], [4, 0], [4, 2], [3, 3], [2, 4], [1, 3], [0, 4]
Layer 3 [1, 0], [3, 0], [5, 0], [0, 1], [6, 1], [3, 2], [5, 2], [6, 3], [4, 3], [2, 3], [3, 4], [1, 4], [4, 5], [2, 5], [1, 5], [3, 6], [1, 6] 
*/

// Declare start position
let start = [0, 0];
let goal = "5,4";
// Declare queue and add start position as the first position
const queue = [start];
// Declare an array of visited square
const visited = new Set();
// Declare find function
let find = function (square) {
  // declare an arrya to which add position before returning them
  let allPossibleSquares = [];
  // loop 8 times (8 possible positions, return only those that satisfy x < 8, y < 8)
  let first = [square[0] + 1, square[1] + 2];
  let second = [square[0] + 1, square[1] - 2];
  let third = [square[0] + 2, square[1] + 1];
  let fourth = [square[0] + 2, square[1] - 1];
  let fifth = [square[0] - 1, square[1] - 2];
  let sixth = [square[0] - 1, square[1] + 2];
  let seventh = [square[0] - 2, square[1] - 1];
  let eight = [square[0] - 2, square[1] + 1];
  if (first[0] >= 0 && first[0] < 8 && first[1] >= 0 && first[1] < 8) {
    allPossibleSquares.push(first);
  }
  if (second[0] >= 0 && second[0] < 8 && second[1] >= 0 && second[1] < 8) {
    allPossibleSquares.push(second);
  }
  if (third[0] >= 0 && third[0] < 8 && third[1] >= 0 && third[1] < 8) {
    allPossibleSquares.push(third);
  }
  if (fourth[0] >= 0 && fourth[0] < 8 && fourth[1] >= 0 && fourth[1] < 8) {
    allPossibleSquares.push(fourth);
  }
  if (fifth[0] >= 0 && fifth[0] < 8 && fifth[1] >= 0 && fifth[1] < 8) {
    allPossibleSquares.push(fifth);
  }
  if (sixth[0] >= 0 && sixth[0] < 8 && sixth[1] >= 0 && sixth[1] < 8) {
    allPossibleSquares.push(sixth);
  }
  if (seventh[0] >= 0 && seventh[0] < 8 && seventh[1] >= 0 && seventh[1] < 8) {
    allPossibleSquares.push(seventh);
  }
  if (eight[0] >= 0 && eight[0] < 8 && eight[1] >= 0 && eight[1] < 8) {
    allPossibleSquares.push(eight);
  }
  return allPossibleSquares;
};
// Declare explore function
let explore = function (queue) {
  // While the length of our queue is more than 0
  while (queue.length > 0) {
    // I take the first position
    const square = queue.shift();
    let theKey = square.toString();
    visited.add(theKey);
    // find all possible squares for this shifter square
    let allPossibleSquares = find(square);
    // check if one of the square is the goal
    for (possibleSquare of allPossibleSquares) {
      let key = possibleSquare.toString();
      if (key == goal) {
        console.log("Found the goal");
        return;
      } else {
        // mark as visited, if one of them is not visited, add to queue
        if (!visited.has(key)) {
          visited.add(key);
          queue.push(possibleSquare);
        }
      }
    }
  }
};
console.log(visited);
explore(queue);
console.log(visited);
