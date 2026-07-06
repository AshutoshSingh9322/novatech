const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
btn.innerHTML = "☀️";
}else{
btn.innerHTML = "🌙";
}

});