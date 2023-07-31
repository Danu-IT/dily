import Category from "../models/Category.js";

class CategoryService {
  async addItem(icon, picture, value, subcategories) {
    icon.mv("./public/categories/" + icon.name);
    picture.mv("./public/categories/" + picture.name);

    const item = await Category.create({
      value: value,
      icon: icon.name,
      picture: picture.name,
      subcategories: subcategories,
    });
    return item;
  }
  async getItems() {
    const items = await Category.find();
    return items;
  }
}

export default new CategoryService();
