function calcularPeso(){
var peso = parseInt(prompt("Ingrese su peso actual: "));
var pMercurio = peso * 0.39;
pMercurio= pMercurio.toFixed(2);

var pVenus = peso * 0.87;
pVenus = pVenus.toFixed(2);

var pJupiter = peso * 2.55;
pJupiter = pJupiter.toFixed(2);


alert("Tu peso en Mercurio es: "+pMercurio+"\n"+ "Tu peso en Venus es: "+pVenus+"\n"+"Tu peso en Jupiter es: " +pJupiter);

}
calcularPeso();