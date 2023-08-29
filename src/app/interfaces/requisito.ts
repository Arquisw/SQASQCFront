export interface RequisitoInterface{
    requirementId?:            string;
    name:         string;
    description:    string;
    typeRequirement:  string;
}

export enum tipoRequisito{
    Funcional = "Funcional",
    NoFuncional = "NoFuncional",
}