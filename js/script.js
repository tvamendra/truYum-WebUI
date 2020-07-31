var obj1={
  name: "Sandwich",
  price: 99,
  active:"yes",
  dateL:"15/03/2017",
  cat:"Main Course",
  FreeD:"yes"
};
var obj2={
  name: "Burger",
  price: 129,
  active:"yes",
  dateL:"23/12/2017",
  cat:"Main Course",
  FreeD:"no"
};
var obj3={
  name: "Pizza",
  price: 149,
  active:"yes",
  dateL:"21/08/2017",
  cat:"Main Course",
  FreeD:"no"
};
var obj4={
  name: "French Fries",
  price: 57,
  active:"no",
  dateL:"02/07/2017",
  cat:"Starter",
  FreeD:"yes"
};
var obj5={
  name: "Chocolate Brownie",
  price: 32,
  active:"yes",
  dateL:"02/11/2022",
  cat:"Dessert",
  FreeD:"yes"
};
sessionStorage.setItem("obj1", JSON.stringify(obj1));
sessionStorage.setItem("obj2", JSON.stringify(obj2));
sessionStorage.setItem("obj3", JSON.stringify(obj3));
sessionStorage.setItem("obj4", JSON.stringify(obj4));
sessionStorage.setItem("obj5", JSON.stringify(obj5));
var currObj;
var currRow=9;
// sessionStorage.setItem("currObj", JSON.stringify(currObj));

function start(){
  var flag1=0;
  var flag2=0;
  var flag3=0;
  var flag4=0;
  var flag5=0;
  sessionStorage.setItem("flag1", JSON.stringify(flag1));
  sessionStorage.setItem("flag2", JSON.stringify(flag2));
  sessionStorage.setItem("flag3", JSON.stringify(flag3));
  sessionStorage.setItem("flag4", JSON.stringify(flag4));
  sessionStorage.setItem("flag5", JSON.stringify(flag5));

}

function setObj(row){

  // currObj = JSON.parse(sessionStorage.getItem("currObj"));
  // alert(row);
  if(row==1){
    // obj1 = JSON.parse(sessionStorage.getItem("obj1"));
    currObj=obj1;
    currRow=1;
  }
  if(row==2){
    currObj=obj2;
    currRow=2;
  }
  if(row==3){
    currObj=obj3;
    currRow=3;
  }
  if(row==4){
    currObj=obj4;
    currRow=4;
  }
  if(row==5){
    currObj=obj5;
    currRow=5;
  }
  // alert(obj5.name);
  sessionStorage.setItem("currObj", JSON.stringify(currObj));
  sessionStorage.setItem("currRow", JSON.stringify(currRow));

}

// var currentObject={};

function edit(){
  currObj = JSON.parse(sessionStorage.getItem("currObj"));

  document.getElementById("name").value=currObj.name;
  document.getElementById("price").value=currObj.price;


  if(currObj.active=="yes"){
   document.getElementById("Y").checked="True";
  }
  else{
    document.getElementById("N").checked="True";
  }

  if(currObj.cat=="Main Course"){
    document.getElementById("Main Course").selected="True";
  }
  else if(currObj.cat=="Starter"){
    document.getElementById("Starter").selected="True";
  }
  else if(currObj.cat=="Dessert"){
    document.getElementById("Dessert").selected="True";
  }
  else if(currObj.cat=="Drinks"){
    document.getElementById("Drinks").selected="True";
  }

  tokens = currObj.dateL.split('/');
  tok=tokens[2]+"-"+tokens[1]+"-"+tokens[0];
  document.getElementById("myDate").value=tok;

  if(currObj.FreeD=="yes"){
    document.getElementById("freeD").checked="True";
  }


  sessionStorage.setItem("currObj", JSON.stringify(currObj));

}


function saveChanges(){
  currObj = JSON.parse(sessionStorage.getItem("currObj"));
  currRow = JSON.parse(sessionStorage.getItem("currRow"));
  // alert(currRow);
  var name=document.getElementById("name").value;
  var price=document.getElementById("price").value;
  if(document.getElementById("Y").checked){
    var active="yes";
  }
  else{
    var active="no";
  }

  if(document.getElementById("Main Course").selected){
    var cat="Main Course";
  }
  else if(document.getElementById("Starter").selected){
    var cat="Starter";
  }
  else if(document.getElementById("Dessert").selected){
    var cat="Dessert";
  }
  else if(document.getElementById("Drinks").selected){
    var cat="Drinks";
  }



  if(document.getElementById("freeD").checked){
    var freeD="yes";
  }
  else{
    var freeD="no";
  }

  dateL=document.getElementById("myDate").value;
  tokens = dateL.split('-');
  tok=tokens[2]+"/"+tokens[1]+"/"+tokens[0];
  dateL=tok;
  // alert(dateL);

  currObj.name=name;
  currObj.price=price;
  currObj.active=active;
  currObj.cat=cat;
  currObj.FreeD=freeD;
  currObj.dateL=dateL;
  // alert(currObj.name);

  newflag1 = JSON.parse(sessionStorage.getItem("flag1"));
  newflag2 = JSON.parse(sessionStorage.getItem("flag2"));
  newflag3 = JSON.parse(sessionStorage.getItem("flag3"));
  newflag4 = JSON.parse(sessionStorage.getItem("flag4"));
  newflag5 = JSON.parse(sessionStorage.getItem("flag5"));


  if(currRow==1){
    obj1 = JSON.parse(sessionStorage.getItem("obj1"));
    obj1=currObj;
    sessionStorage.setItem("newobj1", JSON.stringify(obj1));
    newflag1=1;
  }
  else if(currRow==2){
    obj2 = JSON.parse(sessionStorage.getItem("obj2"));
    obj2=currObj;
    // alert(obj2.name);
    sessionStorage.setItem("newobj2", JSON.stringify(obj2));
    newflag2=1;
  }
  else if(currRow==3){
    obj3 = JSON.parse(sessionStorage.getItem("obj3"));
    obj3=currObj;
    sessionStorage.setItem("newobj3", JSON.stringify(obj3));
    newflag3=1;
  }
  else if(currRow==4){
    obj4 = JSON.parse(sessionStorage.getItem("obj4"));
    obj4=currObj;
    sessionStorage.setItem("newobj4", JSON.stringify(obj4));
    newflag4=1;
  }
  else if(currRow==5){
    obj5 = JSON.parse(sessionStorage.getItem("obj5"));
    obj5=currObj;
    sessionStorage.setItem("newobj5", JSON.stringify(obj5));
    newflag5=1;
  }
  // alert(obj2.name);
  sessionStorage.setItem("currObj", JSON.stringify(currObj));
  // document.getElementById("menu_admin").rows[currRow].innerHTML="<tr><td>"+currObj.name+"</td><td>"+ currObj.price+"</td><td>"+currObj.active+"</td><td>"+currObj.dateL+"</td><td>"+currObj.cat+"</td><td>"+currObj.freeD+"</td></tr>";
  sessionStorage.setItem("flag1", JSON.stringify(newflag1));
  sessionStorage.setItem("flag2", JSON.stringify(newflag2));
  sessionStorage.setItem("flag3", JSON.stringify(newflag3));
  sessionStorage.setItem("flag4", JSON.stringify(newflag4));
  sessionStorage.setItem("flag5", JSON.stringify(newflag5));
  // alert(newflag1+""+newflag2+newflag3+newflag4+newflag5);
}

function load(){
  currRow = JSON.parse(sessionStorage.getItem("currRow"));
  // newobj1 = JSON.parse(sessionStorage.getItem("newobj1"));
  newflag1 = JSON.parse(sessionStorage.getItem("flag1"));
  newflag2 = JSON.parse(sessionStorage.getItem("flag2"));
  newflag3 = JSON.parse(sessionStorage.getItem("flag3"));
  newflag4 = JSON.parse(sessionStorage.getItem("flag4"));
  newflag5 = JSON.parse(sessionStorage.getItem("flag5"));
  // alert(newflag1+" "+newflag2+newflag3+newflag4+newflag5);
  if(newflag1==1){
    obj1 = JSON.parse(sessionStorage.getItem("newobj1"));
    // alert(obj1.name);
    document.getElementById("menu_admin").rows[1].innerHTML="<tr><td class='nameAdmin'>"+obj1.name+"</td><td class='priceAdmin'>Rs."+ obj1.price+".00</td><td>"+obj1.active+"</td><td>"+obj1.dateL+"</td><td>"+obj1.cat+"</td><td>"+obj1.FreeD+"</td><td><a href='edit-menu-item.html' onclick='setObj(1)'>edit</a></td></tr>";

  }
  else if(newflag1==0){
    document.getElementById("menu_admin").rows[1].innerHTML="<tr><td class='nameAdmin'>"+obj1.name+"</td><td class='priceAdmin'>Rs."+ obj1.price+".00</td><td>"+obj1.active+"</td><td>"+obj1.dateL+"</td><td>"+obj1.cat+"</td><td>"+obj1.FreeD+"</td><td><a href='edit-menu-item.html' onclick='setObj(1)'>edit</a></td></tr>";
  }

  if(newflag2==1){
    obj2 = JSON.parse(sessionStorage.getItem("newobj2"));
    document.getElementById("menu_admin").rows[2].innerHTML="<tr><td class='nameAdmin'>"+obj2.name+"</td><td class='priceAdmin'>Rs."+ obj2.price+".00</td><td>"+obj2.active+"</td><td>"+obj2.dateL+"</td><td>"+obj2.cat+"</td><td>"+obj2.FreeD+"</td><td><a href='edit-menu-item.html' onclick='setObj(2)'>edit</a></td></tr></tr>";
  }
  else if(newflag2==0){
    document.getElementById("menu_admin").rows[2].innerHTML="<tr><td class='nameAdmin'>"+obj2.name+"</td><td class='priceAdmin'>Rs."+ obj2.price+".00</td><td>"+obj2.active+"</td><td>"+obj2.dateL+"</td><td>"+obj2.cat+"</td><td>"+obj2.FreeD+"</td><td><a href='edit-menu-item.html' onclick='setObj(2)'>edit</a></td></tr></tr>";
  }

  if(newflag3==1){
    obj3 = JSON.parse(sessionStorage.getItem("newobj3"));
    document.getElementById("menu_admin").rows[3].innerHTML="<tr><td class='nameAdmin'>"+obj3.name+"</td><td class='priceAdmin'>Rs."+ obj3.price+".00</td><td>"+obj3.active+"</td><td>"+obj3.dateL+"</td><td>"+obj3.cat+"</td><td>"+obj3.FreeD+"</td><td><a href='edit-menu-item.html' onclick='setObj(3)'>edit</a></td></tr></tr>";
  }
  else if(newflag3==0){
    document.getElementById("menu_admin").rows[3].innerHTML="<tr><td class='nameAdmin'>"+obj3.name+"</td><td class='priceAdmin'>Rs."+ obj3.price+".00</td><td>"+obj3.active+"</td><td>"+obj3.dateL+"</td><td>"+obj3.cat+"</td><td>"+obj3.FreeD+"</td><td><a href='edit-menu-item.html' onclick='setObj(3)'>edit</a></td></tr></tr>";
  }

  if(newflag4==1){
    obj4 = JSON.parse(sessionStorage.getItem("newobj4"));
    document.getElementById("menu_admin").rows[4].innerHTML="<tr><td class='nameAdmin'>"+obj4.name+"</td><td class='priceAdmin'>Rs."+ obj4.price+".00</td><td>"+obj4.active+"</td><td>"+obj4.dateL+"</td><td>"+obj4.cat+"</td><td>"+obj4.FreeD+"</td><td><a href='edit-menu-item.html' onclick='setObj(4)'>edit</a></td></tr></tr>";
  }
  else if(newflag4==0){
    document.getElementById("menu_admin").rows[4].innerHTML="<tr><td class='nameAdmin'>"+obj4.name+"</td><td class='priceAdmin'>Rs."+ obj4.price+".00</td><td>"+obj4.active+"</td><td>"+obj4.dateL+"</td><td>"+obj4.cat+"</td><td>"+obj4.FreeD+"</td><td><a href='edit-menu-item.html' onclick='setObj(4)'>edit</a></td></tr></tr>";
  }

  if(newflag5==1){
    obj5 = JSON.parse(sessionStorage.getItem("newobj5"));
    document.getElementById("menu_admin").rows[5].innerHTML="<tr><td class='nameAdmin'>"+obj5.name+"</td><td class='priceAdmin'>Rs."+ obj5.price+".00</td><td>"+obj5.active+"</td><td>"+obj5.dateL+"</td><td>"+obj5.cat+"</td><td>"+obj5.FreeD+"</td><td><a href='edit-menu-item.html' onclick='setObj(5)'>edit</a></td></tr></tr>";
  }
  else if(newflag5==0){
    document.getElementById("menu_admin").rows[5].innerHTML="<tr><td class='nameAdmin'>"+obj5.name+"</td><td class='priceAdmin'>Rs."+ obj5.price+".00</td><td>"+obj5.active+"</td><td>"+obj5.dateL+"</td><td>"+obj5.cat+"</td><td>"+obj5.FreeD+"</td><td><a href='edit-menu-item.html' onclick='setObj(5)'>edit</a></td></tr></tr>";
  }


}

function getValues(){
  // alert("yo");
   // alert(newflag1+" "+newflag2+newflag3+newflag4+newflag5);
   var o1v0=document.getElementById("menu_admin").rows[1].cells[0].innerText; //name
   var o1v1=document.getElementById("menu_admin").rows[1].cells[1].innerText; //price
   var o1v2=document.getElementById("menu_admin").rows[1].cells[2].innerText; //active
   var o1v3=document.getElementById("menu_admin").rows[1].cells[3].innerText; //DOL
   var o1v4=document.getElementById("menu_admin").rows[1].cells[4].innerText;
   var o1v5=document.getElementById("menu_admin").rows[1].cells[5].innerText; //Free D

   // alert(o1v1);
   priceArray1=o1v1.split(".");
   o1v1=priceArray1[1];

   new1obj1={
     name:o1v0,
     price:o1v1,
     active:o1v2,
     dateL:o1v3,
     cat:o1v4,
     FreeD:o1v5
   };
   var o2v0=document.getElementById("menu_admin").rows[2].cells[0].innerText; //name
   var o2v1=document.getElementById("menu_admin").rows[2].cells[1].innerText; //price
   var o2v2=document.getElementById("menu_admin").rows[2].cells[2].innerText; //active
   var o2v3=document.getElementById("menu_admin").rows[2].cells[3].innerText; //DOL
   var o2v4=document.getElementById("menu_admin").rows[2].cells[4].innerText; //cat
   var o2v5=document.getElementById("menu_admin").rows[2].cells[5].innerText; //Free D

   priceArray2=o2v1.split(".");
   o2v1=priceArray2[1];

   new1obj2={
     name:o2v0,
     price:o2v1,
     active:o2v2,
     dateL:o2v3,
     cat:o2v4,
     FreeD:o2v5
   };
   var o3v0=document.getElementById("menu_admin").rows[3].cells[0].innerText; //name
   var o3v1=document.getElementById("menu_admin").rows[3].cells[1].innerText; //price
   var o3v2=document.getElementById("menu_admin").rows[3].cells[2].innerText; //active
   var o3v3=document.getElementById("menu_admin").rows[3].cells[3].innerText; //DOL
   var o3v4=document.getElementById("menu_admin").rows[3].cells[4].innerText;
   var o3v5=document.getElementById("menu_admin").rows[3].cells[5].innerText; //Free D

   priceArray3=o3v1.split(".");
   o3v1=priceArray3[1];
   new1obj3={
     name:o3v0,
     price:o3v1,
     active:o3v2,
     dateL:o3v3,
     cat:o3v4,
     FreeD:o3v5
   };
   var o4v0=document.getElementById("menu_admin").rows[4].cells[0].innerText; //name
   var o4v1=document.getElementById("menu_admin").rows[4].cells[1].innerText; //price
   var o4v2=document.getElementById("menu_admin").rows[4].cells[2].innerText; //active
   var o4v3=document.getElementById("menu_admin").rows[4].cells[3].innerText; //DOL
   var o4v4=document.getElementById("menu_admin").rows[4].cells[4].innerText;
   var o4v5=document.getElementById("menu_admin").rows[4].cells[5].innerText; //Free D

   priceArray4=o4v1.split(".");
   o4v1=priceArray4[1];

   new1obj4={
     name:o4v0,
     price:o4v1,
     active:o4v2,
     dateL:o4v3,
     cat:o4v4,
     FreeD:o4v5
   };
   var o5v0=document.getElementById("menu_admin").rows[5].cells[0].innerText; //name
   var o5v1=document.getElementById("menu_admin").rows[5].cells[1].innerText; //price
   var o5v2=document.getElementById("menu_admin").rows[5].cells[2].innerText; //active
   var o5v3=document.getElementById("menu_admin").rows[5].cells[3].innerText; //DOL
   var o5v4=document.getElementById("menu_admin").rows[5].cells[4].innerText;
   var o5v5=document.getElementById("menu_admin").rows[5].cells[5].innerText; //Free D

   priceArray5=o5v1.split(".");
   o5v1=priceArray5[1];

   new1obj5={
     name:o5v0,
     price:o5v1,
     active:o5v2,
     dateL:o5v3,
     cat:o5v4,
     FreeD:o5v5
   };

   sessionStorage.setItem("new1obj1", JSON.stringify(new1obj1));
   sessionStorage.setItem("new1obj2", JSON.stringify(new1obj2));
   sessionStorage.setItem("new1obj3", JSON.stringify(new1obj3));
   sessionStorage.setItem("new1obj4", JSON.stringify(new1obj4));
   sessionStorage.setItem("new1obj5", JSON.stringify(new1obj5));
   // alert(new1obj5.cat);


}

function availStuff(){
  // alert("yo");
  // newobj1 = JSON.parse(sessionStorage.getItem("newobj1"));
  new1obj1 = JSON.parse(sessionStorage.getItem("new1obj1"));
  new1obj2 = JSON.parse(sessionStorage.getItem("new1obj2"));
  new1obj3 = JSON.parse(sessionStorage.getItem("new1obj3"));
  new1obj4 = JSON.parse(sessionStorage.getItem("new1obj4"));
  new1obj5 = JSON.parse(sessionStorage.getItem("new1obj5"));
  // alert(new1obj3.name);

  if(new1obj1.active=="yes"){
    var currD=new Date();
    var tokens=new1obj1.dateL.split("/");
    tok=tokens[2]+"-"+tokens[1]+"-"+tokens[0];
    var launchD=new Date(tok);
    if(launchD<=currD){

      document.getElementById("menu_avail").innerHTML+="<tr><td class='nameAdmin'>"+new1obj1.name+"</td><td>"+ new1obj1.FreeD+"</td><td class='priceAdmin'>Rs."+new1obj1.price+".00</td><td>"+new1obj1.cat+"</td><td><a  onclick='itemAdded(1)' href='menu-item-list-customer-notification.html'>Add to Cart</a></td></tr>";

    }
  }

  if(new1obj2.active=="yes"){
    var currD=new Date();
    var tokens=new1obj2.dateL.split("/");
    tok=tokens[2]+"-"+tokens[1]+"-"+tokens[0];
    var launchD=new Date(tok);
    if(launchD<=currD){

      document.getElementById("menu_avail").innerHTML+="<tr><td class='nameAdmin'>"+new1obj2.name+"</td><td>"+ new1obj2.FreeD+"</td><td class='priceAdmin'>Rs."+new1obj2.price+".00</td><td>"+new1obj2.cat+"</td><td><a onclick='itemAdded(2)' href='menu-item-list-customer-notification.html'>Add to Cart</a></td></tr>";

    }
  }

  if(new1obj3.active=="yes"){
    var currD=new Date();
    var tokens=new1obj3.dateL.split("/");
    tok=tokens[2]+"-"+tokens[1]+"-"+tokens[0];
    var launchD=new Date(tok);
    if(launchD<=currD){

      document.getElementById("menu_avail").innerHTML+="<tr><td class='nameAdmin'>"+new1obj3.name+"</td><td>"+ new1obj3.FreeD+"</td><td class='priceAdmin'>Rs."+new1obj3.price+".00</td><td>"+new1obj3.cat+"</td><td><a onclick='itemAdded(3)' href='menu-item-list-customer-notification.html'>Add to Cart</a></td></tr>";
      // alert(obj1.cat);
    }
  }
  if(new1obj4.active=="yes"){
    var currD=new Date();
    var tokens=new1obj4.dateL.split("/");
    tok=tokens[2]+"-"+tokens[1]+"-"+tokens[0];
    var launchD=new Date(tok);
    if(launchD<=currD){

      document.getElementById("menu_avail").innerHTML+="<tr><td class='nameAdmin'>"+new1obj4.name+"</td><td>"+ new1obj4.FreeD+"</td><td class='priceAdmin'>Rs."+new1obj4.price+".00</td><td>"+new1obj4.cat+"</td><td><a onclick='itemAdded(4)' href='menu-item-list-customer-notification.html'>Add to Cart</a></td></tr>";
      // alert(obj1.cat);
    }
  }
  if(new1obj5.active=="yes"){
    var currD=new Date();
    var tokens=new1obj5.dateL.split("/");
    tok=tokens[2]+"-"+tokens[1]+"-"+tokens[0];
    var launchD=new Date(tok);
    if(launchD<=currD){

      document.getElementById("menu_avail").innerHTML+="<tr><td class='nameAdmin'>"+new1obj5.name+"</td><td>"+ new1obj5.FreeD+"</td><td class='priceAdmin'>Rs."+new1obj5.price+".00</td><td>"+new1obj5.cat+"</td><td><a onclick='itemAdded(5)' href='menu-item-list-customer-notification.html'>Add to Cart</a></td></tr>";
      // alert(obj1.cat);
    }
  }
}
function itemAdded(row){

  // document.getElementById("Status").innerHTML="Item successfull added to your cart";
  if(row==1){
    document.getElementById("hidd").value+="1,";
  }
  if(row==2){
    document.getElementById("hidd").value+="2,";
  }
  if(row==3){
    document.getElementById("hidd").value+="3,";
  }
  if(row==4){
    document.getElementById("hidd").value+="4,";
  }
  if(row==5){
    document.getElementById("hidd").value+="5,";
  }
  var first=document.getElementById("hidd").value;
  sessionStorage.setItem("first", JSON.stringify(first));
  // alert(first);
  // return false;
}

function availStuff2(){
  // alert("yp");
  first = JSON.parse(sessionStorage.getItem("first"));
  // alert(first);
  new1obj1 = JSON.parse(sessionStorage.getItem("new1obj1"));
  new1obj2 = JSON.parse(sessionStorage.getItem("new1obj2"));
  new1obj3 = JSON.parse(sessionStorage.getItem("new1obj3"));
  new1obj4 = JSON.parse(sessionStorage.getItem("new1obj4"));
  new1obj5 = JSON.parse(sessionStorage.getItem("new1obj5"));
  // alert(new1obj3.name);

  if(new1obj1.active=="yes"){
    var currD=new Date();
    var tokens=new1obj1.dateL.split("/");
    tok=tokens[2]+"-"+tokens[1]+"-"+tokens[0];
    var launchD=new Date(tok);
    if(launchD<=currD){

      document.getElementById("menu_avail-not").innerHTML+="<tr><td class='nameAdmin'>"+new1obj1.name+"</td><td>"+ new1obj1.FreeD+"</td><td class='priceAdmin'>Rs."+new1obj1.price+".00</td><td>"+new1obj1.cat+"</td><td><a  onclick='itemAdded2(1)'href='#'>Add to Cart</a></td></tr>";

    }
  }

  if(new1obj2.active=="yes"){
    var currD=new Date();
    var tokens=new1obj2.dateL.split("/");
    tok=tokens[2]+"-"+tokens[1]+"-"+tokens[0];
    var launchD=new Date(tok);
    if(launchD<=currD){

      document.getElementById("menu_avail-not").innerHTML+="<tr><td class='nameAdmin'>"+new1obj2.name+"</td><td>"+ new1obj2.FreeD+"</td><td class='priceAdmin'>Rs."+new1obj2.price+".00</td><td>"+new1obj2.cat+"</td><td><a onclick='itemAdded2(2)' href='#'>Add to Cart</a></td></tr>";

    }
  }

  if(new1obj3.active=="yes"){
    var currD=new Date();
    var tokens=new1obj3.dateL.split("/");
    tok=tokens[2]+"-"+tokens[1]+"-"+tokens[0];
    var launchD=new Date(tok);
    if(launchD<=currD){

      document.getElementById("menu_avail-not").innerHTML+="<tr><td class='nameAdmin'>"+new1obj3.name+"</td><td>"+ new1obj3.FreeD+"</td><td class='priceAdmin' >Rs"+new1obj3.price+".00</td><td>"+new1obj3.cat+"</td><td><a onclick='itemAdded2(3)' href='#'>Add to Cart</a></td></tr>";
      // alert(obj1.cat);
    }
  }
  if(new1obj4.active=="yes"){
    var currD=new Date();
    var tokens=new1obj4.dateL.split("/");
    tok=tokens[2]+"-"+tokens[1]+"-"+tokens[0];
    var launchD=new Date(tok);
    if(launchD<=currD){

      document.getElementById("menu_avail-not").innerHTML+="<tr><td class='nameAdmin'>"+new1obj4.name+"</td><td>"+ new1obj4.FreeD+"</td><td class='priceAdmin'>Rs."+new1obj4.price+".00</td><td>"+new1obj4.cat+"</td><td><a onclick='itemAdded2(4)' href='#'>Add to Cart</a></td></tr>";
      // alert(obj1.cat);
    }
  }
  if(new1obj5.active=="yes"){
    var currD=new Date();
    var tokens=new1obj5.dateL.split("/");
    tok=tokens[2]+"-"+tokens[1]+"-"+tokens[0];
    var launchD=new Date(tok);
    if(launchD<=currD){

      document.getElementById("menu_avail-not").innerHTML+="<tr><td class='nameAdmin'>"+new1obj5.name+"</td><td>"+ new1obj5.FreeD+"</td><td class='priceAdmin'>Rs."+new1obj5.price+".00</td><td>"+new1obj5.cat+"</td><td><a onclick='itemAdded2(5)' href='#'>Add to Cart</a></td></tr>";
      // alert(obj1.cat);
    }
  }
  document.getElementById("hidd2").value=first;

}

function itemAdded2(row){

  // document.getElementById("Status").innerHTML="Item successfull added to your cart";
  if(row==1){
    document.getElementById("hidd2").value+="1,";
  }
  if(row==2){
    document.getElementById("hidd2").value+="2,";
  }
  if(row==3){
    document.getElementById("hidd2").value+="3,";
  }
  if(row==4){
    document.getElementById("hidd2").value+="4,";
  }
  if(row==5){
    document.getElementById("hidd2").value+="5,";
  }


}


function makeCart(){
  // alert("this");
  var data=document.getElementById("hidd2").value;
  // alert(data);
  var crt=data.split(",");
  var cart=[];
  for(i=0;i<crt.length-1;i++){
    cart[i]=crt[i];
  }
  sessionStorage.setItem("cart", JSON.stringify(cart));
  // alert(cart);
  return true;
}

function showCart(){
  cart = JSON.parse(sessionStorage.getItem("cart"));
  // alert(cart);
  new1obj1 = JSON.parse(sessionStorage.getItem("new1obj1"));
  new1obj2 = JSON.parse(sessionStorage.getItem("new1obj2"));
  new1obj3 = JSON.parse(sessionStorage.getItem("new1obj3"));
  new1obj4 = JSON.parse(sessionStorage.getItem("new1obj4"));
  new1obj5 = JSON.parse(sessionStorage.getItem("new1obj5"));
  var totalCost=0;
  for(i=0;i<cart.length;i++){
    if(cart[i]==1){
      totalCost=parseInt(new1obj1.price)+totalCost;
      document.getElementById("cart-table").innerHTML+="<tr><td class='nameAdmin'>"+new1obj1.name+"</td><td>"+new1obj1.FreeD+"</td><td class='priceAdmin'> Rs."+new1obj1.price+".00</td><td><a onclick='Del(1)' href='cart-notification.html'>Delete</a></td></tr>";
    }
    if(cart[i]==2){
      totalCost=parseInt(new1obj2.price)+totalCost;
      document.getElementById("cart-table").innerHTML+="<tr><td class='nameAdmin'>"+new1obj2.name+"</td><td>"+new1obj2.FreeD+"</td><td class='priceAdmin'> Rs."+new1obj2.price+".00</td><td><a onclick='Del(2)' href='cart-notification.html'>Delete</a></td></tr>";
    }
    if(cart[i]==3){
      totalCost=parseInt(new1obj3.price)+totalCost;
      document.getElementById("cart-table").innerHTML+="<tr><td class='nameAdmin'>"+new1obj3.name+"</td><td>"+new1obj3.FreeD+"</td><td class='priceAdmin'> Rs."+new1obj3.price+".00</td><td><a onclick='Del(3)' href='cart-notification.html'>Delete</a></td></tr>";
    }
    if(cart[i]==4){
      totalCost=parseInt(new1obj4.price)+totalCost;
      document.getElementById("cart-table").innerHTML+="<tr><td class='nameAdmin'>"+new1obj4.name+"</td><td>"+new1obj4.FreeD+"</td><td class='priceAdmin'> Rs."+new1obj4.price+".00</td><td><a onclick='Del(4)' href='cart-notification.html'>Delete</a></td></tr>";
    }
    if(cart[i]==5){
      totalCost=parseInt(new1obj5.price)+totalCost;
      document.getElementById("cart-table").innerHTML+="<tr><td class='nameAdmin'>"+new1obj5.name+"</td><td>"+new1obj5.FreeD+"</td><td class='priceAdmin'> Rs."+new1obj5.price+".00</td><td><a onclick='Del(5)' href='cart-notification.html'>Delete</a></td></tr>";
    }
  }
  document.getElementById("cart-table").innerHTML+="<tr><td></td><td><b>Total Cost</b></td><td class='priceAdmin'>Rs."+totalCost+".00</td></tr>";
  // alert(totalCost);

}

function Del(row){
  cart = JSON.parse(sessionStorage.getItem("cart"));
  for(i=0;i<cart.length;i++){
    if(row==1 && cart[i]==1){
      cart.splice(i,1);
      break;
    }
    if(row==2 && cart[i]==2){
      cart.splice(i,1);
      break;
    }
    if(row==3 && cart[i]==3){
      cart.splice(i,1);
      break;
    }
    if(row==4 && cart[i]==4){
      cart.splice(i,1);
      break;
    }
    if(row==5 && cart[i]==5){
      cart.splice(i,1);
      break;
    }
  }
  sessionStorage.setItem("cart", JSON.stringify(cart));
  // alert(cart);

}

function showCart2(){
  // alert("yo");
  cart = JSON.parse(sessionStorage.getItem("cart"));
  // alert(cart);
  new1obj1 = JSON.parse(sessionStorage.getItem("new1obj1"));
  new1obj2 = JSON.parse(sessionStorage.getItem("new1obj2"));
  new1obj3 = JSON.parse(sessionStorage.getItem("new1obj3"));
  new1obj4 = JSON.parse(sessionStorage.getItem("new1obj4"));
  new1obj5 = JSON.parse(sessionStorage.getItem("new1obj5"));
  var totalCost=0;
  for(i=0;i<cart.length;i++){
    if(cart[i]==1){
      totalCost=parseInt(new1obj1.price)+totalCost;
      document.getElementById("cart-table-not").innerHTML+="<tr><td class='nameAdmin'>"+new1obj1.name+"</td><td>"+new1obj1.FreeD+"</td><td class='priceAdmin'> Rs."+new1obj1.price+".00</td><td><a onclick='Del2(1)' href='cart-notification.html'>Delete</a></td></tr>";
    }
    if(cart[i]==2){
      totalCost=parseInt(new1obj2.price)+totalCost;
      document.getElementById("cart-table-not").innerHTML+="<tr><td class='nameAdmin'>"+new1obj2.name+"</td><td>"+new1obj2.FreeD+"</td><td class='priceAdmin'> Rs."+new1obj2.price+".00</td><td><a onclick='Del2(2)' href='cart-notification.html'>Delete</a></td></tr>";
    }
    if(cart[i]==3){
      totalCost=parseInt(new1obj3.price)+totalCost;
      document.getElementById("cart-table-not").innerHTML+="<tr><td class='nameAdmin'>"+new1obj3.name+"</td><td>"+new1obj3.FreeD+"</td><td class='priceAdmin'> Rs."+new1obj3.price+".00</td><td><a onclick='Del2(3)' href='cart-notification.html'>Delete</a></td></tr>";
    }
    if(cart[i]==4){
      totalCost=parseInt(new1obj4.price)+totalCost;
      document.getElementById("cart-table-not").innerHTML+="<tr><td class='nameAdmin'>"+new1obj4.name+"</td><td>"+new1obj4.FreeD+"</td><td class='priceAdmin'> Rs."+new1obj4.price+".00</td><td><a onclick='Del2(4)' href='cart-notification.html'>Delete</a></td></tr>";
    }
    if(cart[i]==5){
      totalCost=parseInt(new1obj5.price)+totalCost;
      document.getElementById("cart-table-not").innerHTML+="<tr><td class='nameAdmin'>"+new1obj5.name+"</td><td>"+new1obj5.FreeD+"</td><td class='priceAdmin'> Rs."+new1obj5.price+".00</td><td><a onclick='Del2(5)' href='cart-notification.html'>Delete</a></td></tr>";
    }
  }
  document.getElementById("cart-table-not").innerHTML+="<tr><td></td><td><b>Total Cost</b></td><td class='priceAdmin'>Rs."+totalCost+".00</td></tr>";
  // alert(totalCost);
  if(totalCost==0){

    location.replace("cart-empty.html");
  }
}

function Del2(row){
  cart = JSON.parse(sessionStorage.getItem("cart"));
  for(i=0;i<cart.length;i++){
    if(row==1 && cart[i]==1){
      cart.splice(i,1);
      break;
    }
    if(row==2 && cart[i]==2){
      cart.splice(i,1);
      break;
    }
    if(row==3 && cart[i]==3){
      cart.splice(i,1);
      break;
    }
    if(row==4 && cart[i]==4){
      cart.splice(i,1);
      break;
    }
    if(row==5 && cart[i]==5){
      cart.splice(i,1);
      break;
    }
  }
  sessionStorage.setItem("cart", JSON.stringify(cart));
  // alert(cart);

}
