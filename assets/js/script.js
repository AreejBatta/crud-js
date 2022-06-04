//  var email=window.document.getElementById("firstinput");
// var namen=window.document.getElementById("secondin");
// var domain=window.document.getElementById("thrdin");
// var btn=window.document.getElementById("click");



// btn.onclick= function(){
//     var info=email.value;
//     var result1='';
//     for(i=0;i<info.length;i++){
//         if (info.charAt(i)=="@")
//         break;
//         else
//         result1= result1.concat(info.charAt(i))
//         namen.value=result1
//         console.log(result1);
//     }
//         var reslut2=" ";
//         while(info.length>i){
//         reslut2=reslut2.concat(info.charAt(i));
//         domain.value=reslut2;
//         i++;}
//     }  
var product=document.getElementById("product");
var description=document.getElementById("description");
var category=document.getElementById("category");
var price=document.getElementById("price");
var btn=document.getElementById("click");
var info=document.getElementById("tableinfo");
var empty=document.getElementsByClassName("inn");
var clearall=document.getElementById("clearall");


console.log(empty);
var vanish=document.getElementById("vanish");

if(localStorage.getItem("formdata")==null){
    shopping=[];
}
else{
 var shopping= JSON.parse(localStorage.getItem("formdata"));
displaydata();}

btn.onclick= function(){
    addcourse();
    displaydata();
}

vanish.onclick= function (){
    clear();
}

function addcourse(){
    var shop ={
    pname:product.value,
    pdesc:description.value,
    pcat:category.value,
    pprice:price.value}
    
    shopping.push(shop);
    localStorage.setItem("formdata",JSON.stringify(shopping));
}

function displaydata(){
     var result='';
    for (i=0; i<shopping.length; i++){
        result+=`
        <tr>
            <td>${i}</td>
            <td>${shopping[i].pname}</td>
            <td>${shopping[i].pdesc}</td>
            <td>${shopping[i].pcat}</td>
            <td>${shopping[i].pprice}</td>
            <td><button  id="update" class=" btn-info" onclick="updateproduct("${i}"> update </button></td>
            <td><button id="deleteproduct" class=" btn-danger" onclick="deleteproduct(${i})"> delete </button></td>
        </tr>
        `;

        info.innerHTML=result;
    }
}

function clear(){
    for (i=0;i<empty.length;i++){
        empty[i].value='';
    }
}

function deleteproduct(index){
    shopping.splice(index,1);
    localStorage.setItem("formdata",JSON.stringify(shopping));
    displaydata();

}

clearall.onclick= function(){
    clearalldata();
}

function clearalldata(){

    localStorage.removeItem("formdata");
    shopping=[];
    info.innerHTML=" ";

}
function test(name){
    var result='';

    for (i=0; i<shopping.length; i++){
        if (shopping[i].pname.toLowerCase().includes(name.toLowerCase())){
        result+=`
        <tr>
            <td>${i}</td>
            <td>${shopping[i].pname}</td>
            <td>${shopping[i].pdesc}</td>
            <td>${shopping[i].pcat}</td>
            <td>${shopping[i].pprice}</td>
            <td><button  id="update" class=" btn-info" onclick="updateproduct("${i}"> update </button></td>
            <td><button id="deleteproduct" class=" btn-danger" onclick="deleteproduct(${i})"> delete </button></td>
        </tr>
        `;

        info.innerHTML=result;}
    }

}

