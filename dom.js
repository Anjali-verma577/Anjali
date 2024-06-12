//function changeText(id) {
   // id.innerHTML = "Ooops!";
  

   function mOver(obj)
   {
    obj.innerHTML = "Thank you"
   }
   function mOut(obj)
   {
    obj.innerHTML= "Mouse Over Me"
   }
   function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
  }
  
  function mUp(obj) {
    obj.style.backgroundColor="purple";
    obj.innerHTML="Thank You";
  }

  document.getElementById("mybtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
document.getElementById("myBtn").addEventListener("click", function() {
    alert("Check properly!");
  });

  var x = document.getElementById("mymyBtn");
x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction);

function myFunction() {
  alert ("Hello World!");
}

function someOtherFunction() {
  alert ("This function was also executed!");
}

let p1 = 5;
let p2 = 7;
document.getElementById("buttn").addEventListener("click", function() {
  myFunction(p1, p2);
});

function myFunction(a, b) {
  document.getElementById("demom").innerHTML = a + b;
}