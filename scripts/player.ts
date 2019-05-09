let player = null;
let physicGroup = null;

export const createPlayer = (scene) => {
    const player = scene.add.circle(200, 200, 20, 0x666ff);
    physicGroup = scene.physics.add.group({
        angularDrag: 5,
        angularVelocity: 60,
        bounceX: 1,
        bounceY: 1,
        collideWorldBounds: true,
        dragX: 60,
        dragY: 60,
    });
    physicGroup.add(player);
}

export const updatePlayerPosition = ({ velocityX, velocityY }) => {
    physicGroup.setVelocity(velocityX, velocityY);
}