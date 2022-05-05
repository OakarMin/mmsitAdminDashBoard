let mainCategory = document.getElementsByClassName("mainCategory")[0];
let subCategory = document.getElementsByClassName("subCategory")[0];

let dataForCategory =  ["Phone","Computer","Home Appliance"];
let dataForSubCategory = [
  {name: "iPhone12Pro",categoryId: 0},
  {name: "iPhone11Pro",categoryId: 0},
  {name: "Mi5Pro",categoryId: 0},
  {name: "Macbook Pro",categoryId: 1},
  {name: "acer core i5",categoryId: 1},
  {name: "Samsaung Tv",categoryId: 2},
  {name: "Chigo Aircon",categoryId: 2}
];

for (let i=0;i < dataForCategory.length; i++) {
    mainCategory.innerHTML += `<option class = "mainCategoryCatchSelected" value="${i}">${dataForCategory[i]}</option>`
};

mainCategory.addEventListener("change",()=>{
    subCategory.innerHTML = "";
    let mainCategorySelectedIndex = mainCategory.selectedIndex -1;
    for(let i=0; i<dataForSubCategory.length; i++) {
        if(dataForSubCategory[i].categoryId == mainCategorySelectedIndex) {
            subCategory.innerHTML += `<option>${dataForSubCategory[i].name}</option>`
        }
    }
})
let menuIcon = document.getElementsByClassName("menuIcon")[0];
let dataTableJumperLink = document.getElementsByClassName("dataTableJumperLink")[0];
let jumperLink = (jumper) => {
    jumper.click();
};
menuIcon.addEventListener("click",()=>{
    jumperLink(dataTableJumperLink);
});