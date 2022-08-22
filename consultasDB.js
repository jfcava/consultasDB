// Consultas SQL

// LEER


// Devuelve TODAS (*) las entradas de TIPOSEDICION

// Select * From TIPOSEDICION
// Select * From DISCOS



// Devuelve solo el Titulo y la CantidadCanciones de DISCOS

// Select Titulo, CantidadCanciones From DISCOS



//  Devuelve de DISCOS con las condiciones de idestilo
// y de CantidadCanciones

// Select * From DISCOS where idestilo = 2 AND CantidadCanciones = 12

// OTRA manera es:

// Select D.Titulo, D.CantidadCanciones, E.Descripcion Estilo From DISCOS D, ESTILOS E 
// where  D.IdEstilo = E.Id

// La D y la E vienen a funcionar como el nombre de esas variales. 
// D pasa a ser DISCOS y la E ESTILOS

// E.Descripcion Estilo (Estilo es el nombre que queres ponerle al nuevo dato que viene)




// ESCRIBIR

// PRIMERA MANERA
// insert into DISCOS (Titulo, CantidadCanciones) values ('El titulo del disco...',10)

// SEGUNDA MANERA
// Si vamos a cargar todas las columnas de la tabla, directamente se ingresan todos los valores.
// insert into DISCOS values 
// ('Titulo', getdate(), 10, 'url', 1, 2)



// MODIFICAR

// update ESTILOS set Descripcion = 'Country' where id = 1 



// ELIMINAR

// delete From DISCOS where id = 1