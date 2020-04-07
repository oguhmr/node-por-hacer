const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marcar como como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear por hacer', { descripcion })
    .command('listar', 'Mostrar todas las tareas por hacer')
    .command('actualizar', 'Actualza todas las tareas por hacer', { descripcion, completado })
    .command('borrar', 'Borra una tarea', { descripcion })
    .help()
    .argv;

module.exports = { argv };