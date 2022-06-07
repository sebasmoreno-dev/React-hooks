import React from 'react';
import { shallow } from "enzyme";
import { TodoAdd } from "../../components/08-useReducer/TodoAdd";
import './../../setupTest';



describe('Pruebas en TodoAdd', () => {
  
      const handleAddTodo = jest.fn();

      const wrapper = shallow(
        <TodoAdd
          handleAddTodo={ handleAddTodo }
          />
        );

      test('No Debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
      });

      test('Debe de llamar handleAddTodo', () => {
        const form = wrapper.find('form').prop('onSubmit');

        form({ preventDefault: () => {} });

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
      });


      test('should llmar la funcion handleAddTodo', () => {

        const value = 'Aprender React';
        wrapper.find('input').simulate('change', {
          target: { value,
                    name: 'description'
          }
        });

        const form = wrapper.find('form').prop('onSubmit');
        form({ preventDefault: () => {} });

        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith( expect.any(Object) );
        expect(handleAddTodo).toHaveBeenCalledWith({
          id: expect.any(Number),
          desc: value,
          done: false
        })

      });
});