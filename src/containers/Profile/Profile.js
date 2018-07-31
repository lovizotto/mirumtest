import React, { Component } from "react";
import { Button } from "../../components";
import "./Profile.scss";

export default class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <h1>Cadastre-se</h1>
        <p>
          Duis vel scelerisque justo. Aliquam ut risus in quam lacinia volutpat
          quis vel massa. Praesent porttitor, elit quis varius cursus, lacus
          justo rhoncus lorem, at placerat urna nunc ut lorem.
        </p>
        <Button 
          label="Iniciar Cadastro" 
          onClick={() => {this.props.history.push('/form')}} />
      </div>
    );
  }
}