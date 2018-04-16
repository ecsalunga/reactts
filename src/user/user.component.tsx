import * as React from 'react';
import './user.component.css';

interface IParam {
    Count: number;
}

export class UserComponent extends React.Component<IParam> {
    private Extra: JSX.Element[];

    constructor(props: IParam) {
        super(props);
        this.Extra = new Array<JSX.Element>();
        for(let x = 0; x < props.Count; x++) {
            this.Extra.push(<div>extra { x + 1 }</div>);
        }
    }

    public render() {
        return <div>
            <div className="header">Emmanuel </div>{ this.Extra }
        </div>;
    }
}