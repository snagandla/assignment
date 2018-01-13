
function displayedit(){
    var a= document.getElementById("editform");
    if(a.style.display=="none"){
      a.style.display= "block";
    }else{
        a.style.display="none";
    }
    disabledRadioButton();
    retrieved();
     }
     function undisplayedit(){
        var a= document.getElementById("editform");
        if(a.style.display=="block"){
          a.style.display= "none";
        }
     }
    
     function editclose(){
         var y= document.getElementById("editform");
    if(y.style.display=="hidden"){
      y.style.display= "none";
    }else{
        y.style.display="none";
    }
    enabledRadioButton();
        }
    
        function editAndClear(){
            if(validateEdit()==true){
                editInsert();
            }
            editjson();
              editClear();
              enabledRadioButton();
             
              undisplayedit();
             
          }
          function editInsert(){
              var selectedRow=getSelectedRow();
              var coloumns=selectedRow.row.childNodes;
            
              coloumns[0].firstChild.nodeValue=document.getElementById("editTitle").value
              coloumns[1].firstChild.nodeValue=document.getElementById("editDescription").value;
              coloumns[2].firstChild.nodeValue=document.getElementById("editPerson").value;
              coloumns[3].firstChild.nodeValue= document.getElementById("editHours").value;
              coloumns[4].firstChild.nodeValue=document.getElementById("editStartDate").value;
              coloumns[5].firstChild.nodeValue= document.getElementById("editEndDate").value;
          }
          
          function editClear(){
              document.getElementById("editTitle").value="";
              document.getElementById("editDescription").value="";
              document.getElementById("editPerson").value="";
              document.getElementById("editHours").value="";
              document.getElementById("editStartDate").value="";
              document.getElementById("editEndDate").value="";
                      }  
             
function editjson(){
    var selectedrow=getSelectedRow();
    var editText={ Title:document.getElementById("editTitle").value,Description : document.getElementById("editDescription").value, Assignee:document.getElementById("editPerson").value,EstimatedHours:document.getElementById("editHours"),StartDate:document.getElementById("editStartDate").value,EndDate:document.getElementById("editEndDate").value};
  
    glbTaskList.splice(selectedrow.index,1,editText);


}
function validateEdit(){
    var title= document.getElementById("editTitle").value;
    var descript= document.getElementById("editDescription").value;
    var person= document.getElementById("editPerson").value;
    var hours= document.getElementById("editHours").value;
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
} else return true;

}