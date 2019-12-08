import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Registration.css';
import { connect } from 'react-redux';
import { addPlayerCall } from './../../actions/PlayerActions';

const Registration = (props) =>
    <Formik
        initialValues={{ nickname: '', nom: '', prenom: '', sexe: 'H', babyfoot: false, billard: false }}
        validationSchema={Yup.object({
            nickname: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            nom: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required')
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
            props.registerPlayer(values);
            setSubmitting(true);
            resetForm({});
        }}
    >
        <Form >
            <label htmlFor="nickname">nickname</label>
            <Field name="nickname" type="text" />
            <ErrorMessage name="nickname" render={msg => <div className="error">{msg}</div>} />
            <label htmlFor="nom">nom</label>
            <Field name="nom" type="text" />
            <ErrorMessage name="nom" render={msg => <div className="error">{msg}</div>} />
            <label htmlFor="prenom">prenom</label>
            <Field name="prenom" type="text" />
            <label htmlFor="sexe">sexe</label>
            <Field name="sexe" as="select" className="my-select">
                <option value="H">Homme</option>
                <option value="F">Femme</option>
            </Field>
            <label htmlFor="babyfoot">babyfoot</label>
            <Field name="babyfoot" type="checkbox" />
            <label htmlFor="billard">billard</label>
            <Field name="billard" type="checkbox" />
            <button type="submit">Inscrire</button>
        </Form>
    </Formik>


const mapDispatchToProps = dispatch => ({
    registerPlayer: (p) => dispatch(addPlayerCall(p))
});

export default connect(
    null,
    mapDispatchToProps
)(Registration)
