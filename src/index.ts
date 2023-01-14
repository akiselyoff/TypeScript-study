function Logger(constructor: Function) {
  console.log('Loging...');
  console.log(constructor);
}
@Logger
class Controller {
  public id = 1;
}
