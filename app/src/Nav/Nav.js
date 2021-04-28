import {Component} from 'react';
import './Nav.css'

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <button onClick={e => this.props.generate(e)}>Generate</button>
            </nav>
        )
    }
}