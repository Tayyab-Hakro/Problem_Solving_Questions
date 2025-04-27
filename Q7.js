function deckRevealedIncreasing(deck) {
    deck.sort((a, b) => a - b); // Sort the deck in ascending order
    let queue = [];
  
    for (let i = deck.length - 1; i >= 0; i--) {
      if (queue.length > 0) {
    console.log(  queue.unshift())   // Move bottom card to top
      }
      queue.unshift(deck[i]); // Put the current biggest card at top
    }
  
    return queue;
  }
  
  // Example usage:
  const deck = [17, 13, 11, 2, 3, 5, 7];
  console.log(deckRevealedIncreasing(deck)); 
  // Output: [2, 13, 3, 11, 5, 17, 7]
  