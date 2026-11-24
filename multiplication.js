function Show(){
    let InpNum = document.querySelector("#InpNum").value;

    let res =''
   if(InpNum !== "" && !isNaN(InpNum) && InpNum > 0){
        for(let i=1; i<=10; i++){
        
        res += `<div class="row">
            ${InpNum} × ${i} = ${InpNum * i}
        </div>`
        output = document.querySelector("#Result").innerHTML =  res
    }
    }else{
        output = document.querySelector("#Result").innerHTML =  "Enter A valid Number 😀"
    }
    }

    
    

     
