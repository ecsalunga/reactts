import * as React from 'react';

import { ExtraComponent } from '../extra/extra.component';
import './user.component.css';

interface IParam {
    Count: number;
}

interface IState {
    Display: string;
    Count: number;
}

export class UserComponent extends React.Component<IParam, IState> {
    constructor(props: IParam) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {Display: "Emmanuel", Count: this.props.Count};
    }

    public onClick() {
        this.setState( {Display: "Test", Count: 7});
    }

    public Items() {
        const rows = [];
        
        for(let x = 0; x < this.state.Count; x++) {
            rows.push(<ExtraComponent Name={this.state.Display} Count={x} />);
        }

        return rows;
    }

    public render() {
        return <div>
            <div onClick={this.onClick} className="header">Emmanuel</div>{ this.Items() }
        </div>;
    }
}