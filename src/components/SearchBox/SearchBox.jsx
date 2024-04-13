import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.selectNameFilter.filters.name);
  const onChangeFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.search}>
      <p>Find contact by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onChangeFilter}
      />
    </div>
  );
};

export default SearchBox;
