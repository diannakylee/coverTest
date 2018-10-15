// Question for verifying prices to see if employee is embezzling

function verifyItems(origItems, origPrices, items, prices) {
    // Compare origItems: origPrices with items: prices
    // create a counter for price matches
    let count = 0
    // create an array that saves the index of matched item in origItems
    let origMatch = []
    // create an array that saves the index of matched item in items
    let itemMatch = []

    // Loop through the array of origItems and map through the array of items to find matches, push index into respective array
    for (let i = 0; i < origItems.length; i++) {
        for (let b = 0; b < items.length; b++) {
            if (origItems[i] == items[b]) {
                origMatch.push(i);
                itemMatch.push(b)
            }
        }
    }
    console.log(`origMatch`, origMatch);
    console.log(`itemMatch`, itemMatch);
    
    // if origMatch is greater than 0, check origPrices vs prices based on the index set up in origMatch and itemMatch
    if (origMatch.length > 0) {
        for (let i = 0; i < origMatch.length; i++) {
                if (origPrices[origMatch[i]] < prices[itemMatch[i]]) {
                    count = count + 1
                }    
        }
        console.log(`final count`, count);
        return count;
    }
}

// Given test case:
verifyItems(['rice', 'sugar', 'wheat', 'cheese'], [16.89, 56.92, 20.89, 345.99], ['rice', 'cheese'], [18.99, 400.89]);

// Two Arrays of Positive Integers

function counts(nums, maxes) {
    // create an array of arrays to push items into
    let total=[[],[],[],[],[]]
    // create a final count array that will display the numbers of matched items
    let final = []
    // loop through maxes
    for (let i = 0; i < maxes.length; i++) {
        // loop through nums to compare
        for(let z =0; z < nums.length; z++) {
            //if nums is less than or equal to max number, push into the total array per index number
            if (nums[z] <= maxes[i]) {
                total[i].push(nums[z]);
            }
        }
    }

    // map through total array, for each array inside, push the array length into an array called final
    total.map((item)=> {
        final.push(item.length)
    })

    // new final creates a new array from final that shortens it down to create an array length that matches the length of maxes.length
    let newfinal = final.slice(0, maxes.length)
    console.log(`new final`, newfinal);
    
}

counts([1, 4, 2, 4], [3, 5]);
// Alternative test case:
// counts([2, 10, 5, 4, 8], [3, 1, 7, 8]);



const app = {}

app.deleteThis = () => {
    $('#todo-list').on('click', '#trash', function () {
        console.log(`button was clicked`);
        $(this).parent().remove();
    });
}

app.addNewItem = () => {
    $("input").keyup(function (event) {
        if (event.keyCode === 13) {
            let item = $('input').val().trim();
            console.log(`item`, item);
            const toDo = `<li class="toDoItem"><div class="view"><input class="toggle" type="checkbox"><label for="checkbox">${item}</label><button id="trash" class="trash"><i class="fas fa-trash-alt"></i></button></div></li>`
            $(`#todo-list`).append(toDo)
        }
    });
    app.clearInput();
    app.deleteThis();
    console.log(`item`, item);
}


app.init = function () {
    app.addNewItem();
}

$(function () {
    app.init();
});