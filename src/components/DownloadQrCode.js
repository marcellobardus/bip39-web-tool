import React from "react";

import PropTypes from "prop-types";

import { IconButton, Icon } from "rsuite";

export default function DownloadQrCode(props) {
  const download = () => {
    const canvas = document.getElementById(props.elementId);
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = props.filename;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <IconButton
      icon={<Icon icon="download" />}
      appearance="primary"
      onClick={download}
    >
      Download QrCode
    </IconButton>
  );
}

DownloadQrCode.propTypes = {
  elementId: PropTypes.string,
  filename: PropTypes.string
};
