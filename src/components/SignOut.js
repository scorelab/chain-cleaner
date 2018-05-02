import React from 'react';

import { auth } from '../firebase';

const SignOutButton = () =>
  <button
    type="button"
    onClick={auth.doSignOut}
    style={{border:'1px solid #000', borderRadius:'5px', color:'#000'}}
  >
    Sign Out
  </button>

export default SignOutButton;