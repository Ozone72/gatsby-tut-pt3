import React from 'react';
import { Link } from 'gatsby';

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default function Layout({ children }) {
    return (
        <div style={{ margin:`3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
            <header style={{ marginBottom: `1.5rem`}}>
                <ul style={{ listStyle: `none`, float: `right` }}>
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/about/">About</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                </ul>
                <Link to="/" style={{ textShadow: `none`, backgroundImage: 'none' }}>
                    <h3 style={{ display: `inline`}}>oZ0n3 Pluggin' Along.  Tortoise 4 Life.</h3>
                </Link>
            </header>
            {children}
        </div>
    )
}