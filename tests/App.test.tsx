import { render, screen } from '@testing-library/react';
import App from "../src/App";
import React from 'react';


describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    const headline = screen.getByText(/Bienvenue dans mon projet HRnet !/i);
    expect(headline).toBeInTheDocument();
  });
});