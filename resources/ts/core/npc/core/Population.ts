import Dot from '@gcore/npc/Dot';

// game window
import GameWindow from '@gcore/GameWindow';

class Population {
    protected dots: Array<Dot> = [];
    protected count: number;
    protected generation: number = 1;

    public constructor(count: number = 100) {
        this.count = count;
        this.populate();
    }

    public update() {
        this.dots.map((dot) => {
            dot.update();
            dot.render(GameWindow.getContext());
        });

        if (this.allDead()) {
            this.repopulate();
        }
    }

    protected repopulate() {
        this.dots = [];

        this.generation++;

        this.populate();
    }

    protected populate(dots: Array<Dot> = []) {
        if (dots.length) {
            this.dots = [...dots];
            return;
        }

        for (let index = 0; index < this.count; index++) {
            this.dots.push(new Dot(Math.random() * GameWindow.getWidth(), GameWindow.getHeight() - 50));
        }
    }

    public getGeneration(): number {
        return this.generation;
    }

    // if the length of dead dots
    // is the same as dots length
    // return true
    public allDead(): boolean {
        return this.dots.filter((dot) => {
            return dot.isDead();
        }).length === this.dots.length;
    }
}

export default Population;