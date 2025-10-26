import { expect } from 'chai';
import { capitalize, reverseString, isPalindrome } from '../utils/stringUtils.js';

describe('stringUtils', () => {
    describe('capitalize', () => {
        it('capitalizes the first letter of a string', () => {
            expect(capitalize('hello')).to.equal('Hello');
        });

        it('throws when input is not a string', () => {
            expect(() => capitalize(123)).to.throw('Input must be a string');
        });
    });

    describe('reverseString', () => {
        it('reverses the provided string', () => {
            expect(reverseString('abc')).to.equal('cba');
        });

        it('throws when input is not a string', () => {
            expect(() => reverseString({})).to.throw('Input must be a string');
        });
    });

    describe('isPalindrome', () => {
        it('returns true for palindromes', () => {
            expect(isPalindrome('level')).to.be.true;
        });

        it('returns false for non-palindromes', () => {
            expect(isPalindrome('test')).to.be.false;
        });

        it('throws when input is not a string', () => {
            expect(() => isPalindrome([])).to.throw('Input must be a string');
        });
    });
});
