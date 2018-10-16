$(document).ready(function () {
            //Get text from input box - expression: $("input#firstName").val();
        //Get text from input box: let firstNameX = $("input#firstName").val(); 
        //Put text on page: $("p#response").text(firstNameX);
        
        //Create Object: let personal = { 
        //key value pairs: firstName: "John", lastName: "Smith", email: "jsmith@gmail.com"}; personal.name; personal["lastName"];
        
        //Saving to the browser:
        //localStorage.setItem("personData", personal);
        //localStorage.getItem("personData");
        //add click event listener to a button: $("button#create").click(function() { $("<h1>Hello!</h1>").appendTo("body"); });
        var pointsRemaining = 10;
        var HPoints = 0;
        var strengthPoints = 0;
        var luckPoints = 0;
        var test = "why aren't we working bob?";
        
        $("#HP").val("0");
        $("#strength").val("0");
        $("#luck").val("0");
    
        $("button#plusHP").click(addHP);
        $("button#minusHP").click(subHP);
        $("button#plusStrength").click(addStrength);
        $("button#minusStrength").click(subStrength);
        $("button#plusLuck").click(addLuck);
        $("button#minusLuck").click(subLuck);
        $("button#save").click(saveChar);
    
        function addHP() {
            if (pointsRemaining > 0) {
                pointsRemaining -= 1;
                HPoints += 1;
                console.log(test);
                $("#HP").val(HPoints);
                $("#ptsRemain").text(pointsRemaining);
            }
        }
        function subHP() {
            if (HPoints > 0) {
                pointsRemaining += 1;
                HPoints -= 1;
                console.log(test);
                $("#HP").val(HPoints);
                $("#ptsRemain").text(pointsRemaining);
            }
        }
        function addStrength() {
            if (pointsRemaining > 0) {
                pointsRemaining -= 1;
                strengthPoints += 1;
                console.log(test);
                $("#strength").val(strengthPoints);
                $("#ptsRemain").text(pointsRemaining);
            }
        }
        function subStrength() {
            if (strengthPoints > 0) {
                pointsRemaining += 1;
                strengthPoints -= 1;
                console.log(test);
                $("#strength").val(strengthPoints);
                $("#ptsRemain").text(pointsRemaining);
            }
        }
        function addLuck() {
            if (pointsRemaining > 0) {
                pointsRemaining -= 1;
                luckPoints += 1;
                console.log(test);
                $("#luck").val(luckPoints);
                $("#ptsRemain").text(pointsRemaining);
            }
        }
        function subLuck() {
            if (luckPoints > 0) {
                pointsRemaining += 1;
                luckPoints -= 1;
                console.log(test);
                $("#luck").val(luckPoints);
                $("#ptsRemain").text(pointsRemaining);
            }
        }
    
    
        var characters = [];
        
		function saveChar() {
            var currentChar = {        
			     charName: $("#charName").text(),
			     type: $("#type").val(),
                 HP: $("#HP").text(),
                 strength: $("#strength").text(),
                 luck: $("#luck").text()
		      };
        
            characters.push($("currentChar"));
            localStorage.setItem("characters", characters);
        };
        //for (i=0; i<characters.length; i++) {
            //if (characters[i].firstName=wantedName)
        //}
});