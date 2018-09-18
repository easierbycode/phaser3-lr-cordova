import constants from '../config/constants';
import Phaser from 'phaser';


export default class Monkey extends Phaser.Physics.Arcade.Sprite {
    constructor({ scene, x, y }) {
        super(scene, x, y, 'monkey');

        this.setScale( 6 );

        // bloodAnimation
        scene.anims.create({
            frameRate   : 20,
            frames      : scene.anims.generateFrameNumbers('blood', {
                start : 0,
                end   : 9,
                first : 0
            }),
            hideOnComplete  : true,
            key         : 'bloodAnimation',
            repeat      : 0
        });

        let bone      = scene.add.particles('bone');

        let bones     = bone.createEmitter({
            frame: [0,1,2,3,4,5,6,7],
            speed: 750,
            on: false
        });

        bones.startFollow( this );

        let muscle      = scene.add.particles('muscle');

        let muscles     = muscle.createEmitter({
            frame: [0,1,2,3,4,5,6,7],
            speed: 1500,
            on: false
        });

        muscles.startFollow( this );
        
        let explosion   = scene.add.particles('explosion');

        let emitter     = explosion.createEmitter({
            frame       : 'muzzleflash2',
            lifespan    : 200,
            scale       : { start: 4, end: 0 },
            rotate      : { start: 0, end: 180 },
            on          : false
        });

        emitter.startFollow( this );

        scene.time.delayedCall(
            1975,
            () => {
                this.alpha  = 0;
                bones.explode( 16 )
                scene.cameras.main.shake( 500, 0.01 );
            }
        );
        
        scene.time.delayedCall(
            2000,
            () => {
                emitter.explode( 1 );

                let blood   = scene.add.sprite( x, y, 'blood' )
                    .setScale( 2.5 )
                    .play( 'bloodAnimation' );

                muscles.explode( 60 );
            }
        )

        scene.time.delayedCall( 2025, () => muscles.explode( 32 ) );

        scene.add.existing( this );
    }
}