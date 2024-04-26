import styles from "@site/src/pages/rules.module.css";
import clsx from "clsx";

export default function GameRules() {
    return (
        <section className={clsx(styles.section)}>
            <div className={clsx(styles.container)}>
                <h2>
                    <a className="anchor" id="game-rules"></a>Game Rules
                </h2>
                <ol>
                    <li>
                        The objective of the game, called <strong>Tin Can Rally</strong>, is to race around a track,
                        picking up tin cans along the way.
                    </li>
                    <li>
                        Before a match begins, participating teams must:
                        <ul>
                            <li>
                                Present their robot in the staging area, adjacent to the arena, before the scheduled
                                close of staging time. The staging area will be clearly marked on the day.
                            </li>
                            <li>
                                Attach a <a href="#flag-specification">robot flag</a>. Robot flags will be provided by
                                SourceBots officials in the staging area.
                            </li>
                            <li>
                                Place their robot in the starting area that they are assigned. The robot must be placed
                                such that it is entirely within this starting area, with no parts overhanging its
                                boundary. Its orientation does not matter.
                            </li>
                            <li>
                                Vacate the arena 40 seconds before the scheduled start time. During the 40 second period
                                prior to the start of the match there must be no interaction with the robot.
                            </li>
                            <li>Follow the directions of the match officials.</li>
                        </ul>
                        Teams that fail to comply with these rules - such as by arriving late - may forfeit the match,
                        at the discretion of the judge.
                    </li>
                    <li>
                        The game is played between <strong>two</strong> robots.
                    </li>
                    <li>
                        Each match lasts for <strong>150</strong> seconds.
                    </li>
                    <li>Robots will be started by, or at the direction of, match officials.</li>
                    <li>
                        Game points will be awarded as follows:
                        <ol type="a">
                            <li>
                                <strong>1</strong> point is awarded each time a robot crosses a scoring line in the
                                anti-clockwise direction.
                            </li>
                            <li>
                                Robots can pick up tin cans which are in the track. For every can a robot is carrying
                                when it crosses a scoring line, the number of points awarded is <strong>increased by 1</strong>
                                .
                                <br />
                                For example, a robot carrying two cans is awarded 3 points.
                            </li>
                            <li>
                                At the end of each lap - defined as the seventh scoring line crossed in a forward
                                direction, and then every sixth scoring line crossed in a forward direction thereafter -
                                a robot is awarded an additional <strong>4</strong> points above the points it would
                                normally get for the crossing.
                            </li>
                            <li>
                                A robot is deemed to have passed a scoring line when the back of the robot passes the
                                line.
                            </li>
                            <li>
                                If a robot passes backwards (i.e: clockwise) over any scoring line it must "undo" these
                                before any further forwards line crossings will be counted.
                            </li>
                            <li>
                                At the end of a match, each robot is awarded <strong>2</strong> additional points for
                                each tin can it is carrying.
                            </li>
                        </ol>
                    </li>
                    <li>At the end of the match the robot with the most points wins.</li>
                    <li>
                        The arena is a square of the design specified in{" "}
                        <a href="#specifications">the specifications section</a>.
                    </li>
                </ol>
            </div>
        </section>
    );
}

