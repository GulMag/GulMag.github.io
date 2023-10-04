<!DOCTYPE html>

<html>

<head>
    <link rel="stylesheet" type="text/css" href="mystyle.css">

    <script type = "text/javascript">
        function addParagraphText() {
        document.getElementById("para1").innerHTML = "Thanks for adding text!";
        }

        function displayInput() {
        var testInput = document.getElementById("name").value;

        if (testInput.length ==0) {
            document.getElementById("para").innerHTML = "Hey, you didn't type anything!";
        } 
        else {
            document.getElementById("para").innerHTML = testInput; 
        }
        }

        function myAlertMath() {
        var userNumber = document.getElementById("mathInput").value; 
        alert("Your number x 5 is " + userNumber * 5);
        }

        function myPrompt() {
        var person = prompt("Please enter your name!", "Frida");
        if (person != "") {
            document.getElementById("testPrompt").innerHTML = "Hello person named " + person + "! How are you today?"
        } else {
            alert("Hey, no input");
        }
        }

        function checkField1() {
        var field = document.getElementById("field1").value; 
        if (field.length < 5) {
            document.getElementById("message1").innerHTML = "Too short!";
        } else {
            document.getElementById("message1").innerHTML = "Right on!";
        }
        }

        function checkField2() {
        var field = document.getElementById("field2").value; 
        if (field != "") {
            document.getElementById("message2").innerHTML = "Ok!";
        } else {
            document.getElementById("message2").innerHTML = "You gotta enter sthg yo";
        }
        }

        function checkPassword() {
        var field = document.getElementById("password_entered").value; 
        var regex = /^[A-Za-z]{5,10}$/;
        if (regex.test(field)) {
            document.getElementById("messagePassword").innerHTML = "Input accepted!";
        } else {
            document.getElementById("messagePassword").innerHTML = "Enter at least 5 letters!";
        }
        }

    </script>
</head>

<body> <!-- inside body tag: onload = "alert('Sweet daaaawg! The content has loaded');"-->
    <!--------------------Navigation Bar--------------------->
    <div class="topnav">
        <a href="index.html">Home</a>
        <a href="corona.html">Corona Updates</a>
        <div class="dropdown">
            <button class="dropbtn">Statistik</button>
            <div class="dropdown-content">
                <a href="#">Wahrscheinlichkeitsrechnung</a>
                <a href="statistik-zv-diskret.html">Zufallsvariablen</a>
                <a href="statistik-verteilungen.html">Verteilungen</a>
            </div>
        </div>
        <a href="statistics.html">Statistics</a>
        <div class="dropdown">
            <button class="dropbtn">Code</button>
            <div class="dropdown-content">
                <a href="statistics.html">Probability Axioms</a>
                <a href="code-string-matching.html">String Matching</a>
                <a href="code-quick-r.html">R</a>
                <a href="code-spatial-join">Spatial Join</a>
                <a href="code-nlp.html">Natural Language Processing</a>
                <a href="code-gradient-boosted-trees.html">Gradient Boosted Trees</a>
                <a href="code-xgboost-r.html">XGBoost in R</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Economics</button>
            <div class="dropdown-content">
            <a href="conflict.html">Conflict Data</a>
            <a href="co2.html">CO2 Emission</a>
            <a href="political.html">Political Economy</a>
            </div> 
        </div>
        <div class="dropdown">
            <button class="dropbtn">Star Trek</button>
            <div class="dropdown-content">
                <a href="startrek-next-generation.html">The Next Generation</a>
                <a href="startrek-voyager.html">Voyager</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Games</button>
            <div class="dropdown-content">
                <a href="games-snake.html">Snake</a>
            </div>
        </div>
    </div> 


<!---------

<header class="navbar navbar-default navbar-static-top">
    <div class="container-fluid">
        <div class="navbar-header">
            <a href="#" class="navbar-brand"></a>
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><i class="fa fa-bars"></i></button>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
                <li class="active"><a href="index">Home</a></li>                    
                <li><a href="#">Page 1</a></li>
                <li><a href="#">Page 2</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    </div>
</header>




-----------Navigation Bar---------
<div class="topnav">
    <a href="index.html">Home</a>
    <a href="corona.html">Corona Updates</a>
    <div class="dropdown">
    <button class="dropbtn">Statistik</button>
    <div class="dropdown-content">
        <a href="#">Wahrscheinlichkeitsrechnung</a>
        <a href="statistik-zv-diskret.html">Zufallsvariablen</a>
        <a href="statistik-verteilungen.html">Verteilungen</a>
    </div>
    </div>
    <a href="statistics.html">Statistics</a>
    <div class="dropdown">
    <button class="dropbtn">Code</button>
    <div class="dropdown-content">
        <a href="statistics.html">Probability Axioms</a>
        <a href="code-string-matching.html">String Matching</a>
        <a href="code-quick-r.html">R</a>
        <a href="code-spatial-join">Spatial Join</a>
        <a href="code-nlp.html">Natural Language Processing</a>
        <a href="code-gradient-boosted-trees.html">Gradient Boosted Trees</a>
        <a href="code-xgboost-r.html">XGBoost in R</a>
    </div>
    </div>
    <div class="dropdown">
    <button class="dropbtn">Economics</button>
    <div class="dropdown-content">
    <a href="conflict.html">Conflict Data</a>
    <a href="co2.html">CO2 Emission</a>
    <a href="political.html">Political Economy</a>
    </div> 
    </div>
    <div class="dropdown">
    <button class="dropbtn">Star Trek</button>
    <div class="dropdown-content">
        <a href="startrek-next-generation.html">The Next Generation</a>
        <a href="startrek-voyager.html">Voyager</a>
    </div>
    </div>
    <div class="dropdown">
    <button class="dropbtn">Games</button>
    <div class="dropdown-content">
        <a href="games-snake.html">Snake</a>
    </div>
    </div>

</div> 
------------>





