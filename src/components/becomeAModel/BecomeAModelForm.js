//Library Imports
import React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
//Style Imports
import * as sharedStyles from '../../data/sharedStyles'


//Styles
const BecomeAModelFormContainerStyle = styled.div`
    position: absolute;
    top: ${sharedStyles.h190px};
    left: ${sharedStyles.w570px};
    width: ${sharedStyles.w420px};
`
const BecomeAModelFormTitleStyle = styled.h3`
    font-family: "Gotham-Black";
    font-size: 22px;
    color: ${sharedStyles.unikoBlack};
    letter-spacing: 0.52px;
    text-transform: uppercase;
    &:last-of-type{
        margin-top: ${sharedStyles.h40px}; 
    }
`
const BecomeAModelFormStyle = styled.form`
    width: ${sharedStyles.w840px};
`
const NameFormInputStlye = styled.input`
    display: inline-block;
    margin-top: ${sharedStyles.h40px};
    width: ${sharedStyles.w400px};
    height: ${sharedStyles.h40px};
    height: 36px;
    border: 0;
    border-bottom: 1px solid ${sharedStyles.unikoBlack};
    background-color: transparent;
    outline: none;
    font-family: "Gotham-Book";
    font-size: 12px;
    color: ${sharedStyles.unikoBlack};
    text-transform: uppercase;
    margin-top: ${sharedStyles.h10px};
    margin-right: ${sharedStyles.w20px};
    padding-left: 10px;
    &:first-of-type{
        margin-top: ${sharedStyles.h20px}; 
    }
`
const AddressFormInputStyle = styled(NameFormInputStlye)`
    margin-top: ${sharedStyles.h10px};
    width: ${sharedStyles.w820px};
`
const GenderFormInputStlye = styled.input`
 
`
const GenderFormLabelStlye = styled.label`
    font-family: "Gotham-Book";
    font-size: 16px;
    color: ${sharedStyles.unikoBlack};
    text-transform: uppercase;
`
const ArchivosFormInputStyle = styled.input`
    width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`
const ArchivosFormLabelStyle = styled.label`
    display: inline-block;
    width: 200px;
    height: 40px;
    border: 1px solid ${sharedStyles.unikoBlack};
    font-family: 'Gotham-Book';
    font-size: 16px;
    color: ${sharedStyles.unikoBlack};
    line-height: 39px;
    text-transform: uppercase;
    text-align: center;
    margin-top: 20px;
    margin-left: 80px;
`
const NameFormErrorStyle = styled.span`
    display: inline-block;
    font-family: "Gotham-Book";
    font-size: 12px;
    color: #747474;
    font-style: italic;
    padding-top: 10px;
    padding-right: 10px;
    width: ${sharedStyles.w400px};
    text-align: right;
`


// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
    const errors = {};
    if (!values.nombre) {
      errors.nombre = 'Required';
    } else if (values.nombre.length > 15) {
      errors.nombre = 'Must be 15 characters or less';
    }
  
    if (!values.apellidos) {
      errors.apellidos = 'Required';
    } else if (values.apellidos.length > 20) {
      errors.apellidos = 'Must be 20 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
};


//Main Component
function BecomeAModelForm() {

    const formik = useFormik({
        initialValues: {
            nombre: '',
            apellidos: '',
            direccion: '',
            codigoPostal: '',
            ciudad: '',
            telefono: '',
            email: '',
            fechaDeNacimient: '',
            instagram: '',
            genero: '',
            archivos: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (            
        <BecomeAModelFormContainerStyle>
            
            <BecomeAModelFormStyle onSubmit={formik.handleSubmit} >


                <BecomeAModelFormTitleStyle>Datos de contacto</BecomeAModelFormTitleStyle>
                <NameFormInputStlye 
                    id="nombre"
                    name="nombre"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    placeholder="NOMBRE"
                />
                <NameFormInputStlye 
                    id="apellidos"
                    name="apellidos"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.apellidos}
                    placeholder="APELLIDOS"
                />
                <AddressFormInputStyle 
                    id="direccion"
                    name="direccion"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.direccion}
                    placeholder="DIRECCIÓN COMPLETA"
                />
                <NameFormInputStlye
                    id="codigoPostal"
                    name="codigoPostal"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.codigoPostal}
                    placeholder="CODIGO POSTAL"
                />
                <NameFormInputStlye
                    id="ciudad"
                    name="ciudad"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.ciudad}
                    placeholder="CIUDAD"
                />
                <NameFormInputStlye
                    id="telefono"
                    name="telefono"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.telefono}
                    placeholder="TELÉFONO"
                />
                <NameFormInputStlye
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="EMAIL"
                />
                <NameFormInputStlye 
                    id="fechaDeNacimiendo"
                    name="fechaDeNacimiendo"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.fechaDeNacimient}
                    placeholder="FECHA DE NACIMIENTO"
                />
                <NameFormInputStlye
                    id="instagram"
                    name="instagram"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.instagram}
                    placeholder="INSTAGRAM"
                />


                <BecomeAModelFormTitleStyle>Datos Personales</BecomeAModelFormTitleStyle>
                <GenderFormInputStlye 
                    id="genero"
                    name="genero"
                    type="radio"  
                    value="female"
                    onChange={formik.handleChange}
                    value={formik.values.genero}
                />  
                <GenderFormLabelStlye for="female">Female</GenderFormLabelStlye>

                <GenderFormInputStlye
                    id="genero"
                    name="genero"
                    type="radio"  
                    value="male"
                    onChange={formik.handleChange}
                    value={formik.values.genero}
                />
                <GenderFormLabelStlye for="male">Male</GenderFormLabelStlye>


                <ArchivosFormInputStyle 
                    id="archivos"
                    name="archivos"
                    type="file"  
                    accept="image/png, image/jpeg"
                    onChange={formik.handleChange}
                    value={formik.values.archivos}
                />
                <ArchivosFormLabelStyle for="archivos">Archivos +</ArchivosFormLabelStyle>

                <input type="range" id="age" />
                
                <button type="submit">Submit</button>

            </BecomeAModelFormStyle>
            
        </BecomeAModelFormContainerStyle>
    )
}

//Export
export default BecomeAModelForm;