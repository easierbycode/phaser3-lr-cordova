import constants from '../config/constants';
import Phaser from 'phaser';
import blood from '../assets/blood.png';
import bone from '../assets/bone.png';
import explosion from '../assets/explosion.png';
import explosionJSON from '../assets/explosion.json';
import monkey from '../assets/monkey.png';
import Monkey from '../sprites/monkey';
import muscle from '../assets/muscle.png';


export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' });
  }
  preload() {
      this.load.atlas('explosion', explosion, explosionJSON);
      this.load.image('monkey', monkey);
      this.load.spritesheet('blood', blood, {
        frameWidth  : 88,
        frameHeight : 71,
        endFrame    : 9
      });
      this.load.spritesheet('bone', bone, {
        frameWidth  : 18,
        frameHeight : 18
      });
      this.load.spritesheet('muscle', muscle, {
        frameWidth  : 23,
        frameHeight : 22
      });
  }
  create() {
    this.monkey = new Monkey({
        scene: this,
        x: constants.WIDTH/2,
        y: constants.HEIGHT/2
    });
  }
  update() {}
  render() {}
}