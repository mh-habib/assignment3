//Kilometer to meter conversion function
function kilometerToMeter(kilometer) {
    if (kilometer < 0 || !Number(kilometer)) {
        return 'Please enter a valid number';
    } else {
        var meter = kilometer * 1000;
        return meter;
    }
}


//Total price calculator for watch, phone and laptop
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return 'Please enter valid number of element.'
    }
    else if (!Number.isInteger(watch) || !Number.isInteger(phone) || !Number.isInteger(laptop)) {
        return 'Please enter integer only'
    } else {
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var totalPrice = watchPrice + phonePrice + laptopPrice;
        return totalPrice;
    }
}


//Total cost for hotel rent
function hotelCost(days) {
    if (days < 0 || !Number(days) || !Number.isInteger(days)) {
        return 'Please enter valid number of days.';
    } else {
        if (days <= 10) {
            var totalCost = 100 * days;
        } else if (days <= 20) {
            var costUpToTen = 10 * 100;
            var costUpToTwenty = (days - 10) * 80;
            var totalCost = costUpToTen + costUpToTwenty;
        } else {
            var costUpToTen = 10 * 100;
            var costUpToTwenty = 10 * 80;
            var costOfRest = (days - 20) * 50;
            var totalCost = costUpToTen + costUpToTwenty + costOfRest;
        }
        return totalCost;
    }
}


//Find Largest name from array
function megaFriend(allFriends) {
    if (allFriends.length == 0 || !Array.isArray(allFriends)) {
        return 'Please Insert an Array with names.';
    } else {
        var allLength = [];
        for (var i = 0; i < allFriends.length; i++) {
            var singleLength = allFriends[i].length;
            allLength.push(singleLength);
        }
        var max = allLength[0];
        for (let index = 0; index < allLength.length; index++) {
            if (allLength[index] > max) {
                max = allLength[index];
                var megaPosition  = index;
            }
        }
        return allFriends[megaPosition];
    }

}


var result = kilometerToMeter(4);
console.log(result);

var result = budgetCalculator(2, -3, 2);
console.log(result);

var result = hotelCost(15);
console.log(result);

var friends = ['Md. Nazimul Islam', 'Abdul Momin', 'Md. Sohel Rana', 'Md. Hafizur Rashid', 'Shuvo Roy', 'Ram Jivan mahato'];
var largeName = megaFriend(friends);
console.log(largeName);