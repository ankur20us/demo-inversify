/**
 * This file is basically a key:val pair of unique VAL's with unique KEY's, 
 * we ca have any normal unique string so that while asking the CONTAINER for the object, 
 * it will be useful, we are creating the mapping in "container.ts"
 */
const TYPES = {
    Addition: Symbol.for("Addition"),
    Substraction: Symbol.for("Substraction"),
    Division: Symbol.for("Division"),
    Multiplication: Symbol.for("Multiplication")
};

export default TYPES;