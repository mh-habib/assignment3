//1. Kilometer to meter conversion calculator function
function kilometerToMeter(kilometer) {
    if (kilometer < 0 || !Number(kilometer)) {
        return 'Please enter a valid number';
    } else {
        var meter = kilometer * 1000; 
        return meter;
    }
}


//2. Total budget calculator for watch, phone and laptop
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


//3. Total cost for hotel rent
function hotelCost(days) {
    if (days < 0 || !Number(days) || !Number.isInteger(days)) {
        return 'Please enter valid number of days.';
    } else {
        if (days <= 10) {
            var totalCost = 100 * days; //Total cost up to 10 days.
        } else if (days <= 20) {
            var costUpToTen = 10 * 100;
            var costUpToTwenty = (days - 10) * 80;
            var totalCost = costUpToTen + costUpToTwenty; //Total cost up to 20 days.
        } else {
            var costUpToTen = 10 * 100;
            var costUpToTwenty = 10 * 80;
            var costOfRest = (days - 20) * 50;
            var totalCost = costUpToTen + costUpToTwenty + costOfRest; //Total cost above 20 days.
        }
        return totalCost;
    }
}


//4. Find Largest name from array
function megaFriend(allFriends) {
    if (allFriends.length == 0 || !Array.isArray(allFriends)) {
        return 'Please Insert an Array with names.';
    } else {
        var allLength = []; 
        for (var i = 0; i < allFriends.length; i++) {
            var singleLength = allFriends[i].length;
            allLength.push(singleLength);  //Formation of an array with the lrngth mnames.
        }
        var max = allLength[0]; 
        for (let index = 0; index < allLength.length; index++) {
            if (allLength[index] > max) {
                max = allLength[index];
                var megaPosition = index; //Mega name's position identification.
            }
        }
        return allFriends[megaPosition];
    }

}