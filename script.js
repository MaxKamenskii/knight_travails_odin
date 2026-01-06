function knightMoves(startSquare, goalSquare) {
  let start = new Square(startSquare, null);
  findPath(explore(start, goalSquare));
}

class Square {
  constructor(current, previous) {
    this.current = current;
    this.previous = previous;
  }
}
// Declare findPath function that takes the found goal and builds the path back using previous keys
let findPath = function (foundGoal) {
  let pathArray = [];
  let square = foundGoal;
  while (square.previous !== null) {
    pathArray.unshift(square.previous.current);
    square = square.previous;
  }
  console.log(`You made it in ${pathArray.length} moves! Here's your path:`);
  for (element of pathArray) {
    console.log(element);
  }
  console.log(foundGoal.current);
};

// Declare find function
let find = function (square) {
  // declare an arrya to which add position before returning them
  let allPossibleSquares = [];
  // loop 8 times (8 possible positions, return only those that satisfy x < 8, y < 8)
  let first = new Square(
    [square.current[0] + 1, square.current[1] + 2],
    square
  );
  let second = new Square(
    [square.current[0] + 1, square.current[1] - 2],
    square
  );
  let third = new Square(
    [square.current[0] + 2, square.current[1] + 1],
    square
  );
  let fourth = new Square(
    [square.current[0] + 2, square.current[1] - 1],
    square
  );
  let fifth = new Square(
    [square.current[0] - 1, square.current[1] - 2],
    square
  );
  let sixth = new Square(
    [square.current[0] - 1, square.current[1] + 2],
    square
  );
  let seventh = new Square(
    [square.current[0] - 2, square.current[1] - 1],
    square
  );
  let eight = new Square(
    [square.current[0] - 2, square.current[1] + 1],
    square
  );
  if (
    first.current[0] >= 0 &&
    first.current[0] < 8 &&
    first.current[1] >= 0 &&
    first.current[1] < 8
  ) {
    allPossibleSquares.push(first);
  }
  if (
    second.current[0] >= 0 &&
    second.current[0] < 8 &&
    second.current[1] >= 0 &&
    second.current[1] < 8
  ) {
    allPossibleSquares.push(second);
  }
  if (
    third.current[0] >= 0 &&
    third.current[0] < 8 &&
    third.current[1] >= 0 &&
    third.current[1] < 8
  ) {
    allPossibleSquares.push(third);
  }
  if (
    fourth.current[0] >= 0 &&
    fourth.current[0] < 8 &&
    fourth.current[1] >= 0 &&
    fourth.current[1] < 8
  ) {
    allPossibleSquares.push(fourth);
  }
  if (
    fifth.current[0] >= 0 &&
    fifth.current[0] < 8 &&
    fifth.current[1] >= 0 &&
    fifth.current[1] < 8
  ) {
    allPossibleSquares.push(fifth);
  }
  if (
    sixth.current[0] >= 0 &&
    sixth.current[0] < 8 &&
    sixth.current[1] >= 0 &&
    sixth.current[1] < 8
  ) {
    allPossibleSquares.push(sixth);
  }
  if (
    seventh.current[0] >= 0 &&
    seventh.current[0] < 8 &&
    seventh.current[1] >= 0 &&
    seventh[1] < 8
  ) {
    allPossibleSquares.push(seventh);
  }
  if (
    eight.current[0] >= 0 &&
    eight.current[0] < 8 &&
    eight.current[1] >= 0 &&
    eight.current[1] < 8
  ) {
    allPossibleSquares.push(eight);
  }
  return allPossibleSquares;
};
// Declare explore function
let explore = function (start, goal) {
  let queue = [];
  const visited = new Set();
  queue.push(start);
  let goalKey = goal.toString();
  // While the length of our queue is more than 0
  while (queue.length > 0) {
    // I take the first position
    const square = queue.shift();
    let theKey = square.current.toString();
    visited.add(theKey);
    // find all possible squares for this shifter square
    let allPossibleSquares = find(square);
    // check if one of the square is the goal
    for (possibleSquare of allPossibleSquares) {
      let key = possibleSquare.current.toString();
      if (key == goal) {
        // console.log("Found the goal");
        return possibleSquare;
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

knightMoves([0, 0], [7, 7]);
