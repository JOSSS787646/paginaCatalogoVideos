const listaVideos = [
    { titulo: 'video 1', descripcion: 'Descripcion dek video 1', url: 'https://www.youtube.com/watch?v=CliS6WzmR9U' },
    { titulo: 'video 2', descripcion: 'Descripcion del video 2', url: 'https://www.youtube.com/watch?v=CliS6WzmR9U' },
    { titulo: 'video 3', descripcion: 'descripcion del video 3', url: 'https://www.youtube.com/watch?v=CliS6WzmR9U' }
];

var catalogoVideos = document.getElementById('catalogo');


function mostrarCatalogosVideos(videosMostrados) {
    catalogoVideos.innerHTML = '';

    videosMostrados.forEach(function (indexVideo) {

        var filaVideo = document.createElement('div');
        var colVideo = document.createElement('div');
        var urlVideo = document.createElement('video');

        filaVideo.setAttribute('class', 'row mt-5');
        colVideo.setAttribute('class', 'col');

        urlVideo.setAttribute('src', indexVideo.url);
        urlVideo.setAttribute('width', '400px');
        urlVideo.setAttribute('controls', '');

        colVideo.appendChild(urlVideo);
        filaVideo.appendChild(colVideo);


        var col2Titulo = document.createElement('div');
        var h4Titulo = document.createElement('h4');
        var h6vDescripcion = document.createElement('h6');

        col2Titulo.setAttribute('class', 'col');
        h4Titulo.textContent = indexVideo.titulo;
        h6vDescripcion.textContent = indexVideo.descripcion;

        col2Titulo.appendChild(h4Titulo);
        col2Titulo.appendChild(h6vDescripcion);
        filaVideo.appendChild(col2Titulo);

        catalogoVideos.appendChild(filaVideo);


        var col3Icono = document.createElement("div");
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "25");
        svg.setAttribute("height", "25");
        svg.setAttribute("style", "fill:currentColor"); // Añadir el estilo fill
        svg.innerHTML =
            '<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>';

        col3Icono.setAttribute("class", "col");
        col3Icono.appendChild(svg);
        filaVideo.appendChild(col3Icono);
        catalogoVideos.appendChild(filaVideo);




    });

}




function buscarVideos() {
    var contenidoBuscar = document.getElementById('buscar').value;
    //alert(contenidoBuscar);
    var videosBuscados = listaVideos.filter(
        function (indexVideo) {
            return indexVideo.titulo.includes(contenidoBuscar);
        }
    );
    mostrarCatalogosVideos(videosBuscados);
}
mostrarCatalogosVideos(listaVideos);