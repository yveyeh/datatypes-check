/**
 * Tests the null state of a javascript object.
 * @param arg - The javascript object.
 * @return boolean
 */
const isNull = (arg: any): boolean => arg === null

/**
 * Tests if a javascript object is undefined.
 * @param arg - The javascript object.
 * @return boolean
 */
const isUndefined = (arg: any): boolean => typeof arg === 'undefined' || arg === undefined

/**
 * Tests if a javascript object is defined.
 * @param arg - The javascript object.
 * @return boolean
 */
const isDefined = (arg: any): boolean => arg !== undefined && arg !== null || typeof arg !== 'undefined' && arg !== null

/**
 * Tests if a javascript oject is primitive.
 * @param arg - The javascript object.
 * @return boolean
 */
const isPrimitive = (arg: any): boolean => typeof arg === 'string' || typeof arg === 'number' || typeof arg === 'symbol' || typeof arg === 'boolean'

// Returns if a value is a boolean
const isBoolean = (arg: any): boolean => typeof arg === 'boolean'

// Returns if a value is a string
const isString = (arg: any): boolean => typeof arg === 'string' || arg instanceof String

// Returns if a value is really a number
const isNumber = (arg: any): boolean => typeof arg === 'number' && isFinite(arg)

// Returns if value is a date object
const isDate = (arg: any): boolean => arg instanceof Date

// Returns if a value is a function
const isFunction = (arg: any): boolean => typeof arg === 'function'

// Returns if a value is an array
// ES5 actually has a method for this (ie9+)
// Array.isArray(arg)
const isArray = (arg: any): boolean => arg && typeof arg === 'object' && arg.constructor === Array

// Returns if a value is an object
const isObject = (arg: any): boolean => arg && typeof arg === 'object' && arg.constructor === Object

// Returns if a Symbol
const isSymbol = (arg: any): boolean => typeof arg === 'symbol'

// Returns if a value is a regexp
const isRegExp = (arg: any): boolean => arg && typeof arg === 'object' && arg.constructor === RegExp

// Returns if value is an error object
const isError = (arg: any): boolean => arg instanceof Error && typeof arg.message !== 'undefined'


module.exports = {
    isNull,
    isUndefined,
    isDefined,
    isPrimitive,
    isBoolean,
    isString,
    isNumber,
    isDate,
    isFunction,
    isArray,
    isObject,
    isSymbol,
    isRegExp,
    isError
}