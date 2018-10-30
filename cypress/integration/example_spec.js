import { merge } from 'lodash-es';

describe('Preprocessor Reproducer', () => {
  it('test', () => {
    expect(merge({ foo: 'bar'}, { baz: 'bar'})).to.deep.equal({
      foo: 'bar',
      baz: 'bar'
    })
  })
});