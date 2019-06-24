import GameWindow from '@gcore/GameWindow';
import Dot from '@gcore/npc/Dot';
import Population from '@gcore/npc/core/Population';

class Game {
    protected population: Population;
    protected goal: Dot;

    public constructor() {
        this.population = new Population(300);
        this.goal = new Dot(GameWindow.getWidth() / 2, 20, false, null, 'red');
    }

    public start() {
        GameWindow.clearScreen();

        const context = GameWindow.getContext();

        context.beginPath();
        context.fillStyle = 'blue';
        context.font = '30px Arial';
        context.fillText(`Generation: ${this.population.getGeneration()}`, 10, 50);
        context.closePath();

        this.population.update();

        this.goal.update();
        this.goal.render(context);

        window.requestAnimationFrame(this.start.bind(this));
    }
}

export default Game;