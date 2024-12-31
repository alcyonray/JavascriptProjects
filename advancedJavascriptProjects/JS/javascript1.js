function formValidate() {
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    if (firstName == "" || lastName == "") {
        alert("Both name fields must be filled out");
    } else {
        alert("Thank you, and welcome to our site, " + firstName + " " + lastName + "!");
    }
}