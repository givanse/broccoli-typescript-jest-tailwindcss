import Foobar from '../src/js';

test('test something', () => {
  expect(typeof Foobar.prototype.start).toBe('function');
});