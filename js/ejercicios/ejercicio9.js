export function ejercicio9(){
    let txt = '<p>';
    for (let i = 1; i <= 500; i++) {
        if(i % 4 == 0){
            txt += i+' (Multiplo de 4)<br>';
        }else if(i % 9 == 0){
            txt += i+' (Multiplo de 9)<br>'
        }else if(i % 5 == 0){
            txt += '<hr>'
        }
    }
    document.getElementById('resultados').innerHTML = txt+'</p>';
}