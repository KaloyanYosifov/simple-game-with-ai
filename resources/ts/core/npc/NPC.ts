abstract class NPC {
    protected x: number;
    protected y: number;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
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

export default NPC;