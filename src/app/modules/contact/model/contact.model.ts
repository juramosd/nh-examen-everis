export class Contact {
    fullname: string;
    email: string;
    phone: string;
    message: string;


deserialize(data: any): Contact {
    Object.assign(this, data);
    return this;
  }
}
