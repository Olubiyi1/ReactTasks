import BlogProps from "../BlogProps";
import styled from "styled-components";
import Dice from "../assets/Images/dice.jpg"
const Homepage = () => {
    return ( 
        <Main>
            
            <BlogProps Image={Dice} Title="Welcome" Time="5 minutes ago" Post="Manifest Positivity in your life"/>
            <BlogProps Image="" Title="Welcome" Time="Mar 8 2023" Post=""/>
            <BlogProps Image="" Title="Welcome" Time="1hr ago" Post=""/>
            <BlogProps Image="" Title="Welcome" Time="Mar 9 2024" Post=""/>
        </Main>
     );
}
export default Homepage;

const Main = styled.div`
     background: linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%);
    border: 1px solid;
    display: flex;
    justify-content: space-around;
    height: 100vh;

    img{
        width: 100%;
        border-radius: 5px;
    }
`