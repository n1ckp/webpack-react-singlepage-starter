import React from 'react';                     // required to get test to work.  we can get around this later with more configuration
import App from '../../src/components/app';  // import our soon to be component
import { renderComponent } from '../test_helper';

describe('(Component) App', function() {
  let rootComponent;

  beforeEach(function() {
    rootComponent = renderComponent(App);
  });

  it('renders as a <div>', () => {
    expect(rootComponent.is("div")).to.eql(true);
  });
});
