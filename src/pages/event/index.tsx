import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import { faClock, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EventIndex() {
    return (
        <Layout title="Event">
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
                                <FontAwesomeIcon icon={faClock} /> 1st March 2025, 10:00 - 2nd March 2025, 15:00
                                <br />
                                <FontAwesomeIcon icon={faMapLocation} /> Building 42, Highfield Campus, University of
                                Southampton
                            </p>

                            <p>Signage will be up throughout the building to guide participants to the right place.</p>

                            <h2>Media</h2>
                            <p>
                                Photos and videos will be taken at this event. If you do not wish to be included in
                                this, please let a member of event crew know so that we can accommodate this.
                            </p>
                        </div>

                        <div className="col col--6">
                            <h2>Schedule</h2>

                            <p>
                                Doors will open at 10:00 on 1st March 2025, with the event starting at 10:30. It will
                                begin with a presentation in which we will dispense useful information about the event.
                            </p>

                            <div className="row">
                                <div className="col col--6">
                                    <h3>Day 1 (Saturday 1st March 2025)</h3>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Time</th>
                                                <th>Activity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>10:00</td>
                                                <td>Doors open</td>
                                            </tr>
                                            <tr>
                                                <td>10:30</td>
                                                <td>Welcome presentation & start</td>
                                            </tr>
                                            <tr>
                                                <td>18:00</td>
                                                <td>Dinner</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col col--6">
                                    <h3>Day 2 (Sunday 2nd March 2025)</h3>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Time</th>
                                                <th>Activity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>09:20</td>
                                                <td>Lightning talks & competition briefing</td>
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
                                                <td>12:45</td>
                                                <td>Knockouts & Finals</td>
                                            </tr>
                                            <tr>
                                                <td>14:00</td>
                                                <td>Prizegiving & robot deconstruction</td>
                                            </tr>
                                            <tr>
                                                <td>14:30</td>
                                                <td>End of event</td>
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
