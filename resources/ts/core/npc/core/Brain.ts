import Victor from 'victor';

class Brain {
    protected steps: number = 1;
    protected currentStep: number = 0;
    protected directions: Array<Victor> = [];

    public constructor(steps: number) {
        this.steps = steps;

        this.initDirections();
    }

    public initDirections() {
        for (let stepIndex = 0; stepIndex < this.steps; stepIndex++) {
            const angle = (Math.random() * (2 * Math.PI)) - Math.PI;

            this.directions.push(new Victor(Math.cos(angle), Math.sin(angle)));
        }
    }

    public nextDirection() {
        if (this.currentStep >= this.steps) {
            this.currentStep = 0;
        }

        return this.directions[this.currentStep++];
    }
}

export default Brain;