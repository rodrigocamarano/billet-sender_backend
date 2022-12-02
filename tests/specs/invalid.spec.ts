import supertest, { Response } from 'supertest';
import server from '../../src/server';
import { types } from '../json/invalid.json';
import { type, format, required, uniqueItems, empty, minItems, enum as en, missing } from '../../src/configs/json/errors/ajv/shipping.json';

describe('Invalid requests', () => {
  describe('Invalid types', () => {
    it('Invalid subject', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[46])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate.subject).toBe('string');
          expect(response.body.error.validate.subject).toEqual(type.subject);
          done();
        });
    });
    it('Invalid body', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[0])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate.body).toBe('string');
          expect(response.body.error.validate.body).toEqual(type.body);
          done();
        });
    });
    it('Invalid billets.0.responsible', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[24])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['billets.0.responsible']).toBe('string');
          expect(response.body.error.validate['billets.0.responsible']).toEqual(type.responsible);
          done();
        });
    });
    it('Invalid billets.0.emails.0.emails', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[25])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['billets.0.emails.0.emails']).toBe('string');
          expect(response.body.error.validate['billets.0.emails.0.emails']).toEqual(type.emails);
          done();
        });
    });
    it('Invalid billets.0.domain', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[26])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['billets.0.domain']).toBe('string');
          expect(response.body.error.validate['billets.0.domain']).toEqual(type.domain);
          done();
        });
    });
    it('Invalid billets.0.value', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[27])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['billets.0.value']).toBe('string');
          expect(response.body.error.validate['billets.0.value']).toEqual(type.value);
          done();
        });
    });
    it('Invalid settings.service', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[1])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.service']).toBe('string');
          expect(response.body.error.validate['settings.service']).toEqual(en.service);
          done();
        });
    });
    it('Invalid settings.sender.name', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[2])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.sender.name']).toBe('string');
          expect(response.body.error.validate['settings.sender.name']).toEqual(type.name);
          done();
        });
    });
    it('Invalid settings.sender.company', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[3])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.sender.company']).toBe('string');
          expect(response.body.error.validate['settings.sender.company']).toEqual(type.company);
          done();
        });
    });
    it('Invalid settings.email', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[4])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.email']).toBe('string');
          expect(response.body.error.validate['settings.email']).toEqual(type.email);
          done();
        });
    });
    it('Invalid settings.password', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[5])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.password']).toBe('string');
          expect(response.body.error.validate['settings.password']).toEqual(type.password);
          done();
        });
    });
    it('Invalid settings.image.url', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[6])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.image.url']).toBe('string');
          expect(response.body.error.validate['settings.image.url']).toEqual(type.url);
          done();
        });
    });
    it('Invalid settings.image.width', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[7])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.image.width']).toBe('string');
          expect(response.body.error.validate['settings.image.width']).toEqual(type.width);
          done();
        });
    });
    it('Invalid settings.image.height', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[8])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.image.height']).toBe('string');
          expect(response.body.error.validate['settings.image.height']).toEqual(type.height);
          done();
        });
    });
  });
  describe('Invalid formats', () => {
    it('Invalid settings.email', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[9])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.email']).toBe('string');
          expect(response.body.error.validate['settings.email']).toEqual(format.email);
          done();
        });
    });
    it('Invalid settings.image.url', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[10])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.image.url']).toBe('string');
          expect(response.body.error.validate['settings.image.url']).toEqual(format.url);
          done();
        });
    });
  });
  describe('Duplicate values', () => {
    it('Duplicate billets', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[28])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate.billets).toBe('string');
          expect(response.body.error.validate.billets).toEqual(uniqueItems.billets);
          done();
        });
    });
    it('Duplicate billets.0.emails', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[29])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['billets.0.emails']).toBe('string');
          expect(response.body.error.validate['billets.0.emails']).toEqual(uniqueItems.email);
          done();
        });
    });
  });
  describe('Enum values', () => {
    it('Enum service', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[45])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.service']).toBe('string');
          expect(response.body.error.validate['settings.service']).toEqual(en.service);
          done();
        });
    });
  });
  describe('Required fields', () => {
    it('Required subject', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[47])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate.subject).toBe('string');
          expect(response.body.error.validate.subject).toEqual(required.subject);
          done();
        });
    });
    it('Required body', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[11])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate.body).toBe('string');
          expect(response.body.error.validate.body).toEqual(required.body);
          done();
        });
    });
    it('Required billets', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[23])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate.billets).toBe('string');
          expect(response.body.error.validate.billets).toEqual(required.billets);
          done();
        });
    });
    it('Required billets.0.responsible', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[31])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['billets.0.responsible']).toBe('string');
          expect(response.body.error.validate['billets.0.responsible']).toEqual(required.responsible);
          done();
        });
    });
    it('Required billets.0.emails', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[32])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['billets.0.emails']).toBe('string');
          expect(response.body.error.validate['billets.0.emails']).toEqual(required.emails);
          done();
        });
    });
    it('Required billets.0.domain', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[33])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['billets.0.domain']).toBe('string');
          expect(response.body.error.validate['billets.0.domain']).toEqual(required.domain);
          done();
        });
    });
    it('Required billets.0.value', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[34])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['billets.0.value']).toBe('string');
          expect(response.body.error.validate['billets.0.value']).toEqual(required.value);
          done();
        });
    });
    it('Required settings', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[22])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate.settings).toBe('string');
          expect(response.body.error.validate.settings).toEqual(required.settings);
          done();
        });
    });
    it('Required settings.service', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[12])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.service']).toBe('string');
          expect(response.body.error.validate['settings.service']).toEqual(required.service);
          done();
        });
    });
    it('Required settings.sender.name', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[13])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.sender.name']).toBe('string');
          expect(response.body.error.validate['settings.sender.name']).toEqual(required.name);
          done();
        });
    });
    it('Required settings.sender.company', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[14])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.sender.company']).toBe('string');
          expect(response.body.error.validate['settings.sender.company']).toEqual(required.company);
          done();
        });
    });
    it('Required settings.email', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[15])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.email']).toBe('string');
          expect(response.body.error.validate['settings.email']).toEqual(required.email);
          done();
        });
    });
    it('Required settings.password', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[16])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.password']).toBe('string');
          expect(response.body.error.validate['settings.password']).toEqual(required.password);
          done();
        });
    });
    it('Required settings.image.url', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[17])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.image.url']).toBe('string');
          expect(response.body.error.validate['settings.image.url']).toEqual(required.url);
          done();
        });
    });
    it('Required settings.image.width', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[18])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.image.width']).toBe('string');
          expect(response.body.error.validate['settings.image.width']).toEqual(required.width);
          done();
        });
    });
    it('Required settings.image.height', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[19])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.image.height']).toBe('string');
          expect(response.body.error.validate['settings.image.height']).toEqual(required.height);
          done();
        });
    });
    it('Required settings.sender', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[20])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.sender']).toBe('string');
          expect(response.body.error.validate['settings.sender']).toEqual(required.sender);
          done();
        });
    });
    it('Required settings.image', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[21])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.image']).toBe('string');
          expect(response.body.error.validate['settings.image']).toEqual(required.image);
          done();
        });
    });
  });
  describe('Empty fields', () => {
    it('Empty subject', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[48])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate.subject).toBe('string');
          expect(response.body.error.validate.subject).toEqual(empty.subject);
          done();
        });
    });
    it('Empty body', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[35])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate.body).toBe('string');
          expect(response.body.error.validate.body).toEqual(empty.body);
          done();
        });
    });
    it('Empty billets.0.responsible', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[36])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['billets.0.responsible']).toBe('string');
          expect(response.body.error.validate['billets.0.responsible']).toEqual(empty.billets.responsible);
          done();
        });
    });
    it('Empty billets.0.emails', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[37])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['billets.0.emails']).toBe('string');
          expect(response.body.error.validate['billets.0.emails']).toEqual(minItems.emails);
          done();
        });
    });
    it('Empty billets.0.domain', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[38])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['billets.0.domain']).toBe('string');
          expect(response.body.error.validate['billets.0.domain']).toEqual(empty.billets.domain);
          done();
        });
    });
    it('Empty settings.service', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[39])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.service']).toBe('string');
          expect(response.body.error.validate['settings.service']).toEqual(en.service);
          done();
        });
    });
    it('Empty settings.sender.name', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[40])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.sender.name']).toBe('string');
          expect(response.body.error.validate['settings.sender.name']).toEqual(empty.settings.sender.name);
          done();
        });
    });
    it('Empty settings.sender.company', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[41])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.sender.company']).toBe('string');
          expect(response.body.error.validate['settings.sender.company']).toEqual(empty.settings.sender.company);
          done();
        });
    });
    it('Empty settings.email', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[42])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.email']).toBe('string');
          expect(response.body.error.validate['settings.email']).toEqual(format.email);
          done();
        });
    });
    it('Empty settings.password', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[43])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.password']).toBe('string');
          expect(response.body.error.validate['settings.password']).toEqual(empty.settings.password);
          done();
        });
    });
    it('Empty settings.image.url', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[44])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.validate['settings.image.url']).toBe('string');
          expect(response.body.error.validate['settings.image.url']).toEqual(format.url);
          done();
        });
    });
  });
  describe('Invalid files', () => {
    it('non-existent domain', (done) => {
      supertest(server)
        .post('/shipping')
        .send(types[49])
        .expect(400)
        .then((response: Response) => {
          expect(typeof response.body.error.message).toBe('string');
          expect(response.body.error.message).toEqual(missing.files);
          done();
        });
    });
  });
});
