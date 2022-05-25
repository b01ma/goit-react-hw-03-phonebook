import styled from 'styled-components';

const Button = styled.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid orange;
  border-radius: 3px;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactList = ({ contacts, filter, onDelete }) => {
  return (
    <Ul>
      {contacts.map(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) && (
            <Li key={contact.id}>
              {contact.name}: {contact.number}
              <Button onClick={() => onDelete(contact.id)}>Delete</Button>
            </Li>
          )
      )}
    </Ul>
  );
};
