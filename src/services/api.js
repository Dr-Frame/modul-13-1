const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDJhMDc5MjY0ZjViYzAwMTdhMWUyZWIiLCJpYXQiOjE2MTMzNjcxODZ9.VF6NDDGgHimRNKGuDANwkih4GXWbSr5JWjkkaM8hZoo";

const headers = {
  Authorization: `Bearer ${token}`,
};

const fetchContacts = () => {
  return fetch("https://goit-phonebook-api.herokuapp.com/contacts", {
    headers,
  }).then((res) => res.json());
};

const createContact = (name, number) => {
  const options = {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, number }),
  };
  return fetch(
    "https://goit-phonebook-api.herokuapp.com/contacts",
    options
  ).then((res) => res.json());
};

const deleteContact = (id) => {
  const options = {
    method: "DELETE",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
  };

  return fetch(
    `https://goit-phonebook-api.herokuapp.com/contacts/${id}`,
    options
  ).then((res) => res.json());
};

const updateContact = (id, fields) => {
  const options = {
    method: "PATCH",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  };

  return fetch(
    `https://goit-phonebook-api.herokuapp.com/contacts/${id}`,
    options
  ).then((res) => res.json());
};

export default { fetchContacts, createContact, deleteContact, updateContact };
