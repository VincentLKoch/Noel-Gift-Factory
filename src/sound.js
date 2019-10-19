var dwarfWorkingSound = new Audio('./audio/dwarfWorking.wav');

const stopPlay = (sound) => {
    sound.pause();
    sound.currentTime = 0;
}

export { stopPlay };
export { dwarfWorkingSound };