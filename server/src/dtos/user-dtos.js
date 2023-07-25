export default class UserDto {
  email;
  id;
  name;
  surname;
  isActivated;
  constructor(model) {
    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.isActivated;
    this.surname = model.surname;
    this.name = model.name;
  }
}
