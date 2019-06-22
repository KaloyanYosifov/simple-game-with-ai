import Shape from '@gcore/shapes/Shape';

class Circle extends Shape {
    protected radius: number;

    public constructor(x: number, y: number, radius: number, color: string = '#000000') {
        super(x, y, color);

        this.radius = radius;
    }

    public render(context: CanvasRenderingContext2D): void {
        context.fillStyle = this.color;

        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    }
}

export default Circle;