export function ejercicio14(){
    let texto = window.prompt('Ingrese le texto')
    let res = '<p>';

    let cortado = texto.split('');
    let union = cortado.join('-');

    document.getElementById('resultados').innerHTML = '<p>'+union+'</p>';
}