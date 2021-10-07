//mostrar los productos que tienen las facturas
db.facturas.aggregate(
    [
        {
            $lookup: {
                from: "productos",
                localField: "cod_producto",
                foreignField: "cod_producto",
                as : "productos"
            }
        }
    ]
)

//Clientes => mostrar todas las facturas
db.clientes.aggregate(
    [
        {
            $lookup: {
                from: "facturas",
                localField: "cod_cliente",
                foreignField: "cod_cliente",
                as : "facturas"
            }
        },
        {
            $limit: 1
        }
    ]
).pretty()