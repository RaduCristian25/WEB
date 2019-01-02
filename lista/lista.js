const list = document.getElementById('list');
const formName = document.getElementById('formName');
const formUrl = document.getElementById('formUrl');
const addButton = document.getElementById('addButton');
let updateButton = document.getElementById('updateButton');

// fetch the bikes list
function getBikes() {
    fetch('http://localhost:3000/bikes')
        .then(function (response) {
            // Trasform server response to get the bikes
            response.json().then(function (bikes) {
                appendBikesToDOM(bikes);
            });
        });
};

// post bikes
function postBike() {
    // creat post object
    const postObject = {
        name: formName.value,
        img: formUrl.value
    }
    // post Bike
    fetch('http://localhost:3000/bikes', {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(postObject)
    }).then(function () {
        // Get the new bikes list
        getBikes();
        // Reset Form
        resetForm();
    });
}

// delete Bike
function deleteBike(id) {
    // delete Bike
    fetch(`http://localhost:3000/bikes/${id}`, {
        method: 'DELETE',
    }).then(function () {
        // Get the new bikes list
        getBikes();
    });
}

// update Bike
function updateBike(id) {
    // creat put object
    const putObject = {
        name: formName.value,
        img: formUrl.value
    }
    // update Bike
    fetch(`http://localhost:3000/bikes/${id}`, {
        method: 'PUT',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(putObject)
    }).then(function () {
        // Get the new bikes list
        getBikes();

        // change button event from update to add
        addButton.disabled = false;

        // remove all event from update button
        clearUpdateButtonEvents();

        // Reset Form
        resetForm();
    });
}

// copy edited Bike information to form and add event listener on update button
function editBike(Bike) {
    // copy Bike information to form
    formName.value = Bike.name;
    formUrl.value = Bike.img;
    
    // disable add button
    addButton.disabled = true;

    // clear all events update button events
    clearUpdateButtonEvents();

    // enable and add event on update button
    updateButton.disabled = false;
    updateButton.addEventListener('click', function () {
        updateBike(Bike.id)
    });

}

// Create and append img and name DOM tags
function appendBikesToDOM(bikes) {
    // remove Bike list if exist
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    // create and append tags
    for (let i = 0; i < bikes.length; i++) {
        // create image obj
        let img = document.createElement('img');
        img.className = "picture";
        img.src = bikes[i].img;
        // create name obj
        let name = document.createElement('span');
        name.className = "text";
        name.innerText = bikes[i].name;

        // create button and event for edit and delete
        let editButton = document.createElement('button')
        editButton.className = "button";
        // add event on btn and pass Bike id more at https://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
        editButton.addEventListener('click', function () {
            editBike(bikes[i])
        });
        editButton.innerText = 'Editare';
        let deleteButton = document.createElement('button')
        deleteButton.className = "button";
        // add event on btn and pass Bike object more at https://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
        deleteButton.addEventListener('click', function () {
            deleteBike(bikes[i].id)
        });
        deleteButton.innerText = 'Stergere';
        // create a container for img and name
        let container = document.createElement('div');
        container.className = "flex";
        // append elements to container
        container.appendChild(img);
        container.appendChild(name);
        container.appendChild(editButton);
        container.appendChild(deleteButton);

        // append container to DOM (list div)
        list.appendChild(container);
    }
}

// reset form
function resetForm() {
    formName.value = '';
    formUrl.value = '';
}
//  remove Update Button to clear events more at https://stackoverflow.com/questions/9251837/how-to-remove-all-listeners-in-an-element
function clearUpdateButtonEvents() {
    let newUpdateButton = updateButton.cloneNode(true);
    updateButton.parentNode.replaceChild(newUpdateButton, updateButton);
    updateButton = document.getElementById('updateButton');
}
// add event listener on add button
addButton.addEventListener('click', postBike);

// get bikes
getBikes();