class sceneA extends Phaser.Scene {
    constructor() {
        super({Key:"sceneA"});
    }
    preload()
    {
        this.load.path = './assets/';
        this.load.image('logo', 'logo.png');
    }
    create()
    {
        //set background color
        this.cameras.main.setBackgroundColor(0xf6b26b);

        //create text object
        this.textObject = this.add.text(
            300,//x
            300,//y
            "Choose Your Destiny", //text
            {
                font: "italic 20px Arial",
                color: "#ffffff",
            } //style
        );
        this.textObject.scale = 0;

        this.textObject1 = this.add.text(
            310,//x
            450,//y
            "Press Any Key", //text
            {
                font: "28px Impact",
                color: "#ffffff",
            } //style
        );
        this.textObject1.alpha = 0;

        //create image object
        this.imageObject = this.add.image(
            550,//x
            250,//y
            'logo',//imagename
        )
        this.imageObject.alpha = 0;

        // Add tweens
        this.tweens.add({
            targets: this.textObject,
            scale:1,
            delay: 1500,
            duration: 1500,
            ease: 'Linear',
        });

        this.tweens.add({
            targets: this.textObject1,
            alpha:1,
            delay: 3000,
            duration: 1500,
            ease: 'Linear',
        });

        this.tweens.add({
            targets: this.imageObject,
            alpha: 1,
            duration: 1500,
            ease: 'Linear',
        });

        


    }
    update(){}
}

class sceneB extends Phaser.Scene {
    constructor() {
        super({Key:"sceneB"});
    }
    preload()
    {
        this.load.path = './assets/';
        this.load.image('background', 'background.png');
        this.load.image('gear', 'gear.png');
    }
    create()
    {
        //create image object
        this.background = this.add.image(
            0,//x
            0,//y
            'background',//imagename
        )
        //Set image anchor points
        this.background.setOrigin(0, 0);
        //set under other object
        this.background.setDepth(-1);
        
        //create image object
        this.gearObject = this.add.image(
            770,//x
            30,//y
            'gear',//imagename
        )
        this.gearObject.setScale(0.1) //resize

        //create text object
        this.textObject1 = this.add.text(
            50,//x
            400,//y
            "New Beginning", //text
            {
                font: "20px Impact",
                color: "#eeeeee",
            } //style
        );

        this.textObject2 = this.add.text(
            220,//x
            400,//y
            "Memory Retrospective", //text
            {
                font: "18px Impact",
                color: "#eeeeee",
            } //style
        );        

        this.textObject3 = this.add.text(
            450,//x
            400,//y
            "Memory Gallery", //text
            {
                font: "20px Impact",
                color: "#eeeeee",
            } //style
        );
        
        this.textObject4 = this.add.text(
            650,//x
            400,//y
            "Exit", //text
            {
                font: "20px Impact",
                color: "#eeeeee",
            } //style
        );

        this.textObject5 = this.add.text(
            5,//x
            0,//y
            "Version: 1.0", //text
            {
                font: "16px Impact",
                color: "#000000",
            } //style
        );

        this.textObject1.alpha = 0;
        this.textObject2.alpha = 0;
        this.textObject3.alpha = 0;
        this.textObject4.alpha = 0;
        
        //add triangle
        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0xeeeeee,0.7);
        this.triangle1 = this.graphics.fillTriangle(20, 420, 40, 420, 30, 400);
        this.triangle2 = this.graphics.fillTriangle(190, 420, 210, 420, 200, 400);
        this.triangle3 = this.graphics.fillTriangle(420, 420, 440, 420, 430, 400);
        this.triangle4 = this.graphics.fillTriangle(620, 420, 640, 420, 630, 400);

        this.triangle1.alpha = 0;
        this.triangle2.alpha = 0;
        this.triangle3.alpha = 0;
        this.triangle4.alpha = 0;

        this.tweens.add({
            targets: this.textObject1,
            alpha:1,
            duration: 1500,
            ease: 'Linear',
        });

        this.tweens.add({
            targets: this.triangle1,
            alpha:1,
            duration: 1500,
            ease: 'Linear',
        });

        this.tweens.add({
            targets: this.textObject2,
            alpha:1,
            delay: 1500,
            duration: 1500,
            ease: 'Linear',
        });

        this.tweens.add({
            targets: this.triangle2,
            alpha:1,
            delay: 1500,
            duration: 1500,
            ease: 'Linear',
        });        

        this.tweens.add({
            targets: this.textObject3,
            alpha:1,
            delay: 3000,
            duration: 1500,
            ease: 'Linear',
        });

        this.tweens.add({
            targets: this.triangle3,
            alpha:1,
            delay: 3000,
            duration: 1500,
            ease: 'Linear',
        });

        this.tweens.add({
            targets: this.textObject4,
            alpha:1,
            delay: 4500,
            duration: 1500,
            ease: 'Linear',
        });

        this.tweens.add({
            targets: this.triangle4,
            alpha:1,
            delay: 4500,
            duration: 1500,
            ease: 'Linear',
        });

    }
    update(){}
}

class sceneC extends Phaser.Scene {
    constructor() {
        super({Key:"sceneC"});
    }
    preload()
    {
        this.load.path = './assets/';
        this.load.image('logo', 'logo.png');
    }
    create()
    {




    }
    update(){}
}



let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: 0xffffff,
    scene: [sceneA],
}

let game = new Phaser.Game(config)