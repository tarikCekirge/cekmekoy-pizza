import React from 'react'

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 10
    const closeHour = 24
    const isOpen = hour >= openHour && hour <= closeHour
    return (

        <footer>
            <div style={{ textAlign: "center" }}>
                <p style={{ marginBottom: ".5rem" }}>{isOpen ? 'Açık' : "Kapalı"} </p>
                <p>Hafta içi:10:00-00:00 <br /> Hafta sonu: 10:00-00:00</p>
            </div>
        </footer>
    )
}

export default Footer