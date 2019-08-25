import React from 'react';

interface IProps {};
interface IState {
    Pokemon: Array<{name:string,pid:number}>;
};

class Pokemon extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            Pokemon: [
                {
                    name: 'Pikachu',
                    pid:1
                },
                {
                    name: 'Charizard',
                    pid:2
                },
                {
                    name: 'Raichu',
                    pid:4
                },
                {
                    name: 'Squirtle',
                    pid:5,
                },
                {
                    name: 'Charminder',
                    pid:6
                }
            ]
        }
    }

    public render() {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Pokemon Rollodex</h1>
                    {this.state.Pokemon.map(Pokemon=>{
                        return(<p style={{textAlign:'center'}} key={Pokemon.pid}>{Pokemon.name}</p>)
                    })}
            </div>
        )
    }
}

export default Pokemon;

