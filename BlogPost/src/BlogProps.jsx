import styled from "styled-components";


const BlogProps = ({Image,Title,Time,Post}) => {
    return ( 
        <Section>
            <img src={Image} alt="" />
            <p>{<span>{Title}</span>}{Time}</p>
            <p id="Post"><i>{Post}</i></p>

        </Section>
     );
}
export default BlogProps;

const Section=styled.div`
    border: 1px solid;
    width: 200px;
    height: 200px;
    margin: 20px 0px ;
`