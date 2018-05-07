const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripción de la tarea por hacer."
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer.', {
        descripcion
    })
    //.command('listar', 'Muestra todas las tareas por hacer.')
    .command('actualizar', 'Actualiza el estado completado de una tarea.', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un elemento del listado.', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}