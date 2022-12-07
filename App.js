const contenedor = document.getElementById("contenedor-tarjetas")
console.log(contenedor)

fetch("https://rickandmortyapi.com/api/character")
    .then(respuesta => respuesta.json())
    .then(data => {
        const dataApi = data.results
        console.log(dataApi)

      let acc = ""
      for (let i = 0; i < dataApi.length; i++) {
        acc = acc + `
          <div class="card">
           
            <img src=${dataApi[i].image} alt=${dataApi[i].name} class="card-img">
           
           <div class="status">
             <p> <strong> Nombre: </strong>${dataApi[i].name} </p><br>
             <p> <strong>Origen: </strong>${dataApi[i].origin.name}</p><br>
             <p> <strong>Especie:  </strong>${dataApi[i].species} </p><br>
             <p> <strong>Estado: </strong> ${dataApi[i].status}</p>
             
           </div>

          </div>

        `
        }
        contenedor.innerHTML = acc
    })