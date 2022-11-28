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
  async send() {
    const promises: (string | Promise<unknown>)[] = [];
    const transp = transporter(this.shipping.settings.service, this.shipping.settings.email, this.shipping.settings.password);
    let count = 1;
    for (const { domain, value, responsible, emails } of this.shipping.billets) {
      for (const email of emails) {
        const mailOptions = {
          from: `"${this.shipping.settings.sender.name} - ${this.shipping.settings.sender.company}" <${this.shipping.settings.email}>`,
          to: email,
          subject: 'Domain Renewal',
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
        promises.push(
          new Promise((resolve) => {
            setTimeout(() => {
              transp.sendMail(mailOptions);
              resolve(email);
              count += 1;
            }, count * 1);
          })
        );
      }
    }
    return Promise.all(promises)
      .then((result) => console.log(0, result))
      .catch((error) => console.log(1, error));
  }
}

export default NodeMailer;
