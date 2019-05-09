import './../style/main.scss'
import Phaser from 'phaser'
import create from './createSceen'
import update from './update'

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
