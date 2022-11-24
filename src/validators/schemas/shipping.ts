import { required, type, empty, format, uniqueItems, minItems, enum as en } from '../../configs/json/errors/ajv/shipping.json';

const body = {
  type: 'string',
  errorMessage: type.body,
  allOf: [{ not: { maxLength: 0 }, errorMessage: empty.body }],
};

const billetSchema = {
  type: 'object',
  properties: {
    responsible: {
      type: 'string',
      errorMessage: type.responsible,
      allOf: [{ not: { maxLength: 0 }, errorMessage: empty.billets.responsible }],
    },
    emails: {
      type: 'array',
      items: { type: 'string', format: 'email', errorMessage: { format: format.email, type: type.emails } },
      uniqueItems: true,
      minItems: 1,
      errorMessage: { uniqueItems: uniqueItems.email, minItems: minItems.emails },
    },
    domain: {
      type: 'string',
      errorMessage: type.domain,
      allOf: [{ not: { maxLength: 0 }, errorMessage: empty.billets.domain }],
    },
    value: {
      type: 'number',
      errorMessage: type.value,
    },
  },
  required: ['responsible', 'emails', 'domain', 'value'],
  errorMessage: {
    required: {
      responsible: required.responsible,
      emails: required.emails,
      domain: required.domain,
      value: required.value,
    },
  },
};

const billets = {
  type: 'array',
  items: billetSchema,
  uniqueItems: true,
  errorMessage: { type: type.billets, uniqueItems: uniqueItems.billets },
};

const settings = {
  type: 'object',
  properties: {
    service: {
      enum: ['gmail'],
      type: 'string',
      errorMessage: { type: type.service, enum: en.service },
      allOf: [{ not: { maxLength: 0 }, errorMessage: empty.settings.service }],
    },
    sender: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          errorMessage: type.name,
          allOf: [{ not: { maxLength: 0 }, errorMessage: empty.settings.sender.name }],
        },
        company: {
          type: 'string',
          errorMessage: type.company,
          allOf: [{ not: { maxLength: 0 }, errorMessage: empty.settings.sender.company }],
        },
      },
      required: ['name', 'company'],
      errorMessage: {
        required: {
          name: required.name,
          company: required.company,
        },
      },
    },
    email: {
      type: 'string',
      format: 'email',
      errorMessage: { type: type.email, format: format.email },
    },
    password: {
      type: 'string',
      errorMessage: type.password,
      allOf: [{ not: { maxLength: 0 }, errorMessage: empty.settings.password }],
    },
    image: {
      type: 'object',
      properties: {
        url: {
          type: 'string',
          format: 'uri',
          errorMessage: { type: type.url, format: format.url },
        },
        width: {
          type: 'number',
          errorMessage: type.width,
        },
        height: {
          type: 'number',
          errorMessage: type.height,
        },
      },
      required: ['url', 'width', 'height'],
      errorMessage: {
        required: {
          url: required.url,
          width: required.width,
          height: required.height,
        },
      },
    },
  },
  required: ['service', 'sender', 'email', 'password', 'image'],
  errorMessage: {
    required: {
      service: required.service,
      sender: required.sender,
      email: required.email,
      password: required.password,
      image: required.image,
    },
  },
};

const shipping = {
  type: 'object',
  properties: {
    body,
    billets,
    settings,
  },
  required: ['body', 'billets', 'settings'],
  errorMessage: {
    required: {
      body: required.body,
      billets: required.billets,
      settings: required.settings,
    },
  },
};

export default shipping;
