var d = new Date();

function addItem(t){
     var tm = Date.now();
    var toAdd=`<input type="checkbox" id="i-c" class="form-check-input" onclick="done('i`+tm+`')">`+t+`<button class="btn btn-danger text-end" 
                onclick="delItem('i`+tm+`');">X</button>`;
    var div = document.createElement("div");   
        div.setAttribute('class','list-item');
        div.innerHTML = toAdd;
        div.setAttribute('id','i'+tm)
        document.querySelector('#list').appendChild(div);
        document.querySelector('#add').style.display="none";     
        document.querySelector('#a').value='';
    }

function delItem(i){
        document.querySelector('#list').removeChild(document.querySelector('#'+i));
}

function done(i) {
    if(document.querySelector('#'+i+' #i-c').checked){
        document.querySelector('#'+i).style.textDecoration='line-through';
    } else {
        document.querySelector('#'+i).style.textDecoration='';
    }
}
function showAdd(){
    document.querySelector('#add').style.display="flex";
}
function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); /* assigning hour in 12-hour format */
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */
      var t = setTimeout(currentTime, 1000); /* setting timer */
  }
  
  function updateTime(k) { /* appending 0 before time elements if less than 10 */
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime();

  function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); /* assigning hour in 12-hour format */
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */
      var t = setTimeout(currentTime, 1000); /* setting timer */
  }
  
  function updateTime(k) { /* appending 0 before time elements if less than 10 */
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  function displayDate() {
    var date = new Date();

    document.getElementById("dateNow").innerHTML= date.toDateString();
}

