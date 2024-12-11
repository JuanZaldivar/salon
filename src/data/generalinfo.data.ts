import { Empresa } from "../models/empresa";

export const empresaData : Empresa = {
    idcompany:1,
    name:"Erika's Salon",
    address :"colonia lincol",
    phone : "000000000",
    employee :[ {
        idemployee:1,
        type: {
            idtype:1,
            description:"corte"
        },
        name: "corte 1"
    },
    {
        idemployee:2,
        type: {
            idtype:2,
            description:"uñas"
        },
        name: "unas 1"
    },
    {
        idemployee:3,
        type: {
            idtype:1,
            description:"corte"
        },
        name: "corte 2"
    },
    {
        idemployee:4,
        type: {
            idtype:2,
            description:"uñas"
        },
        name: "unas 2"
    },
    {
        idemployee:5,
        type: {
            idtype:1,
            description:"corte"
        },
        name: "corte 3"
    },
    {
        idemployee:6,
        type: {
            idtype:2,
            description:"uñas"
        },
        name: "unas 3"
    }]
}