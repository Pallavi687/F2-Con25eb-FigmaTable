const addnewrowbutton = document.getElementById("btn2")

const tablebody = document.getElementById("tbody1")
const tableData = [];



function submitdata(name, roll, subject, marks, markedby) {
    addnewrowbutton.disabled = false

    if (name == "" || roll == "" || marks == "" || markedby == "" || subject == "") {
        alert("Please Fill all the fields");
    }
    else if (markedby.includes("@") == false) {
        alert("Enter valid Email id")
    }
    else {
        let data = { id: tableData.length + 1, student_name: name, student_roll: roll, subject: subject, marks: marks, markedBy: markedby }
        console.log("Entered in new row:", data);
        tableData.push(data);
        console.log("All Table Data", tableData);
        tablebody.innerHTML = tableData.map((item, ind) => {
            return (` <tr> <td>${item.id}</td>
            <td>${item.student_name}</td>
            <td>${item.student_roll}</td>
            <td>${item.subject}</td>
            <td>${item.marks}</td>
            <td>${item.markedBy}</td></tr>`)
        }).join("")

    }

}
addnewrowbutton.addEventListener("click", () => {

    tablebody.innerHTML = tablebody.innerHTML + `
  <td>${tableData.length + 1}</td>
  <form >
  <td><input id="stuname" type="text"/></td>
  <td><input id="rollno" type="text"/></td>
  <td><input id="subject" type="text"/></td>
  <td><input id="marks" type="number"/></td>
  <td><input id="markedby" type="email"/></td>
  <td><button class="savebutt" onclick="submitdata(document.getElementById('stuname').value,document.getElementById('rollno').value,document.getElementById('subject').value,document.getElementById('marks').value,document.getElementById('markedby').value)">Save</button></td>
  </form>`

    addnewrowbutton.disabled = true
})

