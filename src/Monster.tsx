import React from 'react';

interface IProps {};
interface IState {
    monsters: Array<{name:string,id:number}>;
};

class Monster extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            monsters: [
                {
                    name: 'Frankenstein',
                    id:1
                },
                {
                    name: 'Dracula',
                    id:2
                },
                {
                    name: 'Zombie',
                    id:4
                },
                {
                    name: 'Porpie',
                    id:5,
                },
                {
                    name: 'Frappy',
                    id:6
                }
            ]
        }
    }

    public render() {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Monster Rollodex</h1>
                    {this.state.monsters.map(monster=>{
                        return(<p style={{textAlign:'center'}} key={monster.id}>{monster.name}</p>)
                    })}
            </div>
        )
    }
}

export default Monster;

