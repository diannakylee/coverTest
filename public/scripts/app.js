(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// Question for verifying prices to see if employee is embezzling
function verifyItems(origItems, origPrices, items, prices) {
  // Compare origItems: origPrices with items: prices
  // create a counter for price matches
  var count = 0; // create an array that saves the index of matched item in origItems

  var origMatch = []; // create an array that saves the index of matched item in items

  var itemMatch = []; // Loop through the array of origItems and map through the array of items to find matches, push index into respective array

  for (var i = 0; i < origItems.length; i++) {
    for (var b = 0; b < items.length; b++) {
      if (origItems[i] == items[b]) {
        origMatch.push(i);
        itemMatch.push(b);
      }
    }
  }

  console.log("origMatch", origMatch);
  console.log("itemMatch", itemMatch); // if origMatch is greater than 0, check origPrices vs prices based on the index set up in origMatch and itemMatch

  if (origMatch.length > 0) {
    for (var _i = 0; _i < origMatch.length; _i++) {
      if (origPrices[origMatch[_i]] < prices[itemMatch[_i]]) {
        count = count + 1;
      }
    }

    console.log("final count", count);
    return count;
  }
} // Given test case:


verifyItems(['rice', 'sugar', 'wheat', 'cheese'], [16.89, 56.92, 20.89, 345.99], ['rice', 'cheese'], [18.99, 400.89]); // Two Arrays of Positive Integers

function counts(nums, maxes) {
  // create an array of arrays to push items into
  var total = [[], [], [], [], []]; // create a final count array that will display the numbers of matched items

  var final = []; // loop through maxes

  for (var i = 0; i < maxes.length; i++) {
    // loop through nums to compare
    for (var z = 0; z < nums.length; z++) {
      //if nums is less than or equal to max number, push into the total array per index number
      if (nums[z] <= maxes[i]) {
        total[i].push(nums[z]);
      }
    }
  } // map through total array, for each array inside, push the array length into an array called final


  total.map(function (item) {
    final.push(item.length);
  }); // new final creates a new array from final that shortens it down to create an array length that matches the length of maxes.length

  var newfinal = final.slice(0, maxes.length);
  console.log("new final", newfinal);
}

counts([1, 4, 2, 4], [3, 5]); // Alternative test case:
// counts([2, 10, 5, 4, 8], [3, 1, 7, 8]);

var app = {};

app.deleteThis = function () {
  $('#todo-list').on('click', '#trash', function () {
    console.log("button was clicked");
    $(this).parent().remove();
  });
};

app.addNewItem = function () {
  $("input").keyup(function (event) {
    if (event.keyCode === 13) {
      var _item = $('input').val().trim();

      console.log("item", _item);
      var toDo = "<li class=\"toDoItem\"><div class=\"view\"><input class=\"toggle\" type=\"checkbox\"><label for=\"checkbox\">".concat(_item, "</label><button id=\"trash\" class=\"trash\"><i class=\"fas fa-trash-alt\"></i></button></div></li>");
      $("#todo-list").append(toDo);
    }
  });
  app.clearInput();
  app.deleteThis();
  console.log("item", item);
};

app.init = function () {
  app.addNewItem();
};

$(function () {
  app.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBRUEsU0FBUyxXQUFULENBQXFCLFNBQXJCLEVBQWdDLFVBQWhDLEVBQTRDLEtBQTVDLEVBQW1ELE1BQW5ELEVBQTJEO0FBQ3ZEO0FBQ0E7QUFDQSxNQUFJLEtBQUssR0FBRyxDQUFaLENBSHVELENBSXZEOztBQUNBLE1BQUksU0FBUyxHQUFHLEVBQWhCLENBTHVELENBTXZEOztBQUNBLE1BQUksU0FBUyxHQUFHLEVBQWhCLENBUHVELENBU3ZEOztBQUNBLE9BQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQTlCLEVBQXNDLENBQUMsRUFBdkMsRUFBMkM7QUFDdkMsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBMUIsRUFBa0MsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQyxVQUFJLFNBQVMsQ0FBQyxDQUFELENBQVQsSUFBZ0IsS0FBSyxDQUFDLENBQUQsQ0FBekIsRUFBOEI7QUFDMUIsUUFBQSxTQUFTLENBQUMsSUFBVixDQUFlLENBQWY7QUFDQSxRQUFBLFNBQVMsQ0FBQyxJQUFWLENBQWUsQ0FBZjtBQUNIO0FBQ0o7QUFDSjs7QUFDRCxFQUFBLE9BQU8sQ0FBQyxHQUFSLGNBQXlCLFNBQXpCO0FBQ0EsRUFBQSxPQUFPLENBQUMsR0FBUixjQUF5QixTQUF6QixFQW5CdUQsQ0FxQnZEOztBQUNBLE1BQUksU0FBUyxDQUFDLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDdEIsU0FBSyxJQUFJLEVBQUMsR0FBRyxDQUFiLEVBQWdCLEVBQUMsR0FBRyxTQUFTLENBQUMsTUFBOUIsRUFBc0MsRUFBQyxFQUF2QyxFQUEyQztBQUNuQyxVQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRCxDQUFWLENB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QSxHQUFHLENBQUMsVUFBSjtBQUNBLEVBQUEsR0FBRyxDQUFDLFVBQUo7QUFDQSxFQUFBLE9BQU8sQ0FBQyxHQUFSLFNBQW9CLElBQXBCO0FBQ0gsQ0FaRDs7QUFlQSxHQUFHLENBQUMsSUFBSixHQUFXLFlBQVk7QUFDbkIsRUFBQSxHQUFHLENBQUMsVUFBSjtBQUNILENBRkQ7O0FBSUEsQ0FBQyxDQUFDLFlBQVk7QUFDVixFQUFBLEdBQUcsQ0FBQyxJQUFKO0FBQ0gsQ0FGQSxDQUFEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gUXVlc3Rpb24gZm9yIHZlcmlmeWluZyBwcmljZXMgdG8gc2VlIGlmIGVtcGxveWVlIGlzIGVtYmV6emxpbmdcblxuZnVuY3Rpb24gdmVyaWZ5SXRlbXMob3JpZ0l0ZW1zLCBvcmlnUHJpY2VzLCBpdGVtcywgcHJpY2VzKSB7XG4gICAgLy8gQ29tcGFyZSBvcmlnSXRlbXM6IG9yaWdQcmljZXMgd2l0aCBpdGVtczogcHJpY2VzXG4gICAgLy8gY3JlYXRlIGEgY291bnRlciBmb3IgcHJpY2UgbWF0Y2hlc1xuICAgIGxldCBjb3VudCA9IDBcbiAgICAvLyBjcmVhdGUgYW4gYXJyYXkgdGhhdCBzYXZlcyB0aGUgaW5kZXggb2YgbWF0Y2hlZCBpdGVtIGluIG9yaWdJdGVtc1xuICAgIGxldCBvcmlnTWF0Y2ggPSBbXVxuICAgIC8vIGNyZWF0ZSBhbiBhcnJheSB0aGF0IHNhdmVzIHRoZSBpbmRleCBvZiBtYXRjaGVkIGl0ZW0gaW4gaXRlbXNcbiAgICBsZXQgaXRlbU1hdGNoID0gW11cblxuICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgYXJyYXkgb2Ygb3JpZ0l0ZW1zIGFuZCBtYXAgdGhyb3VnaCB0aGUgYXJyYXkgb2YgaXRlbXMgdG8gZmluZCBtYXRjaGVzLCBwdXNoIGluZGV4IGludG8gcmVzcGVjdGl2ZSBhcnJheVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3JpZ0l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGIgPSAwOyBiIDwgaXRlbXMubGVuZ3RoOyBiKyspIHtcbiAgICAgICAgICAgIGlmIChvcmlnSXRlbXNbaV0gPT0gaXRlbXNbYl0pIHtcbiAgICAgICAgICAgICAgICBvcmlnTWF0Y2gucHVzaChpKTtcbiAgICAgICAgICAgICAgICBpdGVtTWF0Y2gucHVzaChiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBvcmlnTWF0Y2hgLCBvcmlnTWF0Y2gpO1xuICAgIGNvbnNvbGUubG9nKGBpdGVtTWF0Y2hgLCBpdGVtTWF0Y2gpO1xuICAgIFxuICAgIC8vIGlmIG9yaWdNYXRjaCBpcyBncmVhdGVyIHRoYW4gMCwgY2hlY2sgb3JpZ1ByaWNlcyB2cyBwcmljZXMgYmFzZWQgb24gdGhlIGluZGV4IHNldCB1cCBpbiBvcmlnTWF0Y2ggYW5kIGl0ZW1NYXRjaFxuICAgIGlmIChvcmlnTWF0Y2gubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9yaWdNYXRjaC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChvcmlnUHJpY2VzW29yaWdNYXRjaFtpXV0gPCBwcmljZXNbaXRlbU1hdGNoW2ldXSkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCA9IGNvdW50ICsgMVxuICAgICAgICAgICAgICAgIH0gICAgXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYGZpbmFsIGNvdW50YCwgY291bnQpO1xuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfVxufVxuXG4vLyBHaXZlbiB0ZXN0IGNhc2U6XG52ZXJpZnlJdGVtcyhbJ3JpY2UnLCAnc3VnYXInLCAnd2hlYXQnLCAnY2hlZXNlJ10sIFsxNi44OSwgNTYuOTIsIDIwLjg5LCAzNDUuOTldLCBbJ3JpY2UnLCAnY2hlZXNlJ10sIFsxOC45OSwgNDAwLjg5XSk7XG5cbi8vIFR3byBBcnJheXMgb2YgUG9zaXRpdmUgSW50ZWdlcnNcblxuZnVuY3Rpb24gY291bnRzKG51bXMsIG1heGVzKSB7XG4gICAgLy8gY3JlYXRlIGFuIGFycmF5IG9mIGFycmF5cyB0byBwdXNoIGl0ZW1zIGludG9cbiAgICBsZXQgdG90YWw9W1tdLFtdLFtdLFtdLFtdXVxuICAgIC8vIGNyZWF0ZSBhIGZpbmFsIGNvdW50IGFycmF5IHRoYXQgd2lsbCBkaXNwbGF5IHRoZSBudW1iZXJzIG9mIG1hdGNoZWQgaXRlbXNcbiAgICBsZXQgZmluYWwgPSBbXVxuICAgIC8vIGxvb3AgdGhyb3VnaCBtYXhlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gbG9vcCB0aHJvdWdoIG51bXMgdG8gY29tcGFyZVxuICAgICAgICBmb3IobGV0IHogPTA7IHogPCBudW1zLmxlbmd0aDsgeisrKSB7XG4gICAgICAgICAgICAvL2lmIG51bXMgaXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIG1heCBudW1iZXIsIHB1c2ggaW50byB0aGUgdG90YWwgYXJyYXkgcGVyIGluZGV4IG51bWJlclxuICAgICAgICAgICAgaWYgKG51bXNbel0gPD0gbWF4ZXNbaV0pIHtcbiAgICAgICAgICAgICAgICB0b3RhbFtpXS5wdXNoKG51bXNbel0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbWFwIHRocm91Z2ggdG90YWwgYXJyYXksIGZvciBlYWNoIGFycmF5IGluc2lkZSwgcHVzaCB0aGUgYXJyYXkgbGVuZ3RoIGludG8gYW4gYXJyYXkgY2FsbGVkIGZpbmFsXG4gICAgdG90YWwubWFwKChpdGVtKT0+IHtcbiAgICAgICAgZmluYWwucHVzaChpdGVtLmxlbmd0aClcbiAgICB9KVxuXG4gICAgLy8gbmV3IGZpbmFsIGNyZWF0ZXMgYSBuZXcgYXJyYXkgZnJvbSBmaW5hbCB0aGF0IHNob3J0ZW5zIGl0IGRvd24gdG8gY3JlYXRlIGFuIGFycmF5IGxlbmd0aCB0aGF0IG1hdGNoZXMgdGhlIGxlbmd0aCBvZiBtYXhlcy5sZW5ndGhcbiAgICBsZXQgbmV3ZmluYWwgPSBmaW5hbC5zbGljZSgwLCBtYXhlcy5sZW5ndGgpXG4gICAgY29uc29sZS5sb2coYG5ldyBmaW5hbGAsIG5ld2ZpbmFsKTtcbiAgICBcbn1cblxuY291bnRzKFsxLCA0LCAyLCA0XSwgWzMsIDVdKTtcbi8vIEFsdGVybmF0aXZlIHRlc3QgY2FzZTpcbi8vIGNvdW50cyhbMiwgMTAsIDUsIDQsIDhdLCBbMywgMSwgNywgOF0pO1xuXG5cblxuY29uc3QgYXBwID0ge31cblxuYXBwLmRlbGV0ZVRoaXMgPSAoKSA9PiB7XG4gICAgJCgnI3RvZG8tbGlzdCcpLm9uKCdjbGljaycsICcjdHJhc2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBidXR0b24gd2FzIGNsaWNrZWRgKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICB9KTtcbn1cblxuYXBwLmFkZE5ld0l0ZW0gPSAoKSA9PiB7XG4gICAgJChcImlucHV0XCIpLmtleXVwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gJCgnaW5wdXQnKS52YWwoKS50cmltKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgaXRlbWAsIGl0ZW0pO1xuICAgICAgICAgICAgY29uc3QgdG9EbyA9IGA8bGkgY2xhc3M9XCJ0b0RvSXRlbVwiPjxkaXYgY2xhc3M9XCJ2aWV3XCI+PGlucHV0IGNsYXNzPVwidG9nZ2xlXCIgdHlwZT1cImNoZWNrYm94XCI+PGxhYmVsIGZvcj1cImNoZWNrYm94XCI+JHtpdGVtfTwvbGFiZWw+PGJ1dHRvbiBpZD1cInRyYXNoXCIgY2xhc3M9XCJ0cmFzaFwiPjxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoLWFsdFwiPjwvaT48L2J1dHRvbj48L2Rpdj48L2xpPmBcbiAgICAgICAgICAgICQoYCN0b2RvLWxpc3RgKS5hcHBlbmQodG9EbylcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGFwcC5jbGVhcklucHV0KCk7XG4gICAgYXBwLmRlbGV0ZVRoaXMoKTtcbiAgICBjb25zb2xlLmxvZyhgaXRlbWAsIGl0ZW0pO1xufVxuXG5cbmFwcC5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGFwcC5hZGROZXdJdGVtKCk7XG59XG5cbiQoZnVuY3Rpb24gKCkge1xuICAgIGFwcC5pbml0KCk7XG59KTsiXX0=
