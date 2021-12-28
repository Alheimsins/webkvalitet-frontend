import { screen, render } from '@testing-library/react';

import Score from '../components/score';

describe('testing the Score component', () => {
  it('should render the the title and the score', () => {
    render(<Score title="Test" score={50} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('50')).toBeInTheDocument();
  });

  it('defaults to score 0', () => {
    render(<Score title="Test" />);
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('Test')).toBeInTheDocument();
  })
})
