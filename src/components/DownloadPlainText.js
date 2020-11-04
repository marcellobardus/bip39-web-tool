import React from "react";

import PropTypes from "prop-types";

import { IconButton, Icon } from "rsuite";

export default function DownloadPlainText(props) {
  const download = () => {
    const element = document.createElement("a");
    const file = new Blob([props.data], {
      type: "text/plain",
    });

    element.href = URL.createObjectURL(file);
    element.download = props.filename;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <IconButton
      icon={<Icon icon="download" />}
      appearance="primary"
      onClick={download}
    >
      Download text
    </IconButton>
  );
}

DownloadPlainText.propTypes = {
  data: PropTypes.string,
  filename: PropTypes.string,
};
