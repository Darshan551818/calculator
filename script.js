let num1= document.querySelector("#num1");
let num2= document.querySelector("#num2");
let add= document.querySelector("#add");
let subtract= document.querySelector("#subtract");
let multiple= document.querySelector("#multiply");
let divide= document.querySelector("#divide");
let dispresult = document.querySelector(".dispresult")

add.addEventListener("click",function(){
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);
    dispresult.innerHTML = addnum(num_1, num_2);
    console.log(sum);
    
    
})
function addnum(a,b){
    let sum = a + b;
        return sum;
    
    }
    subtract.addEventListener('click',()=>{
        let num_1 = parseInt(num1.value);
        
        let num_2 = parseInt(num2.value);
        dispresult.innerHTML = subnum(num_1,num_2);
        
    
        
    })
function subnum(a,b){
let sub = a - b;
    return sub;

}

multiple.addEventListener("click",()=>{
    let num_1 = parseInt(num1.value);
    
    let num_2 = parseInt(num2.value);
    dispresult.innerHTML = mulnum(num_1,num_2);

    
})
function mulnum(a,b){
    let mul = a * b;
        return mul;
    
    }
    

divide.addEventListener('click',()=>{
    let num_1 = parseInt(num1.value);
    
    let num_2 = parseInt(num2.value);
    dispresult.innerHTML = divnum(num_1,num_2);

    
})

    function divnum(a,b){
        let quot = a / b;
            return quot;
        
        }


