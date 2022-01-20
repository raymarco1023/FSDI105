function login(){
    //console.log("login script");
    // get the values from the two inputs and display on the console
    let email=$("#txtEmail").val();
    let password=$("#txtPassword").val();
    //console.log(email, password);
    //read the users
    let userList = readUsers(); //this fn is in the storageManager
    let flag=false;
    //travel the array and display on the console each one of the names
    for(let i=0;i<userList.length;i++){
        console.log(userList[i]);
        if(email===userList[i].email && password===userList[i].password){
            console.log("Welcome");
            flag=true;
            window.location="users.hmtl"
        }

    } 
    if(flag==false){
        console.log("Invalid credentials");
        $("#alertError").removeClass("hide");
        setTimeout(function(){
            $("#alertError").addClass("hide")
        },3000)
        
    }   
}




function init(){
    $("#btnLogin").click(login);
}
window.onload=init;