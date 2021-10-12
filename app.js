var d = new Date();
var items = [];
var items=localStorage.getItem("items");
items=JSON.parse(items)
if(items==null) items=[];




function addItem(t,id){
  var tm = Date.now();
  if(!id) id='id'+tm;
    var toAdd=`<input type="checkbox" id="i-c" class="form-check-input" 
    onclick="done('id`+tm+`')">`+t+`<button class="btn btn-danger text-end" 
                onclick="delItem('id`+tm+`');">X</button>`;
    var div = document.createElement("div");   
        div.setAttribute('class','list-item');
        div.innerHTML = toAdd;
        div.setAttribute('id','id'+tm)
        document.querySelector('#list').appendChild(div);
        document.querySelector('#add').style.display="flex";     
        document.querySelector('#a').value='';
        // // localStorage.setItem('item', JSON.stringify={"apple":"mansanas","mango":"manggan"});
        // // document.getElementById("list").innerHTML = localStorage.getItem('item');
        var temp = '{"title":"'+t+'","id":"'+id+'"}';
        console.log(temp);
        temp=JSON.parse(temp);
        items=localStorage.getItem("items");
        console.log(items);
        items=JSON.parse(items)
        if(items==null) items=[];
        items.push(temp);
        items = JSON.stringify(items);
        console.log(items);
        localStorage.setItem('items',items);
       
      
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
  
  // function updateTime(k) { /* appending 0 before time elements if less than 10 */
  //   if (k < 10) {
  //     return "0" + k;
  //   }
  //   else {
  //     return k;
  //   }
  // }
  function displayDate() {
    var d = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

    var h =`<div class="d"><span class="dateNow">`+d.getDate()+`</span>
            <span class="month">`+month[d.getMonth()]+`</span>
            <span class="year">`+d.getFullYear()+`</span></div>`;

    document.querySelector('#dateNow').innerHTML=h;
  }
displayDate();

