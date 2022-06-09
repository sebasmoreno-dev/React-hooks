import { mount } from 'enzyme';
import React from 'react';
import { AppRouter } from '../../components/09-useContext/AppRouter';
import { UserContext } from '../../components/09-useContext/UserContext';
import "./../../setupTest";


describe('Pruebas en AppRouter', () => {

  const user = {
    id: 123,
    name: 'Fernando'
  }

  const wrapper = mount(
    <UserContext.Provider value={{
      user
      }}>
        <AppRouter />
      </UserContext.Provider>
  );

  test('should show corretly' , () => {

      expect( wrapper ).toMatchSnapshot();

  });
});