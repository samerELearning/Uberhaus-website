import React from 'react';
import { render, screen } from '@testing-library/react';
import Listings from './Listings';

test('renders Listings component', () => {
	render(<Listings />);
	const linkElement = screen.getByText(/listings/i);
	expect(linkElement).toBeInTheDocument();
});