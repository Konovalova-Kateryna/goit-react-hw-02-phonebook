import { FilterInput } from './Filter.styled';

const Filter = ({ value, onFilterChange }) => (
  <>
    <label>
      <FilterInput
        type="text"
        value={value}
        onChange={onFilterChange}
        placeholder="Name or phone to seach..."
      />
    </label>
  </>
);

export default Filter;
