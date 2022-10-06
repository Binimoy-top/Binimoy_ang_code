
export class Leads {
  name: string;
  title: string;
  company: string;
  phone: string; 
  mobile: string;
  email: string;
  leadstatus: string; 
  owner: string;
  constructor(leads) {
    {
      this.name = leads.name || '';
      this.title = leads.title || '';
      this.company = leads.company || '';
      this.phone = leads.department || '';
      this.mobile = leads.mobile || '';
      this.email = leads.email || '';
      this.leadstatus = leads.leadstatus || '';
      this.owner = leads.gender || '';
      
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
