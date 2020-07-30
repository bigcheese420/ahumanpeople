var clicks = 0;
var cursors = 0;
var cursorCost = Math.floor(15 * Math.pow(1.25, cursors)); // generates cost of cursor

function clickHere(num)
{
    clicks += num; // adds clicks and display them
    document.getElementById("clicks").innerHTML = clicks;
}

function buyCursor()
{
    if (clicks >= cursorCost) // checks if play can afford new cursor
    {
        cursors++; // adds a new cursor
        clicks -= cursorCost; // removes clicks spent
        document.getElementById("cursors").innerHTML = cursors; // update cursor amount
        document.getElementById("clicks").innerHTML = clicks; // update click amount
    }
    cursorCost = Math.floor(15 * Math.pow(1.25, cursors)); // generates cost of cursor
    document.getElementById("cursorCost").innerHTML = cursorCost; // uploads cursor cost to html
}

window.setInterval(function() // game loop: 1000 = 1 sec
{
    clickHere(cursors); // makes cursors click for you
    cursorCost = Math.floor(15 * Math.pow(1.25, cursors)); // generates cost of cursor
    document.getElementById("cursorCost").innerHTML = cursorCost; // uploads cursor cost to html
    document.getElementById("cursors").innerHTML = cursors; // update cursor amount
}, 500);

/*
THE CODE SHIT HERE BELOW IS IN JQUERY SO WATCH TF OUT WHEN EDITING FOO!!!!!1!1!!!!!1!
INSPIRATION: https://www.tutorialrepublic.com/codelab.php?topic=html5&file=local-storage
*/
if(localStorage !== "undefined") // checks if browser supports this or nahh
{
    $(document).ready(function() { // checks the html doc
		$("#theSaveFeatureBeLike").click(function() { // click save button, saves data to local storage
			// Get input names
            let tempclicks = $("#clicks").val();
            let tempcursors = $("#cursors").val();
            let tempcursorCost = $("#cursorCost").val();
			
			// Store data
            localStorage.setItem("clicksSaved", tempclicks);
            localStorage.setItem("cursorsSaved", tempcursors);
            localStorage.setItem("cursorCostSaved", tempcursorCost);
            alert("Your progress has been saved.");
        });
		$("#recoverYourProgressDio").click(function() { // click recover button, gets data from local storage
            // Retrieve data
            $("#clicks").val() = localStorage.getItem("clicksSaved");
            $("#cursors").val() = localStorage.getItem("cursorsSaved");
            $("#cursorCost").val() = localStorage.getItem("cursorCostSaved");
		});
	});
}
else
{
    alert("Sorry, your browser do not support local storage."); // no llores si esto te pasa -_- presione f en el chat
}
