import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as farStar} from '@fortawesome/free-regular-svg-icons';

const solidStyle = {
  icon: faStar,
  color: '#fc6',
};

const regularStyle = {
  icon: farStar,
  color: '',
};

function Star({checked = true, size = '1x'}) {
  const [flag, setFlag] = useState(checked);
  const onToggle = (e) => {
    setFlag(!flag);
  };
  const starStyle = flag ? solidStyle : regularStyle;
  return (
      <FontAwesomeIcon {...starStyle}
                       style={{
                         cursor: 'pointer',
                       }}
                       onClick={onToggle}
                       size={size}/>
  );
}

export default Star;