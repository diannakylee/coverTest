// Two Arrays of Positive Integers

function counts(nums, maxes) {
    // create an array of arrays to push items into
    let total = [[], [], [], [], []]
    // create a final count array that will display the numbers of matched items
    let final = []
    // loop through maxes
    for (let i = 0; i < maxes.length; i++) {
        // loop through nums to compare
        for (let z = 0; z < nums.length; z++) {
            //if nums is less than or equal to max number, push into the total array per index number
            if (nums[z] <= maxes[i]) {
                total[i].push(nums[z]);
            }
        }
    }

    // map through total array, for each array inside, push the array length into an array called final
    total.map((item) => {
        final.push(item.length)
    })

    // new final creates a new array from final that shortens it down to create an array length that matches the length of maxes.length
    let newfinal = final.slice(0, maxes.length)
    console.log(`new final`, newfinal);

}

counts([1, 4, 2, 4], [3, 5]);
// Alternative test case:
// counts([2, 10, 5, 4, 8], [3, 1, 7, 8]);

