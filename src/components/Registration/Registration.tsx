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


    handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
        let value: string | boolean = event.currentTarget.value;
        if (event instanceof HTMLInputElement && event.currentTarget.type === 'checkbox') {
            value = (event as React.ChangeEvent<HTMLInputElement>).currentTarget.checked;
        }
        if (Object.keys(this.state).includes(event.currentTarget.name)) {
            this.setState({ [event.currentTarget.name]: value } as Pick<MyState, keyof MyState>);
        }
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
            <input type="submit" value="Inscrire" />
        </form >;
    }

}