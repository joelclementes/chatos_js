const d = document;

// export default function () {
export default function calculo() {
    d.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Obtenemos el ingreso
        const ingresoCapturado = d.getElementById("ingreso");
        const ingreso = parseFloat(ingresoCapturado.value);

        // Ubicamos el ingreso en la tabla de tarifas y obtenemos los datos de la fila
        const itemTarifa = await getTarifa(ingreso);

        const limiteInferior = parseFloat(itemTarifa.limiteinferior);
        
        const diferencia = ingreso - limiteInferior;
        const tasa = parseFloat(itemTarifa.porcentaje);
        const impuestoMarginal = diferencia * (tasa/100);
        const cuotaFija = parseFloat(itemTarifa.cuotafija);
        const impuestoPrevio = impuestoMarginal + cuotaFija;
        
        const itemSubsidio = await getSubsidio(ingreso);

        const subsidio = parseFloat(itemSubsidio.cantidadsubsidio);
        const impuestoretener = impuestoPrevio - subsidio;

        const ingresoFinal = ingreso - impuestoretener;

        d.getElementById("ingresogravable").innerHTML = ingreso;
        d.getElementById("limiteinferior").innerHTML = limiteInferior;
        d.getElementById("diferencia").innerHTML = diferencia;
        d.getElementById("tasa").innerHTML = tasa;
        d.getElementById("impuestomarginal").innerHTML = impuestoMarginal;
        d.getElementById("cuotafija").innerHTML = cuotaFija;
        d.getElementById("impuestoprevio").innerHTML = impuestoPrevio;
        d.getElementById("subsidio").innerHTML = subsidio;
        // d.getElementById("lblimpuestoretener").innerHTML = "";
        // if(impuestoretener<=0){
        //     d.getElementById("lblimpuestoretener").innerHTML = "Subsidio";
        //     d.getElementById("impuestoretener").innerHTML = impuestoretener*-1;
        // } else {
        //     d.getElementById("lblimpuestoretener").innerHTML = "Impuesto a retener";
        //     d.getElementById("impuestoretener").innerHTML = impuestoretener;
        // }
        d.getElementById("impuestoretener").innerHTML = impuestoretener;
        d.getElementById("ingresofinal").innerHTML = ingresoFinal;
        
    })
}

const getTarifa = async (ingreso) => {
    // const consulta = await fetch(`http://localhost/apiisr/isr.php?proceso=TARIFA_SELECT&ingreso=${ingreso}`);
    const consulta = await fetch(`https://www.joelprogramador.com/apiisr/isr.php?proceso=TARIFA_SELECT&ingreso=${ingreso}`);
    return await consulta.json();
}

const getSubsidio = async (ingreso) => {
    // const consulta = await fetch(`http://localhost/apiisr/isr.php?proceso=SUBSIDIO_SELECT&ingreso=${ingreso}`);
    const consulta = await fetch(`https://www.joelprogramador.com/apiisr/isr.php?proceso=SUBSIDIO_SELECT&ingreso=${ingreso}`);
    return await consulta.json();
}