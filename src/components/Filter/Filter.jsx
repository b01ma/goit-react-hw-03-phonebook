import styled from 'styled-components';

const Input = styled.input`
  width: 150px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Filter = ({ value, onChange }) => {
  return (
    <Wrapper>
      <h2>Find contacts by name</h2>
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </Wrapper>
  );
};
