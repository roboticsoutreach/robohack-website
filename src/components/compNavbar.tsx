import clsx from "clsx";
import Link from "@docusaurus/Link";

import "./compNavbar.css";

export default function CompNavbar() {
    return (
        <section>
            <ul className="navbar">
                <li>
                    <Link to={"/comp/schedule"}>Schedule</Link>
                </li>
                <li>
                    <Link to={"/comp/leaderboard"}>League Leaderboard</Link>
                </li>
            </ul>
        </section>
    );
}

