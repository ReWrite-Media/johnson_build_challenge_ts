//ENUMS

enum Four_Axis {
    //% block="forward"
    Forward,
    //% block="back"
    Back,
    //% block="left"
    Left,
    //% block="right"
    Right
}

//GLOBAL VARIABLES
const communicationsTimeout = 75;

//%  block="Johnson Build Challenge" weight=200 color=#0B3D91 icon="\uf186"
namespace johnsonBuildChallenge {

    /**
     * This function moves the Agent
     * in four directions
     */
    //% block = "agent move %d by %n"
    export function agent_move(d: Four_Axis, n: number): void {
        for (let i = 0; i < n; i++) {
            switch (d) {
                case Four_Axis.Forward:
                    player.execute("scoreboard players set .output global 1")
                    break;
                case Four_Axis.Back:
                    player.execute("scoreboard players set .output global 2")
                    break;
                case Four_Axis.Left:
                    player.execute("scoreboard players set .output global 3")
                    break;
                case Four_Axis.Right:
                    player.execute("scoreboard players set .output global 4")
                    break;
            }
            loops.pause(communicationsTimeout)
        }
    }

    /**
     * This function launches the Agent
     */
    //% block = "agent launch"
    export function launch_agent(): void {
        player.execute("scoreboard players set .output global 5")
        loops.pause(communicationsTimeout)
    }

}