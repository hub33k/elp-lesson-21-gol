import { render, screen } from '@testing-library/react';
import HomePage from '~/pages/index';

describe(HomePage.name, () => {
  it('renders a heading', () => {
    render(<HomePage />);

    const heading = screen.getByRole('heading', {
      name: /Home page/i,
      level: 1,
    });

    expect(heading).toBeInTheDocument();
  });

  it('match snapshot', () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });
});
