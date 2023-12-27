const errorHandler = (err, req, res, next) =>{
    //Verificar si el error tiene codigo definido, sino establcer predeterminado
    const statusCode = err.statusCode || 500;

    //Objeto de respuesta de Error
    const errorResponse = {
        error: {
            message: err.message || "Error interno del servidor",
            code: err.code || "interal_error",
        },
    };

    //Enviar respuesta de error en formato JSON
    res.status(statusCode).json(errorResponse);
};

module.exports = errorHandler;