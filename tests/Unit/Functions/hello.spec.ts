import chai from 'chai';
import chaiString from 'chai-string';
import fc from 'fast-check';
import { hello } from '../../../src/Functions/hello';

chai.use(chaiString);
const { expect } = chai;

describe('#hello()', function() {
  it('should return "hello, {name}!" when called with a string', async function() {
    fc.assert(
      fc.property(fc.string(), (name) => {
        const message: string = hello(name);
        expect(message).to.be.equal(`hello, ${name}!`);
      })
    );
  });

  it('should return "hello, world!" when called with nothing', async function() {
    const message: string = hello();
    expect(message).to.be.equal('hello, world!');
  });
});
