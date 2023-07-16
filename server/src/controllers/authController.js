class authController {
  async registration(req, res) {
    try {
    } catch (e) {}
  }
  async login(req, res) {
    try {
    } catch (e) {}
  }
  async getUsers(req, res) {
    try {
      console.log(res);
      res.json("Сервер работает");
    } catch (e) {}
  }
}

export default new authController();
