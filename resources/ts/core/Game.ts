class Game {
    protected canvasElement: HTMLCanvasElement | undefined;
    protected context: CanvasRenderingContext2D | null;

    public constructor(canvasElementID: string) {
        const element: HTMLCanvasElement | null = document.querySelector(canvasElementID);

        if (!element) {
            throw new Error('Element could not be found!');
        }

        if (!element.tagName.match(/canvas/i)) {
            throw new Error('You have passed an element that is not a canvas!');
        }

        this.canvasElement = element;
        this.context = this.canvasElement.getContext('2d');
    }

    public start() {

    }
}

export default Game;