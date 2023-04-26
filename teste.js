const valores = [[1,2,2],[3,3,5]]

let teste = [2,2,3]

const Mar_Filter = (items, item) => {

    for (let values of items){
        let pontos = 0
        for (let value of values){
            if (item.includes(value)){
                pontos++
            }
        }
        if(pontos == values.length){
            return console.log("já tem cara")
        }
    }
    return console.log("esse ainda n tem: " + item);
}

Mar_Filter(valores, teste)