import NPC from '@gcore/npc/NPC';
import Brain from '@gcore/npc/core/Brain';
import GameWindow from '@gcore/GameWindow';

// shapes
import Circle from '@gcore/shapes/Circle';

class Dot extends NPC {
    protected circle: Circle;
    protected brain: Brain;

    public constructor(x: number, y: number) {
        super(x, y);

        this.circle = new Circle(x, y, 10);
        this.brain = new Brain(1000);
    }

    public update() {
        const acceleration = this.brain.nextDirection();
        this.x += acceleration.x;
        this.y += acceleration.y;

        this.circle.setX(this.x);
        this.circle.setY(this.y);
    }

    render(context: CanvasRenderingContext2D): void {
        this.circle.render(context);
    }
}

export default Dot;