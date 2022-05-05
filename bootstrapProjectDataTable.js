$(document).ready(function() {
    $('#example').DataTable({
    });
  } );
let dataTable = document.getElementById("example");
let tableCardMaximize = document.getElementsByClassName("tableCardMaximize")[0];
let tableContainer = document.getElementsByClassName("tableContainer")[0];
let tableCardMinimize = document.getElementsByClassName("tableCardMinimize")[0];

tableCardMaximize.addEventListener("click",()=>{
    tableContainer.classList.add("maximize");
    tableCardMaximize.style.display = "none";
    tableCardMinimize.style.display = "block";
})

tableCardMinimize.addEventListener("click",()=>{
    tableContainer.classList.remove("maximize");
    tableCardMaximize.style.display = "block";
    tableCardMinimize.style.display = "none";
})

let backAddItem = document.getElementsByClassName("backAddItem")[0];
let bootStrapAdminFormJumperLink = document.getElementsByClassName("bootStrapAdminFormJumperLink")[0];
let goToMainPage = document.getElementsByClassName("goToMainPage")[0];
let bootStrapProjectJumperLink = document.getElementsByClassName("bootStrapProjectJumperLink")[0];
let pageJumper = (jumper) =>{
    jumper.click();
};
backAddItem.addEventListener("click",()=>{
    pageJumper (bootStrapAdminFormJumperLink);
});
goToMainPage.addEventListener("click",()=>{
    pageJumper(bootStrapProjectJumperLink);
})
