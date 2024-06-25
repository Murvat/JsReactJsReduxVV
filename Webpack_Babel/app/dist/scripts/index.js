// import { render } from "./render";

// let arr = ['Monday', 'Thuesday', 'Wedbesday', 'Friday'];
// function changeArr(arr) {
//     document.querySelector('.renderRes').innerHTML = render(arr);
// };

// changeArr(arr);

// export const render = arr => arr.map(item => `<li>${item}</li>`).join('');
// let arr = ['Monday', 'Thuesday', 'Wedbesday', 'Friday'];
// export function changeArr(arr) {
//     document.querySelector('.renderRes').innerHTML = render(arr);
// };

// changeArr(arr);
document.addEventListener('DOMContentLoaded', function () {
    let arr = ['Monday', 'Tuesday', 'Wednesday', 'Friday'];
    changeArr(arr);
});

export function changeArr(arr) {
    document.querySelector('.renderRes').innerHTML = render(arr);
}

export function render(arr) {
    // Map each array element to a <li> tag and join them with a comma and space
    return arr.map(item => `<li>${item}</li>`).join(', ');
}




