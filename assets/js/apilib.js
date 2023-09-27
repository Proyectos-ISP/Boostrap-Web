console.log("el archivo javascript ya está importado");

const urlApi="https://ispdatabase1-0c05.restdb.io/rest/Libros?apikey=64f8c347688854bbba0bfe7c";

const applibros = {
    listarLibros: ()=>{
        //tomamos la referencia del contenedor donde se mostrarán los libros
        const contenedor=document.getElementById("contenedorLibros");
        
        //cremos una variable vacía que contendrá todo el código HTML que vamos a insertar
        let contenidoHTML = "";
        
        fetch(urlApi)
        .then(respuesta=>respuesta.json())
        .then(libros=>{
            console.log(libros);

            for (const libro of libros) {
                contenidoHTML += `
                <div>
                    <img src="${libro.front_url}" class="img-thumbnail"/>
                    <details>
                        <summary>${libro.name}</summary>
                        ${libro.synopsis}
                    </details>

                </div>
                `;
            };
            contenedor.innerHTML=contenidoHTML;
        })
        
    }
}
window.onload = function () {
    applibros.listarLibros();
}