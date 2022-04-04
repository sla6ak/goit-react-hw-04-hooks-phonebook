import { Person, DeletedPerson } from './Contact.styled';
import propTypes from 'prop-types';
import { FiX } from 'react-icons/fi';

const Contact = ({ elem, deleteEl }) => {
  return (
    <Person>
      {elem.name}: {elem.numberTel}
      <DeletedPerson onClick={() => deleteEl(elem.id)}>
        <FiX />
      </DeletedPerson>
    </Person>
  );
};

Contact.propTypes = {
  deleteEl: propTypes.func,
  elem: propTypes.object,
};

export default Contact;
