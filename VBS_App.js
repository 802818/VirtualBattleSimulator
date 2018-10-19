$(document).ready(function () {
            //Get text from input box - expression: $("input#firstName").val();
        //Get text from input box: let firstNameX = $("input#firstName").val(); 
        //Put text on page: $("p#response").text(firstNameX);
        
        //Create Object: let personal = { 
        //key value pairs: firstName: "John", lastName: "Smith", email: "jsmith@gmail.com"}; personal.name; personal["lastName"];
        
        //Saving to the browser:
        //localStorage.setItem("personData", personal);
        //localStorage.getItem("personData");
        //add click event listener to a button: $("button#create").click(function() { $("<option>Hello!</option>").appendTo("#charSelect1"); });
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
        $("button#openBattle").click(openSim);
        $("button#searchChar1").click(search1);
        $("button#searchChar2").click(search2);
        $("button#startTheFight").click(beginBattle);
    
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
			     charName: $("#charName").val(),
			     type: $("#type").val(),
                 HP: $("#HP").val(),
                 strength: $("#strength").val(),
                 luck: $("#luck").val()
		      };
            //Comment out the line below to perform the first save and then uncomment it.
            characters = JSON.parse(localStorage.getItem("characters"));
            console.log(characters);
            characters.push(currentChar);
            localStorage.setItem("characters", JSON.stringify(characters));
        };
    
        function openSim() {
            characters = JSON.parse(localStorage.getItem("characters"));
            fighter1.style.display = 'inline-block';
            fighter2.style.display = 'inline-block';
            startFight.style.display = 'inline';
            for (i = 0; i < characters.length; i++) {
                //$("<option>characters[i]</option>").appendTo("#charSelect1");
                $('#charSelect1').append($('<option>', {
                    value: characters[i].charName,
                    text: characters[i].charName
                }));
                $('#charSelect2').append($('<option>', {
                    value: characters[i].charName,
                    text: characters[i].charName
                }));
            }
            charMaker.style.display = 'none';
        }
    
        function search1() {
            var retrievedData = localStorage.getItem("characters");
            characters = JSON.parse(retrievedData);
            console.log(characters);
            for(i=0; i < characters.length; i++) {
                if ($("#charSelect1").val() == characters[i].charName) {
                    $("#type1").val(characters[i].type);
                    $("#HP1").val(characters[i].HP);
                    $("#strength1").val(characters[i].strength);
                    $("#luck1").val(characters[i].luck);
                    console.log("WORKINGgggggg?");
                }
            }
        }
    
        function search2() {
            var retrievedData = localStorage.getItem("characters");
            characters = JSON.parse(retrievedData);
            for(i=0; i < characters.length; i++) {
                if ($("#charSelect2").val() == characters[i].charName) {
                    $("#type2").val(characters[i].type);
                    $("#HP2").val(characters[i].HP);
                    $("#strength2").val(characters[i].strength);
                    $("#luck2").val(characters[i].luck);
                    console.log("WORKINGgggggg?");
                }
            }
        }
    
        function beginBattle() {
            
            
        }
        //for (i=0; i<characters.length; i++) {
            //if (characters[i].firstName=wantedName)
        //}
});