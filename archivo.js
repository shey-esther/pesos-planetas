function calcularPeso(){
var peso = parseInt(prompt("Ingrese su peso actual: "));
var pMercurio = peso * 0.39;
pMercurio= pMercurio.toFixed(2);

var pVenus = peso * 0.87;
pVenus = pVenus.toFixed(2);

var pJupiter = peso * 2.55;
pJupiter = pJupiter.toFixed(2);

var pUrano = peso * 0.99;
pUrano = pUrano.toFixed(2);

var pMarte = peso *0.38;
pMarte = pMarte.toFixed(2);

var pSaturno = peso * 0.93;
pSaturno = pSaturno.toFixed(2);


alert("Tu peso en Mercurio es: "+pMercurio+"\n"+ "Tu peso en Venus es: "+pVenus+"\n"+"Tu peso en Jupiter es: " +pJupiter +"\n"+"Tu peso en Urano es: "+pUrano+"\n"+ "tu peso en Marte es: "+pMarte+"\n"+ "Tu peso en Saturno es: "+pSaturno);

}
calcularPeso();