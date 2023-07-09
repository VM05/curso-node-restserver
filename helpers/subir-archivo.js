const path = require("path");
const { v4: uuidv4 } = require("uuid");

const subirArchivo = (
  files,
  extensionesValidas = ["png", "jpg", "webp", "jpeg", "gif"],
  carpeta = ""
) => {
  return new Promise((resolve, reject) => {
    //se destructura el archivo del request
    const { archivo } = files;
    const nombreCortado = archivo.name.split(".");
    const extension = nombreCortado[nombreCortado.length - 1];

    //validar la extension
    if (!extensionesValidas.includes(extension)) {
      return reject(
        `La extensión ${extension} no es permitida - ${extensionesValidas}`
      );
    }

    //le colocamos un nombre random con uuidv4(), adicionalmente le colocamos ese nombre en el uploadPath
    const nombreTemp = uuidv4() + "." + extension;

    //se especifica el path donde queremos guardar el archivo
    const uploadPath = path.join(__dirname, "../uploads/", carpeta, nombreTemp);

    //con el .mv podremos mover el archivo colocando la ruta como primer argumento, luego tenemos una funcion callback para mostrar el error
    archivo.mv(uploadPath, (err) => {
      if (err) {
        reject(err);
      }

      //enviamos la respuesta del endpoint si se hizo efectivo mover el arhcivo

      resolve(nombreTemp);
    });
  });
};

module.exports = {
  subirArchivo,
};
