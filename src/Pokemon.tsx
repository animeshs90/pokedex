import React from 'react';

interface IProps { };
interface IState {
    Users: Array<{}>;
};

class Pokemon extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            Users: []
        }
    } 

    public componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => {
                this.setState({ Users: users });
            })
    }

    public render() {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Pokemon Rollodex</h1>
                {this.state.Users.map((users: any) => {
                    return (<p style={{ textAlign: 'center' }} key={users['id']}>{users['name']}</p>)
                })}
            </div>
        )
    }
}
export default Pokemon;

