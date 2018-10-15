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