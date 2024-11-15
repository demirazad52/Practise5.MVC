export class RandomString {
    constructor() {
      this.value = this.generateRandomString();
      this.id = Math.random().toString(36).substr(2, 9); // Unique ID
    }
  
    generateRandomString(length = 8) {
      let result = '';
      for (let i = 0; i < length; i++) {
        const charCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97; // a-z
        result += String.fromCharCode(charCode);
      }
      return result;
    }
  }
  
  export class RandomStringList {
    constructor() {
      this.strings = [];
      this.deletedStrings = [];
    }
  
    addString() {
      const randomString = new RandomString();
      this.strings.push(randomString);
    }
  
    deleteRandomString() {
      if (this.strings.length === 0) return null;
      const index = Math.floor(Math.random() * this.strings.length);
      const deletedString = this.strings.splice(index, 1)[0];
      this.deletedStrings.push(deletedString);
      return deletedString;
    }
  
    getStrings() {
      return this.strings;
    }
  
    getDeletedStrings() {
      return this.deletedStrings;
    }
  }
  