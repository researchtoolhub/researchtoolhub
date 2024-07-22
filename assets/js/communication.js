function submitForm() {
    var formData = new FormData(document.getElementById("myForm"));
    
    // Convert form data to JSON
    var jsonObject = {};
    formData.forEach(function(value, key){
        jsonObject[key] = value;
    });
    var jsonData = JSON.stringify(jsonObject);
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: jsonData
    // redirect: "follow",
    // mode: 'cors'
    };

    fetch("https://mini-coders.com/api/users", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
};

function submitLead() {
    var formData = new FormData(document.getElementById("leadForm"));
    
    // Convert form data to JSON
    var jsonObject = {};
    formData.forEach(function(value, key){
        jsonObject[key] = value;
    });
    var jsonData = JSON.stringify(jsonObject);
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: jsonData
    // redirect: "follow",
    // mode: 'cors'
    };

    fetch("https://mini-coders.com/api/leads/researchtoolhub", requestOptions)
    .then((response) => response.text())
    .then((result) => {
        console.log(result);
        // $('#submissionModal').modal('show');
        $('#leadForm')[0].reset();
    })
    .catch((error) => console.error(error));
};