class Contact
{

  showContactsOrMessage() {

      let contacts = localstorage.getFromLocalStorage(key);

      if (contacts === null || contacts.length === 0) {
          return $contactListDiv.html($initialAppMessage);
      }

      htmlObj.createContactList(contacts);

      return htmlObj.addEventAndTextToCreatedContacts();
  }

  insertNewContact(contact) {
      let contacts = [];
      if (localstorage.getFromLocalStorage(key) !== null) {
          contacts = localstorage.getFromLocalStorage(key);
      }

      contacts.push(contact);
      localstorage.addToLocalStorage(key, contacts);
      formUpdateState = false;
      htmlObj.generateHTML(contact, contacts.length - 1);

      form.trigger('reset');
      form.hide('slow');
      htmlObj.setShowFormButtonText();
  }

  updateContact() {
      formUpdateState = true;
      form.show('slow');

      let index = $(this)
          .parent()
          .attr($dataAttrName);

      let contacts = localstorage.getFromLocalStorage(key);

      for (let field of contacts[index]) {
          $(`input[name=${field.name}]`).val(field.value);
      }

      form.attr($dataAttrName, index);
  }

  deleteContact() {
       let index = $(this)
          .parent()
          .parent()
          .attr($dataAttrName);

      let contacts = localstorage.getFromLocalStorage(key);

      contacts.splice(index, 1);

      localstorage.addToLocalStorage(key, contacts);

      $(this)
          .parent()
          .parent()
          .remove();

      htmlObj.resetListsDataAttr();

      if ($('ul').length == 0) {
          $contactList.html($initialAppMessage);
      }
  }

}
