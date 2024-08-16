let array=`[
    {"name":"Hari","ID":101,"age":22,"email":"harik123@gmail.com"},
    {"name":"Dhina","ID":102,"age":23,"email":"dhina123@gmail.com"},
    {"name":"Arun","ID":103,"age":22,"email":"arun123@gmail.com"},
    {"name":"Akash","ID":104,"age":24,"email":"akash123@gmail.com"},
    {"name":"Keyan","ID":105,"age":21,"email":"keyan123@gmail.com"},
    {"name":"Sathish","ID":106,"age":32,"email":"sathish123@gmail.com"},
    {"name":"Hari","ID":107,"age":22,"email":"harik123@gmail.com"},
    {"name":"Dhina","ID":108,"age":23,"email":"dhina123@gmail.com"},
    {"name":"Arun","ID":109,"age":22,"email":"arun123@gmail.com"},
    {"name":"Akash","ID":110,"age":24,"email":"akash123@gmail.com"},
    {"name":"Keyan","ID":111,"age":21,"email":"keyan123@gmail.com"},
    {"name":"Sathish","ID":112,"age":32,"email":"sathish123@gmail.com"}
]`
let finalData=JSON.parse(array);
// console.log(finalData)

let tbody=document.querySelector("tbody");
// Function to display table data
function displayTable(data) {
    tbody.innerHTML = ''; // Clear existing table rows
    data.forEach(arry => {
        let t_row = document.createElement("tr");
        let td_1 = document.createElement("td");
        let td_2 = document.createElement("td");
        let td_3 = document.createElement("td");
        let td_4 = document.createElement("td");
        
        td_1.innerText = arry.name;
        td_2.innerText = arry.ID;
        td_3.innerText = arry.age;
        td_4.innerText = arry.email;
        
        t_row.appendChild(td_1);
        t_row.appendChild(td_2);
        t_row.appendChild(td_3);
        t_row.appendChild(td_4);
        tbody.appendChild(t_row);
    });
}

// Initial table display
displayTable(finalData);

// Search functionality
let search_btn = document.querySelector("#search-btn");
let search_input = document.querySelector("#ip-search");

search_btn.addEventListener("click", () => {
    let query = search_input.value.toLowerCase();
    let filteredData = finalData.filter(arry => 
        arry.name.toLowerCase().includes(query) || 
        arry.ID.toString().includes(query) || 
        arry.age.toString().includes(query) || 
        arry.email.toLowerCase().includes(query)
    );
    displayTable(filteredData); // Display filtered data
    search_input.value = ''; // Clear input field after search
});