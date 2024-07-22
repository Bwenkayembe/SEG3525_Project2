import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Title.css'; // Ensure the CSS file is imported

const Title = ({ subTitle, title }) => {
  return (
    <div className='title'>
      <p><FormattedMessage id="title.subtitle" defaultMessage={subTitle} /></p>
      <h2><FormattedMessage id="title.title" defaultMessage={title} /></h2>
    </div>
  );
}

export default Title;
