import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import CompNavbar from "@site/src/components/compNavbar";
import Layout from "@theme/Layout";
import { useEffect, useState } from "react";

export default function Leaderboard() {
    const { siteConfig } = useDocusaurusContext();

    const [teams, setTeams] = useState([]);
    const [lastScoredMatch, setLastScoredMatch] = useState(null);

    useEffect(() => {
        fetch(`${siteConfig.customFields.srcompApiUrl}/teams`)
            .then((response) => response.json())
            .then((data) => {
                setTeams(
                    Object.keys(data.teams)
                        .map((tla) => {
                            return {
                                tla,
                                ...data.teams[tla],
                            };
                        })
                        .sort((a, b) => b.scores.league - a.scores.league)
                );
            });
    }, []);

    useEffect(() => {
        fetch(`${siteConfig.customFields.srcompApiUrl}/matches`)
            .then((response) => response.json())
            .then((data) => {
                setLastScoredMatch(data.last_scored);
            });
    }, []);

    return (
        <Layout title={"League Leaderboard"}>
            <CompNavbar />

            <main>
                <div className="container" style={{ marginTop: "2rem" }}>
                    <div className="row" style={{ display: "flex", justifyContent: "center" }}>
                        <p>
                            {lastScoredMatch === null
                                ? "No scores have been entered for any matches yet."
                                : `Up to date with scores from match ${lastScoredMatch}.`}
                        </p>
                    </div>

                    <div className="row" style={{ display: "flex", justifyContent: "center" }}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Position</th>
                                    <th>TLA</th>
                                    <th>Team Name</th>
                                    <th>Game Points</th>
                                    <th>League Points</th>
                                </tr>
                            </thead>

                            <tbody>
                                {teams.map((team, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{team.tla}</td>
                                        <td>{team.name}</td>
                                        <td>{team.scores.game}</td>
                                        <td>{team.scores.league}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

