/*
  Project Euler - Problems 1-3
  Problem 1: Finds the sum of multiples of 3 and 5, from 0 to 1000.
  http://projecteuler.net/problem=1
  
  Problem 2: Finds the sum of even-valued Fibonacci numbers from 1 to 4,000,000.
  https://projecteuler.net/problem=2
  
  Problem 3:
  Finds the largest prime factor of 600851475143.
  https://projecteuler.net/problem=3
*/

//Problem 1
var problemOne = function(input)
{
	var sum = 0;

	for (var i = 0; i < input; i++)
	{
	  if (i % 3 === 0 || i % 5 === 0) { sum += i; }
	}

	return sum;
}

//Problem 2
var problemTwo = function(input)
{
	var sum = 0;
	var fibonacci = [0,1,0];
	
	while (fibonacci[2] <= input)
	{
		fibonacci[2] = fibonacci[0] + fibonacci[1];
		if (fibonacci[2] % 2 === 0) { sum += fibonacci[2]; }
		fibonacci[0] = fibonacci[1];
		fibonacci[1] = fibonacci[2];
	}

	return sum;
}

//Problem 3 - Solves for primes < 1000. The commented out section solves for largest possible, with an appropriate hit in speed.
var problemThree = function(input)
{
	var divisor = 1000;
	//var divisor = input - 1;

	var isPrime = function(divisor)
	{
		for (var i = 2; i < divisor; i++)
		{
			if (divisor % i === 0) { return false; }
		}
		return true;
	}

	while (divisor > 1)
	{
		if (isPrime(divisor) && input % divisor === 0) { return divisor; }
		divisor--
	}

	return input;
}

//User input and selection of problem to solve.
var problem = prompt("Please select which Project Euler problem to solve for, number only.");
var input = prompt("Please enter your selected input.");

switch(problem)
{
	case '1':
		console.log("Multiples of Three and Five.");
		console.log("The sum of all multiples of three and five between 0 and " + input + " is " + problemOne(input) + ".");
		break;
		
	case '2':
		console.log("Even Fibonacci Numbers.");
		console.log("The sum of even-valued Fibonacci numbers from 1 to " + input + " is " + problemTwo(input) + ".");
		break;	
		
	case '3':
		console.log("Largest Prime Factor.");
		console.log("The largest prime factor of " + input + ", less than a thousand, is " + problemThree(input) + ".");
		//console.log("The largest prime factor of " + input + " is " + problemThree(input) + ".");
		break;
		
	default:
		console.log("Please enter the number of the problem you'd like solved, from 1 to 3.");
}