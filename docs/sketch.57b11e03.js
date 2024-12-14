/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/p5/lib/p5.min.js":
/*!***************************************!*\
  !*** ./node_modules/p5/lib/p5.min.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*! p5.js v1.11.1 October 31, 2024 */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./src/sketch.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p5 */ "./node_modules/p5/lib/p5.min.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_0__);

class CatPart {
    constructor(p5) {
        this.p5 = p5;
    }
}
class Bow extends CatPart {
    draw(x, y) {
        const bowColor = this.p5.color(this.p5.random(100, 255), this.p5.random(100, 255), this.p5.random(100, 255));
        this.p5.fill(bowColor);
        this.p5.stroke(0);
        this.p5.strokeWeight(1);
        const loopWidth = 60;
        const loopHeight = 40;
        const knotSize = 30;
        this.p5.ellipse(x - 40, y - 150, loopWidth, loopHeight);
        this.p5.ellipse(x + 40, y - 150, loopWidth, loopHeight);
        this.p5.ellipse(x, y - 150, knotSize, knotSize);
    }
}
class Feet extends CatPart {
    draw(x, y) {
        const pawOutlineColor = this.p5.color(0);
        const pawMainColor = this.p5.color(150, 150, 150);
        const pawPadColor = this.p5.color(200, 200, 200);
        const bodyBottomY = y + 120;
        const footOffset = 50;
        const drawPaw = (px, py) => {
            this.p5.noStroke();
            this.p5.fill(pawMainColor);
            this.p5.beginShape();
            this.p5.vertex(px, py);
            this.p5.bezierVertex(px - 20, py - 30, px - 30, py - 20, px - 30, py);
            this.p5.bezierVertex(px - 30, py + 20, px - 20, py + 30, px, py + 30);
            this.p5.bezierVertex(px + 20, py + 30, px + 30, py + 20, px + 30, py);
            this.p5.bezierVertex(px + 30, py - 20, px + 20, py - 30, px, py);
            this.p5.endShape(this.p5.CLOSE);
            this.p5.fill(pawPadColor);
            this.p5.ellipse(px - 15, py - 10, 15, 20);
            this.p5.ellipse(px + 15, py - 10, 15, 20);
            this.p5.ellipse(px - 5, py + 5, 15, 20);
            this.p5.ellipse(px + 5, py + 5, 15, 20);
            this.p5.ellipse(px, py + 15, 20, 15);
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
        drawPaw(x - footOffset, bodyBottomY);
        drawPaw(x + footOffset, bodyBottomY);
    }
}
class Ears extends CatPart {
    constructor() {
        super(...arguments);
        this.earShapes = [
            { points: [[0, -30], [-20, 30], [20, 30]] },
            { points: [[0, -35], [-25, 5], [-15, 35], [15, 35], [25, 5]] },
            { points: [[0, -40], [-15, 20], [15, 20]] }
        ];
    }
    draw(x, y, bodyColor) {
        const earShape = this.p5.random(this.earShapes);
        this.p5.fill(bodyColor);
        this.p5.beginShape();
        earShape.points.forEach(([px, py]) => {
            this.p5.vertex(x - 70 + px * 3, y - 140 + py * 3);
        });
        this.p5.endShape(this.p5.CLOSE);
        this.p5.beginShape();
        earShape.points.forEach(([px, py]) => {
            this.p5.vertex(x + 70 + px * 3, y - 140 + py * 3);
        });
        this.p5.endShape(this.p5.CLOSE);
    }
}
class Eyes extends CatPart {
    constructor() {
        super(...arguments);
        this.eyeColors = [
            this.p5.color(0, 0, this.p5.random(150, 255)),
            this.p5.color(0, this.p5.random(150, 255), 0),
            this.p5.color(this.p5.random(150, 255), this.p5.random(150, 255), 0),
            this.p5.color(255, 255, 255),
            this.p5.color(this.p5.random(150, 255), 0, 0),
            this.p5.color(this.p5.random(150, 255), 0, this.p5.random(150, 255))
        ];
        this.pupilShapes = [
            { type: 'ellipse', width: 50, height: 70 },
            { type: 'ellipse', width: 30, height: 90 },
            { type: 'ellipse', width: 80, height: 80 },
            { type: 'triangle', width: 50, height: 70 },
            { type: 'rectangle', width: 40, height: 70 },
            { type: 'star', width: 50, height: 70, points: 5 },
            { type: 'polygon', width: 50, height: 70, points: 6 }
        ];
    }
    draw(x, y) {
        const scleraColor = this.p5.random(this.eyeColors);
        this.p5.fill(scleraColor);
        this.p5.ellipse(x - 80, y - 40, 100, 140);
        this.p5.ellipse(x + 80, y - 40, 100, 140);
        this.p5.fill(0);
        const pupilShape = this.p5.random(this.pupilShapes);
        if (pupilShape.type === 'ellipse') {
            this.p5.ellipse(x - 80, y - 40, pupilShape.width, pupilShape.height);
            this.p5.ellipse(x + 80, y - 40, pupilShape.width, pupilShape.height);
        }
        else if (pupilShape.type === 'triangle') {
            this.p5.triangle(x - 80, y - 40 - pupilShape.height / 2, x - 80 - pupilShape.width / 2, y - 40 + pupilShape.height / 2, x - 80 + pupilShape.width / 2, y - 40 + pupilShape.height / 2);
            this.p5.triangle(x + 80, y - 40 - pupilShape.height / 2, x + 80 - pupilShape.width / 2, y - 40 + pupilShape.height / 2, x + 80 + pupilShape.width / 2, y - 40 + pupilShape.height / 2);
        }
        else if (pupilShape.type === 'rectangle') {
            this.p5.rectMode(this.p5.CENTER);
            this.p5.rect(x - 80, y - 40, pupilShape.width, pupilShape.height);
            this.p5.rect(x + 80, y - 40, pupilShape.width, pupilShape.height);
        }
        else if (pupilShape.type === 'star') {
            this.drawStar(x - 80, y - 40, pupilShape.width / 2, pupilShape.height / 2, pupilShape.points || 5);
            this.drawStar(x + 80, y - 40, pupilShape.width / 2, pupilShape.height / 2, pupilShape.points || 5);
        }
        else if (pupilShape.type === 'polygon') {
            this.drawPolygon(x - 80, y - 40, pupilShape.width / 2, pupilShape.points || 6);
            this.drawPolygon(x + 80, y - 40, pupilShape.width / 2, pupilShape.points || 6);
        }
    }
    drawStar(x, y, radius1, radius2, points) {
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
    drawPolygon(x, y, radius, points) {
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
class Body extends CatPart {
    constructor() {
        super(...arguments);
        this.bodyShapes = [
            { width: 100, height: 200 },
            { width: 150, height: 200 },
            { width: 200, height: 200 }
        ];
        this.bodyColor = this.p5.color(255);
    }
    getRandomBodyColor() {
        const scaleChoice = this.p5.random(["grey", "orange", "brown", "black", "white", "blue", "green", "red", "yellow"]);
        if (scaleChoice === "grey") {
            const greyValue = this.p5.random(50, 200);
            return this.p5.color(greyValue);
        }
        else if (scaleChoice === "orange") {
            return this.p5.color(this.p5.random(200, 255), this.p5.random(100, 150), 0);
        }
        else if (scaleChoice === "brown") {
            return this.p5.color(this.p5.random(139, 165), 42, 42);
        }
        else if (scaleChoice === "black") {
            return this.p5.color(0);
        }
        else if (scaleChoice === "white") {
            return this.p5.color(255);
        }
        else if (scaleChoice === "blue") {
            return this.p5.color(0, 0, this.p5.random(150, 255));
        }
        else if (scaleChoice === "green") {
            return this.p5.color(0, this.p5.random(150, 255), 0);
        }
        else if (scaleChoice === "red") {
            return this.p5.color(this.p5.random(150, 255), 0, 0);
        }
        else if (scaleChoice === "yellow") {
            return this.p5.color(this.p5.random(150, 255), this.p5.random(150, 255), 0);
        }
        return this.p5.color(255);
    }
    draw(x, y) {
        const bodyShape = this.p5.random(this.bodyShapes);
        this.bodyColor = this.getRandomBodyColor();
        this.p5.fill(this.bodyColor);
        this.p5.ellipse(x, y + 250, bodyShape.width * 4, bodyShape.height * 4);
        return this.p5.brightness(this.bodyColor);
    }
    getBrightness() {
        return this.p5.brightness(this.bodyColor);
    }
    getColor() {
        return this.bodyColor;
    }
}
class Nose extends CatPart {
    draw(x, y) {
        this.p5.fill(this.p5.color(this.p5.random(200, 255), this.p5.random(100, 150), this.p5.random(150, 200)));
        this.p5.triangle(x, y + 80, x - 40, y + 40, x + 40, y + 40);
    }
}
class Whiskers extends CatPart {
    draw(x, y, bodyColor, bodyBrightness) {
        if (bodyColor) {
            console.log("Body color brightness:", this.p5.brightness(bodyColor));
        }
        const whiskerColor = bodyBrightness && bodyBrightness > 128 ? this.p5.color(0) : this.p5.color(255);
        this.p5.stroke(whiskerColor);
        this.p5.line(x - 120, y + 60, x - 200, y + 40);
        this.p5.line(x - 120, y + 80, x - 200, y + 80);
        this.p5.line(x - 120, y + 100, x - 200, y + 120);
        this.p5.line(x + 120, y + 60, x + 200, y + 40);
        this.p5.line(x + 120, y + 80, x + 200, y + 80);
        this.p5.line(x + 120, y + 100, x + 200, y + 120);
    }
}
class Frame extends CatPart {
    constructor(p5) {
        super(p5);
        this.frameColors = [
            this.p5.color(212, 175, 55),
            this.p5.color(192, 192, 192),
            this.p5.color(205, 133, 63)
        ];
        this.frameWidth = 500;
        this.frameHeight = 500;
        this.frameColor = this.p5.random(this.frameColors);
        this.frameX = this.p5.width / 2 - this.frameWidth / 2;
        this.frameY = this.p5.height / 2 - this.frameHeight / 2;
    }
    draw() {
        for (let i = 0; i < 20; i++) {
            const lerpedColor = this.p5.lerpColor(this.frameColor, this.p5.color(255), this.p5.map(i, 0, 20, 0, 0.4));
            const alpha = this.p5.map(i, 0, 20, 255, 100);
            this.p5.stroke(this.p5.color(this.p5.red(lerpedColor), this.p5.green(lerpedColor), this.p5.blue(lerpedColor), alpha));
            this.p5.strokeWeight(20 - i);
            this.p5.noFill();
            this.p5.rect(this.frameX + i * 2, this.frameY + i * 2, this.frameWidth - i * 4, this.frameHeight - i * 4);
        }
    }
    changeColor() {
        this.frameColor = this.p5.random(this.frameColors);
    }
    updatePosition(x, y) {
        this.frameX = x - this.frameWidth / 2;
        this.frameY = y - this.frameHeight / 2;
    }
}
class Cat {
    constructor(p5) {
        this.body = new Body(p5);
        this.frame = new Frame(p5);
        this.parts = [
            new Ears(p5),
            new Eyes(p5),
            this.body,
            new Nose(p5),
            new Whiskers(p5),
            new Bow(p5),
            new Feet(p5),
            this.frame
        ];
    }
    draw(x, y) {
        const bodyBrightness = this.body.draw(x, y);
        const bodyColor = this.body.getColor();
        this.parts[0].draw(x, y, bodyColor);
        this.parts[2].draw(x, y);
        this.parts[1].draw(x, y);
        this.parts[3].draw(x, y);
        this.parts[4].draw(x, y, bodyColor, bodyBrightness);
        this.parts[5].draw(x, y);
        this.parts[6].draw(x, y);
    }
    drawFrame(p, x, y) {
        p.push();
        this.parts[7].draw(x, y);
        p.pop();
    }
    changeFrameColor() {
        this.frame.changeColor();
    }
}
function sketch(p) {
    let cat;
    let frameX = p.width / 2;
    let frameY = p.height / 2;
    p.setup = () => {
        p.createCanvas(500, 500);
        regenerateCat(p);
        drawFrame(p, frameX, frameY);
        drawText(p);
    };
    p.draw = () => {
    };
    p.mousePressed = () => {
        const noseX = p.width / 2;
        const noseY = p.height - 150 + 80;
        const d = p.dist(p.mouseX, p.mouseY, noseX, noseY);
        if (d < 40) {
            regenerateCat(p);
            drawFrame(p, frameX, frameY);
            drawText(p);
        }
    };
    function regenerateCat(p) {
        cat = new Cat(p);
        p.background(p.random(200, 255), p.random(200, 255), p.random(200, 255));
        cat.draw(p.width / 2, p.height - 150);
        cat.changeFrameColor();
    }
    function drawFrame(p, x, y) {
        cat.drawFrame(p, x, y);
    }
    function drawText(p) {
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
new (p5__WEBPACK_IMPORTED_MODULE_0___default())(sketch);

})();

/******/ })()
;