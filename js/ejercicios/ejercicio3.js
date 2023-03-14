export function ejercicio3(){
    let flag = false;
    let texto = window.prompt('Ingrese texto');
    let txt= '';
    while(texto != null){
        txt += texto+'-';
        texto = window.prompt('Ingrese texto');
    }

    document.getElementById('resultados').textContent = txt;
}