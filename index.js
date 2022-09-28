function salario(){
    var salario_atual = document.getElementById("salario").value;

    if(salario_atual< 280){
        
        novo_salario = salario_atual * 1.20;
        var percentual = 20;
        var aumento = salario_atual *0.2;

    }
    if(salario_atual > 280 && salario_atual <= 700){
        novo_salario = salario_atual * 1.15;
        var percentual = 15;
        var aumento = salario_atual *0.15;
    
    }
    if(salario_atual > 700 && salario_atual <= 1500){
        novo_salario = salario_atual * 1.10;
        var percentual = 10;
        var aumento = salario_atual *0.1;
    }

    if(salario_atual > 1500){
        novo_salario = salario_atual * 1.5;
        var percentual = 5;
        var aumento = salario_atual *0.5;
    }


    
    document.getElementById('salario_atual').innerHTML = 'Informe o salario atual R$:' + salario_atual +",00";;
    document.getElementById('percentual').innerHTML = 'Percentual do aumento: ' + percentual +"%";
    document.getElementById('aumento').innerHTML = 'Valor do aumento R$: ' + aumento +",00";
    document.getElementById('novo_salario').innerHTML = 'Valor salario, após o aumento R$:' + novo_salario +",00";;








}
