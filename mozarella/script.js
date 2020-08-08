var coins = 0; // COINSSSSS5SSSS!1!!!!!!!!

var cropName = ["rice", "wheat", "soybean", "sesame", "millet"];
var cropAmountCurrent = [0, 0, 0, 0, 0];
var cropAmountSold = [0, 0, 0, 0, 0];
var peasantsPerCrop = [0, 0, 0, 0, 0];

var numPeasants = 0;
var numUnemployed = 0;
var peasantCost = Math.floor(5 * Math.pow(1.1, numPeasants)); // generates cost of peasant

var clickSections = ["stapleCrops", "cashCrops", "fishing", "landAnimals", "peasantry", "market", "upgrades"]
var clickNODE = document.querySelectorAll("div.actuallyButtons");
var sectionsUnlocked = [0, 0, 0, 0, 0, 0, 0];

function foodClickHere(i, num) // yes eficshenty
{
    cropAmountCurrent[i] += num;
    document.getElementById(cropName[i]).innerHTML = cropAmountCurrent[i];
}

function foodSellHere(num, i, price) // to sell shit
{
    if (num <= cropAmountCurrent[i])
    {
        coins += (price);
        cropAmountCurrent[i] -= num;
    }
}

function hirePeasant()
{
    if (coins >= peasantCost) // checks if u can afoord or not
    {
        numPeasants++; // adds a new peasnt
        coins -= peasantCost; // spends that amount of cions
        document.getElementById("numPeasants").innerHTML = numPeasants; // updates numbers
        document.getElementById("coins").innerHTML = coins;
    }
    peasantCost = Math.floor(5 * Math.pow(1.1, numPeasants)); // generates cost of peasant
    document.getElementById("peasantCost").innerHTML = peasantCost; // updates
}

function managePeasantsHere(secIndex, subSecIndex, action, amount)
{
    if (secIndex <= 1)
    {
        if (action == "add")
        {
            if (numUnemployed >= amount)
            {
                numUnemployed -= amount;
                peasantsPerCrop[subSecIndex] += amount;
            }
        }
        else if (action == "subtract")
        {
            if (peasantsPerCrop[subSecIndex] >= amount)
            {
                numEmployed += amount;
                peasantsPerCrop[subSecIndex] -= amount;
            }
        }
    }
}

var dropdownThang = document.getElementsByClassName("dropdownThang"); // lets go, drop dat DOWN
for (let i = 0; i < dropdownThang.length; i++) 
{
  dropdownThang[i].addEventListener("click", function()
  {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "none")
    {
        dropdownContent.style.display = "block";
    } 
    else 
    {
        dropdownContent.style.display = "none";
    }
  });
}

console.log(clickNODE);

generateSubSections(0, 0);
generateSubSections(0, 1);
generateSubSections(0, 2);
generateSubSections(0, 3);
generateSubSections(0, 4);

function generateSubSections(secIndex, subSecIndex)
{
    if (secIndex == 0)
    {
        let cheesySandwiches = document.createElement("div");
        let cheddar = '<span onclick="foodClickHere(' + subSecIndex + ', 1)">click for ' + cropName[subSecIndex] + '</span>: <span id=' + cropName[subSecIndex] + '></span> ' + cropName[subSecIndex];
        let parmesan = '<br>&uarr; &amp; &darr;';
        cheesySandwiches.innerHTML = cheddar + parmesan;
        clickNODE[secIndex].appendChild(cheesySandwiches);
    }
}

window.setInterval
(function() // game loop: 1000 = 1 sec
{
    document.getElementById("coins").innerHTML = coins;
    document.getElementById(cropName[0]).innerHTML = cropAmountCurrent[0];
    document.getElementById(cropName[1]).innerHTML = cropAmountCurrent[1];
    document.getElementById(cropName[2]).innerHTML = cropAmountCurrent[2];
    document.getElementById(cropName[3]).innerHTML = cropAmountCurrent[3];
    document.getElementById(cropName[4]).innerHTML = cropAmountCurrent[4];
    document.getElementById("numPeasants").innerHTML = numPeasants;
    document.getElementById("peasantCost").innerHTML = peasantCost;
    /*
    riceHere(cursors); // makes cursors click for you
    cursorCost = Math.floor(15 * Math.pow(1.25, cursors)); // generates cost of cursor
    document.getElementById("cursorCost").innerHTML = cursorCost; // uploads cursor cost to html
    document.getElementById("cursors").innerHTML = cursors; // update cursor amount
    */
}, 50);

/*
THE CODE SHIT HERE BELOW IS IN JQUERY SO WATCH TF OUT WHEN EDITING FOO!!!!!1!1!!!!!1!
INSPIRATION: https://www.tutorialrepublic.com/codelab.php?topic=html5&file=local-storage
*/
if(localStorage !== "undefined") // checks if browser supports this or nahh
{
    $(document).ready(function() { // checks the html doc
		$("#theSaveFeatureBeLike").click(function() { // click save button, saves data to local storage
			// Get input names
            let tempCoins = $("#coins").val();
            let tempRice = $("#" + cropName[0]).val();
            let tempWheat = $("#" + cropName[1]).val();
            let tempSoybean = $("#" + cropName[2]).val();
            let temSesame = $("#" + cropName[3]).val();
            let tempMillet = $("#" + cropName[4]).val();
			
			// Store data
            localStorage.setItem("riceSaved", tempRice);
            alert("Your progress has been saved.");
        });
		$("#recoverYourProgressDio").click(function() { // click recover button, gets data from local storage
            // Retrieve data
            $("#coins").val() = localStorage.getItem("coinsSaved");
            $("#" + cropName[0]).val() = localStorage.getItem("riceSaved");
            $("#" + cropName[1]).val() = localStorage.getItem("wheatSaved");
            $("#" + cropName[2]).val() = localStorage.getItem("soybeanSaved");
            $("#" + cropName[3]).val() = localStorage.getItem("sesameSaved");
            $("#" + cropName[4]).val() = localStorage.getItem("milletSaved");
		});
	});
}
else
{
    alert("Sorry, your browser do not support local storage."); // no llores si esto te pasa -_- presione f en el chat
}
