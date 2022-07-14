import Head from 'next/head'
import 'bulma/css/bulma.css'
import styles from '../styles/VendingMachine.module.css'

export default function vendingMachine() {
    return (
    <div>
        <Head>
            <title>Vending Machine App</title>
            <meta name="description" content="A Blockchain vending machine app" />
        </Head>
        <nav className="navbar">
            <div className="container">
                <div ClassName="navbar-brand">
                    <h1> Blockchain Vending Machine </h1>
                </div>
                <div className="navbar-end">
                    <button className="button is-primary">Connect Wallet</button>
                </div>
            </div>
        </nav>

    </div>
    )
}