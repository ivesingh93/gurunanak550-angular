export class User {

  full_name: string;
  email: string;
  password: string;
  phone_number: string;
  age: number;
  address: string;
  organization_name: string;

  constructor(full_name, email, password, phone_number, age, address, organization_name) {
    this.full_name = full_name;
    this.email = email;
    this.password = password;
    this.phone_number = phone_number;
    this.age = age;
    this.address = address;
    this.organization_name = organization_name;
  }

}
