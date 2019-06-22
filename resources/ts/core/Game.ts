class Game {
    protected canvasElement: HTMLCanvasElement;
    protected context: CanvasRenderingContext2D;

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
    }

    public start() {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

        window.requestAnimationFrame(this.start.bind(this))
    }
}

export default Game;