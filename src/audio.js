const dwarfWorkingSound = Audio("./audio/DwarfWorking.mp3");

const stopPlay = (sound) => {
    sound.pause()
    sound.currentTime = 0;
}


export default { stopPlay, dwarfWorkingSound }