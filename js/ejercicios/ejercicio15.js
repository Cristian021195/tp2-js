export function ejercicio15(){
    let text = window.prompt('Escriba una frase para saber sus vocales') || '';
    let long = text.length;
    let vocales = '';

    let a = 0;
    let e = 0;
    let _i = 0;
    let o = 0;
    let u = 0;

    for(let i = 0; i < long; i++){
        switch (text[i]) {
            case 'a':{
                a++;
                vocales+='-'+text[i];
            }
            break;
            case 'e':{
                e++
                vocales+='-'+text[i];
            }                
            break;
            case 'i':{
                _i++;
                vocales+='-'+text[i];
            }                
            break;
            case 'o':{
                o++;
                vocales+='-'+text[i];
            }                
            break;
            case 'u':{
                u++;
                vocales+='-'+text[i];
            }                
            break;        
            default:
                break;
        }
    }

    document.getElementById('resultados').innerHTML = JSON.stringify({a,i:_i, e,o, u}, null, 2);
}