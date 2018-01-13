function addrow(){
    var mainrow= document.createElement("tr");
    document.getElementById("main").appendChild(mainrow);

    var col1=document.createElement("td");
    col1.appendChild(document.createTextNode(document.getElementById("addTitle").value));
    mainrow.appendChild(col1);

    var col2=document.createElement("td");
    col2.appendChild(document.createTextNode(document.getElementById("addDescription").value));
    mainrow.appendChild(col2);

    var col3=document.createElement("td");
    col3.appendChild(document.createTextNode(document.getElementById("addPerson").value));
    mainrow.appendChild(col3);

    
    var col4=document.createElement("td");
    col4.appendChild(document.createTextNode(document.getElementById("addHours").value));
    mainrow.appendChild(col4);

    var col5=document.createElement("td");
    col5.appendChild(document.createTextNode(document.getElementById("addStartDate").value));
    mainrow.appendChild(col5);


    var col6=document.createElement("td");
    col6.appendChild(document.createTextNode(document.getElementById("addEndDate").value));
    mainrow.appendChild(col6);
    var col7=document.createElement("td");
    var sel= document.createElement("input");
    sel.setAttribute("type","radio");
    sel.setAttribute("name","myRadio");
    col7.appendChild(sel);
    mainrow.appendChild(col7);

    var addtext= ({ Title:document.getElementById("addTitle").value,Description : document.getElementById("addDescription").value, Assignee:document.getElementById("addPerson").value,EstimatedHours:document.getElementById("addHours"),StartDate:document.getElementById("addStartDate").value,EndDate:document.getElementById("addEndDate").value});                
    glbTaskList.push(addtext);

}

function validateAdd(){
    var title= document.getElementById("addTitle").value;
    var descript= document.getElementById("addDescription").value;
    var person= document.getElementById("addPerson").value;
    var hours= document.getElementById("addHours").value;
if(!isNaN(title)||(title==null)){
    alert("title cannot be numeric");
    return false;
}else if(!isNaN(descript)||(title==null)){
    alert("description can't be numeric");
    return false;
}else if(!isNaN(person)||(title==null)){
    alert("person name can't be numeric");
    return false;
}else if(isNaN(hours)||(title==null)){
    alert("hours must be numeric");
    return false;
}else return true;

}

function addClear(){
document.getElementById("addTitle").value="";
document.getElementById("addDescription").value="";
document.getElementById("addPerson").value="";
document.getElementById("addHours").value="";
document.getElementById("addStartDate").value="";
document.getElementById("addEndDate").value="";
    }   
    
    
    
function addAndClear(){
    if(validateAdd()==true){
         addrow();
        }
   
    addClear();  
    undisplayadd(); 
 }
function undisplayadd(){
    var a= document.getElementById("addform");
    if(a.style.display=="block"){
      a.style.display= "none";
    }
 }

function displayadd(){
var x= document.getElementById("addform");
if(x.style.display=="none"){
x.style.display= "block";
}else{
x.style.display="none";
}
}


function addclose(){
 var y= document.getElementById("addform");
if(y.style.display=="hidden"){
y.style.display= "none";
}else{
y.style.display="none";
}
}

