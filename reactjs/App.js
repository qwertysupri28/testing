import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

function App() {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/cities')
            .then(response => setCities(response.data))
            .catch(error => console.error('Error fetching cities:', error));
    }, []);

    return (
        <MapContainer center={[20, 77]} zoom={5} style={{ height: '100vh', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {cities.map(city => (
                <Marker key={city.name} position={[city.latitude, city.longitude]}>
                    <Popup>{city.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default App;