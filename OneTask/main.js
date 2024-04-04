var arr = [];
function createFunc() {
    var inp1 = document.querySelector("#validationCustom01").value;
    var inp2 = parseInt(document.querySelector("#validationCustom02").value);
    document.querySelector("#validationCustom01").value = "";
    document.querySelector("#validationCustom02").value = "";
    if (inp1 && inp2) {
        var prod = {
            name: inp1,
            price: inp2
        };
        arr.push(prod);
        var push = "";
        for (var index = 0; index < arr.length; index++) {
            var element = arr[index];
            push += " <tr>\n                        <th scope=\"row\">".concat(index + 1, "</th>\n                        <td>").concat(element.name, "</td>\n                        <td>").concat(element.price, "</td>\n                        <td><button type=\"button\" class=\"btn btn-success\" data-bs-toggle=\"modal\"\n                        data-bs-target=\"#exampleModal\"\n                        data-bs-whatever=\"@getbootstrap\" onclick=\"modalChangeTitle(").concat(index + 1, ")\">Update</button><button type=\"button\" onclick=\"deleteFunc(").concat(index, ")\" class=\"btn btn-danger\">Delete</button></td>\n                    </tr>");
        }
        document.getElementById("tbody").innerHTML = push;
    }
}
function updateFunc() {
    var inp1 = document.querySelector("#inp1").value;
    var inp2 = parseInt(document.querySelector("#inp2").value);
    var num = parseInt(document.getElementById("exampleModalLabel").innerHTML) - 1;
    if (inp1 && inp2) {
        arr[num].name = inp1;
        arr[num].price = inp2;
    }
    else if (inp1) {
        arr[num].name = inp1;
    }
    else if (inp2) {
        arr[num].price = inp2;
    }
    var push = "";
    for (var index = 0; index < arr.length; index++) {
        var element = arr[index];
        push += " <tr>\n                    <th scope=\"row\">".concat(index + 1, "</th>\n                    <td>").concat(element.name, "</td>\n                    <td>").concat(element.price, "</td>\n                    <td><button type=\"button\" class=\"btn btn-success\" data-bs-toggle=\"modal\"\n                    data-bs-target=\"#exampleModal\"\n                    data-bs-whatever=\"@getbootstrap\" onclick=\"modalChangeTitle(").concat(index + 1, ")\">Update</button><button type=\"button\" onclick=\"deleteFunc(").concat(index, ")\" class=\"btn btn-danger\">Delete</button></td>\n                </tr>");
    }
    document.getElementById("tbody").innerHTML = push;
}
function deleteFunc(index) {
    arr.splice(index, 1);
    var push = "";
    for (var index_1 = 0; index_1 < arr.length; index_1++) {
        var element = arr[index_1];
        push += " <tr>\n                    <th scope=\"row\">".concat(index_1 + 1, "</th>\n                    <td>").concat(arr[index_1][0], "</td>\n                    <td>").concat(arr[index_1][1], "</td>\n                    <td><button type=\"button\" class=\"btn btn-success\" data-bs-toggle=\"modal\"\n                    data-bs-target=\"#exampleModal\"\n                    data-bs-whatever=\"@getbootstrap\" onclick=\"modalChangeTitle(").concat(index_1, ")\">Update</button><button type=\"button\" onclick=\"deleteFunc()\" class=\"btn btn-danger\">Delete</button></td>\n                </tr>");
    }
    document.getElementById("tbody").innerHTML = push;
    if (push == "") {
        document.getElementById("tbody").innerHTML = push;
    }
}
function modalChangeTitle(index) {
    document.getElementById("exampleModalLabel").innerHTML = index;
}
function cencelFunc() {
    document.querySelector("#inp1").value = "";
    document.querySelector("#inp2").value = "";
}
