import GameWindow from '@gcore/GameWindow';
import NPC from "@gcore/npc/NPC";
import Dot from '@gcore/npc/Dot';

class Game {
    protected NPCS: Array<NPC> = [];

    public constructor() {
        for (let index = 0; index < 1000; index++) {
            this.NPCS.push(new Dot(Math.random() * GameWindow.getWidth(), Math.random() * GameWindow.getHeight()));
        }
    }

    public start() {
        GameWindow.clearScreen();

        GameWindow.getContext();

        this.NPCS.map((npc) => {
            npc.update();
            npc.render(GameWindow.getContext());
        });

        window.requestAnimationFrame(this.start.bind(this));
    }
}

export default Game;