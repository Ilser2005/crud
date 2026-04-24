let mysql=require('mysql');
let conexion=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbcolegio'
});
conexion.connect((error) => {
    if(error) throw error;
    console.log('Conexion exitosa');
    let sql='SELECT * FROM cursos';
    if(error){
        throw error;
    }
});
/*conexion.query('INSERT INTO cursos (nombre, creditos,instructor) VALUES ("SQL", 3,"Piter Camacho")', (error, resultado) => {
    if (error) throw error;
    else {
        console.log('Registro insertado');
    }
});*/
conexion.query('UPDATE cursos SET nombre = "PHP", creditos = 6, instructor = "Adolfo Chumacero" WHERE id = 1', (error, resultado) => {
    if (error) throw error;
    else {
        console.log('Registro actualizado');
    }               
});
conexion.query('DELETE FROM cursos WHERE id = 1', (error, resultado) => {
    if (error) throw error;
    else {
        console.log('Registro eliminado');
    }   
});
conexion.query('SELECT * FROM cursos',(error, filas)=>{
    if (error) throw error;
    else{
        console.log(filas);
    }
});
    conexion.end();