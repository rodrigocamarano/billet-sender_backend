import nodemailer from 'nodemailer';
import Shipping from '../Shipping';

const gmailTransporter = (user: string, password: string) =>
  nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass: password,
    },
  });
const transporter = (service: string, user: string, password: string) => {
  const services = {
    gmail: gmailTransporter(user, password),
  };
  return services[`${service}` as keyof typeof services];
};

class NodeMailer {
  shipping: Shipping;
  constructor(shipping: Shipping) {
    this.shipping = shipping;
  }
  async send(email: string, domain: string, responsible: string, value: number) {
    const transp = transporter(this.shipping.settings.service, this.shipping.settings.email, this.shipping.settings.password);
    const mailOptions = {
      from: `"${this.shipping.settings.sender.name} - ${this.shipping.settings.sender.company}" <${this.shipping.settings.email}>`,
      to: email,
      subject: this.shipping.subject.replace('$domain', domain),
      html: this.shipping.body
        .replace('$to', responsible)
        .replace('$domain', domain)
        .replace('$value', `R$ ${value.toFixed(2).replace('.', ',')}`),
      attachments: [
        {
          filename: `${domain}.pdf`,
          path: `./attachments/${domain}.pdf`,
          contentType: 'application/pdf',
        },
      ],
    };
    try {
      await transp.sendMail(mailOptions);
      return true;
    } catch {
      return false;
    }
  }
  async sendAll() {
    const promises: Promise<unknown>[] = [];
    let count = 1;
    for (const { domain, value, responsible, emails } of this.shipping.billets) {
      for (const email of emails) {
        promises.push(
          new Promise((resolve, reject) => {
            setTimeout(async () => {
              (await this.send(email, domain, responsible, value)) ? resolve(email) : reject(email);
              count += 1;
            }, count * 1);
          })
        );
      }
    }
    return Promise.allSettled(promises);
  }
}

export default NodeMailer;
