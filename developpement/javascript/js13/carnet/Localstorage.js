class Localstorage
{
  addToLocalStorage(key, items) {
      return localStorage.setItem(key, JSON.stringify(items));
  }

  getFromLocalStorage(key) {
      return JSON.parse(localStorage.getItem(key));
  }

  deleteContactFromLocalStorage(key) {
      return localStorage.removeItem(key);
  }

  persistUpdate(contact, index) {
      let contacts = localstorage.getFromLocalStorage(key);
      contacts[index] = contact;

      localstorage.addToLocalStorage(key, contacts);

      let uls = Array.from($('ul'));

      htmlObj.updateHTML(uls, index, contact);

      htmlObj.toogleReset();
      htmlObj.setShowFormButtonText();
  }
}
