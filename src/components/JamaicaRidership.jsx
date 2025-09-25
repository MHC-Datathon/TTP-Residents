import React from "react";
import "./JamaicaRidership.css";
import JR from "../../JamaicaMap.webp";
import G1 from "../../GraphJ1.webp";
import G2 from "../../GraphJ2.webp";

const JamaicaRidership = () => {
    return (
        <div className="jamaica-ridership">
            <header>
                <h1>The effects of the distrbution of bus lane enforcement in Jamaica.</h1>
            </header>

            <div>
                <h2>Why is a specific area important?</h2>
                <p>
                    We already know that the allocation of city resources for bus lane enforcement is not
                    uniform, but right now I don't wanna compare boroughs, but compare bus routes in one region.
                    That region is Jamaica, Queens. Jamaica is a major transit hub in Queens,
                    and we can observe how the lane enforcements are being used in the following picture.
                </p>
                <p>
                    By choosing a specific area, we can better understand how the distribution of bus lane enforcement
                    impacts bus service quality and community needs in that particular region. By observing these changes
                    on a small scale, we can understand them easily and apply the same strategy on a larger scale.
                </p>
                <img src={JR} alt="Jamaica Map" />
            </div>

            <div>
                <h2>Observing routes that use the enforcments</h2>
                <p>
                    In the following graph, we can observe that the average number of riders and transfers is higher than the ones
                    in the second graph, one of the reasons for that is that the routes in this graph use ACE and ABLE. Because these
                    enforcements are used, the bus drivers can achieve their goals more efficiently, which creates a better service
                    and experience for the riders.
                </p>
                <div className="image-row">
                    <img src={G1} alt="GraphJ1" />
                    <img src={G2} alt="GraphJ2" />
                </div>

            </div>

        </div>
    );
};

export default JamaicaRidership;
