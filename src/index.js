import './index.css';
import './font-loader';

import Phaser from 'phaser';

import constants from './config/constants';
import GameScene from './scenes/game';
import Parabomb from './scenes/game2-parabomb';
import Animus from './scenes/game3-animus';
import LiuKang from './scenes/game4-liu-kang';
import RainbowDash from './scenes/game4-rainbow-dash';
import BowserAndPeach from './scenes/game6-bowser-and-peach';


window.Phaser = Phaser;

const config = {
  type: Phaser.AUTO,
  width: constants.WIDTH,
  height: constants.HEIGHT,
  physics: {
    default: 'arcade'
  },
  scene: [
    // GameScene
    // Parabomb
    Animus
    // LiuKang
    // RainbowDash
    // BowserAndPeach
  ],
  pixelArt: true,
  antialias: false
};

const game = new Phaser.Game(config);
window.game = game;

function initialize( game ) {
  function resize() {
    let w     = window.innerWidth;
    let h     = window.innerHeight;
    let scale = Math.min(w / constants.WIDTH, h / constants.HEIGHT);

    game.canvas.setAttribute(
      'style',
      ` -webkit-transform: scale3d(${scale});
      transform: scale(${scale});
      transform-origin: top left;`
    )

    let width   = w / scale;
    let height  = h / scale;
    
    game.resize( width, height );

    game.scene.scenes.forEach(function( scene ) {
      scene.cameras.main.setViewport( 0, 0, width, height );
    });
  }

  window.addEventListener('resize', resize);

  if ( game.isBooted )  resize();
  else  game.events.once('boot', resize);
}

initialize( game );