import NPC from '@gcore/npc/NPC';

// shapes
import Circle from '@gcore/shapes/Circle';

class Dot extends NPC {
    protected circle: Circle;
    public constructor(x: number, y: number) {
        super(x, y);

        this.circle = new Circle(x, y, 10);
    }

    public update() {

    }

    render(context: CanvasRenderingContext2D): void {

    }
}

export default Dot;