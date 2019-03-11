import React, { Component } from 'react';
import * as API from './../../helpers/FormDataHelper';

export default class Login extends Component {
  state = {
    cpf: '', senha: '', msg: ''
  }
  handleForm = e => this.setState({[e.target.name]: e.target.value});

  handleSubmit = async e => {
    e.preventDefault();
    const requestInfo = API.FormDataHelper(this.state);
    const fetchApi = await fetch(`${API.urlAPI}/user/login`, requestInfo);
    const response = await fetchApi.json();
    if (response.success) {
      localStorage.setItem('token', response.data.auth_token);
      localStorage.setItem('cod_agente', response.data.cod_agente);
      return this.props.history.push('/');
    }
    this.setState({msg: 'Usuário não encontrado'});
  }
  render() {
    return (
      <div style={{margin: '0 auto'}}>
        <h1>Welcome to Saura!</h1>
        {!!this.state.msg && <strong>{this.state.msg}</strong> }
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="cpf" value={this.state.cpf} onChange={this.handleForm} />
          <input type="text" name="senha" value={this.state.senha} onChange={this.handleForm} />
          <button>Entrar</button>
        </form>
      </div>
    );
  }
}