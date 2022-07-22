import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import globalStyles from "../../utils/globalStyles";
import colors from "../../utils/colors";
import EyeIcon from "../../assets/svgImgs/auth/EyeIcon";

function Password({ value, touched, handleChange, handleBlur, error, label }) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  return (
    <View style={{ marginVertical: 15 }}>
      <View
        style={[
          globalStyles.form.input.inputContainer,
          isFocused || value !== ""
            ? { justifyContent: null }
            : { justifyContent: "center" },
          error && touched
            ? { borderColor: colors.accent }
            : { borderColor: colors.border },
        ]}
      >
        <Text
          style={[
            globalStyles.form.input.label,
            isFocused || value !== "" ? { marginTop: -10 } : {},
          ]}
        >
          {label}
        </Text>
        <TextInput
          style={globalStyles.form.input.inputText}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            return handleBlur(e);
          }}
          onChangeText={handleChange}
          value={value}
          secureTextEntry={showPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={{ position: "absolute", right: 26, top: 20 }}
        >
          <EyeIcon />
        </TouchableOpacity>
      </View>
      {error && touched ? (
        <Text style={globalStyles.form.errorText}>{error}</Text>
      ) : null}
    </View>
  );
}

export default Password;
