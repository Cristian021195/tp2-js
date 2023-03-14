export function ejercicio11(){
    let req1 = window.prompt('Introduce edad n° 1');
    let req2 = window.prompt('Introduce edad n° 2');
    let req3 = window.prompt('Introduce edad n° 3');

    let req_name1 = window.prompt('Introduce nombre n° 1');
    let req_name2 = window.prompt('Introduce nombre n° 2');
    let req_name3 = window.prompt('Introduce nombre n° 3');

    let p1 = {edad: parseInt(req1), nombre: req_name1}
    let p2 = {edad: parseInt(req2), nombre: req_name2}
    let p3 = {edad: parseInt(req3), nombre: req_name3}

    let max = Math.max(p1.edad, p2.edad, p3.edad);

    let p = {};

    if(p1.edad === max){
        p = p1;
    }else if(p2.edad === max){
        p = p2;
    }else if(p3.edad === max){
        p = p3;
    }

    document.getElementById('resultados').innerHTML = '<b>La persona mayor es: </b>'+p.nombre+', con '+p.edad+' de edad';
}