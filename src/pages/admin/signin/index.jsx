import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { cilLockLocked, cilUser } from "@coreui/icons";
import TextInput from "../../../components/common/Input";
import { Formik } from "formik";
import * as Yup from "yup";
import clientApi from "../../../network";
import { useContext } from "react";
import { AuthContext } from "../../../store/provider/AuthProvider";
import { toast } from "react-toastify";
import { LOGIN_FAILED, LOGIN_SUCCESS } from "../../../Constant";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
const Signin = () => {
  const navigate = useNavigate()
  const {updateAuthUser, AuthUser} = useContext(AuthContext);
  const handleSubmit = async (values) => {
    try{
      const params = {...values, role: 'admin'}
      const {data} = await clientApi.get('/users', {params});
      console.log("response api", data)
      if(data?.length){
        toast.success(LOGIN_SUCCESS)
        updateAuthUser(data[0]);
        navigate('dashboard')
      }else{
        toast.error(LOGIN_FAILED)
      }
    }catch(err){
      console.log("error", err)
    }
  };
  if(Object.keys(AuthUser).length > 0){
    // return navigate('/admin/dashboard');
    return <Navigate to={"/admin/dashboard"} />;
  }
  return (
    <>
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={8}>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody className="align-items-center d-flex">
                    <Formik
                      initialValues={{
                        email: "",
                        password: "",
                      }}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      {({ handleSubmit }) => (
                        <div className="w-100">
                          <h1>Login</h1>
                          <p className="text-medium-emphasis">
                            Sign In to your account
                          </p>
                          <CInputGroup className="mb-3">
                            <CInputGroupText>
                              <CIcon icon={cilUser} />
                            </CInputGroupText>
                            <TextInput
                              type={"email"}
                              name={"email"}
                              placeholder="Email"
                            />
                          </CInputGroup>
                          <CInputGroup className="mb-4">
                            <CInputGroupText>
                              <CIcon icon={cilLockLocked} />
                            </CInputGroupText>
                            <TextInput
                              type={"password"}
                              name={"password"}
                              placeholder="Password"
                              autoComplete="current-password"
                            />
                          </CInputGroup>
                          <CRow>
                            <CCol xs={6}>
                              <CButton
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleSubmit();
                                }}
                                color="primary"
                                className="px-4"
                              >
                                Login
                              </CButton>
                            </CCol>
                            <CCol xs={6} className="text-right">
                              <CButton color="link" className="px-0">
                                <Link to={"/forgot-password"}>
                                  Forgot password?
                                </Link>
                              </CButton>
                            </CCol>
                          </CRow>
                        </div>
                      )}
                    </Formik>
                  </CCardBody>
                </CCard>
                <CCard className="text-white  py-5 sidebar-banner">
                  <CCardBody className="text-center">
                    <div></div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  );
};

export default Signin;
