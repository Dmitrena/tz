import styled from 'styled-components';

export const AccordWrapper = styled.div`
display:flex;
  height:900px;
  width:1000px;
  justify-content:center;
  align-items:center;
  text-align:center;
`;

export const Accordion = styled.div``;
export const AccordItem = styled.div`
background:greenyellow;
margin-bottom:5px;
padding:10px 20px;
`

export const AccordTitle = styled.div`
color: #626262;
display: flex;
  justify-content: space-between;
  align-items: center;
  cursor:pointer;
`;

export const AccordContent = styled.div`
color:#B0B0B0;
width:600px;
  font-weight: 500;
  font-size: 26px;
  line-height: 130%;
  letter-spacing: 0.02em;`;