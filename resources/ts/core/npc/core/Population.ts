import Dot from '@gcore/npc/Dot';

import Victor from 'victor';

// game window
import GameWindow from '@gcore/GameWindow';

class Population {
    protected dots: Array<Dot> = [];
    protected count: number;
    protected generation: number = 1;
    protected goalPosition: Victor = new Victor(0, 0);

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

    public setGoal(position: Victor) {
        this.goalPosition = position.clone();
    }

    protected repopulate() {
        let fitnessSum = 0;

        this.dots.map((dot) => {
            const fitness = 1.0 - dot.distanceFromGoal();

            fitnessSum += fitness;
        });

        const randomFitness = Math.random() * fitnessSum;
        let bestDot: any;

        for (let index = 0; index < this.dots.length; index++) {
            if (this.dots[index].distanceFromGoal() > randomFitness) {
                bestDot = this.dots[0];
                break;
            }
        }

        const newDots = [];

        for (let index = 0; index < this.count; index++) {
            const bestDotBrain = bestDot.getBrain().clone();
            bestDotBrain.mutate();

            const dot = new Dot(Math.random() * GameWindow.getWidth(), GameWindow.getHeight() - 50, true, bestDotBrain);
            dot.setGoalPosition(this.goalPosition);
            newDots.push(dot);
        }

        this.dots = [];

        bestDot.setColor('green');
        newDots.push(bestDot);

        this.count = newDots.length;

        this.generation++;

        this.populate(newDots);
    }

    protected populate(dots: Array<Dot> = []) {
        if (dots.length) {
            this.dots = [...dots];
            return;
        }

        for (let index = 0; index < this.count; index++) {
            const dot = new Dot(Math.random() * GameWindow.getWidth(), GameWindow.getHeight() - 50);
            dot.setGoalPosition(this.goalPosition);
            this.dots.push(dot);
        }
    }
}

export default Population;