import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

export default ({ onPress, text, size, theme }) => {
  const screen = Dimensions.get("window");
  const buttonWidth = screen.width / 4;

  const styles = StyleSheet.create({
    button: {
      flex: 1,
      height: Math.floor(buttonWidth - 10),
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10, // Slightly rounded corners for a sleek look
      margin: 5,
      backgroundColor: "#f5f5f5", // Light background for better contrast
      borderWidth: 1, // Adding a subtle border for definition
      borderColor: "#ccc", // Light border color
    },
    text: {
      color: "#333", // Dark text for better readability
      fontSize: 24,
      fontWeight: "600", // Slightly bolder text for prominence
    },
    textSecondary: {
      color: "#666", // Lighter color for secondary buttons
    },
    buttonDouble: {
      width: screen.width / 2 - 10,
      flex: 0,
      alignItems: "flex-start",
      paddingLeft: 40,
    },
    buttonSecondary: {
      backgroundColor: "#e0e0e0", // Lighter secondary button background
      borderColor: "#bbb", // Slightly darker border for secondary buttons
    },
    buttonAccent: {
      backgroundColor: "#ff9800", // Accent color for primary action buttons
      borderColor: "#f57c00", // Darker accent border color
    },
    buttonPrimary: {
      backgroundColor: "#4caf50", // Primary green color
      borderColor: "#388e3c", // Darker green border for primary buttons
    },
  });

  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  } else if (theme === "primary") {
    buttonStyles.push(styles.buttonPrimary);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
