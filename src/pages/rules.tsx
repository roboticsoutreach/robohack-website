import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./rules.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";

export default function Rules() {
    return (
        <Layout title={"Rules"}>
            <header className={clsx("hero hero--primary", styles.heroBanner)}>
                <div className="container">
                    <Heading as={"h1"} className={"hero__title"}>
                        Tin Can Rally
                    </Heading>

                    <Heading as={"h2"} className={"hero__subtitle"}>
                        RoboHack 2024
                    </Heading>
                </div>
            </header>

            <section className={clsx(styles.section)} id="sponsors">
                <div className={clsx("continer", styles.sponsors)}>
                    <Link to={"https://southampton.ac.uk"}>
                        <img className={styles.sponsorLogo} src={"/img/uos-logo.png"} />
                    </Link>
                    <Link to={"https://ooznest.co.uk"}>
                        <img className={styles.sponsorLogo} src={"/img/ooznest-logo.png"} />
                    </Link>
                </div>
            </section>

            <section className={clsx(styles.section, styles.sectionGrey)}>
                <div className={clsx(styles.container)}>
                    <h1>Table of Contents</h1>

                    <ol>
                        <li>
                            <a href="#game-rules">Game Rules</a>
                        </li>
                        <li>
                            <a href="#regulations">Regulations</a>
                        </li>
                        <li>
                            <a href="#specifications">Specifications</a>
                        </li>
                        <li>
                            <a href="#comp-structure">Competition Structure</a>
                        </li>
                    </ol>
                </div>
            </section>

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
                                    Attach a <a href="#flag-specification">robot flag</a>. Robot flags will be provided
                                    by SourceBots officials in the staging area.
                                </li>
                                <li>
                                    Place their robot in the starting area that they are assigned. The robot must be
                                    placed such that it is entirely within this starting area, with no parts overhanging
                                    its boundary. Its orientation does not matter.
                                </li>
                                <li>
                                    Vacate the arena 40 seconds before the scheduled start time. During the 40 second
                                    period prior to the start of the match there must be no interaction with the robot.
                                </li>
                                <li>Follow the directions of the match officials.</li>
                            </ul>
                            Teams that fail to comply with these rules - such as by arriving late - may forfeit the
                            match, at the discretion of the judge.
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
                                    Robots can pick up tin cans which are in the track. For every can a robot is
                                    carrying when it crosses a scoring line, the number of points awarded is{" "}
                                    <strong>doubled</strong>.
                                    <br />
                                    For example, a robot carrying two cans is awarded four points.
                                </li>
                                <li>
                                    At the end of each lap - defined as the seventh scoring line crossed in a forward
                                    direction, and then every sixth scoring line crossed in a forward direction
                                    thereafter - a robot is awarded an additional <strong>4</strong> points above the
                                    points it would normally get for the crossing.
                                </li>
                                <li>
                                    A robot is deemed to have passed a scoring line when the back of the robot passes
                                    the line.
                                </li>
                                <li>
                                    If a robot passes backwards (i.e: clockwise) over any scoring line it must "undo"
                                    these before any further forwards line crossings will be counted.
                                </li>
                                <li>
                                    At the end of a match, each robot is awarded <strong>2</strong> additional points
                                    for each tin can it is carrying.
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

            <section className={clsx(styles.section, styles.sectionGrey)}>
                <div className={clsx(styles.container)}>
                    <h2>
                        <a className="anchor" id="regulations"></a>Regulations
                    </h2>
                    <ol>
                        <li>All robots must be safe.</li>
                        <li>The judge's decision is final.</li>
                        <li>Teams must conduct themselves within the principles of good sporting conduct.</li>
                        <li>
                            Any assistance from Smallpeice Trust staff and volunteers is provided without guarantees.
                        </li>
                        <li>No remote control systems or radio transmitters or receivers are permitted.</li>
                        <li>While accidental bumps and scrapes are inevitable, the sport is non-contact.</li>
                        <li>Robots must pass a safety inspection before they can compete.</li>
                        <li>Robots must have a mass of less than 10kg.</li>
                        <li>
                            Robots must not intentionally damage anything inside the arena. At the discretion of the
                            judge, teams who deliberately engage in collisions or take insufficient precautions against
                            collisions may be penalised, including disqualification from rounds and deduction of league
                            points.
                        </li>
                        <li>Robots must fit within a 500mm ⨉ 500mm ⨉ 500mm cube at the start of each match.</li>
                        <li>
                            Robots must fit within a 500mm ⨉ 750mm ⨉ 750mm cube, with one 750mm axis vertical, at all
                            times during each match.
                        </li>
                        <li>Robots must not deliberately drop any part of themselves onto the arena.</li>
                        <li>Robots must have all electronics securely mounted and easily removable.</li>
                        <li>
                            Robots must provide adequate protection to the batteries they use, including protection from
                            mechanical damage.
                        </li>
                        <li>
                            Robots must not have any devices designed to produce noise except where included in the
                            SourceBots kit.
                        </li>
                        <li>Robots must not have any fiducial markers visible to other robots.</li>
                        <li>Robots must have a spare USB slot accessible to match officials.</li>
                        <li>
                            Robots must have a power switch, obvious and on top, which will completely immobilise the
                            robot.
                        </li>
                        <li>Robots must not have any sharp edges or points.</li>
                        <li>
                            Robots must have a <a href="#flag-specification">flag mounting</a>.
                        </li>
                    </ol>
                    <p>
                        Violations of these regulations will result in penalties, including deductions of points or
                        outright disqualification.
                    </p>
                </div>
            </section>

            <section className={clsx(styles.section)}>
                <div className={clsx(styles.container)}>
                    <h2>
                        <a className="anchor" id="specifications"></a>Specifications
                    </h2>
                    <h3>
                        <a className="anchor" id="marker-specification"></a>Markers
                    </h3>
                    <p>
                        The arena is labelled with fiducial markers. Each marker pattern encodes a number. Each marker
                        number is associated with a particular feature within the arena, and also has an associated
                        size.
                    </p>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Marker Numbers</th>
                                <th scope="col">Marker Size (mm)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Arena boundary</td>
                                <td>0 - 7</td>
                                <td>100</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>The markers can be printed on a black-and-white printer.</p>
                    <p>
                        Sixteen arena wall markers are positioned around the arena as shown in the{" "}
                        <a href="#arena-specification">arena specification</a>. Marker codes are mirrored on each side
                        of the arena.
                    </p>
                    <p>Wall markers are placed such that the bottom of the marker is 20 ±5mm from the arena floor.</p>
                    <h3>
                        <a className="anchor" id="arena-specification"></a>Arena
                    </h3>
                    <img src="/img/rules/2024/fig-arena.svg" alt="Arena diagram" width="90%" height="auto" />
                    <ol>
                        <li>
                            The above figure represents, to scale, a birds eye view of the arena. The arena is{" "}
                            <strong>5.4m</strong> square.
                        </li>
                        <li>The floor of the arena is covered with a closed-loop, short pile carpet.</li>
                        <li>
                            The perimeter of the arena floor is delimited by the arena wall, which has a minimum height
                            of 100mm.
                        </li>
                        <li>
                            Starting areas are 1000 ±50mm squares and will be marked by tape which is considered part of
                            the starting area.
                        </li>
                        <li>Starting area 1 is at the top of the arena diagram, and area 2 is at the bottom.</li>
                        <li>
                            The green boxes denote a robot in their start locations, shown in yellow. Robots may start
                            anywhere inside their starting area facing any direction.
                        </li>
                        <li>The inner walls of the arena have a minimum height of 170mm.</li>
                        <li>SourceBots reserves the right to have match officials in the arena during games.</li>
                    </ol>
                    <h3>
                        <a className="anchor" id="flag-specification"></a>Robot flags
                    </h3>
                    <img src="/img/rules/2024/fig-flag.svg" alt="Robot flag" width="40%" height="auto" />
                    <ol>
                        <li>
                            A "robot flag" is a removable identifier that will be attached to a robot throughout a
                            match. It allows spectators to easily associate a robot with its starting area.
                        </li>
                        <li>Flags are not counted when considering the starting size of the robot.</li>
                        <li>The identifying part of the robot flag must be visible when attached to the mount.</li>
                        <li>
                            The mounting cylinder must be permanently affixed to the main chassis of a robot, and
                            vertical when the robot is in its typical stopped position.
                        </li>
                    </ol>
                    <h3>
                        <a className="anchor" id="can-specification"></a>Cans
                    </h3>
                    <ol>
                        <li>Cans are cylindrical metallic containers weighing 350g ±20g.</li>
                        <li>Cans are 67mm ±3mm in diameter with a height of 100mm ±5mm.</li>
                        <li>
                            Cans will be arranged as shown in the <a href="#arena-specification">arena specification</a>
                            .
                        </li>
                        <li>Cans are electrically conductive and ferromagnetic.</li>
                    </ol>
                </div>
            </section>

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
                            If a match ends in a tie, robots will be awarded the average of the points that their
                            combined positions would be awarded, in this case 7 (since this is (8 + 6) &divide; 2).
                        </li>
                        <li>
                            At the end of the leagues, positions in the leagues are used to seed a knockout. This will
                            be used to determine the final 1<sup>st</sup>, 2<sup>nd</sup> and 3<sup>rd</sup> awards.
                        </li>
                        <li>
                            In the event of a tie in a knockout match, the team that ranked highest in the league will
                            go through.
                        </li>
                    </ol>
                </div>
            </section>
        </Layout>
    );
}

