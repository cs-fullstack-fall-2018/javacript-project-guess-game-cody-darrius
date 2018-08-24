var clicks = 0;
var targets = 0;
var hits = 0;
var counter = 1;
var targetKount = 0;
var targetTime = 0;
// Darius Edit please check !
var theGo = document.getElementById("goGetIt");
theGo.addEventListener("click", letsRock);
function levelUP(){

}

function letsRock() {
   switch (counter) {
       case 1:
          level1();
       case 2:
          level2();

}

function level1(){
    targetKount=3;
    targetTime=3000;
    setUpTargetsAndPlay(targetKount, targetTime);

}
function level2(){
    targetKount=4;
    targetTime=2500;
    setUpTargetsAndPlay(targetKount, targetTime);
}
// Utility function to get a random table cell number
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// This function gets called if player hits a target
function clickedTarget() {
    // Right now, just updates a count.
    // Could use some player feedback here
    hits += 1;
}

// The main function that sets up targets and starts a game
function setUpTargetsAndPlay(numberOfTargets, displayTimeMs) {
    clicks = 0;
    targets = numberOfTargets;
    hits = 0;
    cleanup();
    // Setup click detection for the entire table
    $("table").on("click", function () {

        clicks += 1;
        // alert("clicked. Max = " + clicks);
        if (clicks === targets) {
            alert("No more clicks! You got " + hits + " out of " + targets);
            // Turn off click detection
           cleanup();
            // Darius Code Please
            document.getElementById("levelUp").enabled = true;
        }
    });


    console.log("Selecting " + targets + " targets");
    // Get the number of targets specified and randomly picks cells to display them in for the target table
    for (var x = 0; x < targets; x++) {
        var targetNum = getRandomInt(1, 50); // Pick a random table cell
        console.log("Table cell selected for target = " + targetNum);
        var tdID = "td" + targetNum;
        var imgID = "img" + targetNum;
        var randomNinja = getRandomInt(1, 3);
        console.log(randomNinja);
        $('#' + tdID).on("click", clickedTarget).append("<img id = '" + imgID + "' class='targetImg' src='ninja" + randomNinja + ".png' width='50'>");
        $('#' + imgID).delay(2000).show(0);
        $('#' + imgID).delay(displayTimeMs).hide(0);
        if (hits===targets){
            counter++;
            letsRock()
        }
        else{
//            console.log("GAME OVER!")
        }

    }
}
}

function cleanup() {
    $("td").off("click");
    $("table").off("click");
    $(".targetImg").remove();
}
