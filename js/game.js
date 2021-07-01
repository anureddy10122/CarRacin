class Game{
    constructor(){}
    getState(){
        var gameStateRef = database.ref('gamestate')
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState: state
        });
    }
    /*start(){
        if(gamestate === 0){
            player = new Player();
            player.getCount()
            form = new Form()
            form.display()
        }
    }*/
    async start(){ 
        if(gameState === 0){ 
        player = new Player();
    
        var playerCountRef = await database.ref('playercount').once("value"); 
        if(playerCountRef.exists()){
            playerCount = playerCountRef.val(); 
            player.getCount();
         }
        form = new Form() 
        form.display(); 
    } 
    }


    play(){
        form.hide()
        textSize(30)
        text("START!!!!",120,100)
        Player.getPlayerInfo();

        if(allPlayers!== undefined){
            var display_pos = 130
           
            for(var plr in allPlayers){
                if(plr === "player" + player.index)
                   // fill(Math.round(0,255),Math.round(0.95,255),Math.round(0,255))
                   fill("green")
                
                else
                    fill("black")
                
            
            display_pos+=20
            textSize(15)
            text(allPlayers[plr].name + ": "+ allPlayers[plr].distance, 120, display_pos)
        }
    }
        if(keyIsDown(UP_ARROW) && player.index!== null){
            player.distance+=50
            player.update()
        }
    }
}
    

