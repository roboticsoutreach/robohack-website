import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./rules.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import GameRules from "../components/rules/gameRules";
import Regulations from "../components/rules/regulations";
import Specifications from "../components/rules/specifications";
import CompStructure from "../components/rules/compStructure";
import Sponsors from "../components/rules/sponsors";

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

            <Sponsors />

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

            <GameRules />
            <Regulations />
            <Specifications />
            <CompStructure />
        </Layout>
    );
}

