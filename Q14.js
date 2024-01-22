// Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.

// Function checks if the array 'nums' contains either 1 or 3
function contains13(nums) {
    // Check if 1 is present at any index or 3 is present at any index
    if (nums.indexOf(1) !== -1 || nums.indexOf(3) !== -1) {
        // Return true if either 1 or 3 is found
        return true;
    } else {
        // Return false if neither 1 nor 3 is found
        return false;
    }
}

// Example usage of the contains13 function
console.log(contains13([1, 5]));   
console.log(contains13([2, 3]));    
console.log(contains13([7, 5])); 