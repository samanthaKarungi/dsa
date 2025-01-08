## accessor functions

JavaScript provides a set of functions you can use to access the elements of an array.
These functions, called accessor functions, return some representation of the target array
as their return values

# Searching for a value

- indexOf()

looks to see if the argument passed to the function is found in the array. If the argument is contained in the array, the function returns the index position of the argument.

If you have multiple occurrences of the same data in an array, the indexOf() function
will always return the position of the first occurrence

- lastIndexOf()

lastIndexOf(), will return the position of the last occurrence of the argument in the array, or -1 if the argument isn’t found

## string representation of arrays

There are two functions that return string representations of an array

- join()

- toString()

Both functions return a string containing the elements of the array de‐limited by commas


## creating new arrays from existing arrays

There are two accessor functions that allow you create new arrays from existing arrays

- concat()

allows you to put together two or more arrays to create a new array
- splice()

allows you to create a new array from a subset of an existing array.


## mutator functions

allow you to modify the contents of an array without referencing the individual elements.

# adding elements to an array

There are two mutator functions for adding elements to an array

- push()

function adds an element to the end of an array

- unshift()

# removing elements from an array

There are two mutator functions for removing elements from an array

- pop()

function removes the last element of an array and returns that element

- shift()

function we need to remove an element from the beginning of an array

# adding and removing elements from the middle of an array

- splice()

To add elements to an array using splice(), you have to provide the following arguments:
• The starting index (where you want to begin adding elements)
• The number of elements to remove (0 when you are adding elements)
• The elements you want to add to the array


# putting array elements in order

- reverse()

used to arrange array elements into some type of order. reverses the order of the elements of an array

- sort()

sort the elements of an array into order. The sort() function sorts data lexicographically, assuming the data elements are strings.

We can make the
sort() function work correctly for numbers by passing in an ordering function as the
first argument to the function, which sort() will then use to sort the array elements.
This is the function that sort() will use when comparing pairs of array elements to
determine their correct order.
For numbers, the ordering function can simply subtract one number from another
number. If the number returned is negative, the left operand is less than the right
operand; if the number returned is zero, the left operand is equal to the right operand;
and if the number returned is positive, the left operand is greater than the right operand.


## Iterator functions

functions apply a function to each element of an array either returning a value, a set of values, or a new array after applying the function to each element of an array.

the first 4 do not generate a new array; performs an operation on each element of an array or generate a single value from an array.

- forEach()

takes a function as an argument
and applies the called function to each element of an array. 

- some()

function will take a Boolean function and return true if at least one of the elements in the array meets the criterion of the Boolean function

- every()

applies a Boolean function to an array and returns true if the function can return true for every element in the array

- reduce()

applies a function to an accumulator and the successive elements of an array until the end of the array is reached yielding a single value.


these return a new array

- map()

The map() function works like the forEach() function applying a function to each element of an array. The difference between the two functions is that map() returns a new array with the results of the function application.

- filter()

function returns a new array consisting of those elements that satisfy the Boolean function provided.