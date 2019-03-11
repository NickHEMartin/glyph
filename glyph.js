/* change default application behavior */
var defaultMode = "image";
var defaultSize = 32;
var defaultDisplay = "glyph"
var defaultEmoji = 156;
var backgroundColor = "hsb(0, 0%, 94%)";


function Glyph() {
  this.draw = function(values, size) {
    angleMode(DEGREES);

    //I have added these ellipses to have a background color to the forground balls to show the difference between lightness
    //and saturation which stands out quite well in the color gradient tab. The inner circle shows more brightness as it gets
    //more white and the outer circle shows the gradient alot better than the inner circle as the color range is limited.
    let color3 = map(values[2], 0, 100, 0, 300);
    let color1 = map(values[1], 0, 120, 10, 100);
    let s2 = size/2;
    fill(color1 + 50);
    noStroke();
    ellipse(s2, s2, size);
    stroke(1);
    strokeUniform(color1);
    fill(color3);
    ellipse(s2, s2, size/1.2);

    //This is where all the calculations for the variables happen. I chose the names sX because it originally delt with size
    //and I decided to keep it going instead of making new variable names.
    let s3 = map(values[2], 0, 100, size/100, size/5);
    let s4 = map(values[2], 0, 100, size/15, size/7.5);
    let s5 = map(values[1], 0, 300, size/250, size/10);
    let s6 = map(values[1], 0, 400, size/1000, size/7.5);
    
    let color2 = map(values[1], 0, 100, 10, 90);
    fillUniform(color2);
    strokeUniform(color2);
    let desv = size/100;

    //The code that controlls the smaller balls which was the main focus of the project originally and is in the sketches.
    //used push and pop to seperate the code so there were no interferances in future code.
    push();
    translate(s2,s2);
    rotate(values[0]);
    let y_shift = map(values[1], 0, 250, size/7, s2/1.7);
    ellipse(0, y_shift, s3); 
    ellipse((desv + size/10) + s5*5, size/7.2 + s6, s3);
    ellipse((-desv - size/10) - s5*5, size/7.2 + s6, s3);
    ellipse((desv + size/20) + s5, (y_shift + size/10) + s5*2, s3);
    ellipse((-desv - size/20) - s5, (y_shift + size/10) + s5*2, s3); 
    pop();

    translate(s2,s2); 

    //The code for the semicircle of balls. I chose to keep it simple instead of animating it because I ran into some small
    //issues on the browser and didnt know how to fix them, but I added an outer rim to take the animations place.
    push();
    rotate(values[0]);
    fill(color1);
    ellipse(-size/2.5, -size/20, s4);
    ellipse(-size/4.8, -size/20, s4);
    ellipse(size/400, -size/20, s4);
    ellipse(size/2.5, -size/20, s4);
    ellipse(size/4.8, -size/20, s4);
    ellipse(-size/3.2, -size/5, s4);
    ellipse(-size/10, -size/5, s4);
    ellipse(size/3.2, -size/5, s4);
    ellipse(size/10, -size/5, s4);
    ellipse(-size/4.8, -size/2.8, s4);
    ellipse(size/400, -size/2.8, s4);
    ellipse(size/4.8, -size/2.8, s4);
    pop();
    
    
  } 

}
