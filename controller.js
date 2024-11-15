import { RandomStringList } from './model.js';
import { View } from './view.js';

export class Controller {
  constructor() {
    this.randomStringList = new RandomStringList();
    this.view = new View();

    document.getElementById('add_button').addEventListener('click', () => this.addRandomString());
    document.getElementById('delete_button').addEventListener('click', () => this.deleteRandomString());
    document.getElementById('clear_button').addEventListener('click', () => this.clearAllStrings()); // Clear All
  }

  addRandomString() {
    this.randomStringList.addString();
    this.updatePage();
  }

  deleteRandomString() {
    this.randomStringList.deleteRandomString();
    this.updatePage();
  }

  clearAllStrings() {
    this.randomStringList.strings = [];
    this.randomStringList.deletedStrings = [];
    this.updatePage();
  }

  updatePage() {
    this.view.updateSection('added_strings', this.randomStringList.getStrings(), 'added-string');
    this.view.updateSection('deleted_strings', this.randomStringList.getDeletedStrings(), 'deleted-string');
  }
}
