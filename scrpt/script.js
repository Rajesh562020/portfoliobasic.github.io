console.log("script ok")
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("Click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
})