

function myfunction(){
    var x = document.getElementById("pass");

    if(x.type === "password"){
        x.type = "text";
    }
    else{
        x.type = "password";
    }
}
function checklogin(){
    if(localStorage.getItem('admin'))
    window.location.href = "home.html"
}

function validate(){
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("pass").value;
    if(username=="admin" && password == "user")
    {
        alert("Login Successful");
        localStorage.setItem('username' , 'admin');
        window.location.replace("home.html");
        return false;
    }
    else{
        alert("Login Failed");
    }

}

