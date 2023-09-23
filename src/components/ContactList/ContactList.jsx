import { BtnDel, Item, List, Row } from './ContactList.styled';
import { AiFillDelete } from 'react-icons/ai';
import { IconContext } from 'react-icons';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <List>
      {contacts && contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Row>{name}</Row>
          <Row> {number}</Row>
          <BtnDel
            onClick={() => handleDelete(id)}
          >
            <IconContext.Provider value={{ color: 'grey', size: 25 }}>
            <AiFillDelete/>
            </IconContext.Provider>
          </BtnDel>
        </Item>
      ))}
    </List>
  );
};
