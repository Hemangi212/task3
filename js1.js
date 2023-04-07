function insertData() {
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var table = document.getElementById("myTable");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = title;
    cell2.innerHTML = description;
    cell3.innerHTML = '<button type="button" class="btn btn-danger" onclick="deleteRow(this)">Delete</button>';
    document.getElementById("myForm").reset();
}

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
} <
> < script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" > < /script><script src="https:/ / maxcdn.bootstrapcdn.com / bootstrap / 3.4 .1 / js / bootstrap.min.js "> </script></>