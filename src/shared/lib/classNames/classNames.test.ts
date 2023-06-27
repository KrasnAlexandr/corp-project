import { classNames } from './classNames';

describe('classNames', () => {
  test('test', () => {
    expect(classNames('someClass', {}, [])).toBe('someClass');
    expect(classNames(
      'main-class',
      { mod1: true, mod2: false },
      ['additional-class-1', 'additional-class-2'],
    ))
      .toBe('main-class additional-class-1 additional-class-2 mod1');
    expect(classNames(
      'main-class',
      {},
      ['additional-class-1', 'additional-class-2'],
    ))
      .toBe('main-class additional-class-1 additional-class-2');
  });
});
