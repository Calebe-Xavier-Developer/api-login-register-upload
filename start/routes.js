"use strict";

const Route = use("Route");
const Helpers = use("Helpers");

//Rota para cadastro de novos usuarios
Route.post("/users", "UserController.create");

//Rota para autenticar o login do usuario
Route.post("/sessions", "SessionController.create");

 //Rota para envio das informações do arquivo
Route.resource("files", "FileController").apiOnly().middleware("auth");


/*Route.post("upload", async ({ request }) => {
  const filesdoc = request.file("docs_input", {
    types: ['files'],
    size: "2mb",
  });
  await filesdoc.moveAll(Helpers.tmpPath('temp'), file => ({
    name: `${file.name}-${Date.now()}-${file.user.name}-${file.user_id}`,
  }));
  if (!filesdoc.moveAll()) {
    return filesdoc.errors();
  } return 'File moved'
});*/
