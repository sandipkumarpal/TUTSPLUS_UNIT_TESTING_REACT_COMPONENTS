import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow, render} from 'enzyme';
import UserList from '../containers/UserList';

const userData = [
    {name: 'Sandip'},
    {name: 'Rayel'},
    {name: 'Gopal'},
    {name: 'Akash'},
    {name: 'Monoj'}
  ];
const filterData = '';

test('<User /> render correctly', () => {
  const tree = renderer
    .create(<UserList users={userData} filter={filterData}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
