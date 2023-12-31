import PropTypes from 'prop-types'; 
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts, onDeleteContact }) => {
 
    return (
        <ul>
            {contacts.map(({id, name, number}) => (
            <ContactItem 
            key={id} 
            id={id} 
            name={name}
            number={number}
            onClick={onDeleteContact} />
            ))}
        </ul>
    )
}


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,          
      })
    ),
    onDeleteContact: PropTypes.func.isRequired,
  };