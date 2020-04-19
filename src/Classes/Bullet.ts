import { Physics } from 'phaser'

export class Bullet extends Physics.Arcade.Sprite {
    goToX: number
    goToY: number
    weapon: Physics.Arcade.Sprite
    constructor(scene: Phaser.Scene, weapon: Physics.Arcade.Sprite, x:number, y:number, texture: string) {
        super(scene, weapon.x, weapon.y, texture) 

        this.goToX = x
        this.goToY = y
        this.weapon = weapon

        this.scene = scene

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, false);

        this.setScale(0.1)
        var angle = Phaser.Math.Angle.Between(this.x, this.y, this.goToX, this.goToY)
        console.log(angle)

        this.setDrag(0, 0)
        this.scene.physics.moveTo(this, this.goToX, this.goToY, 1000)
        
        setTimeout(() => {
            this.destroy()
        }, 1500)

        this.scene.physics.add.collider(this.scene.mobs, this)
    }

    preUpdate() {
        this.setDepth(this.y + this.height)
    }
}