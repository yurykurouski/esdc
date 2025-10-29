import { expect } from 'chai';
import { filterUsersByAge, sortUsersByName, findUserById, isEmailTaken } from '../utils/usersListUtils.js';

describe('usersListUtils', () => {
  const users = [
    { id: 1, name: 'Charlie', age: 22, email: 'charlie@example.com' },
    { id: 2, name: 'Alice', age: 30, email: 'alice@example.com' },
    { id: 3, name: 'Bob', age: 27, email: 'bob@example.com' },
  ];

  describe('filterUsersByAge', () => {
    it('returns users within the specified age range', () => {
      const result = filterUsersByAge(users, 25, 30);
      expect(result).to.deep.equal([
        { id: 2, name: 'Alice', age: 30, email: 'alice@example.com' },
        { id: 3, name: 'Bob', age: 27, email: 'bob@example.com' },
      ]);
    });

    it('throws when users is not an array', () => {
      expect(() => filterUsersByAge(null, 20, 30)).to.throw('Users must be an array');
    });
  });

  describe('sortUsersByName', () => {
    it('returns a new array sorted by user name', () => {
      const result = sortUsersByName(users);
      expect(result).to.deep.equal([
        { id: 2, name: 'Alice', age: 30, email: 'alice@example.com' },
        { id: 3, name: 'Bob', age: 27, email: 'bob@example.com' },
        { id: 1, name: 'Charlie', age: 22, email: 'charlie@example.com' },
      ]);
      expect(result).to.not.equal(users);
    });

    it('throws when users is not an array', () => {
      expect(() => sortUsersByName({})).to.throw('Users must be an array');
    });
  });

  describe('findUserById', () => {
    it('returns the matching user when found', () => {
      expect(findUserById(users, 3)).to.deep.equal({ id: 3, name: 'Bob', age: 27, email: 'bob@example.com' });
    });

    it('returns null when user is not found', () => {
      expect(findUserById(users, 99)).to.be.null;
    });

    it('throws when users is not an array', () => {
      expect(() => findUserById('not-array', 1)).to.throw('Users must be an array');
    });
  });

  describe('isEmailTaken', () => {
    it('returns true when the email exists', () => {
      expect(isEmailTaken(users, 'alice@example.com')).to.be.true;
    });

    it('returns false when the email does not exist', () => {
      expect(isEmailTaken(users, 'nobody@example.com')).to.be.false;
    });

    it('throws when users is not an array', () => {
      expect(() => isEmailTaken(undefined, 'alice@example.com')).to.throw('Users must be an array');
    });
  });
});
