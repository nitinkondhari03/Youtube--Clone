function replace(){
   location.replace("./index.html")
 }
 function repl(){
   location.replace("./singIn.html")
 }
 

function up(email,name,mobile,password){
    this.Email=email;
    this.Name=name;
    this.Mobile=mobile;
    this.password=password
}
function signup(event){
    event.preventDefault();
    let form=document.getElementById("singup")

    let email=form.email.value;
    let name=form.name.value;
    let mobile=form.mobile.value;
    let password=form.password.value

   let singup= new up(email,name,mobile,password)
    
   if(form.email.value==""){
      alert("Enter Email address")
   }else
   if(form.name.value==""){
    alert("Enter Name")
 }else
 if(form.mobile.value==""){
    alert("Enter mobile number")
 }else
 if(form.password.value==""){
    alert("Enter password")
 }else{
   alert("Signup successfully")
   window.location.href="./singIn.html"
 }
 let data=JSON.parse(localStorage.getItem("signupp"))||[]
 data.push(singup)

 localStorage.setItem("signupp",JSON.stringify(data))
}
  