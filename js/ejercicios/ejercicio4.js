export function ejercicio4(){
    let text = window.prompt('Ingrese el numero')
    let sum = 0;

    while (text != null) {
        sum += (!isNaN(parseInt(text)) && parseInt(text));
        text = window.prompt('Ingrese el numero');    
    }

    document.getElementById('resultados').textContent = sum+'';
}