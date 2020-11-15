var elPhoneBookForm = document.querySelector('#phoneBookForm');
var elNumberOwnerFirstname = elPhoneBookForm.querySelector('#numberOwnerFirstname');
var elNumberOwnerLastname = elPhoneBookForm.querySelector('#numberOwnerLastname');
var elPhoneNumber = elPhoneBookForm.querySelector('#phoneNumber');
var elNumberOwnerConnection = elPhoneBookForm.querySelector('#numberOwnerConnection');
var elPhonebookInfo = document.querySelector('#phonebookInfo');

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

  var phonebook = [];
  var phonebookItem = createPhonebook(numberOwnerFirstname, numberOwnerLastname, phoneNumber, numberOwnerConnection);
  phonebook.push(phonebookItem);

  // debugger;

  for (var i = 0; i < phonebook.length; i++) {
    for (var phonebookItemm in phonebook[i]) {
      elPhonebookInfo.textContent += phonebook[i][phonebookItemm];
    }
  }
  console.log(phonebook);
});