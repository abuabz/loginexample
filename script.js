
    document.getElementById("btn-login").style.background="#06206933";

function emaill(){
    mail=document.getElementById("mail1").value
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mail=!"" && mail.match(mailformat)){ 
        true
        document.getElementById("btn-login").style.background="#062069"
        document.getElementById("btn-login").disabled=false;   

    }
    else{
        alert("Enter correct Email")
        document.getElementById("btn-login").style.background="#06206933";
        document.getElementById("btn-login").disabled=true;   
    }
    
}
function passs(){
    pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    password=document.getElementById("pass").value
    if(password.match(pattern)){ 
        true
        document.getElementById("btn-login").style.background="#062069"
        document.getElementById("btn-login").disabled=false;   

    }
    else{
        alert("Enter correct Password")
        document.getElementById("btn-login").style.background="#06206933"
        document.getElementById("btn-login").disabled=true;   

    }
    

}
