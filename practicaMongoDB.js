users = [
    {
        name: "jose miguel",
        email: "josedeodanes99@gmail.com",
        phone: "74474442"
    },
    {
        name: "carlos",
        email: "carlos99@admin.edu.sv",
        phone: "77439944"
    },
    {
        name: "Jaaziel Martinez",
        email: "jaaziel_martinez@admin.edu.sv",
        phone: "77438899"
    },
    {
        name: "Oscar Ventura",
        email: "oscar_000232@gob.sv",
        phone: "22330021"
    },
    {
        name: "Pedro Nobles",
        email: "pedro_nobles_9023@gmail.com",
        phone: "22018923"
    },
    {
        name: "Francisco hernandez",
        email: "fran_ministerio_edu@agob.sv",
        phone: "22012201"
    }
];


//Mayor menor en mongodb


db.users.find(
    {
        edad: {$gte: 35}
    }
)

db.users.insert(
    {
        name: "Roberto",
        email: "roberto_uls@edu.sv"
    }
)

//Crear un registro en la tabla
 products = [
     {
         name: "Laptop",
         description: "black colour",
         price: "199.00"
         
     },
     {
         name: "Smarth phone",
         description: "color gris",
         price: 250.00
     },
     {
         name: "Teclado",
         description: "Gamer con luces rgba",
         price: 15.00
     }
 ]

users = [
    {
        nombre: "Juan",
        apellido: "Gonzales"
    },
    {
        nombre: "Dulce",
        apellido: "Mejia"
    }
]

//Documentos incrustrado

users = [
    {
        nombre: "irwin",
        apellido: "Guardado",
        telefono: [73721921,22091244],
        direccion: {
            calle: "Avenida el zonte, frente a la casa de bitcoins",
            municipio: "San Salvador",
            departamento: "San Salvador",
            pais: "El salvador",
            region: "Centroamerica"
        }
    }
]
//Busquedas
db.prueba.find({
    $gt: {
        total_tot : 200
    }
})




