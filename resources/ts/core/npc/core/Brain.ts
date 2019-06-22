class Brain {
    protected steps: number = 1;
    protected currentStep: number = 0;
    protected directions: Array<{ x: number, y: number }> = [];

    public constructor(steps: number) {
        this.steps = steps;

        this.initDirections();
    }

    public initDirections() {
        for (let stepIndex = 0; stepIndex < this.steps; stepIndex++) {
            const xRandomDirection = (Math.random() * 10) - 5;
            const yRandomDirection = Math.random();
            console.log(xRandomDirection);


            this.directions.push({
                x: xRandomDirection,
                y: yRandomDirection
            });
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