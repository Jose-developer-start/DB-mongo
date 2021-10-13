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

db.clientes.aggregate([{$match: {cod_cliente:{$in: ["00016","00022","00025"]}}},{$lookup: {from:"facturas",localField: "cod_cliente",foreignField:"cod_cliente",as:"factura"}},{$unwind: "$factura"},{$lookup: {from: "productos",localField: "cod_producto",foreignField:"factura.cod_producto",as:"producto"}},{$unwind: "$producto"},{$limit: 1}]).pretty()
