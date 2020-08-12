import Character from './domain.js';

class Game {
    start() {
      console.log('game started');
    }
  }
  
  class GameSavingData {
  }
  
  function readGameSaving() {
  }
  
  function writeGameSaving() {
  }

  export const readSave = readGameSaving;
  export const writeSave = writeGameSaving;