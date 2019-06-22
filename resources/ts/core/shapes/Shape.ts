import Victor from 'victor';

abstract class Shape {
    protected position: Victor;
    protected color: string;

    public constructor(x: number, y: number, color: string) {
        this.position = new Victor(x, y);
        this.color = color;
    }

    public abstract render(context: CanvasRenderingContext2D): void;

    public setColor(color: string): void {
        this.color = color;
    }

    public setX(x: number): void {
        this.position.x = x;
    }

    public setY(y: number): void {
        this.position.y = y;
    }

    public getX(): number {
        return this.position.x;
    }

    public getY(): number {
        return this.position.y;
    }

    public getPosition(): Victor {
        return this.position;
    }

    public setVector(position: Victor) {
        this.position = position;
    }
};

export default Shape;