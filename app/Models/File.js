"use strict";

const Env = use("Env");
const Model = use("Model");

class File extends Model {
  user() {
    return this.belongsTo("App/Models/User");
  }

  static get computed() {
    return ["url"];
  }

  getUrl({ path }) {
    return `${Env.get("APP_URL")}/files/${path}`;
  }
}

module.exports = File;
