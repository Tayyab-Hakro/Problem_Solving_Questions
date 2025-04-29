function findThePrefixCommonArray(A, B) {
    const n = A.length;
    const seenA = new Set();
    const seenB = new Set();
    const C = [];
    let count = 0;
    
    for (let i = 0; i < n; i++) {
        seenA.add(A[i]);
        seenB.add(B[i]);
        
        if (seenA.has(B[i])) count++;
        if (seenB.has(A[i]) && A[i] !== B[i]) count++;
        
        C.push(count);
    }
    
    return C;
}

console.log(findThePrefixCommonArray([1,3,2,4],  [3,1,2,4]))