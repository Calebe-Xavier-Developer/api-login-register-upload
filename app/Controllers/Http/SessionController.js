"use strict";

class SessionController {
  //busca os parametros solicitados e a autenticação de maneira simples
  async create({ request, auth }) {
    const { email, password } = request.all();

    const token = await auth.attempt(email, password);

    //retorna um token quando o usuario é autenticado
    return token;
  }
}

module.exports = SessionController;
