import React from 'react';


type MyState = {
    nickname: string;
    nom: string;
    prenom: string;
    sexe: string;
    babyfoot: boolean;
    billard: boolean;
};
export class Registration extends React.Component<{}, MyState> {

    state = { nickname: '', nom: '', prenom: '', sexe: 'H', babyfoot: false, billard: false };

    handleNicknameChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ nickname: event.currentTarget.value });
    }

    handleNomChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ nom: event.currentTarget.value });
    }

    handlePrenomChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ prenom: event.currentTarget.value });
    }

    handleSexeChange(event: React.FormEvent<HTMLSelectElement>) {
        this.setState({ sexe: event.currentTarget.value });
    }

    handleBabyfootChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ babyfoot: event.currentTarget.checked });
    }

    handleBillardChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ billard: event.currentTarget.checked });
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return <form onSubmit={(e) => this.handleSubmit(e)
        } >
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
        </form >;
    }

}