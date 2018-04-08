import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow} from 'enzyme';
import User from '../components/User';

const userData = {
    name: 'Scott'
};

test('<User /> render correctly', () => {
    const tree = renderer
        .create(<User key={userData.name} user={userData}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
