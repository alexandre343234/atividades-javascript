// "sistema de ingresso"
let nome =prompt("digite seu nome....");
console.log(nome);

let estudante=prompt(" digite estudante ou nao");
console.log(estudante);

let idade =Number(prompt("digite sua idade...."));
 console.log(idade)

    if(idade >= 0 && idade <= 12){
         console.log("o valor correspondente a suas informacoes e de r$10.00 " );
         
    }
    else if (idade >= 13 && idade <= 17 ){
        console.log("o valor correspondente a suas informacoes e de r$15.00 " );
    }
    else if(idade >= 18 && idade <= 59){
        console.log("o valor correspondente a suas informacoes e de r$35.00 " );
    }
    else if(idade >= 18 && idade <= 59 &&  estudante) {
       console.log("como o senhor(a) e estudante .vc ira pagar meia entrada .q coresponde com r$17.00 ");
    } 
  

    

