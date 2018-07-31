import React, { Component } from "react";
import "./Form.scss";

import { Avatar, TextField } from "../../components";

export default class Form extends Component {
  render() {
    return (
      <div className="Form">
        <div>
          <Avatar label="Carregue sua foto" />
        </div>
        <div>

          <div className="inline-form">
          <TextField
            name="firstname"
            id="firstname"
            pattern="[A-Z a-z0-9]{1,20}"
            label="Nome"
            placeholder="Primeiro Nome"
          />
          <TextField
            name="lastname"
            id="lastname"
            label=""
            placeholder="Segundo Nome"
            pattern="[A-Z a-z0-9]{1,20}"
          />
          </div>
          <TextField
            name="email"
            type="email"
            id="email"
            label="E-mail"
            placeholder="your.email@example.com"
          />
        </div>
      </div>
    );
  }
}
