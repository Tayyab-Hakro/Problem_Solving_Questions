function slidingPuzzle(board) {
    const target = "123450";
    const start = board.flat().join("");

    // Neighbor indices for each position on the 2x3 board
    const neighbors = {
        0: [1, 3],
        1: [0, 2, 4],
        2: [1, 5],
        3: [0, 4],
        4: [1, 3, 5],
        5: [2, 4],
    };

    const queue = [[start, 0]]; // [state string, move count]
    const visited = new Set();
    visited.add(start);

    while (queue.length) {
        const [state, moves] = queue.shift();
        if (state === target) return moves;

        const zeroIndex = state.indexOf("0");
        for (const neighbor of neighbors[zeroIndex]) {
            const newStateArr = state.split("");
            [newStateArr[zeroIndex], newStateArr[neighbor]] = [newStateArr[neighbor], newStateArr[zeroIndex]];
            const newState = newStateArr.join("");

            if (!visited.has(newState)) {
                visited.add(newState);
                queue.push([newState, moves + 1]);
            }
        }
    }

    return -1;
}
