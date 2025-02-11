import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./rules.module.css";
import clsx from "clsx";
import Content from "../components/rules/content.mdx";

export default function Rules() {
    return (
        <Layout title="Rules">
            <header className={clsx("hero hero--primary", styles.heroBanner)}>
                <div className="container">
                    <Heading as="h1" className="hero__title">
                        Nuclear Cleanup
                    </Heading>

                    <Heading as="h2" className="hero__subtitle">
                        RoboHack 2025
                    </Heading>
                </div>
            </header>

            <section className={clsx(styles.section)}>
                <div className={clsx(styles.container)}>
                    <Content />
                </div>
            </section>
        </Layout>
    );
}

