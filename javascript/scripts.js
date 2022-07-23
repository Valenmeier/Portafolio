const inyectar= document.querySelector(`.inyeccion`) //lugar a inyectar codigo
let seccionActual;
//Mostrar inicio 
const mostrarInicio=()=> {
    inyectar.innerHTML=""
    inyectar.innerHTML= inicio
    let imagenAnimacion=document.querySelector(`.imagenAnimar`)

imagenAnimacion.addEventListener(`mouseover`,()=> {
    let triangulo=document.querySelector(`.triangulo`)
    triangulo.classList.toggle(`transformar`)
})
imagenAnimacion.addEventListener(`mouseout`,()=> {
    let triangulo=document.querySelector(`.triangulo`)
    triangulo.classList.toggle(`transformar`)
})
console.clear()
}
mostrarInicio()
//Secciones
const sobreMi=() => {
    inyectar.innerHTML=""
    window.scrollTo(0,0)
    inyectar.innerHTML= miInformacion
}
const proyectos=() => {
    
    inyectar.innerHTML=""
    window.scrollTo(0,0)
    inyectar.innerHTML= misProyectos
    
}
const curriculum=() => {
    inyectar.innerHTML=""
    window.scrollTo(0,0)
    inyectar.innerHTML= miCurriculum
    
}
const contacto=() => {
    inyectar.innerHTML=""
    inyectar.innerHTML= contactame
}
//Cambiar tema al ingresar
let cambiarTemaIngreso = () => {
    let cambiarTema=JSON.parse(localStorage.getItem(`tema`)) || `light`
    let body= document.querySelector(`.eleccion`)
    body.classList.add(cambiarTema)
}
cambiarTemaIngreso()
//activar eventos de temas
let activarModalTemas= ()=> {
    let temas=document.querySelector(`.modo`)
    temas.addEventListener(`click`,()=> {
        let abrirModal=document.querySelector(`.temas`)
        abrirModal.classList.toggle(`abrirMenuTemas`)
        
    })
}
activarModalTemas()
//Cerrar modal
let cerrarModal=()=> {
    let abrirModal=document.querySelector(`.temas`)
        abrirModal.classList.toggle(`abrirMenuTemas`)
}
//desactivar evento de temas
let desactivarModalTemas=()=> {
    let cerrar=document.querySelector(`.cerrar`)
    cerrar.addEventListener(`click`,()=> {
        cerrarModal()
    })
}
desactivarModalTemas()
//cambiar color de temas
let cambiarTemas= ()=> {
    let temaClaro=document.querySelector(`.Claro`)
    let temaOscuro=document.querySelector(`.Oscuro`)
    let temaMounstruo=document.querySelector(`.Monstruo`)
    let temaDivino=document.querySelector(`.Divino`)
    let temaDracula=document.querySelector(`.Dracula`)
    let cambiadorDeTemas= (tema,nombreDeReemplazo)=> {
        tema.addEventListener(`click`,()=> {
            let body=document.querySelector(`body`)
            body.classList.replace(body.classList[1],`${nombreDeReemplazo}`)
            recordarTema()
            cerrarModal()
        })
    }
    cambiadorDeTemas(temaClaro,`light`)
    cambiadorDeTemas(temaOscuro,`dark`)
    cambiadorDeTemas(temaMounstruo,`monster`)
    cambiadorDeTemas(temaDivino,`divinity`)
    cambiadorDeTemas(temaDracula,`dracula`)
}
cambiarTemas()
//recordar tema para reingreso
let recordarTema=()=> {
    let body=document.querySelector(`body`)
    let temaAGuardar= body.classList[1]
    localStorage.setItem(`tema`,JSON.stringify(temaAGuardar))
}


//Cambiar animación de botones
let botones= document.querySelectorAll(`.inicio-footer`)

for (i=0;i<botones.length;i++) {
    let boton=botones[i]
   boton.addEventListener(`click`,()=> {
    botonesActivos=document.querySelector(`.retoques`)
    botonesActivos.classList.remove(`retoques`)
    boton.classList.toggle(`retoques`)
   })
}

//Cambiar seccion

botones[0].addEventListener(`click`,()=> {
    mostrarInicio()
})
botones[1].addEventListener(`click`,()=> {
    sobreMi()
})
botones[2].addEventListener(`click`,()=> {
    proyectos()
})
botones[3].addEventListener(`click`,()=> {
    curriculum()
})
botones[4].addEventListener(`click`,()=> {
    contacto()
})

//inicio activar animacion

