import Rectangle from "./shapes/Rectangle";
import Circle from "./shapes/Circle";
import Shape from "./shapes/Shape";

class Game {
    protected canvasElement: HTMLCanvasElement;
    protected context: CanvasRenderingContext2D;
    protected shapes: Array<Shape> = [];

    public constructor(canvasElementID: string) {
        const element: HTMLCanvasElement | null = document.querySelector(canvasElementID);

        if (!element) {
            throw new Error('Element could not be found!');
        }

        if (!element.tagName.match(/canvas/i)) {
            throw new Error('You have passed an element that is not a canvas!');
        }

        this.canvasElement = element;
        this.context = <CanvasRenderingContext2D>this.canvasElement.getContext('2d');

        this.shapes.push(new Rectangle(10, 20, 32, 32, 'red'));
        this.shapes.push(new Circle(40, 120, 20, 'green'));
    }

    public start() {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

        this.shapes.map((shape) => {
            shape.render(this.context);
        });

        window.requestAnimationFrame(this.start.bind(this))
    }
}

export default Game;