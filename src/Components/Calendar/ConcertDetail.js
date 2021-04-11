import React, { useEffect, useState} from 'react';
// import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

import SeatSelector from '../Modals/SeatSelector'

function ConcertDetail() {
    const [concert, setConcert] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const params = useParams();

    const id = params.id;

    useEffect(() => {
        fetch(`http://localhost:3000/concerts/${id}`)
        .then((r) => r.json())
        .then(concert => {
            setConcert(concert)
            setIsLoaded(true)
        })
    }, [id])

    if (!isLoaded) return <h2>Loading...</h2>;

    const { 
            title, 
                // time, 
                // price_range, 
                // event_info, 
                // image_url 
        } = concert;

    return (
        <div>
            <div>
            {title}
            {/* {time} */}
            {/* {price_range} */}
            {/* {event_info} */}
            {/* <img src={image_url} alt={title}/> */}
            {/* <nav>
                <Link className="form" to="/"> Buy Tickets </Link>
            </nav> */}
            </div>
            <SeatSelector />
        </div>
        
    )
}

export default ConcertDetail