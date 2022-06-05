import { shallow } from 'enzyme';
import React from 'react';
import { RealExampleRef } from "../../components/04-useRef/RealExampleRef";
import "./../../setupTest";


describe('Pruebas en RealExampleRef', () => {

  const wrapper = shallow(<RealExampleRef />);

      test('Debe de mostrar el componente', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists() ).toBe(false);
      });

      test('Debe de mostrar el componente MultipleCustomHooks', () => {

        wrapper.find('button').simulate('click');
        
        expect(wrapper.find('MultipleCustomHooks').exists() ).toBe(true);
      });
});