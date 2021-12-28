//when user clicks "start"
function startAll() {
    //makes sure that a duration is selected
    if (flag == undefined) {
        console.log("hi")
        alert("Please pick a duration!")
    } else {
        startTimer();
    }
}

/*
function found from https://www.codegrepper.com/code-examples/javascript/javascript+search+object.keys+for+matching+value
that helps retrieve the key of a value 
randomDirection below randomly picks a value, and then use this function to get the corresponding key
*/
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

//Randomly pick one from array
function randomDirection() {
    // var theArrayMeow = [{South: "south"}, {North: "north"}, {SouthEast: "south_east"},{SouthWest: "south_west"},{NorthEast: "north_east"},{NorthWest: "north_west"}];
    var theArrayMeow = { "Down": "south", "Up": "north", "TopRight": "north_east", "TopLeft": "north_west", "BottomRight": "south_east", "BottomLeft": "south_west"};
    var lengthOfArray = Object.keys(theArrayMeow).length //length of array

    var justKeys = Object.values(theArrayMeow);

    // console.log(justKeys);

    const randomSelect = justKeys[Math.floor(Math.random() * lengthOfArray)];
    console.log(randomSelect) //gets the value - direction and puts it into the icon

    let text = "<span class=\"material-icons-outlined\" id=\"makeLarger\">";
    text += randomSelect;
    text += "</span>";
    text += "<br/>"

    //uses above function to get the key of the randomly generated value
    var writtenDirection = getKeyByValue(theArrayMeow, randomSelect)
    text += writtenDirection;

    document.getElementById("generateHere").innerHTML = text;
    document.getElementById("generateHere").style.color = "pink";
    document.getElementById("generateHere").style.fontSize = "100px";
}

//set timer duration by selecting the ID
var flag;
var seconds;
function timerInterval(clicked) {
    flag = true;

    document.getElementById("generateHere").innerHTML = "";
    document.getElementById("generateHere").style.display = "block";
    document.getElementById("noMoreJump").style.display = "block";

    document.getElementById("tryagain").innerHTML = "";

    var hello = document.getElementById("timer");
    //sets the timer to the clicked button
    seconds = hello.innerHTML = clicked;
    hello.style.fontSize = "140px";
    document.getElementById("startinstructions").innerHTML = "Click 'Start' below to begin!";
    // document.getElementById("startinstructions").style.fontSize= "medium";
    // console.log(seconds)
    // console.log(flag); //makes sure that a duration is picked before starting timer
}

//start Timer
function startTimer() {
    console.log(seconds);

    var timeLeft = seconds; //user's selection

    var timer = document.getElementById("timer");

    var timerID = setInterval(countdown, 1000); //counts down by 1 sec each time

    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerID);
            timer.innerHTML = "GREAT WORK!";
            document.getElementById("tryagain").innerHTML = "Try again? Click any of the timer buttons!";
            timer.style.fontSize = "50px";
            document.getElementById("generateHere").style.display = "none";
            document.getElementById("noMoreJump").style.display = "none";
        } else {
            timer.innerHTML = timeLeft;

            if (timeLeft % 2 == 0) {
                randomDirection();
            }
            timeLeft--;
        }
    }
}

//show and hide instructions
function showInstructions() {
    var getInstructions = document.getElementById("instructions");

    if (getInstructions.style.display === "none") {
        getInstructions.style.display = "block";
        document.getElementById("showthis").innerHTML = "Instructions (-)";
    } else {
        getInstructions.style.display = "none";
        document.getElementById("showthis").innerHTML = "Instructions (+)";
    }
}