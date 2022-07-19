import { Input, Wrapper } from './Filter.css';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <Wrapper>
      <h2>Find contacts by name</h2>
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </Wrapper>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
