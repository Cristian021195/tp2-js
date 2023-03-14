export function ejercicio6(){
    let max = 30;
    let txt = '<p>';

    for(let i = 1; i <= max; i++){
        for(let a = 1; a <= i; a++){
            txt += i+' ';
        }
        txt += '</br>';
    }

    document.getElementById('resultados').innerHTML = txt+'</p>';

    //return 'ejercicio6';
}