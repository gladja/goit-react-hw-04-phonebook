import { Btn, Form, Input, Label } from './ContactForm.styled';

export const ContactForm = ({handleSubmit}) => {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type='text'
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces.
            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
            placeholder='First name Last name'
          />
        </Label>

        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
            placeholder='123-45-67'
          />
        </Label>

        <Btn type='submit'>Add contact</Btn>
      </Form>
    </>
  );
};
