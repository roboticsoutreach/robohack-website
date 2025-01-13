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
                        The objective of the game, called <strong>Nuclear Cleanup</strong>, is to <b>???</b>.
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
                                marshals in the staging area.
                            </li>
                            <li>
                                Place their robot in the starting area that they are assigned. The robot must be placed
                                such that it is entirely within this starting area, with no parts overhanging its
                                boundary. Its orientation does not matter.
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
                                <b>???</b>
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

