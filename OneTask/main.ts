interface product {
    name: string,
    price: number
}

let arr: Array<product> = [];

function createFunc(): void {
    let inp1: string = (<HTMLInputElement>document.querySelector("#validationCustom01")).value;
    let inp2: number = parseInt((<HTMLInputElement>document.querySelector("#validationCustom02")).value);
    (<HTMLInputElement>document.querySelector("#validationCustom01")).value = "";
    (<HTMLInputElement>document.querySelector("#validationCustom02")).value = "";
    if (inp1 && inp2) {
        const prod: product = {
            name: inp1,
            price: inp2
          };
        arr.push(prod)
        let push: string = ""
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            push+=` <tr>
                        <th scope="row">${index+1}</th>
                        <td>${element.name}</td>
                        <td>${element.price}</td>
                        <td><button type="button" class="btn btn-success" data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        data-bs-whatever="@getbootstrap" onclick="modalChangeTitle(${index+1})">Update</button><button type="button" onclick="deleteFunc(${index})" class="btn btn-danger">Delete</button></td>
                    </tr>`;
        }
        (<HTMLTableRowElement>document.getElementById("tbody")).innerHTML = push;
    }
}

function updateFunc() {
    let inp1: string = (<HTMLInputElement>document.querySelector("#inp1")).value;
    let inp2: number = parseInt((<HTMLInputElement>document.querySelector("#inp2")).value);
    let num: number = parseInt((<HTMLTableRowElement>document.getElementById("exampleModalLabel")).innerHTML)-1; 
    if (inp1 && inp2) {
        arr[num].name = inp1
        arr[num].price = inp2
    }
    else if (inp1) {
        arr[num].name = inp1
    }
    else if (inp2) {
        arr[num].price = inp2
    }
    let push: string = "";
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        push+=` <tr>
                    <th scope="row">${index+1}</th>
                    <td>${element.name}</td>
                    <td>${element.price}</td>
                    <td><button type="button" class="btn btn-success" data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@getbootstrap" onclick="modalChangeTitle(${index+1})">Update</button><button type="button" onclick="deleteFunc(${index})" class="btn btn-danger">Delete</button></td>
                </tr>`;
    }
    (<HTMLTableRowElement>document.getElementById("tbody")).innerHTML = push;
}
    
function deleteFunc(index): void{
    arr.splice(index, 1);
    let push: string = "";
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        push+=` <tr>
                    <th scope="row">${index+1}</th>
                    <td>${arr[index][0]}</td>
                    <td>${arr[index][1]}</td>
                    <td><button type="button" class="btn btn-success" data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@getbootstrap" onclick="modalChangeTitle(${index})">Update</button><button type="button" onclick="deleteFunc()" class="btn btn-danger">Delete</button></td>
                </tr>`;
            }
    (<HTMLTableRowElement>document.getElementById("tbody")).innerHTML = push;
    if (push == "") {
        (<HTMLTableRowElement>document.getElementById("tbody")).innerHTML = push;
    }
}

function modalChangeTitle(index) {
    (<HTMLTableRowElement>document.getElementById("exampleModalLabel")).innerHTML = index
}

function cencelFunc() {
    (<HTMLInputElement>document.querySelector("#inp1")).value = "";
    (<HTMLInputElement>document.querySelector("#inp2")).value = "";
}