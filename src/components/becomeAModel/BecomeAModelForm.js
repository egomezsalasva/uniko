//Library Imports
import React, { useState } from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
//Style Imports
import * as sharedStyles from '../../data/sharedStyles'
//Component Imports
import ShortTextInput from '../../components/becomeAModel/FormInputs/ShortTextInput'
import LongTextInput from '../../components/becomeAModel/FormInputs/LongTextInput'
import ShortEmailInput from '../../components/becomeAModel/FormInputs/ShortEmailInput'


//Styles
const BecomeAModelFormContainerStyle = styled.div`
    position: absolute;
    top: ${sharedStyles.h190px};
    left: ${sharedStyles.w570px};
    left: 550px;
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
const GenderInput = styled.input`
   width: 0.1px;
   height: 0.1px;
   position: absolute;
   z-index: -100;
`
const GenderBoxLabel = styled.label`
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px ${sharedStyles.unikoBlack} solid;
    transform: translateY(4px);
`
const FemaleGenderBoxLabel = styled(GenderBoxLabel)`
    background: ${props => props.femaleLabelActive ? `${sharedStyles.unikoBlack}` : "transparent" };
`
const MaleGenderBoxLabel = styled(GenderBoxLabel)`
    background: ${props => props.maleLabelActive ? `${sharedStyles.unikoBlack}` :  "transparent" };
`
const GenderLabel = styled.label`
    display: inline-block;
    font-family: "Gotham-Book";
    font-size: 16px;
    color: ${sharedStyles.unikoBlack};
    text-transform: uppercase;
    margin-left: 5px;
    transform: translateX(3px);
    margin-right: 20px;
`

const ArchivosFormInputStyle = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
`
const ArchivosFormLabelStyle = styled.label`
    display: inline-block;
    width: 180px;
    height: 40px;
    border: 1px solid ${sharedStyles.unikoBlack};
    font-family: 'Gotham-Book';
    font-size: 16px;
    color: ${sharedStyles.unikoBlack};
    line-height: 39px;
    text-transform: uppercase;
    text-align: center;
    margin-top: 20px;
    margin-left: 10px;
`
const RangeFormInputStyle = styled.input`
    display: block;
    background: red;
    width: 400px;
    margin-top: 30px;
`
const RangeFormValueStyle = styled.div`
    font-family: "Gotham-Book";
    font-size: 16px;
    color: ${sharedStyles.unikoBlack};
    line-height: 20px;
    margin-top: 20px;
`
const SubmitButtonStyle = styled.button`
    width: 200px;
    height: 40px;
    background: ${sharedStyles.unikoBlack};
    margin-top: 20px;
    outline: none;
    color: ${sharedStyles.unikoWhite};
    font-family: "Gotham-Book";
    font-size: 16px;
    line-height: 38px;
    text-transform: uppercase;
`
// const NameFormErrorStyle = styled.span`
//     display: inline-block;
//     font-family: "Gotham-Book";
//     font-size: 12px;
//     color: #747474;
//     font-style: italic;
//     padding-top: 10px;
//     padding-right: 10px;
//     width: ${sharedStyles.w400px};
//     text-align: right;
// `


// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
// const validate = values => {
//     const errors = {};
//     if (!values.nombre) {
//       errors.nombre = 'Required';
//     } else if (values.nombre.length > 15) {
//       errors.nombre = 'Must be 15 characters or less';
//     }
  
//     if (!values.apellidos) {
//       errors.apellidos = 'Required';
//     } else if (values.apellidos.length > 20) {
//       errors.apellidos = 'Must be 20 characters or less';
//     }
  
//     if (!values.email) {
//       errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = 'Invalid email address';
//     }
  
//     return errors;
// };


//Main Component
function BecomeAModelForm() {

    // const [loading, setLoading] = useState(false)

    const [femaleLabelActive, setFemaleLabelActive] = useState(true)
    const [maleLabelActive, setMaleLabelActive] = useState(false)

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
            genero: 'female',
            archivos: null,
            height: 160,
        },
        //validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const femaleLabelClickHandler = () => {
        setFemaleLabelActive(true)
        setMaleLabelActive(false)
    }
    const maleLabelClickHandler = () => {
        setFemaleLabelActive(false)
        setMaleLabelActive(true)
    }

    return (            
        <BecomeAModelFormContainerStyle>
            
            <BecomeAModelFormStyle onSubmit={formik.handleSubmit} >


                <BecomeAModelFormTitleStyle>Datos de contacto</BecomeAModelFormTitleStyle>
                <ShortTextInput 
                    id="nombre"
                    name="nombre"
                    onChange={formik.handleChange}
                    value={formik.values.nombre}
                    placeholder="NOMBRE"
                />
                <ShortTextInput 
                    id="apellidos"
                    name="apellidos"
                    onChange={formik.handleChange}
                    value={formik.values.apellidos}
                    placeholder="APELLIDOS"
                />
                <LongTextInput
                    id="direccion"
                    name="direccion"
                    onChange={formik.handleChange}
                    value={formik.values.direccion}
                    placeholder="DIRECCIÓN COMPLETA"
                />
                <ShortTextInput
                    id="codigoPostal"
                    name="codigoPostal"
                    onChange={formik.handleChange}
                    value={formik.values.codigoPostal}
                    placeholder="CODIGO POSTAL"
                />
                <ShortTextInput
                    id="ciudad"
                    name="ciudad"
                    onChange={formik.handleChange}
                    value={formik.values.ciudad}
                    placeholder="CIUDAD"
                />
                <ShortTextInput
                    id="telefono"
                    name="telefono"
                    onChange={formik.handleChange}
                    value={formik.values.telefono}
                    placeholder="TELÉFONO"
                />
                <ShortEmailInput
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="EMAIL"
                />
                <ShortTextInput 
                    id="fechaDeNacimiendo"
                    name="fechaDeNacimiendo"
                    onChange={formik.handleChange}
                    value={formik.values.fechaDeNacimient}
                    placeholder="FECHA DE NACIMIENTO"
                />
                <ShortTextInput
                    id="instagram"
                    name="instagram"
                    onChange={formik.handleChange}
                    value={formik.values.instagram}
                    placeholder="INSTAGRAM"
                />


                <BecomeAModelFormTitleStyle>Datos Personales</BecomeAModelFormTitleStyle>

                <GenderInput 
                    id="female"
                    name="gender" 
                    type="radio" 
                    checked={formik.values.genero === "female"}
                    onChange={() => formik.setFieldValue("genero", "female")}
                    
                />
                {/* Make container label tag */}
                <FemaleGenderBoxLabel 
                    femaleLabelActive={femaleLabelActive} 
                    for="female"
                    onClick={femaleLabelClickHandler}
                />
                <GenderLabel 
                    for="female"
                    onClick={femaleLabelClickHandler}
                >Female</GenderLabel>
                {/*  */}

                <GenderInput   
                    id="male"
                    name="gender"
                    type="radio"
                    checked={formik.values.genero === "male"}
                    onChange={() => formik.setFieldValue("genero", "male")}
                />
                {/* Make container label tag */}
                <MaleGenderBoxLabel 
                    maleLabelActive={maleLabelActive} 
                    for="male"
                    onClick={maleLabelClickHandler}
                />
                <GenderLabel 
                    for="male"
                    onClick={maleLabelClickHandler}
                >Male</GenderLabel>
                {/*  */}


                <ArchivosFormInputStyle 
                    id="archivos"
                    name="archivos"
                    type="file"  
                    accept="image/png, image/jpeg"
                    onChange={formik.handleChange}
                    value={formik.values.archivos}
                />
                <ArchivosFormLabelStyle for="archivos">Archivos +</ArchivosFormLabelStyle>


                <RangeFormInputStyle 
                    id="height"
                    type="range"
                    min="160" 
                    max="210"
                    value={formik.values.height} 
                    step="1"
                    onChange={formik.handleChange}
                />
                <RangeFormValueStyle>{formik.values.height}cm</RangeFormValueStyle>
                

                <SubmitButtonStyle type="submit">Enviar</SubmitButtonStyle>

            </BecomeAModelFormStyle>
            
        </BecomeAModelFormContainerStyle>
    )
}

//Export
export default BecomeAModelForm;