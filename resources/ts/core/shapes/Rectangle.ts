import Shape from '@gcore/shapes/Shape';

class Rectangle extends Shape {
    protected width: number;
    protected height: number;

    public constructor(x: number, y: number, width: number, height: number, color: string = '#000000') {
        super(x, y, color);

        this.width = width;
        this.height = height;
    }

    public render(context: CanvasRenderingContext2D): void {
        context.fillStyle = this.color;

        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

export default Rectangle;