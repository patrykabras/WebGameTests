import Phaser from 'phaser'
import { updatePlayerPosition } from './player';

class InputManager {
    keys: { name: string; value: any; velocityX: number; velocityY: number }[];
    bindings: {};
    SPEED: number = 60;
    constructor() {
        this.keys = [
            { name: 'W', value: Phaser.Input.Keyboard.KeyCodes.W, velocityX: 0, velocityY: -this.SPEED },
            { name: 'S', value: Phaser.Input.Keyboard.KeyCodes.S, velocityX: 0, velocityY: this.SPEED },
            { name: 'A', value: Phaser.Input.Keyboard.KeyCodes.A, velocityX: -this.SPEED, velocityY: 0 },
            { name: 'D', value: Phaser.Input.Keyboard.KeyCodes.D, velocityX: this.SPEED, velocityY: 0 },
        ];
    }
    setupListeners(game) {
        this.bindings = {};
        this.keys.forEach(({ name, value }) => {
            this.bindings[name] = game.input.keyboard.addKey(value)
        })
    }
    handleUpdate() {
        Object.keys(this.bindings).forEach(key => {
            if (this.bindings[key].isDown) {
                // console.log(key, this.bindings[key].isDown);
                let currentKey = this.keys.find(({ name }) => name === key);
                updatePlayerPosition(currentKey);
            }
        })
    }
}

const inputManagerInstance = new InputManager();

export const setupListeners = game => {
    inputManagerInstance.setupListeners(game);
}
export const handleUpdate = () => {
    inputManagerInstance.handleUpdate();
}