import React from 'react';

export class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = { nickname: '', nom: '', prenom: '', sexe: 'H', babyfoot: false, billard: false };
    }

    handleChange(event) {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({ [event.target.name]: value });
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return <form onSubmit={(e) => this.handleSubmit(e)}>
            <p>
                Nickame
          <input name="nickname" type="text" value={this.state.nickname} onChange={(e) => this.handleChange(e)} />
            </p>
            <p>
                Nom
            <input name="nom" type="text" value={this.state.nom} onChange={(e) => this.handleChange(e)} />
            </p>
            <p>
                Prénom
            <input name="prenom" type="text" value={this.state.prenom} onChange={(e) => this.handleChange(e)} />
            </p>
            <p>
                Sexe
                <select name="sexe" value={this.state.sexe} onChange={(e) => this.handleChange(e)}>
                    <option value="H">Homme</option>
                    <option value="F">Femme</option>
                </select>
            </p>
            <p>
                babyfoot
            <input name="babyfoot" type="checkbox" checked={this.state.babyfoot} onChange={(e) => this.handleChange(e)} />
                billard
            <input name="billard" type="checkbox" checked={this.state.billard} onChange={(e) => this.handleChange(e)} />
            </p>
            <input name="nickname" type="submit" value="Inscrire" />
        </form>;
    }

}
