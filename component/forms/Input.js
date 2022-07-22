import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import globalStyles from "../../utils/globalStyles";
import colors from "../../utils/colors";

function Input({
  value,
  label,
  type,
  error,
  touched,
  handleChange,
  handleBlur,
}) {
  const [isFocused, setIsFocused] = useState(false);
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
          keyboardType={
            type === "email"
              ? "email-address"
              : type === "number"
              ? "number-pad"
              : "default"
          }
          autoCapitalize={type === "email" ? "none" : "sentences"}
          autoCorrect={type !== "email"}
          autoComplete={type !== "email" ? "email" : "off"}
        />
      </View>
      {error && touched ? (
        <Text style={globalStyles.form.errorText}>{error}</Text>
      ) : null}
    </View>
  );
}

export default Input;
