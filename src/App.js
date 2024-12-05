import React, { Component } from 'react';
import './estilo.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.novoBiscoito = this.novoBiscoito.bind(this);

    this.frases = [
      'Siga os bons e aprenda com eles.',
      'O riso é a menor distância entre duas pessoas.',
      'A vida trará coisas boas se tiver paciência',
      'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si',
      'Não compense na ira o que lhe falta na razão.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'Não há que ser forte. Há que ser flexível.',
      'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
      'A juventude não é uma época da vida, é um estado de espírito.',
      'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
      'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
      'Siga os bons e aprenda com eles.',
      'Não importa o tamanho da montanha, ela não pode tapar o sol.',
      'O bom-senso vale mais do que muito conhecimento.',
      'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
      'São os nossos amigos que nos ensinam as mais valiosas lições.',
      'Aquele que se importa com o sentimento dos outros, não é um tolo.',
      'A adversidade é um espelho que reflete o verdadeiro eu.',
      'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
      'Uma bela flor é incompleta sem as suas folhas.',
    ];
  }

  quebraBiscoito() {
    const numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    const fraseSorteada = this.frases[numeroAleatorio];

    // useState eh p atualizar a frase
    this.setState({ textoFrase: fraseSorteada });

    // alertar que o botão foi clicado 
    alert('CLICOU!');
  }

  novoBiscoito() {
    const novaFrase = "Este é um novo biscoito com uma nova mensagem!";
    this.setState({ textoFrase: novaFrase });
    alert('CLICOU NO NOVO BISCOITO!');
  }

  render() {
    return (
      <div className="container">
        <img src={require('./assets/biscoito.png')} className="img" alt="Biscoito" />
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito} />
        <Botao nome="Novo Biscoito" acaoBtn={this.novoBiscoito} />
        <h3 className="textoFrase">{this.state.textoFrase || 'Clique no botão para abrir o biscoito.'}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}

export default App;
