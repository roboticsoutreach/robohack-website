import Link from "@docusaurus/Link";
import styles from "@site/src/pages/rules.module.css";
import clsx from "clsx";

export default function Sponsors() {
    return (
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
    );
}

