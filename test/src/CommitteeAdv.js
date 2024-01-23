import Table from './Table';
import React, { useEffect, useState } from 'react';
import Committee from './Committee';
function CommitteeAdv(props){
/*const data = [
  { Name: 'John', Age: 30, Email: 'john@example.com' },
  { Name: 'Alice', Age: 25, Email: 'alice@example.com' },
  { Name: 'Bob', Age: 35, Email: 'bob@example.com' },
];*/

return <Committee url={props.url}>{props.children}</Committee>;
}

export default CommitteeAdv;
