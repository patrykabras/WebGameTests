import Phaser from 'phaser'

class InputManager {
    keys: { name: string; value: any; }[];
    bindings: {};

    constructor() {
        this.keys = [
            { name: 'W', value: Phaser.Input.Keyboard.KeyCodes.W },
            { name: 'S', value: Phaser.Input.Keyboard.KeyCodes.S },
            { name: 'A', value: Phaser.Input.Keyboard.KeyCodes.A },
            { name: 'D', value: Phaser.Input.Keyboard.KeyCodes.D },
        ];
    }
    setupListeners(game) {
        this.bindings = {};
        this.keys.forEach(({ name, value }) => {
            this.bindings[name] = game.input.keyboard.addKey(value)
        })
    }
    handleUpdate() {

    }
}

const inputManagerInstance = new InputManager();

export const setupListeners = game => {
    inputManagerInstance.setupListeners(game);
}
export const handleUpdate = () => {
    inputManagerInstance.handleUpdate();
}