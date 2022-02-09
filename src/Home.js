import React from 'react'
import { Link} from 'react-router-dom'
import './Home.css'
import vault from "./images/vault.png"

function Home() {


    return (
        <div className="home">
            <div className="home__left">
                <div className="home__leftLocker">
                    <h1>Credential Locker</h1>
                    <h3>Vaults found: 12</h3>
                </div>
                <div className="home__leftLocker">
                    <h1>Bank Details Locker</h1>
                    <h3>Vaults found: 12</h3>
                </div>
                <div className="home__leftLocker">
                    <h1>Media Locker</h1>
                    <h3>Vaults found: 12</h3>
                </div>
            </div>
            <div className="home__right">
                <img src={vault} alt="vault"/>
            </div>
        </div>
    )
}

export default Home
