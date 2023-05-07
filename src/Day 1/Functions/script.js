/**
 * @author geekyharsh05
 */

/*
 * Create the function factorial here
 */

const factorial = (n) => (n < 2 ? 1 : n * factorial(n - 1)); // using ternary operator