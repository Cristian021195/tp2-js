export function ejercicio2(){
    let calificacion = window.prompt('Ingrese la calificacion');
    let n_calificacion = parseFloat(calificacion);

    if(n_calificacion >= 0 || calificacion <= 2){
        window.alert('Muy deficiente')
    }else if(n_calificacion >= 3 || calificacion <= 4){
        window.alert('Insuficiente')
    }else if(n_calificacion >= 5 || calificacion <= 6){
        window.alert('Suficiente')
    }else if(n_calificacion == 7){
        window.alert('Bien')
    }else if(n_calificacion >= 8 || calificacion <= 9){
        window.alert('Notable')
    }else if(n_calificacion == 10){
        window.alert('Sobresaliente')
    }else{
        window.alert('Introduce un numero valido')
    }

}