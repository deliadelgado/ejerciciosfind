db.clientes.insertMany([
{ Tipotarjeta: "visa", Apellido: "Vittel", Nombre: "Bonnie", Género: "F" },
{ Tipotarjeta: "visa", Apellido: "Shimon", Nombre: "Carmelia", Género: "F" },
{ Tipotarjeta: "bankcard", Apellido: "Orriss", Nombre: "Fanchon", Género: "F" },
{ Tipotarjeta: "visa", Apellido: "Sullivan", Nombre:"Kalie", Género: "F" },
{ Tipotarjeta: "bankcard", Apellido: "Drackford", Nombre: "Sharron", Género: "F" },
{ Tipotarjeta: "visa", Apellido: "Vallentin", Nombre: "Burnaby", Género: "M" },
{ Tipotarjeta: "bankcard", Apellido: "Meir", Nombre: "Rosabella", Género: "F" },
{ Tipotarjeta: "mastercard", Apellido: "Napier", Nombre: "Ginni", Género: "F" },
{ Tipotarjeta: "masterard", Apellido: "Kadwallider", Nombre: "Nissie", Género: "F" },
{ Tipotarjeta: "mastercard", Apellido: "Proven", Nombre: "Hewitt", Género:"M" }
]);
"acknowledged" : true,
"insertedIds" : [
        ObjectId("5fac10350b0b8b42263fbc8d"),
        ObjectId("5fac10350b0b8b42263fbc8e"),
        ObjectId("5fac10350b0b8b42263fbc8f"),
        ObjectId("5fac10350b0b8b42263fbc90"),
        ObjectId("5fac10350b0b8b42263fbc91"),
        ObjectId("5fac10350b0b8b42263fbc92"),
        ObjectId("5fac10350b0b8b42263fbc93"),
        ObjectId("5fac10350b0b8b42263fbc94"),
        ObjectId("5fac10350b0b8b42263fbc95"),
        ObjectId("5fac10350b0b8b42263fbc96")
        


        db.clientes.find({"Género":{$lte: "F" }}).pretty()
        {
            "_id" : ObjectId("5fac10350b0b8b42263fbc8d"),
            "Tipotarjeta" : "visa",
            "Apellido" : "Vittel",
            "Nombre" : "Bonnie",
            "Género" : "F"
    }
    {
            "_id" : ObjectId("5fac10350b0b8b42263fbc8e"),
            "Tipotarjeta" : "visa",
            "Apellido" : "Shimon",
            "Nombre" : "Carmelia",
            "Género" : "F"
    }
    {
            "_id" : ObjectId("5fac10350b0b8b42263fbc8f"),
            "Tipotarjeta" : "bankcard",
            "Apellido" : "Orriss",
            "Nombre" : "Fanchon",
            "Género" : "F"
    }
    {
            "_id" : ObjectId("5fac10350b0b8b42263fbc90"),
            "Tipotarjeta" : "visa",
            "Apellido" : "Sullivan",
            "Nombre" : "Kalie",
            "Género" : "F"
    }
    {
            "_id" : ObjectId("5fac10350b0b8b42263fbc91"),
            "Tipotarjeta" : "bankcard",
            "Apellido" : "Drackford",
            "Nombre" : "Sharron",
            "Género" : "F"
    }
    {
            "_id" : ObjectId("5fac10350b0b8b42263fbc93"),
            "Tipotarjeta" : "bankcard",
            "Apellido" : "Meir",
            "Nombre" : "Rosabella",
            "Género" : "F"
    }
    {
            "_id" : ObjectId("5fac10350b0b8b42263fbc94"),
            "Tipotarjeta" : "mastercard",
            "Apellido" : "Napier",
            "Nombre" : "Ginni",
            "Género" : "F"
    }
    {
            "_id" : ObjectId("5fac10350b0b8b42263fbc95"),
            "Tipotarjeta" : "masterard",
            "Apellido" : "Kadwallider",
            "Nombre" : "Nissie",
            "Género" : "F"
    }


db.clientes.find({$nor: [{Tipotarjeta: "Visa" },{Tipotarjeta: "mastercard" }]})

{ "_id" : ObjectId("5fac10350b0b8b42263fbc8d"), "Tipotarjeta" : "visa", "Apellido" : "Vittel", "Nombre" : "Bonnie", "Género" : "F" }
{ "_id" : ObjectId("5fac10350b0b8b42263fbc8e"), "Tipotarjeta" : "visa", "Apellido" : "Shimon", "Nombre" : "Carmelia", "Género" : "F" }
{ "_id" : ObjectId("5fac10350b0b8b42263fbc8f"), "Tipotarjeta" : "bankcard", "Apellido" : "Orriss", "Nombre" : "Fanchon", "Género" : "F" }
{ "_id" : ObjectId("5fac10350b0b8b42263fbc90"), "Tipotarjeta" : "visa", "Apellido" : "Sullivan", "Nombre" : "Kalie", "Género" : "F" }
{ "_id" : ObjectId("5fac10350b0b8b42263fbc91"), "Tipotarjeta" : "bankcard", "Apellido" : "Drackford", "Nombre" : "Sharron", "Género" : "F" }
{ "_id" : ObjectId("5fac10350b0b8b42263fbc92"), "Tipotarjeta" : "visa", "Apellido" : "Vallentin", "Nombre" : "Burnaby", "Género" : "M" }
{ "_id" : ObjectId("5fac10350b0b8b42263fbc93"), "Tipotarjeta" : "bankcard", "Apellido" : "Meir", "Nombre" : "Rosabella", "Género" : "F" }
{ "_id" : ObjectId("5fac10350b0b8b42263fbc95"), "Tipotarjeta" : "masterard", "Apellido" : "Kadwallider", "Nombre" : "Nissie", "Género" : "F" }

db.clientes.find({Género:"M"})
{ "_id" : ObjectId("5fac10350b0b8b42263fbc92"), "Tipotarjeta" : "visa", "Apellido" : "Vallentin", "Nombre" : "Burnaby", "Género" : "M" }
{ "_id" : ObjectId("5fac10350b0b8b42263fbc96"), "Tipotarjeta" : "mastercard", "Apellido" : "Proven", "Nombre" : "Hewitt", "Género" : "M" }

