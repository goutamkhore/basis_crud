var selectedRow = null;
function onFormSubmit(e) {
    event.preventDefault();
    var formdata = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formdata);
    } else {
        updateRecord(formdata);
    }
    resetForm();
}

// Retrieve the data
function readFormData() {
    var formdata = {};
    formdata['productCode'] = document.getElementById('productCode').value;
    formdata['product'] = document.getElementById('product').value;
    formdata['qyt'] = document.getElementById('qyt').value;
    formdata['perPrice'] = document.getElementById('perPrice').value;
    return formdata;
}

// insert the data
function insertNewRecord(data) {
    var table = document
        .getElementById('storeList')
        .getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productCode;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.product;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.qyt;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.perPrice;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onClick= 'onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;
}

// edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('productCode').value =
        selectedRow.cells[0].innerHTML;
    document.getElementById('product').value = selectedRow.cells[1].innerHTML;
    document.getElementById('qyt').value = selectedRow.cells[2].innerHTML;
    document.getElementById('perPrice').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formdata) {
    selectedRow.cells[0].innerHTML = formdata.productCode;
    selectedRow.cells[1].innerHTML = formdata.product;
    selectedRow.cells[2].innerHTML = formdata.qyt;
    selectedRow.cells[3].innerHTML = formdata.perPrice;
}

// Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record ? ')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm() {
    document.getElementById('productCode').value = '';
    document.getElementById('product').value = '';
    document.getElementById('qyt').value = '';
    document.getElementById('perPrice').value = '';
}
