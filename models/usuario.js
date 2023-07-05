const { Schema, model } = require("mongoose");

//se define el modelo de los usuarios con el Schema que es extraido desde la dependencia de mongoose

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    //La propiedad required podria ser solo un valor booleano, o en este caso podriamos encerrar el valor en corchetes y colocar primero el valor (en este caso true), y un mensaje opcional para cuando no se envie el nombre por ejemplo
    required: [true, "El nombre es obligatorio"],
  },

  correo: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "La contraseña es obligatoria"],
  },

  img: {
    type: String,
  },

  rol: {
    type: String,
    required: true,
    emun: ["ADMIN_ROLE", "USER_ROLE"],
    default: "USER_ROLE",
  },

  estado: {
    type: Boolean,
    default: true,
  },

  google: {
    type: Boolean,
    default: false,
  },
});

//con esta funcion sacamos el password y el version(__v) del return
UsuarioSchema.methods.toJSON = function () {
  const { __v, password, _id, ...usuario } = this.toObject();
  usuario.uid = _id;
  return usuario;
};

module.exports = model("Usuario", UsuarioSchema);
