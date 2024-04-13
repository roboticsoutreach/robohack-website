import styles from "@site/src/pages/rules.module.css";
import clsx from "clsx";

export default function Regulations() {
    return (
        <section className={clsx(styles.section, styles.sectionGrey)}>
            <div className={clsx(styles.container)}>
                <h2>
                    <a className="anchor" id="regulations"></a>Regulations
                </h2>
                <ol>
                    <li>All robots must be safe.</li>
                    <li>The judge's decision is final.</li>
                    <li>Teams must conduct themselves within the principles of good sporting conduct.</li>
                    <li>Any assistance from Smallpeice Trust staff and volunteers is provided without guarantees.</li>
                    <li>No remote control systems or radio transmitters or receivers are permitted.</li>
                    <li>While accidental bumps and scrapes are inevitable, the sport is non-contact.</li>
                    <li>Robots must pass a safety inspection before they can compete.</li>
                    <li>Robots must have a mass of less than 10kg.</li>
                    <li>
                        Robots must not intentionally damage anything inside the arena. At the discretion of the judge,
                        teams who deliberately engage in collisions or take insufficient precautions against collisions
                        may be penalised, including disqualification from rounds and deduction of league points.
                    </li>
                    <li>Robots must fit within a 500mm ⨉ 500mm ⨉ 500mm cube at the start of each match.</li>
                    <li>
                        Robots must fit within a 500mm ⨉ 750mm ⨉ 750mm cube, with one 750mm axis vertical, at all times
                        during each match.
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
                        Robots must have a power switch, obvious and on top, which will completely immobilise the robot.
                    </li>
                    <li>Robots must not have any sharp edges or points.</li>
                    <li>
                        Robots must have a <a href="#flag-specification">flag mounting</a>.
                    </li>
                </ol>
                <p>
                    Violations of these regulations will result in penalties, including deductions of points or outright
                    disqualification.
                </p>
            </div>
        </section>
    );
}

