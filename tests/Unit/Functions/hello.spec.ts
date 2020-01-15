import chai from 'chai';
import chaiString from 'chai-string';
import { hello } from '../../../src/Functions/hello';

chai.use(chaiString);
const { expect } = chai;

describe('#hello()', function() {
  it('should return "hello, simon!" when called with simon', async function() {
    const message: string = hello('simon');

    expect(message).to.be.equal('hello, simon!');
  });

  it('should return "hello, david!" when called with david', async function() {
    const message: string = hello('david');

    expect(message).to.be.equal('hello, david!');
  });

  it('should return "hello, world!" when called with nothing', async function() {
    const message: string = hello();

    expect(message).to.be.equal('hello, world!');
  });
});
