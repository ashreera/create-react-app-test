import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '@storybook/react/demo';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module)
  .add('with primary', () => <Button label="Primary Button"  onClick={action('click')}
  />)
  .add('with outline', () => <Button
    label="Ouline Button" onClick={action('click')}

    style={{ background: 'transparent', border: '3px solid #fecd43' }}
  />)
  .add('with rounder corners', () => <Button
    label="Rounded Button" onClick={action('click')}

    style={{ borderRadius: '15px' }}
  />)
  .add('disabled', () => <Button disabled onClick={action('click')}

    label="Disabled Button"
    style={{ background: 'gray' , border: 'gray', cursor: 'not-allowed' }}
  />)