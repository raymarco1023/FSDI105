console.log("Register");
class User{
    constructor(email, password, first, last, age, address, phone, payment, color){
        this.email = email;
        this.password = password;
        this.fname = first;
        this.lname = last;
        this.age = age;
        this.address = address;
        this.phone = phone;
        this.payment = payment;
        this.color = color
    }
}
function isValid(user){
    //return false when the use is not vali
    //return true when the user is valid
    let valid=true;
    //we need to reset the original appearance of the inputs
    //$('input').removeClass("error");
    //by removing the error class (style.css)
    if(user.email.length==0){
        //if we get here it means that email is not valid
        valid=false;
        $("#txtEmail").addClass("error");
    }
    if(user.password.length==0){
        valid=false;
        $("#txtPassword").addClass("error");
    }
    if(user.fname.length==0){
        valid=false;
        $("#txtFirstName").addClass("error");
    }
    if(user.lname.length==0){
        valid=false;
        $("#txtLastName").addClass("error");
    }
    //validations

    return valid;

}

function registerUser(){
    let email=$("#txtEmail").val();
    let password=$("#txtPassword").val();
    let fname=$("#txtFirstName").val();
    let lname=$("#txtLastName").val();
    let age=$("#txtAge").val();
    let address=$("#txtAddress").val();
    let phone=$("#txtPhoneNumber").val();
    let payment=$("#selPayment").val();
    let color=$("#txtColor").val();
    let user = new User(email, password, fname, lname, age, address, phone, payment, color);
    if(isValid(user)==true){
        saveUser(user);//this fn is in the storeManager
    }
    clearRegister();

    


}
function clearRegister(){
    $("#txtEmail").val("");
    $("#txtPassword").val("");
    $("#txtFirstName").val("");
    $("#txtLastName").val("");
    $("#txtAge").val("");
    $("#txtAddress").val("");
    $("#txtPhoneNumber").val("");
    $("#txtselPayment").val("");
    $("#txtColor").val("");
}

function init(){
    console.log("Init function");
    //hook events
    $("#btnSave").click(registerUser);
}
window.onload=init;

$("#txtEmail").val("");