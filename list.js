const readline = require('readline');

// Create the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Array to store contacts
const contacts = [];

// Prompt the user for their name and number
function addContact(){
  rl.question('Enter name ', (name) => {
    rl.question('Enter number ', (phoneNumber) => {
    const newContact = {name,phoneNumber};
    contacts.push(newContact);
    console.log('contact added', newContact);
    main();
});

  
  });
}

function displayList(){
  console.log(' All contacts:');
  contacts.forEach((contact, index)=>{
    console.log(`${index+1}. Name: ${contact.name}, Phone Number: ${contact.phoneNumber}`);
  });
  main();
}


function searchContact(){
  
rl.question('Enter the name to search for: ', (searchName) => {
  // Search for the contact
  const foundContact = contacts.find(contact => contact.name === searchName);

  if (foundContact) {
      console.log(`Contact found: ${foundContact.name} - Phone: ${foundContact.phoneNumber}`);
  } else {
      console.log(`Contact not found for the name: ${searchName}`);
  }
  main();
});
}
 function exitApp(){
  console.log('the application will end');
  rl.close();
 }

function main()
{
  console.log('Conact Manager');
  console.log('1. add a contact');
  console.log('2. displayList');
  console.log('3. searchContact');
  console.log('4.exit application');
  rl.question('Enter a number ', (number) => {

    switch(number){
      case '1':
        addContact();
        break;
      case '2': 
        displayList();
        break;
      case '3':
        searchContact();
        break;
      case '4':
        exitApp();
        break; 
      default :
      console.log('Invalid choice, please select 1,2,3 or 4');
      main();

    }
    }
  )

}

main();