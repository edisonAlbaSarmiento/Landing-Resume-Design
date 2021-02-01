import React from 'react';
import {
  useLocation,
} from "react-router-dom";

function NoMatch() {
  const location = useLocation();
  return (
    <div>
      <h3>
        NO ENCONTRe LA RUTA <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default NoMatch;
