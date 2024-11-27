

import p5 from 'p5';

//Abstract class for cat parts Sophie
abstract class CatPart {
    protected p5: p5;

    constructor(p5: p5) {
        this.p5 = p5;
    }

    abstract draw(x: number, y: number): void;
}

//Ears class Sophie
class Ears extends CatPart {
    private earShapes: { points: [number, number][] }[] = [
        { points: [[0, -30], [-30, 30], [30, 30]] },
        { points: [[0, -30], [-30, 0], [-15, 30], [15, 30], [30, 0]] },
        { points: [[0, -40], [-20, 20], [20, 20]] }
    ];

    draw(x: number, y: number): void {
        const earShape = this.p5.random(this.earShapes);
        this.p5.fill(this.p5.random(255), this.p5.random(255), this.p5.random(255));
        this.p5.beginShape();
        earShape.points.forEach(([px, py]: [number, number]) => {
            this.p5.vertex(x + px * 4, y + py * 4);
        });
        this.p5.endShape(this.p5.CLOSE);
    }
}

//Eyes class Sophie
class Eyes extends CatPart {
    private eyeShapes: { shape: string, pupil: string }[] = [
        { shape: 'circle', pupil: 'circle' },
        { shape: 'oval', pupil: 'line' },
        { shape: 'oval', pupil: 'circle' }
    ];

    draw(x: number, y: number): void {
        const eyeShape = this.p5.random(this.eyeShapes);
        this.p5.fill(this.p5.random(255), this.p5.random(255), this.p5.random(255));
        if (eyeShape.shape === 'circle') {
            this.p5.ellipse(x - 80, y - 40, 80, 80);
            this.p5.ellipse(x + 80, y - 40, 80, 80);
        } else {
            this.p5.ellipse(x - 80, y - 40, 80, 120);
            this.p5.ellipse(x + 80, y - 40, 80, 120);
        }

        this.p5.fill(this.p5.random(255), this.p5.random(255), this.p5.random(255));
        if (eyeShape.pupil === 'circle') {
            this.p5.ellipse(x - 80, y - 40, 40, 40);
            this.p5.ellipse(x + 80, y - 40, 40, 40);
        } else if (eyeShape.pupil === 'line') {
            this.p5.line(x - 100, y - 40, x - 60, y - 40);
            this.p5.line(x + 60, y - 40, x + 100, y - 40);
        }
    }
}

//Body Sophie class
class Body extends CatPart {
    private bodyShapes: { width: number, height: number }[] = [
        { width: 100, height: 150 },
        { width: 120, height: 180 },
        { width: 80, height: 120 }
    ];

    draw(x: number, y: number): void {
        const bodyShape = this.p5.random(this.bodyShapes);
        this.p5.fill(this.p5.random(255), this.p5.random(255), this.p5.random(255));
        this.p5.ellipse(x, y + 200, bodyShape.width * 4, bodyShape.height * 4);
    }
}

//Nose class Maria
class Nose extends CatPart {
    draw(x: number, y: number): void {
        this.p5.fill(this.p5.random(255), this.p5.random(255), this.p5.random(255));
        this.p5.triangle(x, y + 40, x - 40, y + 80, x + 40, y + 80);
    }
}

//Whiskers class Maria
class Whiskers extends CatPart {
    draw(x: number, y: number): void {
        this.p5.stroke(this.p5.random(255), this.p5.random(255), this.p5.random(255));
        this.p5.line(x - 120, y + 60, x - 200, y + 60);
        this.p5.line(x - 120, y + 100, x - 200, y + 100);
        this.p5.line(x + 120, y + 60, x + 200, y + 60);
        this.p5.line(x + 120, y + 100, x + 200, y + 100);
    }
}

//Cat class Maria
class Cat {
    private parts: CatPart[];

    constructor(p5: p5) {
        this.parts = [
            new Ears(p5),
            new Eyes(p5),
            new Body(p5),
            new Nose(p5),
            new Whiskers(p5)
        ];
    }

    draw(x: number, y: number): void {
        this.parts.forEach(part => part.draw(x, y));
    }
}

//Main sketch Maria
function sketch(p: p5) {
    let cat: Cat;

    p.setup = () => {
        p.createCanvas(500, 500);
        cat = new Cat(p);
        p.background(255);
        cat.draw(p.width / 2, p.height / 2);
    };

    p.draw = () => {
        //Do nothing in the draw loop
    };
}

new p5(sketch);


