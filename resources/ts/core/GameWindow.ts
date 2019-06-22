class GameWindow {
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

    public getContext(): CanvasRenderingContext2D {
        return this.context;
    }

    public clearScreen(): void {
        this.context.clearRect(0, 0, this.getWidth(), this.getHeight());
    }

    public getWidth(): number {
        return this.context.canvas.width;
    }

    public getHeight(): height {
        return this.context.canvas.height;
    }
}

const gameWindow = new GameWindow('#display');

export default gameWindow;