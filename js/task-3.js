function filterArray(numbers, value) {
	// Порожній масив для підходящих чисел
	const filteredNumbers = [];

	// Ітерація кожного елемента масиву numbers
	for (let i = 0; i < numbers.length; i++) {
		// Перевірка, чи число більше за значення value
		if (numbers[i] > value) {
			// Додавання числа до відфільтрованого масиву
			filteredNumbers.push(numbers[i]);
		}
	}

	// Повертаємо відфільтрований масив
	return filteredNumbers;
}

// Перевірка роботи функції
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
