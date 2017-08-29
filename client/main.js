import React from 'react';
import { render } from 'react-dom';

import { Meteor } from 'meteor/meteor';

import Books from '../imports/ui/containers/Books';

Meteor.startup(() => {
  render(<Books/>,document.getElementById('react-root'))
})

