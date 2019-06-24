import Victor from 'victor';

class Brain {
    protected steps: number = 1;
    protected currentStep: number = 0;
    protected directions: Array<Victor> = [];

    public constructor(steps: number) {
        this.steps = steps;

        this.initDirections();
    }

    public setDirections(directions: Array<Victor>): void {
        this.directions = directions;
        this.steps = this.directions.length;
    }

    public initDirections() {
        for (let stepIndex = 0; stepIndex < this.steps; stepIndex++) {
            const angle = (Math.random() * (2 * Math.PI)) - Math.PI;

            this.directions.push(new Victor(Math.cos(angle), Math.sin(angle)));
        }
    }

    public nextDirection() {
        if (this.finishedLastDirection()) {
            return this.directions[0];
        }


        return this.directions[this.currentStep++];
    }

    public finishedLastDirection(): boolean {
        return this.currentStep >= this.steps;
    }

    public clone(): Brain {
        const clonedBrain = new Brain(this.steps);

        clonedBrain.setDirections(this.directions);

        return clonedBrain;
    }

    public mutate(): void {
        const mutateChance = 0.01;

        for (let stepIndex = 0; stepIndex < this.steps; stepIndex++) {
            const randomNumber = Math.random();

            // if the mutate chance is bigger than the random number
            // we mutate the the direction
            if (mutateChance > randomNumber) {
                const angle = (Math.random() * (2 * Math.PI)) - Math.PI;
                this.directions[stepIndex] = new Victor(Math.cos(angle), Math.sin(angle));
            }
        }
    }
}

export default Brain;