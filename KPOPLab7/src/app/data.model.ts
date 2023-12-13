// src/app/data.model.ts
export class FormData {
  organization: {
    name: string;
    city: string;
    address: string;
  };
  contactPerson: {
    name: string;
    phone: string;
    email: string;
  };
  objectInfo: {
    name: string;
    usageArea: string;
  };

  constructor() {
    this.organization = { name: '', city: '', address: '' };
    this.contactPerson = { name: '', phone: '', email: '' };
    this.objectInfo = { name: '', usageArea: '' };
  }
}
