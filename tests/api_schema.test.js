const Schema = require('../schemas');

describe('api_schema.test.js', function () {
  describe('create_admin.api_schema.test.js', function () {
    it('should validate create admin payload', function () {
      const payload = {
        name: 'Gaurav Sahitya',
        email: 'gaurav@gmail.com',
        password: 'gAuraV!2024',
        isLoggedIn: false,
      };

      expect(Schema.api.adminApiSchema.createAdmin(payload)).toBe(undefined);
      expect(typeof Schema.api.adminApiSchema.createAdmin(payload)).toBe('undefined');
    });

    it('should not validate create admin payload with invalid password', function () {
      const payload = {
        name: 'Gaurav Sahitya',
        email: 'gaurav@gmail.com',
        password: 'gAuraV2024',
        isLoggedIn: false,
      };

      const result = Schema.api.adminApiSchema.createAdmin(payload);

      expect(typeof result).toBe('object');
      expect(typeof result.message).toBe('string');
      expect(typeof result.path).toBe('object');
      expect(typeof result.type).toBe('string');
      expect(typeof result.context).toBe('object');

      expect(result).toHaveProperty('message');
      expect(result).toHaveProperty('path');
      expect(result).toHaveProperty('type');
      expect(result).toHaveProperty('context');

      expect(result.message).toContain(
        'Password must contain atleast 1 letter, 1 digit, 1 special character and must be of atleast 8 characters long and atmost 32 characters long.'
      );
    });

    it('should not validate create admin payload with invalid name', function () {
      const payload = {
        name: 'Gaurav Sah!tya',
        email: 'gaurav@gmail.com',
        password: 'gAuraV!2024',
        isLoggedIn: false,
      };

      const result = Schema.api.adminApiSchema.createAdmin(payload);

      expect(typeof result).toBe('object');
      expect(typeof result.message).toBe('string');
      expect(typeof result.path).toBe('object');
      expect(typeof result.type).toBe('string');
      expect(typeof result.context).toBe('object');

      expect(result).toHaveProperty('message');
      expect(result).toHaveProperty('path');
      expect(result).toHaveProperty('type');
      expect(result).toHaveProperty('context');

      expect(result.message).toContain('Name can contain only letters and spaces');
    });

    it('should not validate create admin payload with invalid email', function () {
      const payload = {
        name: 'Gaurav Sahitya',
        email: 'g@gmail.com',
        password: 'gAuraV!2024',
        isLoggedIn: false,
      };

      const result = Schema.api.adminApiSchema.createAdmin(payload);

      expect(typeof result).toBe('object');
      expect(typeof result.message).toBe('string');
      expect(typeof result.path).toBe('object');
      expect(typeof result.type).toBe('string');
      expect(typeof result.context).toBe('object');

      expect(result).toHaveProperty('message');
      expect(result).toHaveProperty('path');
      expect(result).toHaveProperty('type');
      expect(result).toHaveProperty('context');

      expect(result.message).toContain('Email must be in a valid format, all clients are supported');
    });

    it('should validate create admin payload without isLoggedIn key', function () {
      const payload = {
        name: 'Gaurav Sahitya',
        email: 'gaurav@gmail.com',
        password: 'gAuraV!2024',
      };

      expect(Schema.api.adminApiSchema.createAdmin(payload)).toBe(undefined);
      expect(typeof Schema.api.adminApiSchema.createAdmin(payload)).toBe('undefined');
    });

    it('should not validate create admin payload without email', function () {
      const payload = {
        name: 'Gaurav Sahitya',
        password: 'gAuraV!2024',
        isLoggedIn: false,
      };

      const result = Schema.api.adminApiSchema.createAdmin(payload);

      expect(typeof result).toBe('object');
      expect(typeof result.message).toBe('string');
      expect(typeof result.path).toBe('object');
      expect(typeof result.type).toBe('string');
      expect(typeof result.context).toBe('object');

      expect(result).toHaveProperty('message');
      expect(result).toHaveProperty('path');
      expect(result).toHaveProperty('type');
      expect(result).toHaveProperty('context');

      expect(result.message).toContain('Email is required');
    });

    it('should not validate create admin payload without name', function () {
      const payload = {
        email: 'gaurav@gmail.com',
        password: 'gAuraV!2024',
        isLoggedIn: false,
      };

      const result = Schema.api.adminApiSchema.createAdmin(payload);

      expect(typeof result).toBe('object');
      expect(typeof result.message).toBe('string');
      expect(typeof result.path).toBe('object');
      expect(typeof result.type).toBe('string');
      expect(typeof result.context).toBe('object');

      expect(result).toHaveProperty('message');
      expect(result).toHaveProperty('path');
      expect(result).toHaveProperty('type');
      expect(result).toHaveProperty('context');

      expect(result.message).toContain('Name is required');
    });

    it('should not validate create admin payload without password', function () {
      const payload = {
        name: 'Gaurav',
        email: 'gaurav@gmail.com',
        isLoggedIn: false,
      };

      const result = Schema.api.adminApiSchema.createAdmin(payload);

      expect(typeof result).toBe('object');
      expect(typeof result.message).toBe('string');
      expect(typeof result.path).toBe('object');
      expect(typeof result.type).toBe('string');
      expect(typeof result.context).toBe('object');

      expect(result).toHaveProperty('message');
      expect(result).toHaveProperty('path');
      expect(result).toHaveProperty('type');
      expect(result).toHaveProperty('context');

      expect(result.message).toContain('Password is required');
    });

    it('should not validate create admin payload incorrect password key', function () {
      const payload = {
        name: 'Gaurav',
        email: 'gaurav@gmail.com',
        pwd: 'gAuraV!2024',
        isLoggedIn: false,
      };

      const result = Schema.api.adminApiSchema.createAdmin(payload);

      expect(typeof result).toBe('object');
      expect(typeof result.message).toBe('string');
      expect(typeof result.path).toBe('object');
      expect(typeof result.type).toBe('string');
      expect(typeof result.context).toBe('object');

      expect(result).toHaveProperty('message');
      expect(result).toHaveProperty('path');
      expect(result).toHaveProperty('type');
      expect(result).toHaveProperty('context');

      expect(result.message).toContain('Password is required');
    });
  });
});
