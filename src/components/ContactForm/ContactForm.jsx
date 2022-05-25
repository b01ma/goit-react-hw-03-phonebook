import { Component } from 'react/cjs/react.production.min';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 10px 10px 10px 0px;
`;

const Label = styled.label`
  display: flex;
  width: 250px;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 10px 10px 0px;
`;

const Button = styled.button`
  width: 150px;
  color: black;
  font-size: 1em;
  margin-top: 15px;
  padding: 0.25em 1em;
  border: 2px solid orange;
  border-radius: 3px;

  margin-left: auto;
  margin-right: auto;
`;

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Wrapper>
          <Label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Label>

          <Label>
            Contact
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
          </Label>

          <Button type="submit">Add contact</Button>
        </Wrapper>
      </form>
    );
  }
}

export default ContactForm;
