import React from 'react';
import { Link } from 'react-router-dom';

export default ({ uuid, host, guest, url }) => (
  <li>
    <dl>
      <dt>UUID</dt>
      <dd>{uuid}</dd>
    </dl>
    <dl>
      <dt>Host</dt>
      <dd>{host}</dd>
    </dl>
    <dl>
      <dt>Guest</dt>
      <dd>{guest}</dd>
    </dl>
    <dl>
      <dt>URL</dt>
      <dd>
        <Link to={url}>{url}</Link>
      </dd>
    </dl>
  </li>
);
