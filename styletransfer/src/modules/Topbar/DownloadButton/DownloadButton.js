import React from 'react';
import Button from '../../Button/Button';
import downloadLogo from './resources/downloadlogo.png'

const DownloadButton = () => (
    <Button bgColor='#9E77ED' bgColorHover='#AB87F5' textColor='#FFFFFF'  icon={downloadLogo} buttonText='Download'/>
);

export default DownloadButton;