import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import Row from "./components/Row";
import calculator, { initialState } from "./util/calculator";

export default class App extends Component {
  state = initialState;

  // Handle tap method
  HandleTap = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>

          {/* Top Row */}
          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => this.HandleTap("clear")}
            />
            <Button
              text="+/-"
              theme="secondary"
              onPress={() => this.HandleTap("posneg")}
            />
            <Button
              text="%"
              theme="secondary"
              onPress={() => this.HandleTap("percentage")}
            />
            <Button
              text="/"
              theme="accent"
              onPress={() => this.HandleTap("operator", "/")}
            />
          </Row>

          {/* Number Pad */}
          <Row>
            <Button text="7" onPress={() => this.HandleTap("number", 7)} />
            <Button text="8" onPress={() => this.HandleTap("number", 8)} />
            <Button text="9" onPress={() => this.HandleTap("number", 9)} />
            <Button
              text="x"
              theme="accent"
              onPress={() => this.HandleTap("operator", "*")}
            />
          </Row>

          <Row>
            <Button text="4" onPress={() => this.HandleTap("number", 4)} />
            <Button text="5" onPress={() => this.HandleTap("number", 5)} />
            <Button text="6" onPress={() => this.HandleTap("number", 6)} />
            <Button
              text="-"
              theme="accent"
              onPress={() => this.HandleTap("operator", "-")}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.HandleTap("number", 1)} />
            <Button text="2" onPress={() => this.HandleTap("number", 2)} />
            <Button text="3" onPress={() => this.HandleTap("number", 3)} />
            <Button
              text="+"
              theme="accent"
              onPress={() => this.HandleTap("operator", "+")}
            />
          </Row>

          <Row>
            <Button text="0" onPress={() => this.HandleTap("number", 0)} />
            <Button text="." onPress={() => this.HandleTap("number", ".")} />
            <Button
              text="="
              theme="primary"
              onPress={() => this.HandleTap("equal", "=")}
            />
          </Row>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Calc by Utkarsh</Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

// Updated styles for light theme
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9", // Light background color
    justifyContent: "flex-end",
  },
  value: {
    color: "#333", // Darker text color for visibility
    fontSize: 42,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
  footer: {
  padding: 10,
  alignItems: "center", // Centers the text horizontally
  justifyContent: "center", // Ensures it's vertically centered
  backgroundColor: "#f1f1f1", // Light footer background
  width: "100%",
},
footerText: {
  color: "#333", // Dark text color for footer
  fontSize: 14,
  textAlign: "center", // Centers the text within the View
},
});
