import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function BS_DropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/jewdesign">Jewellery Design</Dropdown.Item>
        <Dropdown.Item as={Link} to="/intdesign">Interior Design</Dropdown.Item>
        <Dropdown.Item as={Link} to="/webdesign">Website Design</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BS_DropDown;