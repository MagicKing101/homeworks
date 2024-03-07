'use strict';

// 1-е задание

function solveEquation(a, b, c) {
	let roots = [];
	let discriminant = b ** 2 - 4 * a * c;
	if (discriminant < 0) {
		return roots;
	} else if (discriminant === 0) {
		roots.push(-b / (2 * a))
		return roots;
	} else {
		roots.push((-b + Math.sqrt(discriminant)) / (2 * a));
		roots.push((-b - Math.sqrt(discriminant)) / (2 * a));
		return roots;
	}
}

// 2-е задание

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent /= 100;
	let interestRate = 1 / 12 * percent; // P
	let loanBody = amount - contribution; // S
	let payment = loanBody * (interestRate + (interestRate / (((1 + interestRate) ** countMonths) - 1)));
	let amountPayments = payment * countMonths;
	return amountPayments.toFixed(2);
}