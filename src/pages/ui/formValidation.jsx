import { CFormText } from '@coreui/react';
import { Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const formValidateSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().required("Password is required"),
  gender: Yup.string().required('select at least one option.'),
  hobbies: Yup.array().min(1, 'select at least one hobby.')
})

const FormValidation = () => {

  const initialValues = {
    email: '',
    password: '', 
    hobbies: [],
    gender: null
  }

  const handleSubmit = (values) => {
    console.log("form submit", values)
  }
  
  return (<>
    <Formik initialValues={initialValues} validationSchema={formValidateSchema} onSubmit={handleSubmit}>
      { ({ handleChange, handleBlur }) => (
        <Form>
          <div style={{marginBottom: 15}}>
            <label htmlFor="email">Email</label><br />
            <input id='email' name='email' type='text' placeholder='Enter your email' onChange={handleChange} onBlur={handleBlur}/><br />
            <ErrorMessage name='email'>{ msg => <CFormText className='help-block text-danger'>{msg}</CFormText>}</ErrorMessage>
          </div>
          <div style={{marginBottom: 15}}>
          <label htmlFor="password">Password</label><br />
            <input id='password' name='password' type='password' placeholder='Enter your password' onChange={handleChange} onBlur={handleBlur} /><br />
            <ErrorMessage name='password'>{ msg => <CFormText className='help-block text-danger'>{msg}</CFormText>}</ErrorMessage>
          </div>
          <div>
            <div>
              <input id='hobbies.cricket' type='checkbox' name='hobbies' onChange={handleChange} value={'Cricket'} />
              <label className='ml-2' style={{marginLeft: 5}} aria-label='Cricket' htmlFor='hobbies.cricket'>Cricket</label>
            </div>
            <div>
              <input id='hobbies.music' aria-label='Music' type='checkbox' name='hobbies' onChange={handleChange} value={'Music'} />
              <label className='ml-2' style={{marginLeft: 5}} htmlFor='hobbies.music'>Music</label>
            </div>
            <div>
              <input id='hobbies.reading' aria-label='Reading Books' type='checkbox' name='hobbies' onChange={handleChange} value={'Reading Books'} />
              <label className='ml-2' style={{marginLeft: 5}} htmlFor='hobbies.reading'>Reading Books</label>
            </div>
            <div>
              <input id='hobbies.explore' aria-label='Explore' type='checkbox' name='hobbies' onChange={handleChange} value={'Explore'} />
              <label className='ml-2' style={{marginLeft: 5}} htmlFor='hobbies.explore'>Explore</label>
            </div>
            <ErrorMessage name='hobbies'>{ msg => <CFormText className='help-block text-danger'>{msg}</CFormText>}</ErrorMessage>
          </div>
          <div style={{marginTop: 10}}>
            <input id='gender.male' type='radio' name='gender' onChange={handleChange} value={'Male'} />
            <label htmlFor='gender.male' className='ml-2' style={{marginLeft: 5}}>Male</label>&nbsp;
            <input id='gender.female' type='radio' name='gender' onChange={handleChange} value={'Female'} />
            <label htmlFor='gender.female' className='ml-2' style={{marginLeft: 5}}>Female</label>
            <ErrorMessage name='gender'>{ msg => <CFormText className='help-block text-danger'>{msg}</CFormText>}</ErrorMessage>
          </div>
          <button type='submit' style={{marginTop: 15}}>Submit</button>
        </Form>
      )}
    </Formik>
  </>)
}

export default FormValidation