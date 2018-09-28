var Usuarios=[];
function crearUsuario(nombre,apellido,nacimiento,telefono,correo) {
    var usuario={
        nombre:nombre,
        apellido:apellido,
        nacimiento:nacimiento,
        telefono:telefono,
        correo:correo,
    }
    Usuarios.push(usuario);
}