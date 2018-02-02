import styled from 'styled-components';

const Button = styled.button `
background-color: white;
color: blue;
border: 2px solid blue;
${props => props.primary && `
  background-color: blue
  color: white;
`}
`;

export default() => (
    <div>
        <Button onClick={() => alert('This is Normal Button')}>Normal Button</Button>
        <Button primary onClick={() => alert('This is Primary Button')}>Primary Button</Button>
    </div>
)
