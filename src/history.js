const historyObj = window.history;

historyObj.pushState({ page: 1 }, 'signUp', 'block-platform-form#/signUp');
historyObj.pushState({ page: 2 }, 'login', 'block-platform-form#/login');
historyObj.pushState({ page: 3 }, '/', 'block-platform-form#/');

export default historyObj;
