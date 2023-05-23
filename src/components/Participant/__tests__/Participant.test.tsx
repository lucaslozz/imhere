import { render } from '@testing-library/react-native';
import { Participant } from '..';

test('it should render Participant', () => {
  render(<Participant name="Lucas" onRemove={jest.fn} />);
});
