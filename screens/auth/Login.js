import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import AuthStyles from "./authStyles";
import Logo from "../../component/Logo";
import Input from "../../component/forms/Input";
import { useFormik } from "formik";
import { loginSchema } from "../../utils/formSchema";
import AppButton from "../../component/AppButton";
import colors from "../../utils/colors";
import Password from "../../component/forms/Password";
import globalStyles from "../../utils/globalStyles";
import { Link } from "@react-navigation/native";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { getUserData, loginUser, setUserData } from "../../store";

function Login() {
  const queryClient = useQueryClient();
  const {
    mutateAsync: userLogin,
    isLoading,
    error,
  } = useMutation(loginUser, {});
  const { mutateAsync: setUser } = useMutation(setUserData, {
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
    },
  });
  const { data: user } = useQuery(["user"], getUserData);
  function handleLogin(values, { resetForm }) {
    userLogin(values)
      .then((data) => {
        //console.log(data);
        setUser(data.data)
          .then(async () => {
            resetForm();
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log({ err });
      });
  }

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
        {error && (
          <View
            style={{
              backgroundColor: "#ED1A3B33",
              width: "100%",
              paddingVertical: 8,
              paddingLeft: 20,
            }}
          >
            <Text
              style={{
                color: colors.accent,
                fontSize: 12,
                fontFamily: "regular",
              }}
            >
              Invalid mail
            </Text>
          </View>
        )}
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
          <Password
            value={values.password}
            type="text"
            label="Password"
            handleChange={handleChange("password")}
            handleBlur={handleBlur("password")}
            error={errors.password}
            touched={touched.password}
          />
          <View style={globalStyles.form.forgotPassword.container}>
            <Link
              style={globalStyles.form.forgotPassword.text}
              to={{ screen: "register" }}
            >
              Forgot Password
            </Link>
          </View>
          <AppButton
            color={isLoading ? "rgba(0,117,231,0.4)" : colors.primary}
            isLoading={isLoading}
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
