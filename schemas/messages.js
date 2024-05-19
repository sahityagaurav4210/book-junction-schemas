const Messages = Object.freeze({
  db: {
    admin_db: {
      name: {
        'any.required': 'Name is required',
        'string.pattern.base': 'Name can contain only letters and spaces',
        'string.base': 'Name must be a string',
      },
      email: {
        'any.required': 'Email is required',
        'string.pattern.base': 'Email must be in a valid format, all clients are supported',
        'string.base': 'Email must be a string',
      },
      password: {
        'any.required': 'Password is required',
        'string.pattern.base':
          'Password must contain atleast 1 letter, 1 digit, 1 special character and must be of atleast 8 characters long and atmost 32 characters long.',
        'string.base': 'Password must be a string',
      },
      isLoggedIn: {
        'any.required': 'Login status is required',
        'boolean.base': 'Login status be a boolean',
      },
    },
  },
});

module.exports = Messages;
