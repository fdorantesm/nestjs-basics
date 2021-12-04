const uuid =  require('uuid');

class UuidService {
  getUuid() {
    return uuid.v4();
  }
}

const uuidService = new UuidService();
const id = uuidService.getUuid();

console.log(id);


