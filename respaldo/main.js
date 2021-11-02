/* ES2015

function suma(a, b){
    return a + b;
}

const PI = 3.14

module.exports = {
    suma,
    PI
}; 

*/

/* ES6 
*/

/* import / export */

const suma = (a, b) => {
    return a + b;
}

const Alerta = (a) => { // JSX
    return (
        <div className="alert alert-warning">
            <Alerta />
        </div>
    )
}

function resta(a, b){
    return a - b;
}

export function multiplicar(a, b){
    return a * b;
}

export default suma;