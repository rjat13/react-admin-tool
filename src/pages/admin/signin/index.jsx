import { CButton } from "@coreui/react"
import TextInput from "../../../components/common/Input"
import { Formik, useFormik } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
});
const Signin = () => {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const postData = values;
      console.log("test submit", postData)
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submit ", e)
  }

  return (<>
  <Formik initialValues={{
      email: "",
      password: "",
    }} validationSchema={validationSchema} onSubmit={(values) => console.log("form submit", values)}>
      {/* <div> */}
    <form method="post" onSubmit={handleSubmit} className="p-4">
      <TextInput type={'email'} name={'email'} label={'Email'} />
      <TextInput type={'password'} name={'password'} label={'Password'} />
      <CButton type="submit" className="mt-4">Signin</CButton>
    </form>
    {/* </div> */}
  </Formik>
  </>)
}

export default Signin