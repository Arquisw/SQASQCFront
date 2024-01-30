export interface RequisitoInterface{
    requirementId?:             number;
    projectId:                  number,
    name:                       string;
    description:                string;
    typeRequirement:            string;
    qualified:                  boolean;
}

export enum tipoRequisito{
    Funcional = "Funcional",
    NoFuncional = "NoFuncional",
}