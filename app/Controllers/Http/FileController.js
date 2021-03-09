"use strict";


const Helpers = use("Helpers");
const File = use("App/Models/File");

class FileController {
  async show({ params, response }) {
    return response.download(Helpers.tmpPath(`temp/${params.path}`));
  }

  //pega o id do usuario e envia pro BD
  async store({ auth, params, request }) {
    const filesdoc = request.file('document', {
      types: ['document'],
      size: '2mb'
    })
    console.log(filesdoc);
    await filesdoc.moveAll(Helpers.tmpPath('temp'), file => ({
      name: `${file.name}-${file.user.name}-${file.user_id}`
    }))
    if(!filesdoc.moveAll(err)){
      return filesdoc.errors()
    }
    await Promise.all(
      filesdoc.movedList().map(file => file.create({ path: file.name}))
      )

    const { id } = auth.user;
    const name = request.only(["name"]);
    const file = await File.create({ ...name, user_id: id });
    return file;
    
    

  }
}

module.exports = FileController;

