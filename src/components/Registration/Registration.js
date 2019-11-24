import React from 'react';

export class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = { nickname: '', nom: '', prenom: '', sexe: 'H', babyfoot: false, billard: false };
    }

    handleNicknameChange(event) {
        this.setState({ nickname: event.target.value });
    }

    handleNomChange(event) {
        this.setState({ nom: event.target.value });
    }

    handlePrenomChange(event) {
        this.setState({ prenom: event.target.value });
    }

    handleSexeChange(event) {
        this.setState({ sexe: event.target.value });
    }

    handleBabyfootChange(event) {
        this.setState({ babyfoot: event.target.checked });
    }

    handleBillardChange(event) {
        this.setState({ billard: event.target.checked });
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return <form onSubmit={(e) => this.handleSubmit(e)}>
            <p>
                Nickame
          <input type="text" value={this.state.nickname} onChange={(e) => this.handleNicknameChange(e)} />
            </p>
            <p>
                Nom
            <input type="text" value={this.state.nom} onChange={(e) => this.handleNomChange(e)} />
            </p>
            <p>
                Prénom
            <input type="text" value={this.state.prenom} onChange={(e) => this.handlePrenomChange(e)} />
            </p>
            <p>
                Sexe
                <select value={this.state.sexe} onChange={(e) => this.handleSexeChange(e)}>
                    <option value="H">Homme</option>
                    <option value="F">Femme</option>
                </select>
            </p>
            <p>
                babyfoot
            <input type="checkbox" checked={this.state.babyfoot} onChange={(e) => this.handleBabyfootChange(e)} />
                billard
            <input type="checkbox" checked={this.state.billard} onChange={(e) => this.handleBillardChange(e)} />
            </p>
            <input type="submit" value="Inscrire" />
        </form>;
    }

}
