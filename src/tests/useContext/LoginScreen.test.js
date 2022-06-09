import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../components/09-useContext/LoginScreen';
import { UserContext } from '../../components/09-useContext/UserContext';
import "./../../setupTest";

describe('Pruebas en LoginScreen', () => {

const setUser = jest.fn();

const wrapper = mount(
  <UserContext.Provider value={{
    setUser
  }}>
    <LoginScreen/>
  </UserContext.Provider>
)

  test('should show corretly' , () => {

    expect( wrapper ).toMatchSnapshot();

  });

  test('should call setUser when button is clicked', () => {

      wrapper.find('button').prop('onClick')();

      expect( setUser ).toHaveBeenCalledWith({
        id: 123,
        name: 'Fernando'
      });

  })

});
