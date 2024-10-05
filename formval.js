
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const mesg = document.getElementById("msg");
    const form = document.getElementById("form1");
    const nmErr = document.getElementById("nm-error");
    const nameErr = document.getElementById("nam-err");
    const emlErr = document.getElementById("eml-err");
    const msgErr = document.getElementById("msg-err");
    const subm = document.getElementById("sub");

    var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let valid = true;
    form.addEventListener("submit", (e) => {
        if (name.value === "" || name.value === null) {
            e.preventDefault();
            console.log("Name not given");

            nmErr.innerHTML = "Kindly enter your name";
            nmErr.style.color = "red";

            valid = false;
        } else {
            nmErr.innerHTML = "";
        }

        if (!email.value.match(validRegex)) {
            e.preventDefault();
            console.log("Email not given!");
            emlErr.innerHTML = "Email must contain @-symbol and a domain!";
            emlErr.style.color = "red";
            valid = false;
        } else {
            emlErr.innerHTML = "";
        }
        if (mesg.value === "" || mesg.value === null) {
            e.preventDefault();
            console.log("No Message detected");
            msgErr.innerHTML = "Kindly add some message";
            msgErr.style.color = "red";
            valid = false;
        } else {
            msgErr.innerHTML = "";
        }
    
    

        if (valid) {
            alert(
                "Your Message has been submitted successfully! I will reach out to you within next 24 working hours!"
            );
        }
    });
