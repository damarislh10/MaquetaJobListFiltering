import styled from "styled-components";

export const Nav = styled.div`
    background-color:  hsl(180, 29%, 50%);
    padding:4% 0;
    margin-bottom:4%;
`

export const RowStyle = styled.div`
    margin-bottom: 2%;
    padding:3%;
    display: grid; 
    grid-template-columns: 0.0fr 12fr 12fr !important; 
    gap: 0px 55px; 
    background-color:  #fff;
    border-radius:10px;

`

export const Contenedor = styled.div`
    width: 80%;
    display:flex;
    margin: auto;
    align-items: center;
`

export const Title = styled.label`
    color: hsl(180, 29%, 50%);
    margin-right: 4%;
    font-weight: bold;
`

export const LabelAnunc = styled.label`
    color:#ffff;
    border-radius: 70px;
    background-color:hsl(180, 29%, 50%);
    padding:1.5% 2% 1% 2%;
    align-items: center;
    font-size: 10px;
    font-weight: bold;
`


export const LabelFeatured = styled(LabelAnunc)`
    margin-left:2%;
    background-color: hsl(180, 14%, 20%);
`

export const Cargo = styled.h3 `
    margin: 4% 0 2% 0;
`