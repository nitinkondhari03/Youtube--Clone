function replace(){
  location.replace("./index.html")
}
function repl(){
  location.replace("./singup.html")
}
let dats=JSON.parse(localStorage.getItem("add"))
function signin(email,password){
    this.email=email;
    this.passwaod=password;
}

function singin(event){
    event.preventDefault()
  let form=document.getElementById("form")
  
  let email=form.email.value;
  let password=form.passwaod.value;

  let sing=new signin(email,password)

  if(form.email.value==""){
    alert("Enter Email")
    
  }else if(form.passwaod.value==""){
    alert("Enter password")
    
  }else{
  data=JSON.parse(localStorage.getItem("signupp"))||[]

 let s=false

 data.forEach(function(el){
    if(el.Email==form.email.value && el.password==form.passwaod.value){
       s=true

     let dat=el.Name
    localStorage.setItem("add",JSON.stringify(dat))
        
    }
 })
 if(s==true){
    alert("login sussfull")
    window.location.href="./index.html"
    
    
}
if(s==false){
    alert("user not foud")
}
}
}