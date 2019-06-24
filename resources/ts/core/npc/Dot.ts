import NPC from '@gcore/npc/NPC';
import Brain from '@gcore/npc/core/Brain';
import GameWindow from '@gcore/GameWindow';

// shapes
import Circle from '@gcore/shapes/Circle';

class Dot extends NPC {
    protected circle: Circle;
    protected brain: Brain;
    protected dead: boolean = false;

    public constructor(x: number, y: number, randomDirections: boolean = true, brain: Brain | null = null, color: string = 'black') {
        super(x, y);

        this.circle = new Circle(x, y, 10, color);

        // select the brain passed
        // or create a new one
        this.brain = brain || new Brain(randomDirections ? 500 : 1);
    }

    public update() {
        if (this.dead) {
            return;
        }

        const acceleration = this.brain.nextDirection();

        this.velocity = this.velocity.add(acceleration);
        this.velocity.limit(5, 0.5);

        this.position = this.position.add(this.velocity);

        this.circle.setVector(this.position);

        // if we are on the last direction from the brain
        // kill the dot
        if (this.brain.finishedLastDirection() || this.isCrossingWindowBoundries()) {
            this.die();
        }
    }

    public render(context: CanvasRenderingContext2D): void {
        this.circle.render(context);
    }

    public die() {
        this.dead = true;
    }

    public isCrossingWindowBoundries(): boolean {
        // crossing boundries on x axis
        const crossingLeftBoundry = this.getX() < 10;
        const crossingRightBoundry = this.getX() > GameWindow.getWidth() - 10;

        // crossing boundries on y axis
        const crossingTopBoundry = this.getY() > GameWindow.getHeight() - 10;
        const crossingBottomBoundry = this.getY() < 10;

        return crossingLeftBoundry || crossingRightBoundry || crossingTopBoundry || crossingBottomBoundry;
    }

    public getBrain(): Brain {
        return this.brain;
    }
}

export default Dot;