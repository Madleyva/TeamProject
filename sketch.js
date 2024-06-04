let clocks = [];

function setup() {
    createCanvas(800, 1200);
    textAlign(CENTER, CENTER);
    textSize(60);
   
    let names = [
        'LOS ANGELES PST', //-8
        'Central USA', //-6
        'Bolivia', //-4
        'Greenland', //-2
        'Greenwich England', //0
        'South Africa', //+2
        'Oman', //+4
        'India', //+6
        'China/Australia' //+8
    ];


    for (let i = 0; i < 9; i++) { //The code will be executed 9 times, each one for each ellipse 
        
        // Adjust the positions for your specific layout
        let x = 150 + (i % 3) * 250; //horizontal offset for each column
        let y = 350 + Math.floor(i / 3) * 300; //vertical offset for each column
        clocks.push(new Clock(x, y, names[i])); 
    }

}

function draw() {
    background('#E24672');

    for (let clock of clocks) {  // To update and display clocks 
        clock.update();
        clock.display();
    }
    //Text 
    fill('white');
    text('World Time Zones', width / 2, 150);

    // Group Project - Eli Fenix, Maddy Leyva, Erin Lee.
}

class Clock {
    constructor(x, y, name) {
        this.x = x; // x position of the clock
        this.y = y; // Y position of the clock
        this.name = name; // Name of each clock
    }
  
    update() {
        // Update clock logic if needed
    }
  
    display() {
        // The ellipses
        fill(51);
        noStroke();
        ellipse(this.x, this.y, 200, 200); 

        //names of each time zone 
        fill('white');
        textSize(16);
        text(this.name, this.x, this.y - 120);

        //To get the current time 
        let s = second();
        let m = minute();
        let h = hour();

        //The calculated angles for the clock hands 
        //The HALF_PI is creating lines that are angled 
        //The TWO_PI is creating a single line that is in the center 
        let secondAngle = map(s, 0, 60, 0, TWO_PI) - HALF_PI; 
        let minuteAngle = map(m, 0, 60, 0, TWO_PI) - HALF_PI;
        let hourAngle = map(h % 12, 0, 12, 0, TWO_PI) - HALF_PI;
        
     
        //The second hand 
        stroke('red'); //color of the pointer
        strokeWeight(2);
        line(this.x, this.y, this.x + cos(secondAngle) * 75, this.y + sin(secondAngle) * 75);
   
        //The minute hand 
        stroke(255); //color of the pointer
        strokeWeight(4.5);
        line(this.x, this.y, this.x + cos(minuteAngle) * 60, this.y + sin(minuteAngle) * 60);
        
        //The hour hand 
        stroke(255); //the color of the pointer
        strokeWeight(6);
        line(this.x, this.y, this.x + cos(hourAngle) * 50, this.y + sin(hourAngle) * 50);
    }
}
