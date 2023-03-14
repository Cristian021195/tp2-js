export function ejercicio17(){
    let text = window.prompt('Escriba una frase para saber sus vocales') || '';
    let long = text.length;
    let vocales = '';

    for(let i = 0; i < long; i++){
        switch (text[i]) {
            case 'a':{
                vocales = text[i];
                long = i;
                break;
            }
            case 'e':{
                vocales = text[i];
                long = i;
                break;
            }                
            case 'i':{
                vocales = text[i];
                long = i;
                break;
            }                
            case 'o':{
                vocales = text[i];
                long = i;
                break;
            }                
            case 'u':{
                vocales = text[i];
                long = i;
                break;
            }                    
            default:
                break;
        }
    }
    console.log(vocales);
}