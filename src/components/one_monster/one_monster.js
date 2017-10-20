import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Row, Col} from 'react-materialize';

class OneMonster extends Component {

  render() {
    var beast = (this.props.monsterInfo.url);
    if(beast != null){
    var newArr = beast.split("/");
    var oneMonster = (newArr[5]);
}
    return (
      <div className="OneMonster">
        <div className="OneMonster-container">
          <Row>
            <Col l={4} className='grid'>
              <ul>
                <h2><li>Name: {this.props.name}</li></h2>
                <li>Size: {this.props.size}</li>
                <li>Type: {this.props.type}</li>
                <li>Speed: {this.props.speed}</li>
                <li>Actions: {this.props.actions}</li>
                <li>special_abilities:
                  <ul>{this.props.special_abilities && this.props.special_abilities.map(ability => {
                    return <li>{ability}</li>
                      })}
                  </ul>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default OneMonster;
