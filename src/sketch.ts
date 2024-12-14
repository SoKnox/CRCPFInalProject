import p5 from 'p5';

// Abstract class for cat parts
abstract class CatPart {
    protected p5: p5;

    constructor(p5: p5) {
        this.p5 = p5;
    }

    abstract draw(x: number, y: number, bodyColor?: p5.Color, bodyBrightness?: number): void;
}

// Bow class - Maria
class Bow extends CatPart {
    draw(x: number, y: number): void {
        const bowColor = this.p5.color( // Generate random color for bows
            this.p5.random(100, 255), // Random red
            this.p5.random(100, 255), // Random green
            this.p5.random(100, 255)  // Random blue
        );

        this.p5.fill(bowColor);
        this.p5.stroke(0); // Black outline
        this.p5.strokeWeight(1); // Outline thickness

        // Adjust size and proportions for the bow loops
        const loopWidth = 60;
        const loopHeight = 40;
        const knotSize = 30;

        // Draw left loop of bow
        this.p5.ellipse(x - 40, y - 150, loopWidth, loopHeight);

        // Draw right loop of bow
        this.p5.ellipse(x + 40, y - 150, loopWidth, loopHeight);

        // Draw center knot
        this.p5.ellipse(x, y - 150, knotSize, knotSize);
    }
}

// Feet class - Maria
class Feet extends CatPart {
    draw(x: number, y: number): void {
        const pawOutlineColor = this.p5.color(0); // Black color for the outline
        const pawMainColor = this.p5.color(150, 150, 150); // Gray color for the main paw
        const pawPadColor = this.p5.color(200, 200, 200); // Light gray color for the pads

        // This ensures that the feet are placed relative to the body's bottom
        const bodyBottomY = y + 120;  // (y position)
        const footOffset = 50;  // The distance between the feet

        // This draws a single paw
        const drawPaw = (px: number, py: number) => {
            this.p5.noStroke();
            this.p5.fill(pawMainColor);

            // Main paw shape
            this.p5.beginShape();
            this.p5.vertex(px, py);
            this.p5.bezierVertex(px - 20, py - 30, px - 30, py - 20, px - 30, py);
            this.p5.bezierVertex(px - 30, py + 20, px - 20, py + 30, px, py + 30);
            this.p5.bezierVertex(px + 20, py + 30, px + 30, py + 20, px + 30, py);
            this.p5.bezierVertex(px + 30, py - 20, px + 20, py - 30, px, py);
            this.p5.endShape(this.p5.CLOSE);

            // Paw pads
            this.p5.fill(pawPadColor);
            this.p5.ellipse(px - 15, py - 10, 15, 20); // Top left pad
            this.p5.ellipse(px + 15, py - 10, 15, 20); // Top right pad
            this.p5.ellipse(px - 5, py + 5, 15, 20); // Middle left pad
            this.p5.ellipse(px + 5, py + 5, 15, 20); // Middle right pad
            this.p5.ellipse(px, py + 15, 20, 15); // Bottom pad

            // Outline
            this.p5.stroke(pawOutlineColor);
            this.p5.strokeWeight(2);
            this.p5.noFill();
            this.p5.beginShape();
            this.p5.vertex(px, py);
            this.p5.bezierVertex(px - 20, py - 30, px - 30, py - 20, px - 30, py);
            this.p5.bezierVertex(px - 30, py + 20, px - 20, py + 30, px, py + 30);
            this.p5.bezierVertex(px + 20, py + 30, px + 30, py + 20, px + 30, py);
            this.p5.bezierVertex(px + 30, py - 20, px + 20, py - 30, px, py);
            this.p5.endShape(this.p5.CLOSE);
        };

        // Places feet below the body
        drawPaw(x - footOffset, bodyBottomY);  // Draw left foot
        drawPaw(x + footOffset, bodyBottomY);  // Draw right foot
    }
}

// Ears class - Maria
class Ears extends CatPart {
    private earShapes: { points: [number, number][] }[] = [
        { points: [[0, -30], [-20, 30], [20, 30]] },
        { points: [[0, -35], [-25, 5], [-15, 35], [15, 35], [25, 5]] },
        { points: [[0, -40], [-15, 20], [15, 20]] }
    ];

    draw(x: number, y: number, bodyColor: p5.Color): void {
        const earShape = this.p5.random(this.earShapes);
        this.p5.fill(bodyColor);

        // Left ear
        this.p5.beginShape();
        earShape.points.forEach(([px, py]: [number, number]) => {
            this.p5.vertex(x - 70 + px * 3, y - 140 + py * 3);
        });
        this.p5.endShape(this.p5.CLOSE);

        // Right ear
        this.p5.beginShape();
        earShape.points.forEach(([px, py]: [number, number]) => {
            this.p5.vertex(x + 70 + px * 3, y - 140 + py * 3);
        });
        this.p5.endShape(this.p5.CLOSE);
    }
}

// Eyes class - Sophie
class Eyes extends CatPart {
    private eyeColors: p5.Color[] = [
        this.p5.color(0, 0, this.p5.random(150, 255)), // Blue
        this.p5.color(0, this.p5.random(150, 255), 0), // Green
        this.p5.color(this.p5.random(150, 255), this.p5.random(150, 255), 0), // Yellow
        this.p5.color(255, 255, 255), // White
        this.p5.color(this.p5.random(150, 255), 0, 0), // Red
        this.p5.color(this.p5.random(150, 255), 0, this.p5.random(150, 255)) // Magenta
    ];

    private pupilShapes: { type: string, width: number, height: number, points?: number }[] = [
        { type: 'ellipse', width: 50, height: 70 }, // Normal oval
        { type: 'ellipse', width: 30, height: 90 }, // Thin oval
        { type: 'ellipse', width: 80, height: 80 }, // Big pupils like puppy dog eyes
        { type: 'triangle', width: 50, height: 70 }, // Pointed vertices
        { type: 'rectangle', width: 40, height: 70 }, // Rectangular pupils
        { type: 'star', width: 50, height: 70, points: 5 }, // Star-shaped pupils
        { type: 'polygon', width: 50, height: 70, points: 6 } // Hexagonal pupils
    ];

    draw(x: number, y: number): void {
        const scleraColor = this.p5.random(this.eyeColors);
        this.p5.fill(scleraColor);

        // Sclera
        this.p5.ellipse(x - 80, y - 40, 100, 140); // Left eye
        this.p5.ellipse(x + 80, y - 40, 100, 140); // Right eye

        // Pupils
        this.p5.fill(0);
        const pupilShape = this.p5.random(this.pupilShapes);

        if (pupilShape.type === 'ellipse') {
            this.p5.ellipse(x - 80, y - 40, pupilShape.width, pupilShape.height);
            this.p5.ellipse(x + 80, y - 40, pupilShape.width, pupilShape.height);
        } else if (pupilShape.type === 'triangle') {
            this.p5.triangle(
                x - 80, y - 40 - pupilShape.height / 2,
                x - 80 - pupilShape.width / 2, y - 40 + pupilShape.height / 2,
                x - 80 + pupilShape.width / 2, y - 40 + pupilShape.height / 2
            );
            this.p5.triangle(
                x + 80, y - 40 - pupilShape.height / 2,
                x + 80 - pupilShape.width / 2, y - 40 + pupilShape.height / 2,
                x + 80 + pupilShape.width / 2, y - 40 + pupilShape.height / 2
            );
        } else if (pupilShape.type === 'rectangle') {
            this.p5.rectMode(this.p5.CENTER);
            this.p5.rect(x - 80, y - 40, pupilShape.width, pupilShape.height);
            this.p5.rect(x + 80, y - 40, pupilShape.width, pupilShape.height);
        } else if (pupilShape.type === 'star') {
            this.drawStar(x - 80, y - 40, pupilShape.width / 2, pupilShape.height / 2, pupilShape.points || 5);
            this.drawStar(x + 80, y - 40, pupilShape.width / 2, pupilShape.height / 2, pupilShape.points || 5);
        } else if (pupilShape.type === 'polygon') {
            this.drawPolygon(x - 80, y - 40, pupilShape.width / 2, pupilShape.points || 6);
            this.drawPolygon(x + 80, y - 40, pupilShape.width / 2, pupilShape.points || 6);
        }
    }

    private drawStar(x: number, y: number, radius1: number, radius2: number, points: number): void {
        const angle = this.p5.TWO_PI / points;
        const halfAngle = angle / 2.0;
        this.p5.beginShape();
        for (let a = 0; a < this.p5.TWO_PI; a += angle) {
            let sx = x + this.p5.cos(a) * radius2;
            let sy = y + this.p5.sin(a) * radius2;
            this.p5.vertex(sx, sy);
            sx = x + this.p5.cos(a + halfAngle) * radius1;
            sy = y + this.p5.sin(a + halfAngle) * radius1;
            this.p5.vertex(sx, sy);
        }
        this.p5.endShape(this.p5.CLOSE);
    }

    private drawPolygon(x: number, y: number, radius: number, points: number): void {
        const angle = this.p5.TWO_PI / points;
        this.p5.beginShape();
        for (let a = 0; a < this.p5.TWO_PI; a += angle) {
            const sx = x + this.p5.cos(a) * radius;
            const sy = y + this.p5.sin(a) * radius;
            this.p5.vertex(sx, sy);
        }
        this.p5.endShape(this.p5.CLOSE);
    }
}

// Body class - Sophie
class Body extends CatPart {
    private bodyShapes: { width: number, height: number }[] = [
        { width: 100, height: 200 }, // Skinny
        { width: 150, height: 200 }, // Medium
        { width: 200, height: 200 }  // Fat
    ];

    private bodyColor: p5.Color = this.p5.color(255);

    private getRandomBodyColor(): p5.Color {
        const scaleChoice = this.p5.random(["grey", "orange", "brown", "black", "white", "blue", "green", "red", "yellow"]);
        if (scaleChoice === "grey") {
            const greyValue = this.p5.random(50, 200); // Greyscale
            return this.p5.color(greyValue);
        } else if (scaleChoice === "orange") {
            return this.p5.color(this.p5.random(200, 255), this.p5.random(100, 150), 0); // Orange scale
        } else if (scaleChoice === "brown") {
            return this.p5.color(this.p5.random(139, 165), 42, 42); // Brown scale
        } else if (scaleChoice === "black") {
            return this.p5.color(0); // Black
        } else if (scaleChoice === "white") {
            return this.p5.color(255); // White
        } else if (scaleChoice === "blue") {
            return this.p5.color(0, 0, this.p5.random(150, 255)); // Blue
        } else if (scaleChoice === "green") {
            return this.p5.color(0, this.p5.random(150, 255), 0); // Green
        } else if (scaleChoice === "red") {
            return this.p5.color(this.p5.random(150, 255), 0, 0); // Red
        } else if (scaleChoice === "yellow") {
            return this.p5.color(this.p5.random(150, 255), this.p5.random(150, 255), 0); // Yellow
        }
        return this.p5.color(255); // Default to white if no match
    }

    draw(x: number, y: number): number {
        const bodyShape = this.p5.random(this.bodyShapes);
        this.bodyColor = this.getRandomBodyColor();
        this.p5.fill(this.bodyColor);
        this.p5.ellipse(x, y + 250, bodyShape.width * 4, bodyShape.height * 4);

        return this.p5.brightness(this.bodyColor);
    }

    getBrightness(): number {
        return this.p5.brightness(this.bodyColor);
    }

    getColor(): p5.Color {
        return this.bodyColor;
    }
}

// Nose class - Maria
class Nose extends CatPart {
    draw(x: number, y: number): void {
        this.p5.fill(this.p5.color(this.p5.random(200, 255), this.p5.random(100, 150), this.p5.random(150, 200))); // Pink
        this.p5.triangle(x, y + 80, x - 40, y + 40, x + 40, y + 40); // Upside-down triangle
    }
}

// Whiskers class - Maria
class Whiskers extends CatPart {
    draw(x: number, y: number, bodyColor?: p5.Color, bodyBrightness?: number): void {
        if (bodyColor) {
            // Use bodyColor for some logic, even if it's just a simple check
            console.log("Body color brightness:", this.p5.brightness(bodyColor));
        }

        const whiskerColor = bodyBrightness && bodyBrightness > 128 ? this.p5.color(0) : this.p5.color(255); // Black for light, white for dark
        this.p5.stroke(whiskerColor);

        // Draw three whiskers at different angles
        this.p5.line(x - 120, y + 60, x - 200, y + 40); // Top angle
        this.p5.line(x - 120, y + 80, x - 200, y + 80); // Straight
        this.p5.line(x - 120, y + 100, x - 200, y + 120); // Bottom angle

        this.p5.line(x + 120, y + 60, x + 200, y + 40); // Top angle
        this.p5.line(x + 120, y + 80, x + 200, y + 80); // Straight
        this.p5.line(x + 120, y + 100, x + 200, y + 120); // Bottom angle
    }
}

// Frame class - Sophie
class Frame extends CatPart {
    private frameColors: p5.Color[] = [
        this.p5.color(212, 175, 55), // Gold
        this.p5.color(192, 192, 192), // Silver
        this.p5.color(205, 133, 63)  // Brass
    ];

    private frameColor: p5.Color;
    private frameWidth: number = 500;
    private frameHeight: number = 500;
    private frameX: number;
    private frameY: number;

    constructor(p5: p5) {
        super(p5);
        this.frameColor = this.p5.random(this.frameColors);

        // Default position for the frame
        this.frameX = this.p5.width / 2 - this.frameWidth / 2;
        this.frameY = this.p5.height / 2 - this.frameHeight / 2;
    }

    draw(): void {
        // Metallic gradient
        for (let i = 0; i < 20; i++) {
            const lerpedColor = this.p5.lerpColor(
                this.frameColor,
                this.p5.color(255), // Metalic sheen
                this.p5.map(i, 0, 20, 0, 0.4)
            );

            // Appies a transparency using 'alpha'
            const alpha = this.p5.map(i, 0, 20, 255, 100);
            this.p5.stroke(this.p5.color(this.p5.red(lerpedColor), this.p5.green(lerpedColor), this.p5.blue(lerpedColor), alpha));
            this.p5.strokeWeight(20 - i); // Gradually thinner strokes
            this.p5.noFill();
            this.p5.rect(
                this.frameX + i * 2,
                this.frameY + i * 2,
                this.frameWidth - i * 4,
                this.frameHeight - i * 4
            );
        }
    }

    changeColor(): void {
        this.frameColor = this.p5.random(this.frameColors);
    }

    updatePosition(x: number, y: number): void {
        this.frameX = x - this.frameWidth / 2;
        this.frameY = y - this.frameHeight / 2;
    }
}

// Cat class update - Maria + Sophie
class Cat {
    private parts: CatPart[];
    private body: Body;
    private frame: Frame;

    constructor(p5: p5) {
        this.body = new Body(p5);
        this.frame = new Frame(p5);
        this.parts = [
            new Ears(p5),// Ears are drawn first (behind the body)
            new Eyes(p5),
            this.body,
            new Nose(p5),
            new Whiskers(p5),
            new Bow(p5),
            new Feet(p5),
            this.frame
        ];
    }

    draw(x: number, y: number): void {
        const bodyBrightness = this.body.draw(x, y);
        const bodyColor = this.body.getColor();

        // Draw parts in the correct order
        this.parts[0].draw(x, y, bodyColor); // Ears behind the body (body color does not work)
        this.parts[2].draw(x, y); // Body
        this.parts[1].draw(x, y); // Eyes
        this.parts[3].draw(x, y); // Nose
        this.parts[4].draw(x, y, bodyColor, bodyBrightness); // Whiskers
        this.parts[5].draw(x, y); // Bow
        this.parts[6].draw(x, y); // Feet
    }

    // Sophie
    drawFrame(p: p5, x: number, y: number): void {
        p.push(); // Saves the current drawing style and transformations
        this.parts[7].draw(x, y);
        p.pop(); // Restores the original drawing style and transformations
    }

    changeFrameColor(): void {
        this.frame.changeColor(); // Sophie
    }
}

// Main sketch - Maria and Sophie
function sketch(p: p5) {
    let cat: Cat;
    let frameX = p.width / 2;
    let frameY = p.height / 2;

    p.setup = () => {
        p.createCanvas(500, 500);
        regenerateCat(p);
        drawFrame(p, frameX, frameY);
        drawText(p); // Draw the text
    };

    p.draw = () => {
        // Do nothing in the draw loop
    };

    // Sophie
    p.mousePressed = () => {
        const noseX = p.width / 2;
        const noseY = p.height - 150 + 80;
        const d = p.dist(p.mouseX, p.mouseY, noseX, noseY);
        if (d < 40) { // Checks if the click is within the nose
            regenerateCat(p);
            drawFrame(p, frameX, frameY);
            drawText(p); // Draw the text
        }
    };

    // Sophie
    function regenerateCat(p: p5) {
        cat = new Cat(p);
        p.background(p.random(200, 255), p.random(200, 255), p.random(200, 255));
        cat.draw(p.width / 2, p.height - 150);
        cat.changeFrameColor();
    }

    function drawFrame(p: p5, x: number, y: number) {
        cat.drawFrame(p, x, y);
    }

    function drawText(p: p5) {
        p.textAlign(p.CENTER, p.TOP);
        p.textSize(16);
        p.fill(0);
        p.textFont('Arial');
        p.textStyle(p.NORMAL); 
        p.text("CLICK NOSE", p.width / 2, 10);
        p.textSize(16);
        p.textStyle(p.NORMAL); 
        p.text("This project generates a random cat with various features and colors.", p.width / 2, 30);
    }
    
    
    
}

new p5(sketch);



