//botones
const botonPracticar = document.getElementById('boton-practicar');
const botonJugar = document.getElementById('boton-jugar');
const primerSiguiente = document.getElementById('primer-siguiente');
const regresarChooseMap = document.getElementById('regresar-chooseMap');
const regresarChooseMap2 = document.getElementById('regresar-chooseMap2');
const siguienteChooseMap = document.getElementById('siguiente-chooseMap')

const btnMapamundi = document.getElementById('btn-mapamundi');
const btnEuropa = document.getElementById('btn-europa');
const btnAfrica = document.getElementById('btn-africa'); 
const btnAmericaNorte = document.getElementById('btn-america-norte'); 
const btnAmericaSur = document.getElementById('btn-america-sur');
const btnAsia = document.getElementById('btn-asia');
const btnOceania = document.getElementById('btn-oceania'); 

//secciones
const sectionFirst = document.getElementById('game-style');
const sectionBtnSiguiente = document.getElementById('contenedor-btn-siguiente');
const sectionChooseMaps = document.getElementById('choose-map');
const sectionChooseMButtonSigReg = document.getElementById('contenedor-btn-sigu-maps');
const contenedorMapas = document.getElementById('map-container')

sectionBtnSiguiente.style.display = 'none';
sectionChooseMaps.style.display = 'none';
contenedorMapas.style.display = 'none';

window.addEventListener("load", botonesPrimeros);

function botonesPrimeros() {
    botonPracticar.addEventListener('click', aparecerSiguiente)
    botonJugar.addEventListener('click', () => {
        estamosTrabajandoAlert('por ahora solo puedes elegir practicar.');
    })
}

function estamosTrabajandoAlert(mensajito) {
    alert(`Lo siento, estamos todavia trabajando en esta funcionalidad,
${mensajito}`);
}

function aparecerSiguiente() {
    sectionBtnSiguiente.style.display = 'block'
    botonJugar.disabled = true;
    primerSiguiente.addEventListener('click', seccionEscogerMapa)
}

function seccionEscogerMapa() {
    sectionChooseMaps.style.display = 'flex';
    sectionFirst.style.display = 'none';
    sectionChooseMButtonSigReg.style.display = 'none';

    regresarChooseMap.addEventListener('click', regresarAInicio);

    btnMapamundi.addEventListener('click', mostrarRegYSeg);
    btnEuropa.addEventListener('click', mostrarRegYSeg);
    btnAfrica.addEventListener('click', mostrarRegYSeg);
    btnAmericaNorte.addEventListener('click', mostrarRegYSeg);
    btnAmericaSur.addEventListener('click', mostrarRegYSeg);
    btnAsia.addEventListener('click', mostrarRegYSeg);
    btnOceania.addEventListener('click', mostrarRegYSeg);

    regresarChooseMap2.addEventListener('click', regresarAInicio);
    siguienteChooseMap.addEventListener('click', mapaContenedor)
}

function mostrarRegYSeg() {
    sectionChooseMButtonSigReg.style.display = 'flex';
    regresarChooseMap.style.display = 'none'
}

function regresarAInicio() {
    sectionChooseMaps.style.display = 'none';
    sectionFirst.style.display = 'flex'
}

function mapaContenedor() {
    contenedorMapas.style.display = 'flex';
    sectionChooseMaps.style.display = 'none';
}
