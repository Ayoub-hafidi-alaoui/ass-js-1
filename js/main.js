// Q1
function print() {
    var input = prompt("please enter a number")
    console.log(input)
}
//print()

// Q2
function dividedByThree() {
    var input = prompt("please enter a number")
    if(input % 3 == 0) {
        console.log("output yes")
    }
    else {
        console.log("output no")
    }
}
//dividedByThree()

// Q3:
function max() {
    var input1 = prompt("please type the first number")
    var input2  = prompt("please type the second number")
    if(input1 > input2) {
        console.log(input1)
    }
    else {
        console.log(input2)
    }
}
// max()

// Q4:
function checkPositiveNumber() {
    var input = prompt("please type a number")
    if(input >= 0) {
        console.log("positive")
    }
    else {
        console.log("negative")
    }
}
//checkPositiveNumber()


//Q5
function max_min_three_elements() {
    var input1 = prompt("please type the first number")
    var input2 = prompt("please type the second number")
    var input3 = prompt("please type the third number")

    if(input1 > input2 && input1 > input3) {
        console.log("max element: ", input1)
        if(input2 > input3) {
            console.log("min element: ", input3)
        }
        else {
            console.log("min element: ", input2)
        }
    }
    if(input2 > input1 && input2 > input3) {
        console.log("max element: ", input2)
        if(input1 > input3) {
            console.log("min element: ", input3)
        }
        else {
            console.log("min element: ", input1)
        }
    }
    if(input3 > input1 && input3 > input2) {
        console.log("max element: ", input3)
        if(input1 > input2) {
            console.log("min element: ", input2)
        }
        else {
            console.log("min element: ", input1)
        }
    }
}

//max_min_three_elements()

// Q6:
function number_even_odd() {
    var input = prompt("please type a number")
    if(input %2 == 0) {
        console.log("even")
    }
    else {
        console.log("odd")
    }
}

// number_even_odd()

// Q7:
function isVowel() {
    var input = prompt("please type a letter")
     if(input.toLowerCase() === 'a' || input ==='e' || input ==='i' || input ==='o' || input ==='u') {
        console.log("vowel")
     }
     else {
        console.log("consonent")
     }
}
// isVowel()

// Q9:
function rangeToNumber() {
    var input = prompt("please type a number")
    for(var i =0; i<input+1; i++) {
        console.log(i)
    }
}

// rangeToNumber()

// Q10:
function table_multiplication_to_12() {
    var input  = prompt("please type a number")
    for(var i=1;i<13;i++) {
        console.log(input * i )
    }
}

// table_multiplication_to_12()

// Q11:
function printAllEvenNumbers() {
    var input = prompt("please type a number")
    for(var i = 0;i< input;i++) {
        if(i%2 == 0) {
            console.log(i)
        }
    }
}

//printAllEvenNumbers()

//Q12:
function powerOfNumner() {
    var number = prompt("please type a number")
    var power = prompt("please type a power")
    var result = number
    for(var i=1;i<power;i++) {
        result *=number
    }
    console.log(result)
}

// powerOfNumner()

function total_average_pourcentage() {
    var mark1 = Number(prompt("please type the first mark"))
    var mark2 = Number(prompt("please type the second mark"))
    var mark3 = Number(prompt("please type the third mark"))
    var mark4 = Number(prompt("please type the fourth mark"))
    var mark5 = Number(prompt("please type the fifth mark"))

    var total = mark1 + mark2 + mark3 + mark4 + mark5
    var average = total / 5
    var pourcentage = total / 5
    console.log("total: ", total)
    console.log("average: ", average)
    console.log("pourcentage: ", pourcentage)
}

//total_average_pourcentage()


// Q13:
function daysOfTheMounth() {
    var input = Number(prompt("please type the mounth"))
    if(input == 2) {
        console.log("Days in mounth: ", 28)
    }
    else if(input % 2 == 0) {
        console.log("Days in mounth: ", 30)
    }
    else {
        console.log("Days in mounth: ", 31)
    }
}

// daysOfTheMounth()

// Q14:
function pourcentageAndGrade() {
    var physics_mark = Number(prompt("please type the mark of physics"))
    var chemistry_mark = Number(prompt("please type the mark of chemistry "))
    var biologie_mark = Number(prompt("please type the mark of biology "))
    var maths_mark = Number(prompt("please type the mark of maths"))
    var computer_mark = Number(prompt("please type the mark of computer"))

    var pourcentage = ((physics_mark + chemistry_mark + biologie_mark + maths_mark + computer_mark)/5)
    if(pourcentage >= 90) {
        console.log("Percentage >= 90% Grade A")
        return 
    }
    if(pourcentage >= 80) {
        console.log("Percentage >= 80% Grade B")
        return
    }
    if(pourcentage >= 70) {
        console.log("Percentage >= 70% Grade C")
        return
    }
    if(pourcentage >= 60) {
        console.log("Percentage >= 60% Grade D")
        return
    }
    if(pourcentage >= 40) {
        console.log("Percentage >= 40% Grade E")
        return
    }
    else {
        console.log("Percentage < 40% Grade F")
    }
}

// pourcentageAndGrade()

// Q15:
function totalDaysofTheMounth() {
    var input = Number(prompt("please type the number of the mounth"))

    switch(input) {
        case 1:
            console.log("number of days 31")
            break;
        case 2:
            console.log("number of days 28")
            break;
        case 3:
            console.log("number of days 31")
            break;
        case 4:
            console.log("number of days 30")
            break;
        case 5:
            console.log("number of days 31")
            break;
        case 6:
            console.log("number of days 30")
            break;
        case 6:
            console.log("number of days 30")
            break;
        case 7:
            console.log("number of days 31")
            break;
        case 8:
            console.log("number of days 31")
            break;
        case 10:
            console.log("number of days 30")
            break;
        case 11:
            console.log("number of days 31")
            break;
        case 12:
            console.log("number of days 30")
            break;
    }
}
//totalDaysofTheMounth()

// Q16:

function checkVowelConsonent() {
    var input = prompt("please type the letter").toLowerCase()
    switch(input) {
        case 'a':
            console.log("vowel")
            break
        case 'o':
            console.log("vowel")
            break
        case 'e':
            console.log("vowel")
            break
        case 'u':
            console.log("vowel")
            break
        case 'y':
            console.log("vowel")
            break
        default:
            console.log('consonent');
            break

    }
}

// checkVowelConsonent()

// Q17:

function maximumBetweenTwoNumbers() {
    var number1 = Number(prompt("please type the first number"))
    var number2 = Number(prompt("please type the second number"))

    switch(number1 > number2) {
        case true:
            console.log("max is : ", number1)
            break;
        case false:
            console.log("max is: ", number2)
            break;
    }
}
// maximumBetweenTwoNumbers()

// Q18:

function checkEvenOdd() {
    var input = Number(prompt("please type a number"))
    switch(input %2 == 0) {
        case true:
            console.log("even")
            break;
        case false:
            console.log("odd");
            break;
    }
}

// checkEvenOdd()


// Q19:
function checkNumberNegativePositiveOrZero() {
    var input = Number(prompt("please type a number"))

    switch(input > 0) {
        case true:
            console.log("positive")
            break;
        case false:
            switch (input == 0 ){
                case true:
                    console.log("zero")
                    break;
                case false:
                    console.log("negative")
                    break;
            }
    }

}

// checkNumberNegativePositiveOrZero()

//Q20
function calculator() {
    var number1 = Number(prompt("please tyep the first number"))
    var number2 = Number(prompt("please type the second number"))
    var operation = Number(prompt("please type 1 for addition, 2 for multiplication, 3 for division, 4 fo substruction"))

    switch(operation) {
        case 1:
            console.log(number1 + number2)
            break;
        case 2:
            console.log(number1 * number2);
            break
        case 3:
            console.log(number1 /number2)
            break
        case 4:
            console.log(number1 - number2)
            break
    }
}
calculator()