import React, { Component } from 'react';
import { Nav, RowStyle, Contenedor, Title, LabelAnunc, LabelFeatured, Cargo, ListaCondi, ItemCondi, ItemFirst,Boton } from '../styles/style'
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
                                <ListaCondi>
                                    <ItemFirst>Id ago</ItemFirst>
                                    <ItemCondi>Full Time</ItemCondi>
                                    <ItemCondi>USA only</ItemCondi>
                                </ListaCondi>
                            </div>
                        </div>

                        <div className="col">
                            <Boton>Frontend</Boton>
                            <Boton>Senior</Boton>
                            <Boton>HTML</Boton>
                            <Boton>CSS</Boton>
                            <Boton>JavaScript</Boton>
                        </div>

                    </RowStyle>
                </div>
            </Contenedor>
        </div>;
    }
}
