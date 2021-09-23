function findMaxEven(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (numbers[i]%2===0 && numbers[i]>element ) {
            evenNumbers =   element;
        }
    }
}