const calculateNthFibonacciNumber = (n: number): number => {
    const MIN_INDEX = 2;
    const fibSequence: number[] = [0, 1];

    for (let index = MIN_INDEX; index <= n; index++) {
        const nextNumber = fibSequence[index - 1] + fibSequence[index - 2];
        fibSequence.push(nextNumber);
    }

    return fibSequence[n];
};

console.log(calculateNthFibonacciNumber(10));  // Output: 55
