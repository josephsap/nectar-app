import { shallow } from 'enzyme';
import Example from '../Example';

describe('<Example />', () => {
  test('example test', () => {
    const wrapper = shallow(<Example />);
    expect(wrapper.text()).toEqual('Welcome to Next.js!');
  });
});
