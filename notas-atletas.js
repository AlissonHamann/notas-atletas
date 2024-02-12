let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];






function mostrarNomeMedia(atletas) {
    let soma = 0
    atletas.forEach(function(atleta){
        console.log(`Atleta: ${atleta.nome}`)
        console.log(`Notas obtidas: ${atleta.notas}`)
        console.log(`Medias válidas: ${atleta.notas.slice(1, 4).reduce(function(inicial, total){
            soma = inicial + total
            return soma

        }) / atleta.notas.slice(1, 4).length}`)
        console.log("")

    })
}

mostrarNomeMedia(atletas)

