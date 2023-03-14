export function ejercicio10(){
    let filas = window.prompt('Ingrese la cantidad de filas');
    let columnas = window.prompt('Ingrese la cantidad de columnas');

    let total = 0;
    total = (!isNaN(parseInt(filas)) && parseInt(filas)) * (!isNaN(parseInt(columnas)) && parseInt(columnas))
    let cont = 0;
    let res = '<table border>';

    if(!isNaN(total)){
        let _filas = parseInt(filas);
        let _columnas = parseInt(columnas);

        
        for(let f = 1; f <= _filas; f++){
            res += '<tr>';
            
            for(let c = 1; c <= _columnas; c++){
                total --;
                res += '<td>&nbsp;'+(total+1)+'&nbsp;<td>';
            }

            res += '</tr>'; 
        }

        res += '</table>';
    }

    document.getElementById('resultados').innerHTML = res;
}