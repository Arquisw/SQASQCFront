export interface operacionInterface{    
    operationId?:                       number,
    requirementId?:                     number,
    levelAdecuacy:                      number,
    evaluatedCharacteristics:           number,
    levelWeightScore:                   number,
    maximumScore:                       number,
    calculatedWeightAverage:            number,
    qualified:                          boolean

}

export interface operacionRangoInterface {
    bajoMedio?:     number,
    altoAlto?:      number,
    bajoAlto?:      number,
    altoBajo?:      number,
    bajoBajo?:      number,
    altoMedio?:     number,
    medioAlto?:     number,
    medioMedio?:    number,
    medioBajo?:     number
}