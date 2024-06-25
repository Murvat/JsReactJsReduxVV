import { it } from 'node:test';
import { changeArr } from '../index';
import { render } from '../index';
// import { render } from './render';

// let arr = ['Monday', 'Tuesday', 'Wednesday', 'Friday'];

// it('should return li items', () => {
//     document.body.innerHTML = '<ul class="renderRes"></ul>';
//     changeArr(arr);
//     const expectedOutput = render(arr);
//     expect(document.querySelector('.renderRes').innerHTML).toEqual(expectedOutput);
// });

describe('changeArr function', () => {
    let arr;

    beforeEach(() => {
        // Set up the initial DOM element for testing
        document.body.innerHTML = '<ul class="renderRes"></ul>';
        arr = ['Monday', 'Tuesday', 'Wednesday', 'Friday'];
    });

    it('should return li items', () => {
        // Call the function to test
        changeArr(arr);

        // Expected output
        const expectedOutput = render(arr);

        // Assert the innerHTML matches the expected output
        expect(document.querySelector('.renderRes').innerHTML).toEqual(expectedOutput);
    });

});



