const dwarfWorking = () => {
    document.getElementById("Elfe1").hidden = true;
    document.getElementById("Elfe2").hidden = false;
};

const dwarfStopWorking = () => {
    document.getElementById("Elfe1").hidden = false;
    document.getElementById("Elfe2").hidden = true;
    document.getElementById("TextOutput").innerHTML = '';
};

const dwarfAlreadyWorking = () => {
    document.getElementById("TextOutput").innerHTML = "The dwarf is busy!";
};

const sledIsFull = () => {
    document.getElementById("TextOutput").innerHTML = 'Sled full!';
};

const sendingGift = () => {
    document.getElementById("TextOutput").innerHTML = 'Sending Gift';
};

const giftSended = () => {
    document.getElementById("TextOutput").innerHTML = '';
};

const isHungry = () => {
    document.getElementById("TextOutput").innerHTML = 'I am hungry! Try again!';
};


const updateOutputSled = (sled) => {
    let large = 0;
    let medium = 0;
    let little = 0;
    for (let result in sled) {
        if (sled[result].weight === 5) {
            large += 1;
        } else if (sled[result].weight === 2) {
            medium += 1;
        } else if (sled[result].weight === 1) {
            little += 1;
        } else {
            console.error('Unexpected object in sled !');
        }
    };

    let output = '';
    switch (large) {
        case 0:
            break;
        case 1:
            output += large + ' big gift<br>';
            break;
        default:
            output += large + ' big gifts<br>';
            break;
    }

    switch (medium) {
        case 0:
            break;
        case 1:
            output += medium + ' medium gift<br>';
            break;
        default:
            output += medium + ' mediums gifts<br>';
            break;
    }

    switch (little) {
        case 0:
            break;
        case 1:
            output += little + ' small gift<br>';
            break;
        default:
            output += little + ' small gifts<br>';
            break;
    }

    if (output === '') {
        output = '&nbsp;';
    }

    document.getElementById("listSled").innerHTML = output;
};

export { dwarfWorking };
export { dwarfStopWorking };
export { dwarfAlreadyWorking };
export { sledIsFull };
export { sendingGift };
export { giftSended };
export { isHungry };
export { updateOutputSled };