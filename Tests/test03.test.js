import descendingOrder from '../Level03/index.js';
import COLORS from './utils.js';

const test_a = () => {
    const result = descendingOrder(0);
    if (result === 0) {
        console.log(COLORS.GREEN, 'Test A passed');
        return true;
    } else {
        console.log(COLORS.RED, 'Test A failed');
        console.log('Your result', result);
        console.log('Expected result', 0);
        return false;
    }
    }

const test_b = () => {
    const result = descendingOrder(1);
    if (result === 1) {
        console.log(COLORS.GREEN, 'Test B passed');
        return true;
    } else {
        console.log(COLORS.RED, 'Test B failed');
        console.log('Your result', result);
        console.log('Expected result', 1);
        return false;
    }
    }

const test_c = () => {
    const result = descendingOrder(123456789);
    if (result === 987654321) {
        console.log(COLORS.GREEN, 'Test C passed');
        return true;
    } else {
        console.log(COLORS.RED, 'Test C failed');
        console.log('Your result', result);
        console.log('Expected result', 987654321);
        return false;
    }
    }

const test_d = () => {
    const result = descendingOrder(145263);
    if (result === 654321) {
        console.log(COLORS.GREEN, 'Test D passed');
        return true;
    } else {
        console.log(COLORS.RED, 'Test D failed');
        console.log('Your result', result);
        console.log('Expected result', 654321);
        return false;
    }
    }

const test_e = () => {
    const result = descendingOrder(1254859723);
    if (result === 9875543221) {
        console.log(COLORS.GREEN, 'Test E passed');
        return true;
    } else {
        console.log(COLORS.RED, 'Test E failed');
        console.log('Your result', result);
        console.log('Expected result', 9875543221);
        return false;
    }
    }

try {
    if (test_a() && test_b() && test_c() && test_d() && test_e())
        console.log(COLORS.GREEN, 'All tests passed successfully!');
}
catch (e) {
    console.error(COLORS.RED, 'Test failed ');
    console.error(COLORS.RED, e.message);
}
