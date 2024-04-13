import styles from "@site/src/pages/rules.module.css";
import clsx from "clsx";

export default function CompStructure() {
    return (
        <section className={clsx(styles.section, styles.sectionGrey)}>
            <div className={clsx(styles.container)}>
                <h2>
                    <a className="anchor" id="comp-structure"></a>Competition Structure
                </h2>
                <p>
                    The competition is structured in two phases: the <strong>main league</strong> and the{" "}
                    <strong>knockout</strong>.
                </p>
                <h3>
                    <a className="anchor" id="matches"></a>Matches
                </h3>
                <ol>
                    <li>
                        At the end of a game, league points will be awarded as follows:
                        <ul>
                            <li>
                                The team with the most game points will be awarded 8 points towards the competition
                                league.
                            </li>
                            <li>The team with the second most will be awarded 6.</li>
                            <li>
                                Teams whose robot was not entered into the round, or who were disqualified from the
                                round, will be awarded no points.
                            </li>
                        </ul>
                    </li>
                    <li>
                        If a match ends in a tie, robots will be awarded the average of the points that their combined
                        positions would be awarded, in this case 7 (since this is (8 + 6) &divide; 2).
                    </li>
                    <li>
                        At the end of the leagues, positions in the leagues are used to seed a knockout. This will be
                        used to determine the final 1<sup>st</sup>, 2<sup>nd</sup> and 3<sup>rd</sup> awards.
                    </li>
                    <li>
                        In the event of a tie in a knockout match, the team that ranked highest in the league will go
                        through.
                    </li>
                </ol>
            </div>
        </section>
    );
}

