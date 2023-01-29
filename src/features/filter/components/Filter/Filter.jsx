import { useDispatch } from "react-redux";
import { addFilter } from "../../filterSlice.js";
import css from "./Filter.module.css";
import PropTypes from "prop-types";

export const Filter = () => {
  const dispatch = useDispatch();

  const setFilter = (event) => {
    const filter = event.target.value.toLowerCase().trim();
    dispatch(addFilter(filter));
  };

  return (
    <div className={css.section}>
      <h3 className={css.titleFilter}>Find contacts by name</h3>
      <input
        className={css.input}
        type="text"
        name="filter"
        placeholder="filter by name"
        onChange={setFilter}
      />
    </div>
  );
};

Filter.propTypes = {
  inputFilter: PropTypes.func,
};
