import Victor from 'victor';

abstract class NPC {
    protected position: Victor;
    protected velocity: Victor;

    public constructor(x: number, y: number) {
        this.position = new Victor(x, y);
        this.velocity = new Victor(.5, .5);
    }

    /**
     * get user inputs here
     * and update, or do something with npc
     */
    public abstract update(): void;

    /**
     * 
     * render something wit this method
     */
    public abstract render(context: CanvasRenderingContext2D): void;

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

export default NPC;