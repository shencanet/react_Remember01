

import PropTypes from 'prop-types';
const MyBotton = (props) => {
  console.log(props);
  return (
    <button text="text" edad={10}>aquii</button>
  );
}

MyBotton.propTypes = {
    text: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
    };

export default MyBotton;

