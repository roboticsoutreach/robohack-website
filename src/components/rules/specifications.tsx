import styles from "@site/src/pages/rules.module.css";
import clsx from "clsx";

export default function Specifications() {
    return (
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
                    number is associated with a particular feature within the arena, and also has an associated size.
                </p>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Marker Numbers</th>
                            <th scope="col">Marker Size (mm)</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                <p>The markers can be printed on a black-and-white printer.</p>
                <p>Wall markers are placed such that the bottom of the marker is 20 ±5mm from the arena floor.</p>
                <h3>
                    <a className="anchor" id="arena-specification"></a>Arena
                </h3>
                {
                    //<img src="/img/rules/2024/fig-arena.svg" alt="Arena diagram" width="90%" height="auto" />
                }
                <ol>
                    <li>
                        The above figure represents, to scale, a birds eye view of the arena. The arena is{" "}
                        <strong>5.4m</strong> square.
                    </li>
                    <li>The floor of the arena is covered with a closed-loop, short pile carpet.</li>
                    <li>
                        The perimeter of the arena floor is delimited by the arena wall, which has a minimum height of
                        100mm.
                    </li>
                    <li>
                        Starting zones are 1000 ±50mm squares and will be marked by tape which is considered part of the
                        starting zone.
                    </li>
                    <li>Starting zone 0 is on the left of the arena diagram, and zone 1 is on the right.</li>
                    <li>
                        The green boxes denote a robot in their start locations, shown in yellow. Robots may start
                        anywhere inside their starting area facing any direction.
                    </li>
                    <li>The inner walls of the arena have a minimum height of 170mm.</li>
                    <li>SRO reserves the right to have match officials in the arena during games.</li>
                </ol>
                <h3>
                    <a className="anchor" id="flag-specification"></a>Robot flags
                </h3>
                <img src="/img/rules/2024/fig-flag.svg" alt="Robot flag" width="40%" height="auto" />
                <ol>
                    <li>
                        A "robot flag" is a removable identifier that will be attached to a robot throughout a match. It
                        allows spectators to easily associate a robot with its starting area.
                    </li>
                    <li>Flags are not counted when considering the starting size of the robot.</li>
                    <li>The identifying part of the robot flag must be visible when attached to the mount.</li>
                    <li>
                        The mounting cylinder must be permanently affixed to the main chassis of a robot, and vertical
                        when the robot is in its typical stopped position.
                    </li>
                </ol>
                <h3>
                    <a className="anchor" id="can-specification"></a>Cans
                </h3>
                <ol>
                    <li>Cans are cylindrical metallic containers weighing 350g ±20g.</li>
                    <li>Cans are 67mm ±3mm in diameter with a height of 100mm ±5mm.</li>
                    <li>
                        Cans will be arranged as shown in the <a href="#arena-specification">arena specification</a>.
                    </li>
                    <li>Cans are electrically conductive and ferromagnetic.</li>
                </ol>
            </div>
        </section>
    );
}

