import React from "react";
import { SafeAreaView, View } from "react-native";
import AuthStyles from "./authStyles";
import Logo from "../../component/Logo";
import Input from "../../component/forms/Input";
import { useFormik } from "formik";
import { loginSchema } from "../../utils/formSchema";
import AppButton from "../../component/AppButton";
import colors from "../../utils/colors";

function Login() {
  function handleLogin() {}

  const { values, handleBlur, handleChange, handleSubmit, touched, errors } =
    useFormik({
      onSubmit: handleLogin,
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      validateOnBlur: true,
    });
  return (
    <SafeAreaView style={AuthStyles.baseContainer}>
      <View style={[AuthStyles.innerContainer, { alignItems: "center" }]}>
        <Logo />
        <View style={{ width: "100%" }}>
          <Input
            value={values.email}
            type="email"
            label="Email address"
            handleChange={handleChange("email")}
            handleBlur={handleBlur("email")}
            error={errors.email}
            touched={touched.email}
          />
          <Input
            value={values.password}
            type="text"
            label="Password"
            handleChange={handleChange("password")}
            handleBlur={handleBlur("password")}
            error={errors.password}
            touched={touched.password}
          />
          <AppButton
            color={colors.primary}
            title="Log In"
            btnHandler={handleSubmit}
            style={{ marginTop: 50 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
