var cad=`
<h1>La Omeletteria</h1>
<nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #fdd835;">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link disabled">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="Nosotros/nosotros.html">Nosotros</a></li>
            <li class="nav-item"><a class="nav-link" href="Menu/menu.html">Menú</a></li>
            <li class="nav-item"><a class="nav-link" href="Sucursales/sucursales.html">Sucursales</a></li>
            <li class="nav-item"><a class="nav-link" href="Contacto/contacto.html">Contacto</a></li>
        </ul>
      </div>
    </div>
</nav>
`

document.getElementById("idheader").innerHTML=cad;

cad=`
<div>
    <p class="footer-text">2021 - La Omeletteria</p>
</div>
<div class="social">
    <i class="fab fa-facebook-square"></i>
    <i class="fab fa-instagram-square"></i>
 </div>
`

document.getElementById("idfooter").innerHTML=cad;

if (document.getElementById('tarjetas')){
    cad=`

    `

    for(var i=0;i<data.length;i++){
        cad+=`
        <div class="card" style="width: 18rem; margin: 1rem;">
            <img src="${data[i].imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data[i].nombre}</h5>
                <p class="card-text">${data[i].descripcion}</p>
            </div>
        </div>
        `
    }
}

document.getElementById("tarjetas").innerHTML=cad;