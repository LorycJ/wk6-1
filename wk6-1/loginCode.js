function checkCreds() {
    console.log("checkCreds() started")
    //create variables
    var firstName;
    var lastName;
    var fullName;
    var badgeNumb;
    var fullNameLength;

    //inject form data
    firstName = document.getElementById("fName").value;
    console.log(firstName);
    lastName = document.getElementById("lName").value;
    console.log(lastName);
    fullName = firstName + " " + lastName;
    console.log(fullName);

    badgeNumb = document.getElementById("BadgeID").value;
    console.log("Badge number = " + badgeNumb);

    //check name length and badgeNumb length and go to UATSpace if everything is correct
    fullNameLength = fullName.length;
    console.log(fullNameLength);
    if (fullNameLength > 20) {
        document.getElementById("loginStatus").innerHTML =
            "Full name is incorrect, please resubmit";
    } else if (badgeNumb > 999 || badgeNumb < 1) {
        //check badge id number
        document.getElementById("loginStatus").innerHTML =
            "Badge Number is Incorrect, please resubmit";
    } else {
        alert("Crediental Submission successful, welcome " + fullName + "!");
        location.replace("./UAT Space Program.html");
    }
    //if correct, move on to uatspace page
}