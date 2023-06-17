export interface RequisitoInterface{
    id?:            string;
    nombre:         string;
    descripcion:    string;
    tipoRequisito:  string;
}

export enum tipoRequisito{
    Funcional = "Funcional",
    NoFuncional = "NoFuncional",
}