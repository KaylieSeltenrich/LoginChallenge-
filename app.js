let users  = [

    {
        username: "admin",
        password: "pass"
    },
    
    
    {
        username: "user",
        password: "newpass"
    },

       
    {
        username: "anotheruser",
        password: "anothernewpass"
    }


];


function loginUser() {


let usernameBody = document.getElementById("username-input").value;
let passwordBody = document.getElementById("password-input").value;

for (let i = 0; i < users.length; i++) {


    if (users[i].username == usernameBody && users[i].password == passwordBody) {
        document.getElementById("login-message").innerHTML = "SUCCESS!";
     return;
} 

}

document.getElementById("login-message").innerHTML = "INVALID LOGIN!";

}



document.getElementById("login-submit").addEventListener("click", loginUser);
