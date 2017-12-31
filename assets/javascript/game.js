// // Define target number 
let random_result;
let lose = 0;
let win = 0;
let previous = 0;

//Random number to guess should generate at the beginning of game


const resetAndStart = function () {

	$(".crystals").empty();

	random_result = Math.floor(Math.random() * 60) + 30;

//console.log(random_result)


	$("#result").html('Number to Guess: ' + random_result);

// //Give each of the four crystals a random value when clicked 
	for (let i = 0; i < 4; i++){

		let random = Math.floor(Math.random() * 12) + 1;
		//console.log(random)
			const crystal = $("<div>");
				crystal.attr({
					"class": 'crystal',
					"data-random": random 
			});

		$(".crystals").append(crystal);
	}

$("#previous").html("Your Score:" + previous)
	
}


		resetAndStart();


//making crystal responsive to click

$(document).on('click', ".crystal", function () {

//turn sring into a number that can be added

	let num = parseInt($(this).attr('data-random'));

	previous += num;  

	$("#previous").html("Your Score:" + previous);
	

	console.log(previous);

//if the current score if over the target number the user loses games
	if(previous > random_result) {
		lose++;

		$("#lose").html("You lost:" + lose); 

		previous = 0;

		
		resetAndStart();

	}

	//if the current score is equal to the target number user wins
		else if(previous === random_result) {

			win++;

			$("#win").html("You Won:" + win);

			previous = 0;



		resetAndStart();

		}
});




// //if user wins, the score tally will increase 
//if user loses, lost tally increases

