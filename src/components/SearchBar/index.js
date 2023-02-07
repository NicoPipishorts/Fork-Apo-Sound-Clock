//IMPORT NPM
import { Input, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";


// == IMPORT ASSETS
import "./styles.scss";

const SearchBar = ({
  research,
  changeField,
  handleSearch,
}) => {

  const navigate = useNavigate();

  const handleChange = (evt) => {
      changeField(evt.target.value, evt.target.name);
    };
    
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearch();
    navigate("/results");
  };
  

  return(
    <section>
      <Form onSubmit={handleSubmit}>
        <Input
          className='searchbar-input'
          icon={{ name: 'search', circular: true, link: true }}
          placeholder='Search...'
          onChange={handleChange}
          name='research'
          value={research}
          required
          size="big"
          fluid
        />
      </Form>
    </section>
  );

};

export default SearchBar;