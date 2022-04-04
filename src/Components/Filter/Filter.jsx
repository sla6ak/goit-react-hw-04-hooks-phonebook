import { FilterPerson } from './Filter.styled';
import propTypes from 'prop-types';

const Filter = ({ filter, onFinde }) => {
  return (
    <FilterPerson type="text" name="filter" value={filter} onChange={onFinde} />
  );
};
Filter.propTypes = {
  filter: propTypes.string,
  onFinde: propTypes.func,
};
export default Filter;
