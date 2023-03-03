import String from '../Level04/index.js';
import COLORS from './utils.js';

const camelCase = String.prototype.camelCase;

const test_a = () => {
    const result = camelCase.call('hello world');
    if (result === 'helloWorld') {
        console.log(COLORS.GREEN, 'Test A passed');
        return true;
    } else {
        console.log(COLORS.RED, 'Test A failed');
        console.log('Your result', result);
        console.log('Expected result', 'helloWorld');
        return false;
    }
}

const test_b = () => {
    const result = camelCase.call('camel case method');
    if (result === 'camelCaseMethod') {
        console.log(COLORS.GREEN, 'Test B passed');
        return true;
    } else {
        console.log(COLORS.RED, 'Test B failed');
        console.log('Your result', result);
        console.log('Expected result', 'camelCaseMethod');
        return false;
    }
}

const test_c = () => {
    const result = camelCase.call('say hello ');
    if (result === 'sayHello') {
        console.log(COLORS.GREEN, 'Test C passed');
        return true;
    } else {
        console.log(COLORS.RED, 'Test C failed');
        console.log('Your result', result);
        console.log('Expected result', 'sayHello');
        return false;
    }
}

const test_d = () => {
    const result = camelCase.call(' camel case word');
    if (result === 'camelCaseWord') {
        console.log(COLORS.GREEN, 'Test D passed');
        return true;
    } else {
        console.log(COLORS.RED, 'Test D failed');
        console.log('Your result', result);
        console.log('Expected result', 'camelCaseWord');
        return false;
    }
}

const test_e = () => {
    const result = camelCase.call('');
    if (result === '') {
        console.log(COLORS.GREEN, 'Test E passed');
        return true;
    } else {
        console.log(COLORS.RED, 'Test E failed');
        console.log('Your result', result);
        console.log('Expected result', '');
        return false;
    }
}

const test_f = () => {
    const result = camelCase.call('hello');
    if (result === 'hello') {
        console.log(COLORS.GREEN, 'Test F passed');
        return true;
    } else {
        console.log(COLORS.RED, 'Test F failed');
        console.log('Your result', result);
        console.log('Expected result', 'hello');
        return false;
    }
}

try
{
    if (test_a() && test_b() && test_c() && test_d() && test_e() && test_f()) {
        console.log(COLORS.GREEN, 'All tests passed');
    }
}
    catch (e) {
    console.error(COLORS.RED, 'Test failed ');
    console.error(COLORS.RED, e.message);
}