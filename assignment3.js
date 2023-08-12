
function sortMaker(arr) {
    if (!isValidInput(arr)) {
        return "Invalid input";
    }

    if (arr[0] < arr[1]) {
        [arr[0], arr[1]] = [arr[1], arr[0]];
    }

    return arr[0] === arr[1] ? "equal" : arr;
}

function isValidInput(arr) {
    if (!Array.isArray(arr) || arr.length !== 2) {
        return false;
    }

    if (typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
        return false;
    }

    if (arr[0] < 0 || arr[1] < 0) {
        return false;
    }

    return true;
}

