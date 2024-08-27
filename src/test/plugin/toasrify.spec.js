import Toastify from 'toastify-js';
import ToastPlugin from '@/plugins/toastify.js';
jest.mock('toastify-js/src/toastify.css', () => ({}));
jest.mock('toastify-js', () => {
  return jest.fn().mockImplementation(() => {
    return { showToast: jest.fn() };
  });
});

describe('Toast Plugin', () => {
  let Vue;

  beforeEach(() => {
    Vue = {
      prototype: {}
    };
    jest.clearAllMocks();
  });

  it('installs the plugin correctly', () => {
    ToastPlugin.install(Vue);
    expect(Vue.prototype.$toast).toBeDefined();
    expect(typeof Vue.prototype.$toast).toBe('function');
  });

  it('calls Toastify with correct parameters for success toast', () => {
    ToastPlugin.install(Vue);
    Vue.prototype.$toast('Success message', 'success');

    expect(Toastify).toHaveBeenCalledWith({
      text: 'Success message',
      duration: 3500,
      close: true,
      gravity: 'top',
      position: 'right',
      backgroundColor: '#4caf50',
    });
  });

  it('calls Toastify with correct parameters for danger toast', () => {
    ToastPlugin.install(Vue);
    Vue.prototype.$toast('Error message', 'danger');

    expect(Toastify).toHaveBeenCalledWith({
      text: 'Error message',
      duration: 3500,
      close: true,
      gravity: 'top',
      position: 'right',
      backgroundColor: '#f44336',
    });
  });

  it('calls showToast method after Toastify initialization', () => {
    ToastPlugin.install(Vue);
    const showToastMock = jest.fn();
    Toastify.mockImplementation(() => ({ showToast: showToastMock }));

    Vue.prototype.$toast('Test message', 'success');

    expect(showToastMock).toHaveBeenCalled();
  });
});