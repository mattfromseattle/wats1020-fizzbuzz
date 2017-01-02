// Code for the FizzBuzz project for WATS3020

// Count through numbers 1 to 20 and determine if the number is divisible by 3, 5, or both.
for (FizzBuzzNumber = 1; FizzBuzzNumber <= 20; FizzBuzzNumber++) {
    // For each number, do the following: 

    // Is number divisible by 3?
    if (FizzBuzzNumber % 3 === 0) {
        // if yes, check if number is also divisible by 5
        if (FizzBuzzNumber % 5 === 0) {
            // If divisible by 3 AND 5: Print FizzBuzz
            console.log('FizzBuzz');
        } else {
            // If only divisible by 3: Print Fizz
            console.log('Fizz');
        }

    }
    // Is number divisible by 5?
    // If yes: Print Buzz
    else if (FizzBuzzNumber % 5 === 0) {
        console.log('Buzz');
                // Is number NOT divisible by 3 or 5?
        // If yes, Print number
    } else {
        console.log(FizzBuzzNumber);
    }
}