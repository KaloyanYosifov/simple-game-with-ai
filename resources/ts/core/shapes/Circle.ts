import Shape from '@gcore/shapes/Shape';

class Circle extends Shape {
    protected radius: number;

    public constructor(x: number, y: number, radius: number, color: string = '#000000') {
        super(x, y, color);

        this.radius = radius;
    }

    public render(context: CanvasRenderingContext2D): void {

        context.beginPath();
        context.arc(this.getX(), this.getY(), this.radius, 0, 2 * Math.PI);
        context.closePath();

        context.fillStyle = this.color;
        context.fill();
    }
}

export default Circle;