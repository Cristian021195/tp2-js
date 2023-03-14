export function ejercicio16(){
    let texto = window.prompt('Ingrese texto');
    let texto_arr; let cant = 0;
    let res = '';

    if(texto != null){
        texto_arr = texto.split('');
        cant = texto_arr.length;

        for(let i = cant - 1; i >= 0; i--){
            res += texto_arr[i];
        }

        document.getElementById('resultados').innerHTML = '<p><b>Ingresado: </b>'+texto+'<br><b>Resultado: </b>'+res+'</p>';
    }
}