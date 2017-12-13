const dwayneDiesel = ['Dwayne','"the"', 'Rock', 'Johnson', 'Vin', 'Diesel'];
var newDwayne = document.getElementById('new-dwayne');
var generateDwayne = document.getElementById('generate');

// fisher-yates shuffle from stack overflow
function shuffle(arr) {
    var j, x, i;
    for (i = arr.length-1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    // check if "the" is the last word
    if (arr[arr.length-1]=== '\"the\"'){
        var switchItem = arr[arr.length-1];
       arr[arr.length-1] = arr[arr.length-2];
       arr[arr.length-2] = switchItem;
    }


    return arr;
};

function generateNewDwayne (){
	var newDwayneArr = shuffle(dwayneDiesel);

	console.log(newDwayneArr.toString);
	newDwayne.innerHTML = newDwayneArr.join(' ');
}


generateDwayne.onclick = function(){generateNewDwayne()};

console.log(shuffle(dwayneDiesel));



