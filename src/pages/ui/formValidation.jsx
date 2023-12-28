import { CFormText } from '@coreui/react';
import { Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const formValidateSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().required("Password is required"),
  gender: Yup.array().of(Yup.string()).required('select at least one option.'),
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
      { ({isSubmitting, errors,  handleChange, handleBlur}) => (
        <Form>
          {console.log("errors", errors)}
          <div style={{marginBottom: 15}}>
            <label htmlFor="email">Email Address</label><br />
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
              <input type='checkbox' name='hobbies' onChange={handleChange} value={'Cricket'} />
              <label className='ml-2' style={{marginLeft: 5}}>Cricket</label>
            </div>
            <div>
              <input type='checkbox' name='hobbies' onChange={handleChange} value={'Music'} />
              <label className='ml-2' style={{marginLeft: 5}}>Music</label>
            </div>
            <div>
              <input type='checkbox' name='hobbies' onChange={handleChange} value={'Reading Books'} />
              <label className='ml-2' style={{marginLeft: 5}}>Reading Books</label>
            </div>
            <div>
              <input type='checkbox' name='hobbies' onChange={handleChange} value={'Explore'} />
              <label className='ml-2' style={{marginLeft: 5}}>Explore</label>
            </div>
            <ErrorMessage name='hobbies'>{ msg => <CFormText className='help-block text-danger'>{msg}</CFormText>}</ErrorMessage>
          </div>
          <div style={{marginTop: 10}}>
            <input type='radio' name='gender' onChange={handleChange} value={'Male'} />
            <label className='ml-2' style={{marginLeft: 5}}>Male</label>&nbsp;
            <input type='radio' name='gender' onChange={handleChange} value={'Female'} />
            <label className='ml-2' style={{marginLeft: 5}}>Female</label>
            <ErrorMessage name='gender'>{ msg => <CFormText className='help-block text-danger'>{msg}</CFormText>}</ErrorMessage>
          </div>
          <button type='submit' disabled={isSubmitting} style={{marginTop: 15}}>Submit</button>
        </Form>
      )}
    </Formik>
  </>)
}

export default FormValidation