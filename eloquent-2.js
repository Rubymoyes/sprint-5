/* Just a quick note:
Won't lie, I had real trouble with these exercises. I will have to definitely re-visit some of the javascript reading material, 
since this stuff really didn't come easy to me at all - I can look back on resources and find some solutions to problems but not all.
Some things really just go over my head, or even after reading them I still don't understand them.

I didn't actually solve any of these exercises on my own - apart from the optional bit of exercise 2, after a lot of attempts
I did spent well over four hours, but there was still a lot of stuff I couldn't crack.
For now, I will just try to describe how the code works.

Also, if you guys have any reading material or examples that really helped the learning for you guys, please please send it through! 
I am dying to be able to figure this stuff out on my own.
Thank you!!

*/


// Exercise 1: Looping a Triangle

    for (let line = "#"; line.length < 8; line += "#")
    console.log(line);

    /* Code Solution

    I knew that the for () would create a loop, so that made sense. I also understand that (line.length < 8) would equal to a line 
    length of 7.
    I know that += is the addition assignment operator, which adds value, so it adds an additional "#" each line up until the 7th line.
    */



// Exercise 2: FizzBuzz

    for (let n = 1; n <= 100; n++) {
        let output = "";
        if (n % 3 == 0) 
    output += "Fizz";
        if (n % 5 == 0) 
    output += "Buzz";
        console.log(output || n);
    }

    // Adding code to output FizzBuzz for numbers divisible by 3 and 5

    for (let n = 1; n <= 100; n++) {
        let output = "";
        if (n % 3 == 0) 
    output += "Fizz";
        if (n % 5 == 0) 
    output += "Buzz";

    if (n % 3, 5 == 0)
    output += "FizzBuzz"

        console.log(output || n);
    }

    /* Code Solution

    I understand that for () creates a loop.
    let n = 1; defines n.
    n <= 100; means that the loop will stop looping the output after 100 loops.
    n++ is the increment operator which means that each loop will add +1. 
    if () { ... } creates conditions. If/else is not applicable, since the only 3 conditions needed include definitions 
        and the rest remain as numbers.
    % is the remainder. n % 3 == 0 means that any number (n) divisible by 3 will have an output of Fizz. (output += "Fizz";)'
    This is repeated, but for Buzz as divisibles of 5.
    console.log(output || n); means that the console will either have an outcome of the output (the number unchanged if it is
        not a number divisible by 3 or 5) or it will come back as n, which is defined by the (if) rules.

    All other numbers are excluded from the if rules by default.

    Things I am still unsure of:
    - Exactly why the let output = "" is needed. If console.log exists, is let output still necessary?

    */




// Exercise 3

    var size = 8;

    var board = "";

    for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
        if ((x + y) % 2 == 0)
        board += " ";
        else
        board += "#";
    }
    board += "\n";
    }

    console.log(board);

    /* Code Solution

    I found this exercise to be exceptionally difficult to understand. 

    for (var y = 0; y < size; y++) { and
    for (var x = 0; x < size; x++) {
    
    I'm not entirely sure exactly what they do, but I do know that the binding size of the board is set to 8, so that
        it doesn't go < size - which in this case is 8.
    I understand how the if/else conditions work, and I can see the basics of how the "#" and the " " board outcomes work.

    What I don't understand:
    - How to define this line: if ((x + y) % 2 == 0)
    - How to define this line: board += "\n";
    - How the code defines "board" if one board loops with the x axis (aka var x) and the other doesn't.

    */