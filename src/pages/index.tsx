import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>

                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="https://signup.robohack.co.uk"
                        target="_blank"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    return (
        <Layout title={`Home`}>
            <HomepageHeader />
            <main>
                <div className="container padding--lg">
                    <div className="row">
                        <div className="col-12">
                            <h1>What is RoboHack?</h1>

                            <p>
                                RoboHack is a 24-hour hackathon hosted by the{" "}
                                <Link to={"https://roboticsoutreach.org"}>Southampton Robotics Outreach</Link> society
                                at the <Link to={"https://southampton.ac.uk"}>University of Southampton</Link>. Over 24
                                hours, participants work in teams to design, build and program a robot to compete in a
                                non-contact game. The event columinates in a competition where the robots compete
                                against each other to determine the winner.
                            </p>

                            <h1>RoboHack 2024</h1>
                            <p>
                                RoboHack 2024 is taking place from <b>4th May 2024</b> to <b>5th May 2024</b> at the
                                Boldrewood Campus. University of Southampton students are able to sign up{" "}
                                <Link to="https://signup.robohack.co.uk">here</Link>. The event is sponsored by{" "}
                                <Link to={"https://ooznest.co.uk"}>Ooznest</Link>, the manufacturers of the aluminium
                                extrusion used in the event.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

