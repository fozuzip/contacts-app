export type Contact = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

export type Geo = {
  lat: string;
  lng: string;
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export const getContacts = (): Promise<Contact[]> => {
  return fetch(
    "https://jsonplaceholder.typicode.com/users?_start=0&_limit=6",
  ).then((res) => res.json());
};
