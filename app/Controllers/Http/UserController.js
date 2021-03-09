"use strict";

//Importanto model de usuário
const User = use("App/Models/User");

class UserController {
//Definindo metodo assíncrono create que recebe um parâmetro
  async create({ request }) {
    //Buscando os campos e armazenando no objeto data
    const data = request.only(["username", "email", "password"]);

    //criando um novo usuario com os paramentro dentro do data e salvando em user
    const user = await User.create(data);

    //retornando novo usuario
    return user;
  }
}

module.exports = UserController;
