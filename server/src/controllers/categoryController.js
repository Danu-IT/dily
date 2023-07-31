import categoryService from "../services/category.js";

class categoryController {
  async uploadFileItem(req, res) {
    try {
      const { icon, picture } = req.files;
      const { value, subcategories } = req.body;

      const item = await categoryService.addItem(
        icon,
        picture,
        value,
        subcategories
      );

      return res.json({ message: "YEEES" });
    } catch (e) {
      return res.status(500).json({ message: "Не удалось скачать файл" });
    }
  }

  async getItems(req, res) {
    try {
      const items = await categoryService.getItems();
      res.json({ items });
    } catch (e) {
      return res.status(500).json({ message: "Не удалось получить категории" });
    }
  }
}

export default new categoryController();
