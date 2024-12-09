import p5 from 'p5';

// Abstract class for cat parts
abstract class CatPart {
    protected p5: p5;

    constructor(p5: p5) {
        this.p5 = p5;
    }

    abstract draw(x: number, y: number, bodyBrightness?: number): void;
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
        this.p5.noStroke();

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
class Feet extends CatPart{
    draw(x: number, y: number): void {
        const pawOutlineColor = this.p5.color(0); // Black color for the outline
        const pawMainColor = this.p5.color(150, 150, 150); // Gray color for the main paw
        const pawPadColor = this.p5.color(200, 200, 200); // Light gray color for the pads

        // this ensures that the feet are placed relative to the body's bottom
        const bodyBottomY = y + 120;  // (y position)
        const footOffset = 50;  // the distance between the feet

        // this draws a single paw
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

        // places feet below the body
        drawPaw(x - footOffset, bodyBottomY);  // Draw left foot
        drawPaw(x + footOffset, bodyBottomY);  // Draw right foot
    }
}

// Ears class - Sophie
class Ears extends CatPart {
    private earShapes: { points: [number, number][] }[] = [
        { points: [[0, -20], [-15, 20], [15, 20]] }, // Smaller and spaced
        { points: [[0, -25], [-20, 5], [-10, 25], [10, 25], [20, 5]] }, // Smaller complex shape
        { points: [[0, -30], [-10, 15], [10, 15]] }  // Compact shape
    ];

    draw(x: number, y: number): void {
        const earShape = this.p5.random(this.earShapes);
        this.p5.fill(this.p5.random(255), this.p5.random(255), this.p5.random(255));

        // Left ear
        this.p5.beginShape();
        earShape.points.forEach(([px, py]: [number, number]) => {
            this.p5.vertex(x - 60 + px * 2, y - 180 + py * 2); // Scaled down
        });
        this.p5.endShape(this.p5.CLOSE);

        // Right ear
        this.p5.beginShape();
        earShape.points.forEach(([px, py]: [number, number]) => {
            this.p5.vertex(x + 60 + px * 2, y - 180 + py * 2); // Scaled down
        });
        this.p5.endShape(this.p5.CLOSE);
    }
}
// Eyes class - Sophie + Maria
class Eyes extends CatPart {
    private eyeColors: p5.Color[] = [
        this.p5.color(0, 0, this.p5.random(200, 255)), // Blue
        this.p5.color(0, this.p5.random(200, 255), 0), // Green
        this.p5.color(this.p5.random(200, 255), this.p5.random(200, 255), 0), // Yellow
        this.p5.color(255, 255, 255) // White
    ];

    draw(x: number, y: number): void {
        const scleraColor = this.p5.random(this.eyeColors);
        this.p5.fill(scleraColor);

        // Sclera
        this.p5.ellipse(x - 80, y - 40, 80, 120);
        this.p5.ellipse(x + 80, y - 40, 80, 120);

        // Pupils
        this.p5.fill(0);
        this.p5.ellipse(x - 80, y - 40, 40, 60);
        this.p5.ellipse(x + 80, y - 40, 40, 60);
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
        const scaleChoice = this.p5.random(["grey", "orange", "brown"]);
        if (scaleChoice === "grey") {
            const greyValue = this.p5.random(50, 200); // Greyscale
            return this.p5.color(greyValue);
        } else if (scaleChoice === "orange") {
            return this.p5.color(this.p5.random(200, 255), this.p5.random(100, 150), 0); // Orange scale
        } else {
            return this.p5.color(this.p5.random(139, 165), 42, 42); // Brown scale
        }
    }

    draw(x: number, y: number): number {
        const bodyShape = this.p5.random(this.bodyShapes);
        this.bodyColor = this.getRandomBodyColor();
        this.p5.fill(this.bodyColor);
        this.p5.ellipse(x, y + 250, bodyShape.width * 4, bodyShape.height * 4); // Adjusted for taller height

        return this.p5.brightness(this.bodyColor);
    }

    getBrightness(): number {
        return this.p5.brightness(this.bodyColor);
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
    draw(x: number, y: number, bodyBrightness?: number): void {
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

// Cat class update - Maria
class Cat {
    private parts: CatPart[];
    private body: Body;

    constructor(p5: p5) {
        this.body = new Body(p5);
        this.parts = [
            new Ears(p5),    // Ears are drawn first (behind the body)
            new Eyes(p5),
            this.body,
            new Nose(p5),
            new Whiskers(p5),
            new Bow(p5),  
            new Feet(p5)
        ];
    }

    draw(x: number, y: number): void {
        const bodyBrightness = this.body.draw(x, y);

        // Draw parts in the correct order
        this.parts[0].draw(x, y); // Ears behind the body
        this.parts[2].draw(x, y); // Body
        this.parts[1].draw(x, y); // Eyes
        this.parts[3].draw(x, y); // Nose
        this.parts[4].draw(x, y, bodyBrightness); // Whiskers
        this.parts[5].draw(x, y); // Bow
        this.parts[6].draw(x, y); // Feet
    }
}

// Main sketch - Maria
function sketch(p: p5) {
    let cat: Cat;

    p.setup = () => {
        p.createCanvas(500, 500);
        cat = new Cat(p);
        p.background(255);
        cat.draw(p.width / 2, p.height - 150); // Draw cat at the bottom of the screen
    };

    p.draw = () => {
        // Do nothing in the draw loop
    };
}

new p5(sketch);


