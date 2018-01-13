

function getSelectedRow(){
var allRows = document.getElementsByName("myRadio");
var selectedRadioButton= null;
var i;
for( i=0;i<allRows.length;i++){
if(allRows[i].checked){
    selectedRadioButton=allRows[i];
    break;
}
}
var selectedRow=null;
if(selectedRadioButton!=null){
    selectedRow={row :  selectedRadioButton.parentElement.parentElement, index:i};
    }else if(selectedRadioButton=='noRadioChecked'){
        alert('no radio button checked');
    }
    return selectedRow;
}

function disabledRadioButton(){
    var radios = document.getElementsByName("myRadio");
    for(var i=0;i<radios.length;i++){

        radios[i].disabled=true;
    }
}

 function enabledRadioButton(){
        var radios = document.getElementsByName("myRadio");
        for(var i=0;i<radios.length;i++){
    
            radios[i].disabled=false;
        }

}
function retrieved(){
    var selectedRow=getSelectedRow();
    var coloumns=selectedRow.row.childNodes;
  
    document.getElementById("editTitle").value=coloumns[0].firstChild.nodeValue;
    document.getElementById("editDescription").value=coloumns[1].firstChild.nodeValue;
    document.getElementById("editPerson").value=coloumns[2].firstChild.nodeValue;
    document.getElementById("editHours").value=coloumns[3].firstChild.nodeValue;
    document.getElementById("editStartDate").value=coloumns[4].firstChild.nodeValue;
    document.getElementById("editEndDate").value=coloumns[5].firstChild.nodeValue;
}



 var glbTaskList=[];
 var data;
  function createDefault(){
      
    var text='[{"Title":"My First Task",  "Description":"My First Task","Assignee":"John","EstimatedHours":"10","StartDate":"2017-12-01","EndDate":"2017-12-31"},{"Title":"My Second Task",  "Description":"My Second Task","Assignee":"John1","EstimatedHours":"10","StartDate":"2017-12-01","EndDate":"2017-12-31"},{"Title":"My Third Task",  "Description":"My Third Task","Assignee":"John 3","EstimatedHours":"10","StartDate":"2017-12-01","EndDate":"2017-12-31"}]';
     
   
     data =JSON.parse(text);
    
 for(var k=0;k<data.length;k++){
    glbTaskList.push(data[k]);
       var data1=document.createTextNode(data[k].Title);
       var data2=document.createTextNode(data[k].Description);
       var data3=document.createTextNode(data[k].Assignee);
       var data4=document.createTextNode(data[k].EstimatedHours);
       var data5=document.createTextNode(data[k].StartDate);
       var data6=document.createTextNode(data[k].EndDate);
     

       var mainrow= document.createElement("tr");
       document.getElementById("main").appendChild(mainrow);
   
       var col1=document.createElement("td");
       col1.appendChild(data1);
       mainrow.appendChild(col1);
   
       var col2=document.createElement("td");
       col2.appendChild(data2);
       mainrow.appendChild(col2);
   
       var col3=document.createElement("td");
       col3.appendChild(data3);
       mainrow.appendChild(col3);
   
       
       var col4=document.createElement("td");
       col4.appendChild(data4);
       mainrow.appendChild(col4);
   
       var col5=document.createElement("td");
       col5.appendChild(data5);
       mainrow.appendChild(col5);
   
   
       var col6=document.createElement("td");
       col6.appendChild(data6);
       mainrow.appendChild(col6);

       var col7=document.createElement("td");
       var mybutton=document.createElement("input");
       mybutton.setAttribute("type","radio");
       mybutton.setAttribute("name","myRadio");
       col7.appendChild(mybutton);
       mainrow.appendChild(col7);

 }

}
  

function jsondisplay(){
    
    alert(JSON.stringify(glbTaskList));
}


function deleterow(){
    var selectedrow=getSelectedRow();
    document.getElementById("main").removeChild(selectedrow.row);

    glbTaskList.splice(selectedrow.index,1);
    }
