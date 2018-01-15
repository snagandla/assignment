
function displayedit(){
    if($("#addform").hide()){
    if(!(getSelectedRow()==null)){
    $("#editform").toggle();

    disabledRadioButton();
    retrieved();
}}
     }
     function undisplayedit(){
        var a= $("#editform");
        if(a.style.display=="block"){
          a.style.display= "none";
        }
    
     }
    
 function editclose(){
    $("#editform").toggle();
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
              coloumns[0].firstChild.nodeValue= $("#editTitle").val();
              coloumns[1].firstChild.nodeValue= $("#editDescription").val();
              coloumns[2].firstChild.nodeValue=$("#editPerson").val();
              coloumns[3].firstChild.nodeValue=  $("#editHours").val();
              coloumns[4].firstChild.nodeValue= $("#editStartDate").val();
              coloumns[5].firstChild.nodeValue=  $("#editEndDate").val();
          }
          
          function editClear(){
            $("#editTitle").val("");
            $("#editDescription").val("");
            $("#editPerson").val("");
            $("#editHours").val("");
            $("#editStartDate").val("");
            $("#editEndDate").val("");
                      }  
             
function editjson(){
    var selectedrow=getSelectedRow();
              
              var editText={ Title:$("#editTitle").val(),Description :$("#editDescription").val(), Assignee:$("editPerson").val(),EstimatedHours: $("editHours").val(),StartDate: $("editStartDate").val(),EndDate:$("editEndDate").val()};
  
    glbTaskList.splice(selectedrow.index,1,editText);


}
function validateEdit(){
    var title= $("#editTitle").val();
    var descript= $("#editDescription").val();
    var person= $("#editPerson").val();
    var hours=  $("#editHours").val();
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
