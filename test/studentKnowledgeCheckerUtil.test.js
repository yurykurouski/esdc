import { expect } from 'chai';
import { checkStudentKnowledge } from '../utils/studentKnowledgeCheckerUtil.js';

describe('studentKnowledgeCheckerUtil', () => {
  it('returns true when student answers match the correct answers', () => {
    const studentAnswers = {
      question1: 'A',
      question2: 'B',
      question3: 'C',
    };
    const correctAnswers = {
      question1: 'A',
      question2: 'B',
      question3: 'C',
    };
    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.true;
  });

  it('returns true when both answer sets are empty', () => {
    expect(checkStudentKnowledge({}, {})).to.be.true;
  });

  it('returns false when the number of answers does not match', () => {
    const studentAnswers = {
      question1: 'A',
      question2: 'B',
    };
    const correctAnswers = {
      question1: 'A',
      question2: 'B',
      question3: 'C',
    };
    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
  });

  it('returns false when any answer is incorrect', () => {
    const studentAnswers = {
      question1: 'A',
      question2: 'C',
    };
    const correctAnswers = {
      question1: 'A',
      question2: 'B',
    };
    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
  });

  it('returns false when answer keys are the same but in different order', () => {
    const studentAnswers = {
      question1: 'A',
      question2: 'B',
    };
    const correctAnswers = {};
    correctAnswers.question2 = 'B';
    correctAnswers.question1 = 'A';

    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
  });

});
