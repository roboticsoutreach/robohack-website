import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import CompNavbar from "@site/src/components/compNavbar";

export default function Schedule() {
    const { siteConfig } = useDocusaurusContext();

    const [periods, setPeriods] = useState([]);
    const [matches, setMatches] = useState([]);
    const [corners, setCorners] = useState([]);

    useEffect(() => {
        fetch(`${siteConfig.customFields.srcompApiUrl}/matches`)
            .then((response) => response.json())
            .then((data) => {
                setMatches(data.matches);
            });
    }, []);

    useEffect(() => {
        fetch(`${siteConfig.customFields.srcompApiUrl}/periods`)
            .then((response) => response.json())
            .then((data) => {
                setPeriods(data.periods);
            });
    }, []);

    useEffect(() => {
        fetch(`${siteConfig.customFields.srcompApiUrl}/corners`)
            .then((response) => response.json())
            .then((data) => {
                setCorners(Object.values(data.corners));
            });
    }, []);

    return (
        <Layout title={"Match Schedule"}>
            <CompNavbar />
            <main>
                <div className="container" style={{ marginTop: "2rem" }}>
                    <div className="row">
                        <div className="col col--10 col--offset-1">
                            <div className="row">
                                {periods.map((period) => (
                                    <div className="col">
                                        <h1>{period.description}</h1>

                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Match</th>
                                                    <th>Staging</th>
                                                    <th>Time</th>
                                                    {corners.map((corner) => (
                                                        <th>Corner {corner.number}</th>
                                                    ))}
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {matches
                                                    .filter(
                                                        (match) =>
                                                            period.matches.first_num <= match.num &&
                                                            match.num <= period.matches.last_num
                                                    )
                                                    .map((match) => (
                                                        <tr>
                                                            <td>{match.display_name}</td>
                                                            <td>
                                                                {DateTime.fromJSDate(
                                                                    new Date(match.times.staging.opens as string)
                                                                ).toFormat("HH:mm:ss")}
                                                            </td>
                                                            <td>
                                                                {DateTime.fromJSDate(
                                                                    new Date(match.times.slot.start as string)
                                                                ).toFormat("HH:mm:ss")}
                                                            </td>

                                                            {match.teams.map((team) => (
                                                                <td>{team}</td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

