import { Label, Input } from '../ContactForm/ContactForm.styled';
import { Wrap } from './Filter.styled';

export const Filter = ({ contactsFilter, filter }) => {
  return (
    <Wrap>
        <Label>
          Find contacts by name
          <Input
            onChange={contactsFilter}
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title='Find contacts by name'
            placeholder='Write name'
            value={filter}
          />
        </Label>
    </Wrap>
  );
};
