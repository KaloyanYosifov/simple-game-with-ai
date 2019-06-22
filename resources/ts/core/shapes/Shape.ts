abstract class Shape {
    protected x: number;
    protected y: number;
    protected color: string;

    public constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    public abstract render(context: CanvasRenderingContext2D): void;

    public setX(x: number): void {
        this.x = x;
    }

    public setY(y: number): void {
        this.y = y;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }
};

export default Shape;