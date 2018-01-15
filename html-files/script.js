function getSelectedRow(){
var allRows = $("[name='myRadio']");
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
    var radios = $("[name='myRadio']");
    for(var i=0;i<radios.length;i++){

        radios[i].disabled=true;
    }
}

 function enabledRadioButton(){
        var radios =$("[name='myRadio']");
        for(var i=0;i<radios.length;i++){
    
            radios[i].disabled=false;
        }

}
function retrieved(){
    var selectedRow=getSelectedRow();
    var coloumns=selectedRow.row.childNodes;
  
    $("#editTitle").val(coloumns[0].firstChild.nodeValue);
    $("#editDescription").val(coloumns[1].firstChild.nodeValue);
    $("#editPerson").val(coloumns[2].firstChild.nodeValue);
    $("#editHours").val(coloumns[3].firstChild.nodeValue);
    $("#editStartDate").val(coloumns[4].firstChild.nodeValue);
    $("#editEndDate").val(coloumns[5].firstChild.nodeValue);
}
 var glbTaskList=[];
 var data;
  function createDefault(){
    var text='[{"Title":"My First Task",  "Description":"My First Task","Assignee":"John","EstimatedHours":"10","StartDate":"2017-12-01","EndDate":"2017-12-31"},{"Title":"My Second Task",  "Description":"My Second Task","Assignee":"John1","EstimatedHours":"10","StartDate":"2017-12-01","EndDate":"2017-12-31"},{"Title":"My Third Task",  "Description":"My Third Task","Assignee":"John 3","EstimatedHours":"10","StartDate":"2017-12-01","EndDate":"2017-12-31"}]';   
     data =JSON.parse(text);
    
 for(var k=0;k<data.length;k++){
    glbTaskList.push(data[k]);
       $("#main").append("<tr><td>" + data[k].Title + "</td><td>" +data[k].Description + "</td><td>" + data[k].Assignee + "</td><td>" + data[k].EstimatedHours + "</td><td>" + data[k].StartDate + "</td><td>" + data[k].EndDate + "</td><td><input type='radio' name='myRadio'></td></tr>");
 
 }

}
  

function jsondisplay(){
    alert(JSON.stringify(glbTaskList));
}


    function deleterow(){
        var selectedrow=getSelectedRow();
        glbTaskList.splice(selectedrow.index,1);
        $("#main").find('input[name="myRadio"]').each(function(){
            if($(this).is(":checked")){
                $(this).parents("tr").remove(); } });
   
        }
