const palabrasHero = [
    "paz",
    "pasión",
    "energía",
    "elegancia",
    "creatividad",
    "poder",
    "tranquilidad"
];

const recomendacionesIndustria = {

    salud: {
        titulo: "Salud y Bienestar",

        texto:
            "Los azules y verdes suelen comunicar confianza, calma, limpieza y bienestar. Pueden funcionar como base para una identidad visual serena y profesional.",

        colores: [
            {
                nombre: "Azul confianza",
                hex: "#0274BE"
            },
            {
                nombre: "Verde bienestar",
                hex: "#00BF5B"
            },
            {
                nombre: "Turquesa calma",
                hex: "#20B8B2"
            }
        ]
    },


    "medio-ambiente": {
        titulo: "Medio Ambiente",

        texto:
            "Los verdes y tonos naturales pueden reforzar ideas de crecimiento, equilibrio y sostenibilidad. Un azul profundo puede aportar confianza y contraste.",

        colores: [
            {
                nombre: "Verde naturaleza",
                hex: "#00A651"
            },
            {
                nombre: "Verde claro",
                hex: "#7AC943"
            },
            {
                nombre: "Azul profundo",
                hex: "#0274BE"
            }
        ]
    },


    restaurante: {
        titulo: "Restaurantes y Gastronomía",

        texto:
            "Los tonos cálidos como naranja y rojo pueden transmitir energía, cercanía y apetito. Un tono oscuro ayuda a equilibrar la composición y aportar contraste.",

        colores: [
            {
                nombre: "Naranja energía",
                hex: "#FF6900"
            },
            {
                nombre: "Rojo cálido",
                hex: "#E63946"
            },
            {
                nombre: "Carbón",
                hex: "#2B2B2B"
            }
        ]
    },


    turismo: {
        titulo: "Turismo",

        texto:
            "Azules, amarillos y turquesas pueden asociarse con libertad, descubrimiento y experiencias memorables. Funcionan bien para comunicar movimiento y optimismo.",

        colores: [
            {
                nombre: "Azul aventura",
                hex: "#0274BE"
            },
            {
                nombre: "Amarillo energía",
                hex: "#FFD60A"
            },
            {
                nombre: "Turquesa",
                hex: "#00B8A9"
            }
        ]
    }

};

const palabraDinamica =
    document.querySelector("#palabra-dinamica");

const industriaSelector =
    document.querySelector("#industria-selector");

const resultadoRecomendacion =
    document.querySelector("#resultado-recomendacion");

const tituloRecomendacion =
    document.querySelector("#titulo-recomendacion");

const textoRecomendacion =
    document.querySelector("#texto-recomendacion");

const coloresRecomendados =
    document.querySelector("#colores-recomendados");

const botonGenerar =
    document.querySelector("#btn-generar");

const contenedorPaleta =
    document.querySelector("#contenedor-paleta");

const radiosFormato =
    document.querySelectorAll(
        'input[name="formato"]'
    );

const toast =
    document.querySelector("#toast");

let indicePalabra = 0;

let paletaActual = [];

let temporizadorToast;

function iniciarRotadorPalabras() {

    const reducirMovimiento =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    if (reducirMovimiento) {
        return;
    }

    setInterval(() => {

        indicePalabra =
            (indicePalabra + 1)
            % palabrasHero.length;

        palabraDinamica.textContent =
            palabrasHero[indicePalabra];

    }, 2500);

}



