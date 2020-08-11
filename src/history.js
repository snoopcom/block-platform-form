const historyObj = window.history;

historyObj.pushState({ page: 1 }, 'signUp', 'block-platform-form#/signUp');
historyObj.pushState({ page: 2 }, 'main', 'block-platform-form#/');
historyObj.pushState({ page: 3 }, 'login', 'block-platform-form#/login');

export default historyObj;
