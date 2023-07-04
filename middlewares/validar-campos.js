//Express-validator es una coleccion de validaciones ya hechas que podremos utilizar como middleware para revision de los campos que devuelve el body en el post.
const { validationResult } = require("express-validator");

//en los middlewares por lo general se agrega el argumento next para que luego de que termine la validacion pueda continuar el codigo
const validarCampos = (req, res, next) => {
  //Con la constante errors rescatamos el error que devuelve el express-validator, utilizamos el metodo validationResult y rescatamos el error desde el request(req)
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};

module.exports = {
  validarCampos,
};
