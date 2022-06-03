import React from 'react';
import { shallow } from "enzyme";
import { MultipleCustomHooks } from "./../../components/03-examples/MultipleCustomHooks";
import "./../../setupTest";
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');



describe('Pruebas en MultipleCustomHooks', () => {

  useCounter.mockReturnValue({
    counter: 10,
    increment: () => {},
  });


  




  test('debe mostrarse correctamente', () => {

    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    expect( wrapper ).toMatchSnapshot();
  })

  test('debe mostrarse correctamente', () => {

    useFetch.mockReturnValue({
      data: [{
        author: "George R. R. Martin",
        quote: "I'm not going to die. I'm going to live."
      }],
      loading: false,
      error: null
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect( wrapper.find('.alert').exists() ).toBe(false);
    expect( wrapper.find('.mb-0').text().trim() ).toBe("I'm not going to die. I'm going to live.");
  })

});