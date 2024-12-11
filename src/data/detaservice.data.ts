import { detaservice } from "../models/detaservice";
import { pakage } from "../models/packages";

export const detaserviceData  =
[
      {
        idservice:1,
        name: "Corte de Cabello",
        detaservice :  {
          iddeta : 1,
          description: "Corte de cabello personalizado para resaltar tu estilo.",
          duration: 45,
          rate: 15,
          package: null as pakage[] | null
        }
      },
      {
        idservice:2,
        name: "Peinados",
        detaservice :  {
          iddeta : 2,
          description: "des. peinados",
          duration: 30,
          rate: 20,
          package: null as pakage[] | null
        }
      },
      {
        idservice:3,
        name: "Tintes",
        detaservice :  {
          iddeta : 3,
          description: "des. Tintes",
          duration: 30,
          rate: 20,
          package: null as pakage[] | null
        }
       },
      {
        idservice:4,
        name: "Tratamientos Capilares",
        detaservice :  {
          iddeta : 4,
          description: "des. Tratamientos Capilares",
          duration: 30,
          rate: 20,
          package: null as pakage[] | null
        }
      },
      {
        idservice:5,
        name: "Maquillaje",
        detaservice :  {
          iddeta : 5,
          description: "des. Maquillaje",
          duration: 30,
          rate: 20,
          package: null as pakage[] | null
        }
      },
      {
        idservice:6,
        name: "Cejas",
        detaservice :  {
          iddeta : 6,
          description: "des. Cejas",
          duration: 30,
          rate: 20,
          package: null as pakage[] | null
        }
      },
      {
        idservice:7,
        name: "Pedicure",
        detaservice : [ {
          iddeta : 7,
          description: "Limpieza Básica",
          duration: 30,
          rate: 20,
          package: [
            {
              idpakage:1,
              description:"Corte y limado de uñas"  
            },
            {
              idpakage:2,
              description:"Retiro de cutícula"  
            },
            {
              idpakage:3,
              description:"Limpieza de uñas y dedos"  
            }
          ] as pakage[]
            
          },
          {
            iddeta : 8,
            description: "Exfoliación y suavizado de piel",
            duration: 30,
            rate: 20,
            package: [
              {
                idpakage:4,
                description:"Exfoliación con productos específicos (scrub)"  
              },
              {
                idpakage:5,
                description:"Tratamiento para callosidades"  
              },
              {
                idpakage:6,
                description:"Suavizado con piedra pómez o lima"  
              }
            ] as pakage[]
              
            },
            {
              iddeta : 9,
              description: "Masaje",
              duration: 30,
              rate: 20,
              package: [
                {
                  idpakage:7,
                  description:"Masaje relajante en pies y pantorrillas"  
                },
                {
                  idpakage:8,
                  description:"Masaje hidratante con cremas o aceites especiales"  
                },
                {
                  idpakage:9,
                  description:"Terapia de reflexología (opcional)"  
                }
              ] as pakage[]
                
              },
              {
                iddeta : 10,
                description: "Hidratación profunda",
                duration: 30,
                rate: 20,
                package: [
                  {
                    idpakage:10,
                    description:"Aplicación de mascarilla hidratante"  
                  },
                  {
                    idpakage:11,
                    description:"Envoltura en caliente o tratamiento con toallas tibias"  
                  },
                  {
                    idpakage:12,
                    description:"Uso de aceites esenciales para nutrición de la piel"  
                  }
                ] as pakage[]
                  
                }
        ]
        }
        
      
    ]


    