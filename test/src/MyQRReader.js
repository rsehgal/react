import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QRScanner = () => {
  const [result, setResult] = useState(null);

  const handleScan = (data) => {
    if (data) {
        alert("Hello Raman");
      setResult(data);
    }
  }

  const handleError = (error) => {
    console.error('Error while scanning QR Code:', error);
  }

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <QrReader
        onScan={handleScan}
        onError={handleError}
        style={{ width: '100%' }}
      />

      <div>
        {result ? (
          <p>QR Code Result: {result}</p>
        ) : (
          <p>Scanning...</p>
        )}
      </div>
    </div>
  );
}

export default QRScanner;
