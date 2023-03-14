export function ejercicio7(){
    let max = 30;
    let txt = '<p>';

    for(let i = max; i >= 1; i--){
        for(let a = i; a >= 1; a--){
            //txt += i+' ';
            txt += i+'-';
        }
        txt += '</br>';
    }

    document.getElementById('resultados').innerHTML = txt+'</p>';
}