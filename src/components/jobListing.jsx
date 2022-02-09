import React, { Component } from 'react';
import { Nav, NavImg, NavImgMobile, ContenedorAll, RowStyle, RowNew, RowFilter, BtnFilter, BtnLast, BottonClose, BottonCss, Contenedor, Imagen, ColFilt, ColText, Title, LabelAnunc, LabelFeatured, Cargo, ListaCondi, ItemCondi, ItemFirst, LineaHr, Boton, DivButton, ClearBtn } from '../styles/style'
export default class jobListing extends Component {
    render() {
        return <ContenedorAll>
            <Nav>
                <NavImg src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644343120/JobFilteringList/bg-header-desktop_dnw5s3.svg" alt="img" />
                <NavImgMobile src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644343122/JobFilteringList/bg-header-mobile_w1rswj.svg" alt="" />
            </Nav>
            <Contenedor>
                <RowFilter>
                    <ColFilt>
                        <BtnFilter>Frontend<BottonClose><img src='https://res.cloudinary.com/df90q7vvj/image/upload/v1644343118/JobFilteringList/icon-remove_zhie0x.svg' alt='btnClose' /></BottonClose></BtnFilter>
                        <BtnFilter>CSS<BottonCss><img src='https://res.cloudinary.com/df90q7vvj/image/upload/v1644343118/JobFilteringList/icon-remove_zhie0x.svg' alt='btnClose' /></BottonCss></BtnFilter>
                        <BtnLast>JavaScript<BottonClose><img src='https://res.cloudinary.com/df90q7vvj/image/upload/v1644343118/JobFilteringList/icon-remove_zhie0x.svg' alt='btnClose' /></BottonClose></BtnLast>
                        <ClearBtn>Clear</ClearBtn>
                    </ColFilt>


                </RowFilter>

                <RowNew>
                    <div className="col">
                        <Imagen src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644343120/JobFilteringList/photosnap_yqfswo.svg" alt="photos" />
                    </div>
                    <ColText>
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
                        <LineaHr></LineaHr>
                    </ColText>
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
                        <Imagen src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644343118/JobFilteringList/manage_b46jqd.svg" alt="manage " />
                    </div>
                    <ColText>
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
                        <LineaHr></LineaHr>
                    </ColText>

                    <DivButton>
                        <Boton>Fullstack</Boton>
                        <Boton>Midweight</Boton>
                        <Boton>Python</Boton>
                        <Boton>React</Boton>
                    </DivButton>

                </RowNew>

                <RowStyle>
                    <div className="col">
                        <Imagen src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644343120/JobFilteringList/account_bdqa5p.svg" alt="account " />
                    </div>
                    <ColText>
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
                        <LineaHr></LineaHr>
                    </ColText>

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
                        <Imagen src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644343118/JobFilteringList/myhome_ilx0pg.svg" alt="miHome " />
                    </div>
                    <ColText>
                        <Title>MiHome</Title>
                        <Cargo>Junior Frontend Developer</Cargo>

                        <div className="lista">
                            <ListaCondi>
                                <ItemFirst>5d ago</ItemFirst>
                                <ItemCondi>Contract</ItemCondi>
                                <ItemCondi>USA only</ItemCondi>
                            </ListaCondi>
                        </div>
                        <LineaHr></LineaHr>
                    </ColText>

                    <DivButton>
                        <Boton>Frontend</Boton>
                        <Boton>Junior</Boton>
                        <Boton>Css</Boton>
                        <Boton>JavaScript</Boton>
                    </DivButton>

                </RowStyle>


                <RowStyle>
                    <div className="col">
                        <Imagen src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644343118/JobFilteringList/loop-studios_ug1kth.svg" alt="loopStudios " />
                    </div>
                    <ColText>
                        <Title>Loop Studios</Title>
                        <Cargo>Software Engineer</Cargo>

                        <div className="lista">
                            <ListaCondi>
                                <ItemFirst>1w ago</ItemFirst>
                                <ItemCondi>Full Time</ItemCondi>
                                <ItemCondi>Worldwide</ItemCondi>
                            </ListaCondi>
                        </div>
                        <LineaHr></LineaHr>
                    </ColText>

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
                        <Imagen src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644343121/JobFilteringList/faceit_u1s4ex.svg" alt="facelt " />
                    </div>
                    <ColText>
                        <Title>Facelt</Title>
                        <Cargo>Junior Backend Developer</Cargo>

                        <div className="lista">
                            <ListaCondi>
                                <ItemFirst>2w ago</ItemFirst>
                                <ItemCondi>Full Time</ItemCondi>
                                <ItemCondi>Uk only</ItemCondi>
                            </ListaCondi>
                        </div>
                        <LineaHr></LineaHr>
                    </ColText>

                    <DivButton>
                        <Boton>Backend</Boton>
                        <Boton>Junior</Boton>
                        <Boton>Ruby</Boton>
                        <Boton>RoR</Boton>
                    </DivButton>

                </RowStyle>

                <RowStyle>
                    <div className="col">
                        <Imagen src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644343118/JobFilteringList/shortly_q24gmr.svg" alt="shortly " />
                    </div>
                    <ColText>
                        <Title>Shortly</Title>
                        <Cargo>Junior Developer</Cargo>

                        <div className="lista">
                            <ListaCondi>
                                <ItemFirst>2w ago</ItemFirst>
                                <ItemCondi>Full Time</ItemCondi>
                                <ItemCondi>Worldwide</ItemCondi>
                            </ListaCondi>
                        </div>
                        <LineaHr></LineaHr>
                    </ColText>

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
                        <Imagen src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644343118/JobFilteringList/insure_j1qrty.svg" alt="insure " />
                    </div>
                    <ColText>
                        <Title>Insure</Title>
                        <Cargo>Junior Frontend Developer</Cargo>

                        <div className="lista">
                            <ListaCondi>
                                <ItemFirst>2w ago</ItemFirst>
                                <ItemCondi>Full time</ItemCondi>
                                <ItemCondi>USA only</ItemCondi>
                            </ListaCondi>
                        </div>
                        <LineaHr></LineaHr>
                    </ColText>

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
                        <Imagen src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644343120/JobFilteringList/eyecam-co_kgmg1z.svg" alt="eyecam " />
                    </div>
                    <ColText>
                        <Title>Eyecam Co.</Title>
                        <Cargo>Full stack Engineer</Cargo>

                        <div className="lista">
                            <ListaCondi>
                                <ItemFirst>3w ago</ItemFirst>
                                <ItemCondi>Full time</ItemCondi>
                                <ItemCondi>Worldwide</ItemCondi>
                            </ListaCondi>
                        </div>
                        <LineaHr></LineaHr>
                    </ColText>

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
                        <Imagen src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644343120/JobFilteringList/the-air-filter-company_xn6npa.svg" alt="air " />
                    </div>
                    <ColText>
                        <Title>The Air Filter Company</Title>
                        <Cargo>Front-end Dev</Cargo>

                        <div className="lista">
                            <ListaCondi>
                                <ItemFirst>1mo ago</ItemFirst>
                                <ItemCondi>Part Time</ItemCondi>
                                <ItemCondi>Worldwide</ItemCondi>
                            </ListaCondi>
                        </div>
                        <LineaHr></LineaHr>
                    </ColText>

                    <DivButton>
                        <Boton>Frontend</Boton>
                        <Boton>Junior</Boton>
                        <Boton>React</Boton>
                        <Boton>Sass</Boton>
                        <Boton>JavaScript</Boton>
                    </DivButton>

                </RowStyle>


            </Contenedor>
        </ContenedorAll>;
    }
}
