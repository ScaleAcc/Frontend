import styles from './styles.module.css';
import { IoIosSearch } from "react-icons/io";

const {search__input} = styles;
const SearchInput = () => {
  return (
    <div className={search__input}>
        <input type="text" name="search" id="search" />
        <label htmlFor="search">
            <IoIosSearch />
        </label>
    </div>
  )
}

export default SearchInput