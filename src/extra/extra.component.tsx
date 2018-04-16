import * as React from 'react';

interface IParam {
    Name: string;
    Count: number;
}

export class ExtraComponent extends React.Component<IParam> {
    constructor(props: IParam) {
        super(props);
    }

    public render() {
        return <div>{ this.props.Name } { this.props.Count }</div>;
    }
}