menuListArray = ["Pizza Vegetariana",//adicionar mais itens
                    ];

function getMenu(){
var htmldata;
var imgtags='<img id="im1" src="images/pizzaImg.png"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.length;i++){
   htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';

}
  document.getElementById("displayAddedMenu").innerHTML = htmldata;

}
function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
 menyListArray.push(item);
 addItem();
}

function addTop(){
Width = 100;
Length = 100;
}