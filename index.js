// Your code here

function mapToNegativize(sourceArray){
    return sourceArray.map(element => element * (-1))
}

function mapToNoChange(sourceArray){
    return sourceArray.map(element => element)
}

function mapToDouble(sourceArray){
    return sourceArray.map(element => element * 2)
}

function mapToSquare(sourceArray){
    return sourceArray.map(element => element**2)
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    return sourceArray.reduce((total, element) => total+element, startingPoint);
    
}

function reduceToAllTrue(sourceArray) {
    return sourceArray.every(element => (Boolean(element)))
}

function reduceToAnyTrue(sourceArray){
    return sourceArray.some(element => Boolean(element))
}

