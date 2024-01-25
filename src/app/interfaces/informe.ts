export interface InformeInterface{
    comprobable:    number,
    incorrecto:     number,
    inequivoco:     number,
    noComprobable:  number,
    ambiguo:        number,
    incompleto:     number,
    identificable:  number,
    importante:     number,
    trazable:       number,
    consistente:    number,
    completo:       number,
    debil:          number,
    estable:        number,
    inestable:      number,
    correcto:       number,
    noIdentificable:number,
    noTrazable:     number,
    intrascendente: number,
    incorrectoEIE: number,
    ambiguoEIE: number,
    inestableMCC: number,
    noTrazableEIE: number,
    incompletoEIE: number,
    debilEIE: number,
    intrascendenteMCC: number,
    noComprobableMCC: number,
    noIdentificableEIE: number
}

export interface ErrorCompleto{

    noComprobableDDE: number,
    noComprobableDII: number,
    noComprobableVAR: number,
    noIdentificableDDE: number,
    noIdentificableDII: number,
    intrascendenteDII: number,
    intrascendenteVAR: number,
    noIdentificableVAR: number,
    intrascendenteDDE: number,
    incorrectoDDE: number,
    ambiguoDDE: number,
    ambiguoDII: number,
    incorrectoDII: number,
    incorrectoVAR: number,
    incompletoDII: number,
    inestableDII: number,
    incompletoVAR: number,
    noTrazableDDE: number,
    incompletoDDE: number,
    ambiguoVAR: number,
    debilDDE: number,
    noTrazableVAR: number,
    inestableDDE: number,
    inestableVAR: number,
    debilDII: number,
    debilVAR: number,
    noTrazableDII: number
}