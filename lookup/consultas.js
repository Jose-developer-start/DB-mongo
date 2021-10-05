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
