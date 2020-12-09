class Form{
    constructor(){  
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h3");
    }

    hidden(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){
        var title = createElement("h2");
        title.html("Multiplayer Car Racing");
        title.position(displayWidth/2-10, 20);
        this.input.position(displayWidth/2-20, displayHeight/2-30);
        this.button.position(displayWidth/2+20, displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth/2-70, displayHeight/4);
        })
    }
}