// task 6 Js functionalities
var  selectedRow=null;



function onFormSubmit() {
    if(validate()){
        var formData=readFormData();
        if(selectedRow==null)
             insertNewRecord(formData);
        else
          updateRecord(formData);
        resetForm();
    }
}



function readFormData(){
    var formData={};
    formData["studentName"]=document.getElementById("studentName").value;
    formData["studentId"]=document.getElementById("studentId").value;
    formData["Class"]=document.getElementById("Class").value;
    formData["rollno"]=document.getElementById("rollno").value;
    formData["email"]=document.getElementById("email").value;
    formData["phoneno"]=document.getElementById("phoneno").value;
     return formData;

}
function insertNewRecord(data) {
    var table=document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML = data.studentName;

    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.studentId;

    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.Class;

    cell4=newRow.insertCell(3);
    cell4.innerHTML=data.rollno;

    cell5=newRow.insertCell(4);
    cell5.innerHTML=data.email;

    cell6=newRow.insertCell(5);
    cell6.innerHTML=data.phoneno;

    cell6=newRow.insertCell(6);
    cell6.innerHTML=`<a onClick="onEdit(this)">Edit</a>
                     <a onClick="onDelete(this)">Delete</a>`;



}


function resetForm() {


    document.getElementById("studentName").value="";
    document.getElementById("studentId").value="";
    document.getElementById("Class").value="";
    document.getElementById("rollno").value="";
    document.getElementById("email").value="";
    document.getElementById("phoneno").value="";
    selectedRow=null;

}
function onEdit(td) {

    selectedRow=td.parentElement.parentElement;
    document.getElementById("studentName").value=selectedRow.cells[0].innerHTML;
    document.getElementById("studentId").value=selectedRow.cells[1].innerHTML;
    document.getElementById("Class").value=selectedRow.cells[2].innerHTML;
    document.getElementById("rollno").value=selectedRow.cells[3].innerHTML;
    document.getElementById("email").value=selectedRow.cells[4].innerHTML;
    document.getElementById("phoneno").value=selectedRow.cells[5].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML=formData.studentName;
    selectedRow.cells[1].innerHTML=formData.studentId;
    selectedRow.cells[2].innerHTML=formData.Class;
    selectedRow.cells[3].innerHTML=formData.rollno;
    selectedRow.cells[4].innerHTML=formData.email;
    selectedRow.cells[5].innerHTML=formData.phoneno;


}

function onDelete(td) {
if(confirm('Are you sure to delete this record ?')) {
    row=td.parentElement.parentElement;
    document.getElementById("studentList").deleteRow(row.rowIndex);
    resetForm();
}


}
function validate(){
    isValid=true;
    if(document.getElementById("studentName").value==""){
        isValid=fale;
        document.getElementById("studentNameValidationError").classList.contains("hide");
    }else{
        isValid=true;
        if(!document.getElementById("studentNameValidationError").classList.contains("hide"))
        
            document.getElementById("studentNameValidationError").classList.add("hide");

    }
    return isValid;
}