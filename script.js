class sceneA extends Phaser.Scene {
    constructor() {
        super("sceneA");
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

        this.input.once('pointerdown', () =>
        {
            //fade out
            this.cameras.main.fade(1000);
            
            //once fadeout complete go to next sceneB //ask by chatgpt
            this.cameras.main.once('camerafadeoutcomplete', () =>
            {
                this.scene.start("sceneB");
            },this);

        }, this);


    }
    update(){
        
    }
}

class sceneB extends Phaser.Scene {
    constructor() {
        super("sceneB");
    }
    preload()
    {
        this.load.path = './assets/';
        this.load.image('background', 'background.png');
        this.load.image('gear', 'gear.png');
    }
    create()
    {
        //fade in
        this.cameras.main.fadeIn(1000);

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
            delay: 1000,
            duration: 1500,
            ease: 'Linear',
        });

        this.tweens.add({
            targets: this.triangle1,
            alpha:1,
            delay: 1000,
            duration: 1500,
            ease: 'Linear',
        });

        this.tweens.add({
            targets: this.textObject2,
            alpha:1,
            delay: 2500,
            duration: 1500,
            ease: 'Linear',
        });

        this.tweens.add({
            targets: this.triangle2,
            alpha:1,
            delay: 2500,
            duration: 1500,
            ease: 'Linear',
        });        

        this.tweens.add({
            targets: this.textObject3,
            alpha:1,
            delay: 4000,
            duration: 1500,
            ease: 'Linear',
        });

        this.tweens.add({
            targets: this.triangle3,
            alpha:1,
            delay: 4000,
            duration: 1500,
            ease: 'Linear',
        });

        this.tweens.add({
            targets: this.textObject4,
            alpha:1,
            delay: 5500,
            duration: 1500,
            ease: 'Linear',
        });

        this.tweens.add({
            targets: this.triangle4,
            alpha:1,
            delay: 5500,
            duration: 1500,
            ease: 'Linear',
        });
        

        //Sliding scene transition
        //This method comes from samme https://phaser.discourse.group/t/sliding-scene-transition/9031/2
        var cam = this.cameras.main;
        var targetScene = this.scene.get("sceneC"); // sleeping
        var targetCam = targetScene.cameras.main;
        var defaultWidth = this.cameras.default.width;

        this.input.once('pointerdown', () =>
        {
            this.scene.transition({
                target: "sceneC",  
                duration: 500,   
                sleep: true,      
                allowInput: false, 
                onUpdate: function (progress) {
                    const t = Phaser.Math.Easing.Quadratic.InOut(progress);

                    cam.setViewport(
                        t * defaultWidth,
                        0,
                        (1 - t) * defaultWidth,
                        cam.height
                    );

                    targetCam.setViewport(
                        0,
                        0,
                        t * defaultWidth,
                        targetCam.height
                    );

                    targetCam.setScroll((1 - t) * defaultWidth, 0);

                },
              });
        }, this);

    }
    update(){}
}

class sceneC extends Phaser.Scene {
    constructor() {
        super("sceneC");
    }
    preload()
    {
        
    }
    create()
    {
        this.cameras.main.setBounds(0, 0, this.width, this.height);
        this.cameras.main.setScroll(-this.width, 0);

        this.textObject1 = this.add.text(
            350,//x
            550,//y
            "Loading...", //text
            {
                font: "20px Arial",
                color: "#434343",
            } //style
        );

        this.textObject2 = this.add.text(
            -500,//x
            200,//y
            "There should be a short plot introduction here...\n\nbut I haven't thought about it yet.", //text
            {
                font: "20px Arial",
                color: "#434343",
            } //style
        );


        this.tweens.add({
            targets: this.textObject1,
            alpha:{from: 0, to: 1},
            duration: 1500,
            ease: 'Linear',
        });

        this.tweens.add({
            targets: this.textObject1,
            alpha:{from: 1, to: 0},
            delay: 1500,
            duration: 1500,
            ease: 'Linear',
        });

        this.tweens.add({
            targets: this.textObject2,
            x:200,
            y:200,
            delay: 3000,
            duration: 1000,
            ease: 'Linear',
        });


    }
    update(){}
}



let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: 0xeeeeee,
    scene: [ sceneA, sceneB, sceneC ]
}

let game = new Phaser.Game(config)