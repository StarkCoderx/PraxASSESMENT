import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders SearchResultNavbar component', () => {
    render(<App />);
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toBeInTheDocument();
  });

  it('renders SearchResultText component', () => {
    render(<App />);
    const textElement = screen.getByText(/search results/i);
    expect(textElement).toBeInTheDocument();
  });

  it('renders SearchResultFilters component', () => {
    render(<App />);
    const filtersElement = screen.getByRole('filters');
    expect(filtersElement).toBeInTheDocument();
  });

  it('renders SearchResultCards component', () => {
    render(<App />);
    const cardsElement = screen.getByRole('cards');
    expect(cardsElement).toBeInTheDocument();
  });

  it('renders SearchResultPagination component', () => {
    render(<App />);
    const paginationElement = screen.getByRole('pagination');
    expect(paginationElement).toBeInTheDocument();
  });

  it('renders SearchResultFooter component', () => {
    render(<App />);
    const footerElement = screen.getByRole('footer');
    expect(footerElement).toBeInTheDocument();
  });
});