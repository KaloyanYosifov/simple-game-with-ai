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

        this.velocity = this.velocity.add(acceleration);
        this.velocity.limit(5, 0.5);

        this.position = this.position.add(this.velocity);

        this.circle.setVector(this.position);
    }

    render(context: CanvasRenderingContext2D): void {
        this.circle.render(context);
    }
}

export default Dot;