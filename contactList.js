let contactList = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "1234 567 890",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "2345 678 901",
  },
  {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    phone: "3456 789 012",
  },
];

window.addEventListener("load", function () {
  contactList.forEach((contact) => {
    showContact(contact);
  });
  console.log(contactList);
});

function addContact(){
    const newContact = 
    {
        name: "Maisie Haley",
        email: "risus.Quisque@urna.ca",
        phone: "0913 531 3030",
    };
    showContact(newContact);
    contactList.push(newContact);
    console.log(contactList);
}

function showContact(contact) {
  let contactLi = document.createElement("li");
  contactLi.style.listStyleType = "none";
  contactLi.style.border = "1px solid #ccc";
  contactLi.style.padding = "10px";
  contactLi.style.margin = "10px";
  let contactDiv = document.createElement("div");
  contactDiv.className = "contact";
  contactDiv.innerHTML = `<h2>${contact.name}</h2>
                            <p>Email: ${contact.email}</p>
                            <p>Phone: ${contact.phone}</p>`;
  contactLi.appendChild(contactDiv);
  document.getElementById("contactList").appendChild(contactLi);
}
