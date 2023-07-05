const { OAuth2Client } = require("google-auth-library");

//colocamos nuestr google_client_id que creamos desde google console
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
async function googleVerify(token = "") {
  const ticket = await client.verifyIdToken({
    idToken: token,

    //en audience tambien utilizamos el token que rescatamos
    audience: process.env.GOOGLE_CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
    // Or, if multiple clients access the backend:
    //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const { name, picture, email } = ticket.getPayload();

  //cambiamos el nombre de las propiedades que nos devuelve el payload
  return {
    nombre: name,
    img: picture,
    correo: email,
  };
}

module.exports = {
  googleVerify,
};
