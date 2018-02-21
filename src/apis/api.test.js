import {checkIt} from './api';

test('Test valid text', () => {
    expect.assertions(1);
    return checkIt('@This text is valid').then(data => expect(data).toBe(undefined));
});

test('Test invalid text', () => {
    expect.assertions(1);
    return checkIt('This text is invalid').catch(e => expect(e).toBeInstanceOf(Error));
});