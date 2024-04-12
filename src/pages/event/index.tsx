import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import { faClock, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CompetitionIndex() {
    return (
        <Layout title={"Competition"}>
            <main>
                <div className="container" style={{ marginTop: "2rem" }}>
                    <div className="row">
                        <div className="col col--10 col--offset-1">
                            <Heading as="h1">Event</Heading>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col--4 col--offset-1">
                            <h2>Details</h2>
                            <p>
                                <FontAwesomeIcon icon={faClock} /> 4th May 2024, 10:00 - 5th May 2024, 14:30
                                <br />
                                <FontAwesomeIcon icon={faMapLocation} /> Building 177, Boldrewood Campus, University of
                                Southampton
                            </p>

                            <p>Signage will be up throughout the building to guide participants to the right place.</p>

                            <h2>Media</h2>
                            <p>
                                Photos and videos will be taken at this event. If you do not wish to be included in
                                this, please let a volunteer know so that we can accommodate this.
                            </p>
                        </div>

                        <div className="col col--6">
                            <h2>Schedule</h2>

                            <p>
                                Doors will open at 09:30 on 4th May 2024, with the event starting at 10:00. It will
                                begin with a briefing in which we will dispense useful information about the event. The
                                slides for this briefing will be shared on the day, and it will be recorded on a
                                best-effort basis.
                            </p>

                            <div className="row">
                                <div className="col col--6">
                                    <h3>Day 1 (Saturday 4th May 2024)</h3>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Time</th>
                                                <th>Activity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>09:30</td>
                                                <td>Doors open</td>
                                            </tr>
                                            <tr>
                                                <td>10:00</td>
                                                <td>Welcome Presentation</td>
                                            </tr>
                                            <tr>
                                                <td>10:45</td>
                                                <td>Robot building</td>
                                            </tr>
                                            <tr>
                                                <td>12:30</td>
                                                <td>Lunch</td>
                                            </tr>
                                            <tr>
                                                <td>13:30</td>
                                                <td>Robot building</td>
                                            </tr>
                                            <tr>
                                                <td>18:00</td>
                                                <td>Dinner</td>
                                            </tr>
                                            <tr>
                                                <td>19:30</td>
                                                <td>Robot building</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col col--6">
                                    <h3>Day 2 (Sunday 5th May 2024)</h3>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Time</th>
                                                <th>Activity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>08:00</td>
                                                <td>Breakfast</td>
                                            </tr>
                                            <tr>
                                                <td>10:00</td>
                                                <td>League</td>
                                            </tr>
                                            <tr>
                                                <td>12:00</td>
                                                <td>Lunch</td>
                                            </tr>
                                            <tr>
                                                <td>13:00</td>
                                                <td>Knockouts & Finals</td>
                                            </tr>
                                            <tr>
                                                <td>14:00</td>
                                                <td>Prizegiving & Robot Deconstruction</td>
                                            </tr>
                                            <tr>
                                                <td>14:30</td>
                                                <td>End of Event</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

