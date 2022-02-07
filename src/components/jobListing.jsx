import React, { Component } from 'react';
import { Nav,RowStyle,Contenedor,Title,LabelAnunc,LabelFeatured, Cargo } from '../styles/style'
export default class jobListing extends Component {
  render() {
    return <div>
        <Nav>
        </Nav>
            <Contenedor>
                <div className="card">
                    <RowStyle>
                        <div className="col">
                            <img src="../../public/images/photosnap.svg" alt="photoshop" />
                        </div>
                        <div className="col">
                            <Title>Photosnap</Title>
                            <LabelAnunc>NEW!</LabelAnunc>
                            <LabelFeatured>FEATURED</LabelFeatured>
                            <Cargo>Senior Frontend Developer</Cargo>

                            <div className="lista">
                                <ul>
                                    <li>Id ago</li>
                                    <li>Full Time</li>
                                    <li>Usa only</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col">
                            <button>Frontend</button>
                            <button>Senior</button>
                            <button>HTML</button>
                            <button>CSS</button>
                            <button>JavaScript</button>
                        </div>

                    </RowStyle>
                </div>
            </Contenedor>
    </div>;
  }
}
