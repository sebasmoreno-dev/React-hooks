import { mount, shallow } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../components/09-useContext/HomeScreen';
import { UserContext } from '../../components/09-useContext/UserContext';
import './../../setupTest';


describe('Pruebas en HomeScreen', () => {

  const user = {
    name: 'Juan',
    email: 'sebastian@gmail.com'
  }

  const wrapper = mount(
    <UserContext.Provider value={{
      user
      }}>

      <HomeScreen />
    </UserContext.Provider>
  );


  test('should show corretly' , () => {

    expect( wrapper ).toMatchSnapshot();

  });


});