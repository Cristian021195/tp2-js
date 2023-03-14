export function ejercicio8(){
    let text = window.prompt('Ingrese un numero no mayor a 50');


    if(text != null){

        if(!isNaN(parseInt(text))){

            if(parseInt(text) <= 50){
                let max = parseInt(text);
                let txt = '<p>';
    
                for(let i = 1; i <= max; i++){
                    for(let a = 1; a <= i; a++){
                        txt += i+' ';
                    }
                    txt += '</br>';
                }
    
                document.getElementById('resultados').innerHTML = txt+'</p>';
            }else{
                window.alert('Te pasaste de 50')
            }

        }else{
            window.alert('No ingresaste un numero')
        }
    }   
    
}