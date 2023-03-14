export function ejercicio5(){
    let texto = window.prompt('Ingrese DNI');
    let num = 0; //(!isNaN(parseInt(text)) && parseInt(text))
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    let res_mod = 0;
    while(texto != null){
        num = (!isNaN(parseInt(texto)) && parseInt(texto));
        if(!isNaN(num)){
            res_mod = num % 23;
            document.getElementById('resultados').textContent = res_mod;
        }
        texto = window.prompt('Ingrese DNI');

    }

    document.getElementById('resultados').textContent = 'Resto: '+res_mod+', Letra: '+letras[res_mod];
}