const text = document.getElementById("text")
const btn  = document.getElementById("btn")
const todoshow = document.getElementById("todoshow")

btn.addEventListener("click", function(){
   jookroo = document.createElement("p")
   jookroo.innerText = text.value
   todoshow.appendChild(jookroo)
   text.value = ""
   jookroo.addEventListener("click",function(){
    todoshow.removeChild(jookroo)
   })
})