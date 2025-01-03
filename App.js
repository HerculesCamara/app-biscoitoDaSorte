const { Component } = require("react");
const { View, Text, Button, StyleSheet, TextInput, Image, TouchableOpacity } = require("react-native");

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: 'Siga os bons e tals',
      img: require('./src/assets/biscoito.png')
    };
    this.frases = [
      'Siga os bons e aprenda com eles',
      'O bom-senso vale mais do que muito conhecimento',
      'O riso é a menor distância entre duas pessoas'
    ];

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: this.frases[numeroAleatorio], 
      img: require('./src/assets/biscoitoAberto.png')
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <Image source={this.state.img} style={styles.img}/>
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fonstSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  }
})

export default App;