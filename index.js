
const form=document.querySelector(".myform");

form.addEventListener("reset",(event)=>{
    alert("Do you want to reset?")
})
form.addEventListener("submit",(event)=>{
    alert("application submitted successfully ")
    
})
