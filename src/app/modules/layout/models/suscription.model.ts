export class data {
    email: string;

    
deserialize(data: any): data {
    Object.assign(this, data);
    return this;
  }
}
