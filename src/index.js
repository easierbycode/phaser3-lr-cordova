import './index.css';
import './font-loader';

import Phaser from 'phaser';

import constants from './config/constants';
import GameScene from './scenes/game';


window.Phaser = Phaser;

const config = {
  type: Phaser.AUTO,
  width: constants.WIDTH,
  height: constants.HEIGHT,
  scene: [
    GameScene
  ],
  pixelArt: true,
  antialias: false
};

const game = new Phaser.Game(config);
window.game = game;
