class Cinematic extends Phaser.Scene {

    constructor() {
        super('Cinematic');
    }
    preload(){

    }
    create(){
        this.add.text(500,200, "Title Screen").setTint(0xaa00aa).setFontSize(75);
        this.add.text(200,500, "Touch anywhere to start").setTint(0xaa00aa).setFontSize(75);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('Gameplay'));
        });
    
        
    }
    
    update(){

    }
}

class Gameplay extends Phaser.Scene {

    constructor() {
        super('Gameplay');
    }
    preload(){

    }
    create(){

        this.cameras.main.setBackgroundColor('0xffffff');
        this.add.text(500,200, "Gameplay Screen").setTint(0x0000ff).setFontSize(75);
        this.add.text(500,500, "Touch to jump").setTint(0x0000ff).setFontSize(75);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('Results'));
        });
    
        
    }
    
    update(){

    }
}

class Results extends Phaser.Scene {

    constructor() {
        super('Results');
    }
    preload(){

    }
    create(){

        
        this.cameras.main.setBackgroundColor('0x3333ff');
        this.add.text(500,200, "Results Screen").setTint(0xffffff).setFontSize(75);
        this.add.text(100,500, "Touch to play another level").setTint(0xffffff).setFontSize(75);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(500, 0,0,0);
            this.time.delayedCall(500, () => this.scene.start('Gameplay'));
        });
    
        
    }
    
    update(){

    }
}

let config = {
    type: Phaser.WEBGL,
    width: 1600,
    height: 900,
    backgroundColor: 0x0,
    scene: [Cinematic,Gameplay,Results],
}

let game = new Phaser.Game(config);

