import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe("App tests", () => {
  let component;

  beforeEach(() => {
    component = <App />;
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});