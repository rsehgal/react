import React from 'react';

import QRCode from 'react-qr-code';


function MyQRCode(props) {
    //const {url}=props;
    //alert(props.url);

  return (
    <div>
      <QRCode value={props.url} />
    </div>
  );
}

export default MyQRCode;