type Billets = {
  responsible: string;
  emails: string;
  domain: string;
  value: number;
};
type Sender = {
  name: string;
  company: string;
};

type Image = {
  url: string;
  width: number;
  height: number;
};

type Settings = {
  service: string;
  sender: Sender;
  email: string;
  password: string;
  image: Image;
};

type Shipping = {
  subject: string;
  body: string;
  billets: Billets[];
  settings: Settings;
};

export default Shipping;
