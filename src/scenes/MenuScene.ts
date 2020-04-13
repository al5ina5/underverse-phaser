import { CST } from '../CST';

export class MenuScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.MENU
        });

    }
    preload() {}
    create() {
        this.sound.play('MENU_MUSIC', {
            loop: true
        });

        const bg = this.add.image(0, 0, 'MENU_BG').setOrigin(0);
        bg.setAlpha(0.3);
        bg.displayWidth = this.game.renderer.width;
        bg.displayHeight = this.game.renderer.height;

        const logo = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, 'LOGO')
            .setInteractive();

        logo.on('pointerdown', () => {
            this.scene.start(CST.SCENES.GAME);
            this.sound.stopAll();
        });

        // let loginButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height - 20, 'LOGIN_BTN').setOrigin(0.5, 1);
        // loginButton.setInteractive();
        // loginButton.on('pointerdown', () => {
        //     this.scene.start(CST.SCENES.GAME);
        //     this.sound.stopAll();
        // });

        // let registerButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height - 60, 'REGISTER_BTN').setOrigin(0.5, 1);
        // registerButton.setInteractive();
        // registerButton.on('pointerdown', () => {
        //     this.scene.start(CST.SCENES.GAME);
        //     this.sound.stopAll();
        // });
    }
}