//Secciones del documento
let inicio = `
<div class="main-inicio">
    <div>
        <h1>Hola mundo!<br>
        Yo soy <span>Valentin Meier</span><br>
    <span>{</span>Desarrollador Front-end<span>}</span></h1> 
        <h2><span>Sean bienvenidos a mi portafolio...</span></h2>
        <p class="introduccion">Antes de comenzar, les voy a contar un poco sobre mí... vivo en Villa Carlos Paz-Argentina.<br> Soy una persona <span><b>social</b></span> a la que le encanta <span><b>aprender</b></span> cosas nuevas, disfruta <span><b>crear</b></span> y <span><b>enseñar</b></span> lo aprendido.<br> <span>¡Espero disfruten de mi sitio!.</span></p>
    </div>
        <div class="imagen-inicio">
            <div class=triangulo></div>
            <img src="./multimedia/Portafolio.jpeg" class="imagenAnimar" alt="Valentin Meier">
        </div>
</div>
`
let miInformacion= `<div class="main-sobreMi">
<h4>Sobre <span>Mi</span></h4>

    <div class="habilidades">
    <h5>Bio</h5>
    <a href="#habilidades"><h6>habilidades</h6></a>
</div>
<p>Nací el 14/01/2003 en Córdoba-Argentina. Desde muy chiquito desarrollé el amor por la tecnología... en ese tiempo me gustaba editar videos y corromper mis jueguitos para sacar beneficios. Con el paso del tiempo fui creciendo y encontrando otras cosas que llamaban mi atención (la economía y los deportes)... pero nada me hacía sentir tan bien como cuando utilizaba la máquina y aprendía cosas nuevas, cosas únicas.<br> En estos últimos años, luego de haber finalizado la secundaria, entré en un lapso del no saber qué hacer, empecé estudiando economía, pero luego me arrepentí, no me sentía tan cómodo. Por tanto, quise buscar trabajo, pensando que así podría ser más feliz, lo conseguí (ingresé a Arcos Dorados) y la verdad que tenía razón, al principio costó muchísimo, tenía muchos compañeros (200 aproximadamente) y me sentía bastante perdido. Pero eso me motivó a aprender, cometí muchos errores (algunos más de una vez), tenía compañeros que se burlaban por esos fallos, sinceramente me sentía mal cuando me trataban así, pero siempre tomaba su burla con una sonrisa y seguía, nunca les falté el respeto a ellos. Gracias a mi esfuerzo y buen trato logré conseguir uno de mis mayores logros, el diploma de empleado del mes. </p>
<img src="./multimedia/diploma.jpeg" alt="diploma empleado del mes" title="mi diploma" class="diploma">
<p>Luego de eso decidí renunciar para poder seguir aprendiendo más cosas (siempre recordando todos los momentos y experiencias que pasé en aquel lugar), me anoté a Coderhouse, donde actualmente estoy cursando y conseguí completar 2 cursos (desarrollo web y javascript) en esos cursos desarrollé las siguientes herramientas:</p><br>

<div class="herramientas" id="habilidades">
    <i class="fa-brands fa-html5"></i>
    <i class="fa-brands fa-css3-alt"></i>
    <i class="fa-brands fa-js"></i>
    <i class="fa-brands fa-git-alt"></i>
    <i class="fa-brands fa-github"></i>
    <i class="fa-brands fa-bootstrap"></i>
    <i class="fa-brands fa-sass"></i>
</div><br>

<p class="parrafoFinal">Como anteriormente mencioné, aún sigo cursando en Coderhouse (me faltan dos cursos para completar la carrera de full-stack), por tanto, mis habilidades van a seguir creciendo, tanto en el front-end, como en el back-end. <br>Sin nada más que decir, muchas gracias por haberme leído, espero sigas disfrutando mi portafolio.</p>
</div>`
let misProyectos=`<div class="main-proyectos">
<h4>MIS <SPAN>PROYECTOS</SPAN></h4>
<div class="proyectosMios">
    <div class="toman">
        <img src="./multimedia/toman.jpeg" class="imagenModal" alt="tomanProyect">
        <div class="modalProyectos">
            <h5>Página web de Tokyo Revenger</h5>
            <div class="redes">
                <div class="git-repositorio"><a href="https://github.com/Valenmeier/Toman.es" target="_blank"><i class="fa-brands fa-github"></i></a></div>
                <div class="git-page"><a href="https://valenmeier.github.io/Toman.es/" target="_blank"><i class="fa-solid fa-globe"></i></a></div>
            </div>
        </div>
    </div>
    <div class="ecommerce">
        <img src="./multimedia/carsito.jpeg" class="imagenModal" alt="ecommerceProyect">
        <div class="modalProyectos">
            <h5>Ecommerce Pc</h5>
            <div class="redes">
                <div class="git-repositorio"><a href="https://github.com/Valenmeier/Carsito" target="_blank"><i class="fa-brands fa-github"></i></a></div>
                <div class="git-page"><a href="https://valenmeier.github.io/Carsito/" target="_blank"><i class="fa-solid fa-globe"></i></a></div>
            </div>
        </div>
    </div>
    <div class="corazon">
        <img src="./multimedia/corazón.jpeg" class="imagenModal" alt="corazon">
        <div class="modalProyectos">
            <h5>Corazón</h5>
            <div class="redes">
                <div class="git-repositorio"><a href="https://github.com/Valenmeier/Corazon-css" target="_blank"><i class="fa-brands fa-github"></i></a></div>
                <div class="git-page"><a href="https://valenmeier.github.io/Corazon-css/" target="_blank"><i class="fa-solid fa-globe"></i></a></div>
            </div>
        </div>
    </div>
    <div class="reloj">
        <img src="./multimedia/Reloj.jpeg" class="imagenModal" alt="reloj">
        <div class="modalProyectos">
            <h5>Reloj</h5>
            <div class="redes">
                <div class="git-repositorio"><a href="https://github.com/Valenmeier/Reloj-css" target="_blank"><i class="fa-brands fa-github"></i></a></div>
                <div class="git-page"><a href="https://valenmeier.github.io/Reloj-css/" target="_blank"><i class="fa-solid fa-globe"></i></a></div>
            </div>
        </div>
    </div>
</div>
</div>`
let miCurriculum= `<div class="main-curriculum">
<h4>MI <SPAN>CURRICULUM</SPAN></h4>
<img src="./multimedia/Cv Valentin Meier.png" alt="Curriculum">
<a href="./multimedia/Cv Valentin Meier.png" download="Cv Valentin Meier">Descargar Curriculum</a>
</div>`
let contactame= `<div class="main-contactame">
<h4>No olvides <span>contactarme :D</span></h4>
<div class="redesSociales">
    <a href="https://api.whatsapp.com/send?phone=5493541211401&text=Hola Valentin, quiero comunicarme con vos, respondeme cuando puedas ^-^" target="_blank">
        <div class="redSocial">
            <i class="fa-brands fa-whatsapp"></i>
        <h4>Whatsapp</h4>
        </div>
    </a>
    <a href="https://www.linkedin.com/in/valentinmeier/" target="_blank">
        <div class="redSocial">
            <i class="fa-brands fa-linkedin"></i>
        <h4>Linkedin</h4>
        </div>
    </a>
    <a href="https://www.instagram.com/valenmeier/" target="_blank">
        <div class="redSocial">
            <i class="fa-brands fa-instagram"></i>
        <h4>Instagram</h4>
        </div>
    </a>
    <a href="mailto:valentinmeier123@gmail.com" target="_blank">
        <div class="redSocial">
            <i class="fa-solid fa-envelope"></i>
        <h4>Gmail</h4>
        </div>
    </a>
</div>
</div>    `