var elSiteMain = document.querySelector('#siteMain');
// var elPhonebookInfo = document.querySelector('#phonebookInfo');
var elPhonebookTable = elSiteMain.querySelector('#phonebookTable');
var elInitialContactText = elSiteMain.querySelector('#initialContactText');

var elPhoneBookForm = document.querySelector('#phoneBookForm');
var elNumberOwnerFirstname = elPhoneBookForm.querySelector('#numberOwnerFirstname');
var elNumberOwnerLastname = elPhoneBookForm.querySelector('#numberOwnerLastname');
var elPhoneNumber = elPhoneBookForm.querySelector('#phoneNumber');
var elNumberOwnerConnection = elPhoneBookForm.querySelector('#numberOwnerConnection');

function createPhonebook (firstName, lastName, phoneNumber, connection) {
  return {
    numberOwnerFirstname: firstName,
    numberOwnerLastname: lastName,
    phone: phoneNumber,
    numberOwnerConnection: connection
  };
}

elPhoneBookForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  var numberOwnerFirstname = elNumberOwnerFirstname.value.trim();
  // numberOwnerFirstname = numberOwnerFirstname.charAt(0).toUpperCase() + numberOwnerFirstname.slice(1);
  var numberOwnerLastname = elNumberOwnerLastname.value.trim();
  var phoneNumber = elPhoneNumber.value.trim();
  var numberOwnerConnection = elNumberOwnerConnection.value.trim();

  var newTr = document.createElement('tr');

  var phonebook = [];
  var phonebookItem = createPhonebook(numberOwnerFirstname, numberOwnerLastname, phoneNumber, numberOwnerConnection);
  phonebook.push(phonebookItem);

  elInitialContactText.remove();

  for (var i = 0; i < phonebook.length; i++) {
    for (var phonebookItemm in phonebook[i]) {
      var newTd = document.createElement('td');
      newTd.textContent = phonebook[i][phonebookItemm];
      newTr.appendChild(newTd);
    }
  }


  elPhonebookTable.appendChild(newTr);

  // numberOwnerFirstname.value = '';
  // numberOwnerLastname.value = '';
  // phoneNumber.value = '';
  // numberOwnerConnection.value = '';

});