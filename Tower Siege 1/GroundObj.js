class Ground {

    constructor(x, y, width, height) {
        var ground_options = {
            isStatic: true

        }

        this.body = Bodies.rectangle(100, 200, 500, 20, ground_options);

       
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        
        
    
        
        
        
        
    }

    display() {
    
        var pos = this.body.position;
        strokeWeight(2);
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);

    }
}
    
        
        
        
        
    