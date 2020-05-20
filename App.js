import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

type Props = {};

export default class App extends Component<Props> {

  constructor(props) {
    super(props)
    this.state = {altura: 0, peso: 0, resultado: 0, texto: ""},
    this.calcular = this.calcular.bind(this);
  }

  calcular() {
    let imc = this.state.peso / (this.state.altura * this.state.altura);
    let result = this.state;
    result.resultado = imc;
    this.setState(result);

    if(imc < 18) {
      this.setState({texto: "Magreza"});
    } else if(imc < 25) {
      this.setState({texto: "Saudável"});
    } else if(imc < 30) {
      this.setState({texto: "Sobrepeso"});
    }else {
      this.setState({texto: "Obesidade"});
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <View style={styles.content}>
            <Text style={styles.title}>
              Calculadora IMC
          </Text>
          </View>
          <View style={styles.content}>
            <TextInput style={styles.input} placeholder="Altura" keyboardType="numeric" onChangeText={(altura) => this.setState({altura: altura})}/>
            <TextInput style={[styles.input, {marginBottom: 50}]} placeholder="Peso" keyboardType="numeric" onChangeText={(peso) => this.setState({peso: peso})}/>
          </View>
          <View style={styles.content}>
            <TouchableOpacity style={styles.button} onPress={this.calcular}>
              <Text style={styles.textButton}>Calcular</Text>
            </TouchableOpacity>
            <Text style={styles.result}>{this.state.resultado.toFixed(2)}</Text>
            <Text style={[styles.result, {fontSize: 35}]}>{this.state.texto}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  },
  container: {
    backgroundColor: "#bfbfbf"
  },
  input: {
    marginTop: 70,
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 10,
    width: 200
  },
  card: {
    backgroundColor: "#FFF",
    margin: 5,
    padding: 5,
    borderRadius: 3,
    borderColor: "green",
    borderWidth: 1
  },
  button: {
    alignItems: "center",
    padding: 15,
    backgroundColor: "#0a9600",
    borderRadius: 20,
    width: "60%"
  },
  textButton: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  },
  result: {
    paddingTop: 50,
    fontSize: 40,
    fontWeight: "bold"
  }

});
