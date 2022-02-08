import React, { Component } from 'react';
import { Nav, RowStyle, RowNew,RowFilter,BtnFilter, Contenedor,ColFilt, Title, LabelAnunc, LabelFeatured, Cargo, ListaCondi, ItemCondi, ItemFirst, Boton, DivButton,ClearBtn } from '../styles/style'
export default class jobListing extends Component {
    render() {
        return <div>
            <Nav>
                <img src="../../public/images/bg-header-desktop.svg" alt="img" />
            </Nav>
            <Contenedor>
            <RowFilter>
                    <ColFilt>
                        <BtnFilter>Frontend</BtnFilter>
                        <BtnFilter>Css</BtnFilter>
                        <BtnFilter>JavaScript</BtnFilter>
                        <ClearBtn>Clear</ClearBtn>
                    </ColFilt>


                </RowFilter>

                <RowNew>
                    <div className="col">
                        <img src="../../public/images/photosnap.svg" alt="photos" />
                    </div>
                    <div className="col">
                        <Title>Photosnap</Title>
                        <LabelAnunc>NEW!</LabelAnunc>
                        <LabelFeatured>FEATURED</LabelFeatured>
                        <Cargo>Senior Frontend Developer</Cargo>

                        <div className="lista">
                            <ListaCondi>
                                <ItemFirst>1d ago</ItemFirst>
                                <ItemCondi>Full Time</ItemCondi>
                                <ItemCondi>USA only</ItemCondi>
                            </ListaCondi>
                        </div>
                    </div>

                    <DivButton>
                        <Boton>Frontend</Boton>
                        <Boton>Senior</Boton>
                        <Boton>HTML</Boton>
                        <Boton>CSS</Boton>
                        <Boton>JavaScript</Boton>
                    </DivButton>

                </RowNew>


                <RowNew>
                    <div className="col">
                        <img src="../../public/images/manage.svg.svg" alt="manag " />
                    </div>
                    <div className="col">
                        <Title>Manage</Title>
                        <LabelAnunc>NEW!</LabelAnunc>
                        <LabelFeatured>FEATURED</LabelFeatured>
                        <Cargo>Fullstack Developer</Cargo>

                        <div className="lista">
                            <ListaCondi>
                                <ItemFirst>1d ago</ItemFirst>
                                <ItemCondi>Part Time</ItemCondi>
                                <ItemCondi>Remote</ItemCondi>
                            </ListaCondi>
                        </div>
                    </div>

                    <DivButton>
                        <Boton>Fullstack</Boton>
                        <Boton>Midweight</Boton>
                        <Boton>Python</Boton>
                        <Boton>React</Boton>
                    </DivButton>

                </RowNew>

                <RowStyle>
                    <div className="col">
                        <img src="../../public/images/account.svg" alt="account " />
                    </div>
                    <div className="col">
                        <Title>Account</Title>
                        <LabelAnunc>NEW!</LabelAnunc>
                        <Cargo>Junior Frontend Developer</Cargo>

                        <div className="lista">
                            <ListaCondi>
                                <ItemFirst>2d ago</ItemFirst>
                                <ItemCondi>Part Time</ItemCondi>
                                <ItemCondi>USA only</ItemCondi>
                            </ListaCondi>
                        </div>
                    </div>

                    <DivButton>
                        <Boton>Frontend</Boton>
                        <Boton>Junior</Boton>
                        <Boton>React</Boton>
                        <Boton>Sass</Boton>
                        <Boton>JavaScript</Boton>
                    </DivButton>

                </RowStyle>

                <RowStyle>
                    <div className="col">
                        <img src="../../public/images/myhome.svg.svg" alt="miHome " />
                    </div>
                    <div className="col">
                        <Title>MiHome</Title>
                        <Cargo>Junior Frontend Developer</Cargo>

                        <div className="lista">
                            <ListaCondi>
                                <ItemFirst>5d ago</ItemFirst>
                                <ItemCondi>Contract</ItemCondi>
                                <ItemCondi>USA only</ItemCondi>
                            </ListaCondi>
                        </div>
                    </div>

                    <DivButton>
                        <Boton>Frontend</Boton>
                        <Boton>Junior</Boton>
                        <Boton>Css</Boton>
                        <Boton>JavaScript</Boton>
                    </DivButton>

                </RowStyle>


                <RowStyle>
                    <div className="col">
                        <img src="../../public/images/myhome.svg.svg" alt="miHome " />
                    </div>
                    <div className="col">
                        <Title>Loop Studios</Title>
                        <Cargo>Software Engineer</Cargo>

                        <div className="lista">
                            <ListaCondi>
                                <ItemFirst>1w ago</ItemFirst>
                                <ItemCondi>Full Time</ItemCondi>
                                <ItemCondi>Worldwide</ItemCondi>
                            </ListaCondi>
                        </div>
                    </div>

                    <DivButton>
                        <Boton>Fullstack</Boton>
                        <Boton>Midweight</Boton>
                        <Boton>JavaScript</Boton>
                        <Boton>Sass</Boton>
                        <Boton>Ruby</Boton>

                    </DivButton>

                </RowStyle>

                <RowStyle>
                    <div className="col">
                        <img src="../../public/images/myhome.svg.svg" alt="miHome " />
                    </div>
                    <div className="col">
                        <Title>Facelt</Title>
                        <Cargo>Junior Backend Developer</Cargo>

                        <div className="lista">
                            <ListaCondi>
                                <ItemFirst>2w ago</ItemFirst>
                                <ItemCondi>Full Time</ItemCondi>
                                <ItemCondi>Uk only</ItemCondi>
                            </ListaCondi>
                        </div>
                    </div>

                    <DivButton>
                        <Boton>Backend</Boton>
                        <Boton>Junior</Boton>
                        <Boton>Ruby</Boton>
                        <Boton>RoR</Boton>
                    </DivButton>

                </RowStyle>

                <RowStyle>
                    <div className="col">
                        <img src="../../public/images/myhome.svg.svg" alt="miHome " />
                    </div>
                    <div className="col">
                        <Title>Shortly</Title>
                        <Cargo>Junior Developer</Cargo>

                        <div className="lista">
                            <ListaCondi>
                                <ItemFirst>2w ago</ItemFirst>
                                <ItemCondi>Full Time</ItemCondi>
                                <ItemCondi>Worldwide</ItemCondi>
                            </ListaCondi>
                        </div>
                    </div>

                    <DivButton>
                        <Boton>Frontend</Boton>
                        <Boton>Junior</Boton>
                        <Boton>HTML</Boton>
                        <Boton>Sass</Boton>
                        <Boton>JavaScript</Boton>
                    </DivButton>

                </RowStyle>

                <RowStyle>
                    <div className="col">
                        <img src="../../public/images/myhome.svg.svg" alt="miHome " />
                    </div>
                    <div className="col">
                        <Title>Insure</Title>
                        <Cargo>Junior Frontend Developer</Cargo>

                        <div className="lista">
                            <ListaCondi>
                                <ItemFirst>2w ago</ItemFirst>
                                <ItemCondi>Full time</ItemCondi>
                                <ItemCondi>USA only</ItemCondi>
                            </ListaCondi>
                        </div>
                    </div>

                    <DivButton>
                        <Boton>Frontend</Boton>
                        <Boton>Junior</Boton>
                        <Boton>Vue</Boton>
                        <Boton>JavaScript</Boton>
                        <Boton>Sass</Boton>
                    </DivButton>

                </RowStyle>

                <RowStyle>
                    <div className="col">
                        <img src="../../public/images/myhome.svg.svg" alt="miHome " />
                    </div>
                    <div className="col">
                        <Title>Eyecam Co.</Title>
                        <Cargo>Full stack Engineer</Cargo>

                        <div className="lista">
                            <ListaCondi>
                                <ItemFirst>3w ago</ItemFirst>
                                <ItemCondi>Full time</ItemCondi>
                                <ItemCondi>Worldwide</ItemCondi>
                            </ListaCondi>
                        </div>
                    </div>

                    <DivButton>
                        <Boton>Fullstack</Boton>
                        <Boton>Midweight</Boton>
                        <Boton>JavaScript</Boton>
                        <Boton>Django</Boton>
                        <Boton>Python</Boton>

                    </DivButton>

                </RowStyle>

                <RowStyle>
                    <div className="col">
                        <img src="../../public/images/myhome.svg.svg" alt="miHome " />
                    </div>
                    <div className="col">
                        <Title>The Air Filter Company</Title>
                        <Cargo>Front-end Dev</Cargo>

                        <div className="lista">
                            <ListaCondi>
                                <ItemFirst>1mo ago</ItemFirst>
                                <ItemCondi>Part Time</ItemCondi>
                                <ItemCondi>Worldwide</ItemCondi>
                            </ListaCondi>
                        </div>
                    </div>

                    <DivButton>
                        <Boton>Frontend</Boton>
                        <Boton>Junior</Boton>
                        <Boton>React</Boton>
                        <Boton>Sass</Boton>
                        <Boton>JavaScript</Boton>
                    </DivButton>

                </RowStyle>


            </Contenedor>
        </div>;
    }
}
