const numbers = [5, 6, 2, 3, 7];

// Manual 
console.log('Math Max Apply', Math.max(5, 6, 2, 3, 7));

// Apply 
console.log('Math Max Apply', Math.max.apply(null, numbers));

// Spread 
console.log('Math Max Spread', Math.max(...numbers));