import React, { Component } from 'react';
import { Text, TextInput, Switch, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      idade: 0,
      sexo: 0,
      limite: 0,
      estudante: false,
      sexos: [
        {key: 1, value: 'Masculino'},
        {key: 2, value: 'Feminino'},
        {key: 3, value: 'Prefiro não informar'},
      ],
    }

    this.cadastro = this.cadastro.bind(this);
  }

  cadastro() {
    if(this.state.nome !== ""  && this.state.idade > 0 && this.state.limite > 0) {
      alert('Nome: ' + this.state.nome + " / Idade: " + this.state.idade + " / Sexo: " + this.state.sexos[this.state.sexo].value + " / Limite: " + this.state.limite + " / Estudante: " + (this.state.estudante ? "Sim" : "Não"));
    } else {
      alert('Preencha todos os campos corretamente ' + this.state.idade);
    }
  }

  render() {
    let sexosItems = this.state.sexos.map( (v,  k) => {
      return <Picker.Item key = { k } value = { k } label = { v.value } />
    });

    return(
      <View style = { styles.container }>
        <ScrollView>
          <View style = { styles.header }>
            <Text style = { styles.headerText }>Banco React</Text>
          </View>

          <Text style = { styles.text } >Formulário para cadastro: </Text>

          <View style = { styles.picker } >
              <Picker
                selectedValue = { this.state.sexo }
                onValueChange = { (value, index) => this.setState({sexo: value}) }
              >
                { sexosItems }
              </Picker>
          </View>

          <View style = { styles.formContainer }>
            <TextInput 
              style = { styles.input }
              placeholder = '  nome completo'
              onChangeText = { (value) => this.setState({nome: value}) }
            />

            <TextInput 
              style = { styles.input }
              placeholder = '  Idade'
              onChangeText = { (value) => this.setState({idade: value}) }
            />

            <TextInput 
              style = { styles.input }
              placeholder = '  Limite'
              onChangeText = { (value) => this.setState({limite: value}) }
            />

            <View style = { styles.studentContainer }>
              <Text style = { styles.text2 } >Estudante: </Text>
              <Switch
                value = { this.state.estudante }
                onValueChange = { (value) => this.setState({estudante: value}) }
              />
            </View>

            <TouchableOpacity onPress = { this.cadastro } >
              <View style = { styles.btnFundo } >
                <Text style = { styles.text2 }>
                  Cadastrar-se
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style = {{ height: 200 }}></View>
        </ScrollView>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnFundo: {
    borderWidth: 2,
    borderColor: '#ADD8E6',
    borderRadius: 10,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  }, 
  picker: {
    marginTop: 20,
    height: 200,
  },
  studentContainer: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  header: {
    backgroundColor: '#ADD8E6',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    marginTop: 30,
    fontSize: 18,
    color: '#6CA0DC',
    fontWeight: 'bold',
  },
  text: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 14,
    color: '#6CA0DC'
  },
  text2: {
    fontSize: 14,
    color: '#6CA0DC'
  },
  input: {
    height: 60,
    width: '90%',
    borderWidth: 2,
    borderColor: '#ADD8E6',
    marginTop: 30,
    borderRadius: 10,
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: "center",
  }
});

export default App;