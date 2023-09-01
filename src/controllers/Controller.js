class Controller{
    /**
     * 
     * @param {Array} list 
     * @returns {Array}
     */
    static caseSensitiveSort(list){
        /**
         * Essa função recebe uma lista de items que são ordenados respeitando as letras maíussculas originais.
         */
        if (list.length == 0){ 
            return null
        }

        if (list.legth == 1){
            return list
        }

        let sortedList = []

        // como o metodo sort() nativo do javascript é baseado em ASCII, caso existam letras maíusculas, isso afetará o resultado.
        // para evitar isso, vamos primeiro ordenar uma copia da lista original toda em letras minusculas
        let lowerCaseSortedList = list.map((element) => {  
            return element.toLowerCase()
        })

        lowerCaseSortedList.sort() // a lista de item em letra minuscula é ordenada | coml


        // parece um loop maluco, mas ele é responsavel por mapear
        // os valores ordenados na copia em minusculo para os valores originais 
        // assim, mantendo as letras maíusculas originais
        for(let i = 0; i < lowerCaseSortedList.length; i++){
            for(let j = 0; j < list.length; j++){
                if(lowerCaseSortedList[i] == list[j].toLowerCase()){
                    sortedList.push(list[j])
                }
            }
        }
    
        //um problema dessa função é que ela é de ordem n^2, ou seja, muito lenta quando a lista fica grande o suficiente.
        
        return sortedList
    }
}

export default Controller