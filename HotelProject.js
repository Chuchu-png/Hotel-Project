var switch1 = true;
var switch2 = true;
var switch3 = true;
var switch4 = true;
var switch5 = true;
var switch6 = true;

//This is an empty array that will store the people that have checked into your hotel.
var pastguests =[];


    function lock() {
      if (switch1 == true) {
        document.getElementById('hide').style.visibility = "hidden";
        document.getElementById('hideRem').style.visibility = "hidden"
        document.getElementById('hideAll').style.visibility = "hidden"
        switch1 = false;
    }
      else {
        document.getElementById('hide').style.visibility = "visible";
        document.getElementById('hideRem').style.visibility = "visible";
        document.getElementById('hideAll').style.visibility = "visible"
        switch1 = true;
      }
    }
    
    
    function lock2() {
      if (switch2 == true) {
        document.getElementById('hide2').style.visibility = "hidden";
        document.getElementById('hideRem2').style.visibility = "hidden";
        document.getElementById('hideAll2').style.visibility = "hidden";
        switch2 = false;
    }
      else {
        document.getElementById('hide2').style.visibility = "visible";
        document.getElementById('hideRem2').style.visibility = "visible";
        document.getElementById('hideAll2').style.visibility = "visible";
        switch2 = true;
      }
    }
    
        function lock3() {
      if (switch3 == true) {
        document.getElementById('hide3').style.visibility = "hidden";
        document.getElementById('hideRem3').style.visibility = "hidden";
        document.getElementById('hideAll3').style.visibility = "hidden";
        switch3 = false;
    }
      else {
        document.getElementById('hide3').style.visibility = "visible";
        document.getElementById('hideRem3').style.visibility = "visible";
        document.getElementById('hideAll3').style.visibility = "visible";
        switch3 = true;
      }
    }
    
    
    function lock4() {
      if (switch4 == true) {
        document.getElementById('hide4').style.visibility = "hidden";
        document.getElementById('hideRem4').style.visibility = "hidden";
        document.getElementById('hideAll4').style.visibility = "hidden";
        switch4 = false;
    }
      else {
        document.getElementById('hide4').style.visibility = "visible";
        document.getElementById('hideRem4').style.visibility = "visible";
        document.getElementById('hideAll4').style.visibility = "visible";
        switch4 = true;
      }
    }
    
    function lock5() {
      if (switch5 == true) {
        document.getElementById('hide5').style.visibility = "hidden";
        document.getElementById('hideRem5').style.visibility = "hidden";
        document.getElementById('hideAll5').style.visibility = "hidden";
        switch5 = false;
    }
      else {
        document.getElementById('hide5').style.visibility = "visible";
        document.getElementById('hideRem5').style.visibility = "visible";
        document.getElementById('hideAll5').style.visibility = "visible";
        switch5 = true;
      }
    }
    
    function lock6() {
      if (switch6 == true) {
        document.getElementById('hide6').style.visibility = "hidden";
        document.getElementById('hideRem6').style.visibility = "hidden";
        document.getElementById('hideAll6').style.visibility = "hidden";
        switch6 = false;
    }
      else {
        document.getElementById('hide6').style.visibility = "visible";
        document.getElementById('hideRem6').style.visibility = "visible";
        document.getElementById('hideAll6').style.visibility = "visible";
        switch6 = true;
      }
    }
    
//This is the add guest function for room 1
function addMe() {
    var z = document.getElementById("room1");
    var people = z.getElementsByTagName("li");
    if (people.length > 3) {
      window.alert("this room is already booked");
      var waitList = prompt("We can waitlist, who would you like to waitlist?");
    }
    else {
      var time = new Date();
      var a = time.toLocaleString();
      var newList= document.createElement("li");
      var u = document.getElementById("user").value + a;
        
        //This pushes the user into the pastguests array.
        pastguests.push(u); 
        //This will print the pastguests array to the screen.
        document.getElementById('pastguestslist').innerHTML = pastguests; 
        
      var newText= document.createTextNode(u);
      newList.appendChild(newText);
      var position = document.getElementsByTagName("ol")[0];
      position.appendChild(newList);
      document.getElementById("user").value = " ";
      var currentDate = new Date();
      }
  }
  
      function removeMe() {
      //i will get the value of the remNum field
      var personNum = document.getElementById("remNum").value;
      // i will convert it into a number
      var y = parseInt(personNum);
      //i will get the child based on the number - 1 (because they will put 1 so 1 - 1 = 0 (index value)
      var getChild = document.getElementsByTagName('li')[y - 1];
      // i will get the parent of the child
      var getParent = getChild.parentNode;
      // i will remove the child from the parent
      getParent.removeChild(getChild);
      }
      
      function addMe2() {
      var z = document.getElementById("room2");
      var people = z.getElementsByTagName("li");
      if (people.length > 3) {
      window.alert("this room is already booked");
      var waitList = prompt("We can waitlist, who would you like to waitlist?");
    }
    else {
      var newList= document.createElement("li");
      var time = new Date();
      var a = time.toLocaleString();
      var u = document.getElementById("user2").value + a;
      var newText= document.createTextNode(u);
      newList.appendChild(newText);
      var position = document.getElementsByTagName("ol")[1];
      position.appendChild(newList);
      document.getElementById("user").value = " ";
      }
  }
      
      function removeMe2() {
      //i will get the value of the remNum field
      var personNum = document.getElementById("remNum2").value;
      // i will convert it into a number
      var y = personNum;
      //i will get the child based on the number - 1 (because they will put 1 so 1 - 1 = 0 (index value)
      var z = document.getElementById("room2");
      var getChild = z.getElementsByTagName('li')[y - 1];
      // i will get the parent of the child
      var getParent = getChild.parentNode;
      // i will remove the child from the parent
      getParent.removeChild(getChild);
      }
      
         
      
      function addMe3() {
      var z = document.getElementById("room3");
      var people = z.getElementsByTagName("li");
      if (people.length > 3) {
      window.alert("this room is already booked");
      var waitList = prompt("We can waitlist, who would you like to waitlist?");
    }
    else {
      var newList= document.createElement("li");
      var time = new Date();
      var a = time.toLocaleString();
      var u = document.getElementById("user3").value + a;
      var newText= document.createTextNode(u);
      newList.appendChild(newText);
      var position = document.getElementsByTagName("ol")[2];
      position.appendChild(newList);
      document.getElementById("user3").value = " ";
      }
  }

      function removeMe3() {
      //i will get the value of the remNum field
      var personNum = document.getElementById("remNum3").value;
      // i will convert it into a number
      var y = personNum;
      //i will get the child based on the number - 1 (because they will put 1 so 1 - 1 = 0 (index value)
      var z = document.getElementById("room3");
      var getChild = z.getElementsByTagName('li')[y - 1];
      // i will get the parent of the child
      var getParent = getChild.parentNode;
      // i will remove the child from the parent
      getParent.removeChild(getChild);
      }
      
      
      
       function addMe4() {
      var z = document.getElementById("room4");
      var people = z.getElementsByTagName("li");
      if (people.length > 3) {
      window.alert("this room is already booked");
      var waitList = prompt("We can waitlist, who would you like to waitlist?");
    }
    else {
      var newList= document.createElement("li");
      var time = new Date();
      var a = time.toLocaleString();
      var u = document.getElementById("user4").value + a;
      var newText= document.createTextNode(u);
      newList.appendChild(newText);
      var position = document.getElementsByTagName("ol")[3];
      position.appendChild(newList);
      document.getElementById("user").value = " ";
      }
  }
      
      function removeMe4() {
      //i will get the value of the remNum field
      var personNum = document.getElementById("remNum4").value;
      // i will convert it into a number
      var y = personNum;
      //i will get the child based on the number - 1 (because they will put 1 so 1 - 1 = 0 (index value)
      var z = document.getElementById("room4");
      var getChild = z.getElementsByTagName('li')[y - 1];
      // i will get the parent of the child
      var getParent = getChild.parentNode;
      // i will remove the child from the parent
      getParent.removeChild(getChild);
      }
      
      
      
       function addMe5() {
      var z = document.getElementById("room5");
      var people = z.getElementsByTagName("li");
      if (people.length > 3) {
      window.alert("this room is already booked");
      var waitList = prompt("We can waitlist, who would you like to waitlist?");
    }
    else {
      var newList= document.createElement("li");
      var time = new Date();
      var a = time.toLocaleString();
      var u = document.getElementById("user5").value + a;
      var newText= document.createTextNode(u);
      newList.appendChild(newText);
      var position = document.getElementsByTagName("ol")[4];
      position.appendChild(newList);
      document.getElementById("user").value = " ";
      }
  }
      
      function removeMe5() {
      //i will get the value of the remNum field
      var personNum = document.getElementById("remNum5").value;
      // i will convert it into a number
      var y = personNum;
      //i will get the child based on the number - 1 (because they will put 1 so 1 - 1 = 0 (index value)
      var z = document.getElementById("room5");
      var getChild = z.getElementsByTagName('li')[y - 1];
      // i will get the parent of the child
      var getParent = getChild.parentNode;
      // i will remove the child from the parent
      getParent.removeChild(getChild);
      }
      
      
      
       function addMe6() {
      var z = document.getElementById("room6");
      var people = z.getElementsByTagName("li");
      if (people.length > 3) {
      window.alert("this room is already booked");
      var waitList = prompt("We can waitlist, who would you like to waitlist?");
    }
    else {
      var newList= document.createElement("li");
      var time = new Date();
      var a = time.toLocaleString();
      var u = document.getElementById("user6").value + a;
      var newText= document.createTextNode(u);
      newList.appendChild(newText);
      var position = document.getElementsByTagName("ol")[5];
      position.appendChild(newList);
      document.getElementById("user").value = " ";
      }
  }
      
      function removeMe6() {
      //i will get the value of the remNum field
      var personNum = document.getElementById("remNum6").value;
      // i will convert it into a number
      var y = personNum;
      //i will get the child based on the number - 1 (because they will put 1 so 1 - 1 = 0 (index value)
      var z = document.getElementById("room6");
      var getChild = z.getElementsByTagName('li')[y - 1];
      // i will get the parent of the child
      var getParent = getChild.parentNode;
      // i will remove the child from the parent
      getParent.removeChild(getChild);
      }
      
           function removeMeAll() {
        var test = document.getElementById("room1").innerHTML = " ";
      }
      
      
           function removeMeAll2() {
        var test = document.getElementById("room2").innerHTML = " ";
      }
      
      
           function removeMeAll3() {
        var test = document.getElementById("room3").innerHTML = " ";
      }
      
      
           function removeMeAll4() {
        var test = document.getElementById("room4").innerHTML = " ";
      }
      
           function removeMeAll5() {
        var test = document.getElementById("room5").innerHTML = " ";
      }
      
      
           function removeMeAll6() {
        var test = document.getElementById("room6").innerHTML = " ";
      }
      
