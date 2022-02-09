import styled from "styled-components";

export const Nav = styled.div`
    background-color:  hsl(180, 29%, 50%);
    margin-bottom:4%;
`

export const RowStyle = styled.div`
    margin-bottom: 2%;
    padding:3%;
    display: grid; 
    grid-template-columns: 0.0fr 8fr 12fr !important; 
    gap: 0px 35px; 
    background-color:  #fff;
    border-radius:5px;
    box-shadow: 5px 7px 5px #e8ecec;

    &:last-child{
        margin-bottom:7%;
    }
    @media (max-width: 540px) {
        display: flex;
        flex-wrap:wrap;
        margin-bottom: 17%;
        padding-left: 6%;
        padding-right: 4%;
      }


`
export const Imagen = styled.img`

@media (max-width: 540px) {
    width: 55px;
    position: absolute;
    margin-top:-12%;

}
`
export const RowNew = styled(RowStyle)`
    border-left: 5px solid hsl(180, 29%, 50%);
`

export const Contenedor = styled.div`
    width: 83%;
    margin: auto;
    display:block; 

`
export const RowFilter = styled(RowStyle)`
    position: absolute;
    display:flex;
    margin-top:-7%;
    width:83%;
    padding:1% 2%;
    box-shadow: 0px 7px 5px #e8ecec;
    @media (max-width: 540px) {
        position: relative;
        width:100%;
        margin-bottom: 15%;
      }


`
export const ColFilt = styled.div`
    width: 100%;

`
export const ColText = styled.div`
    @media (max-width: 540px) {
    margin-top: 10%;
    }

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

export const Cargo = styled.h3`
    margin: 4% 0 2% 0;

    &:hover{
        color:hsl(180, 29%, 50%);
        cursor: pointer;
    }
`

export const ListaCondi = styled.ul`
    display: flex;
    color:hsl(180, 8%, 52%);
`

export const ItemCondi = styled.li`
    margin-left:8%;
`

export const ItemFirst = styled(ItemCondi)`
    margin-left:0%;
    list-style: none;
`

export const LineaHr = styled.hr`
    display:none;

    @media (max-width: 540px) {
        display:block;
        margin-top:6%;
        width: 70vw;
      }
`

export const Boton = styled.button`
    color: hsl(180, 29%, 50%);
    font-weight: bold;
    border: none;
    border-radius: 5px;
    background-color:rgba(91, 164, 164,.1);
    padding:2%;
    margin-left: 4%;
    margin-top: 5%;
    cursor: pointer;
    &:hover{
        background-color:hsl(180, 29%, 50%);
        color:#ffff;
        transition:all 0.9s;
    }
`

export const DivButton = styled.div`
    text-align: right;

    @media (max-width: 540px) {
        text-align: left;
      }
`


export const BtnFilter = styled(Boton)`
    margin-left:5%;
    margin-top: 0%;
    padding:0% 3% 0% 1%;
    color: hsl(180, 29%, 50%);
    &:hover{
        background-color:rgba(91, 164, 164,.1);
        color:hsl(180, 29%, 50%);
    }

    @media (max-width: 540px) {
        padding:2% 4%;
        margin: 3% 0 3% 5%;
      }

`

export const ClearBtn = styled(BtnFilter)`
    float: right;
    background-color:#ffff;
    color: hsl(180, 8%, 52%);
    padding:1%;
    padding-bottom:0;
    &:hover{
        background-color:#fff;
        color:hsl(180, 29%, 50%);
        border-bottom: 1px solid hsl(180, 29%, 50%);
        border-radius:0;
    }

`

export const BottonClose = styled.button`
    background-color:hsl(180, 29%, 50%);
    border:none;
    margin-right:-51%;
    margin-left:10%;
    padding:9%;
    border-radius: 0px 5px 5px 0px; 
    cursor:pointer;
    &:hover{
        background-color:  hsl(180, 14%, 20%);
    }
`
export const BottonCss = styled(BottonClose)`
        margin-right:-100%;
        padding:16%;
`