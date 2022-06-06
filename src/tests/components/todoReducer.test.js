import { todoReducer } from "../../components/08-useReducer/todoReducer";
import { demoTodos } from "./../fixtures/demoTodos";


describe('Pruebas en todoReducer', () => {

    test('Debe de retornar el estado por defecto', () => {

      const state = todoReducer( demoTodos, {});
      expect(state).toEqual(demoTodos);
    });

    test('Debe de agregar un nuevo todo', () => {

        const newTodo = {
          id: 3,
          text: 'Nuevo Todo',
          done: false
        };

        const action = {
          type: 'add',
          payload: newTodo
        };

        const state = todoReducer( demoTodos, action );
        expect( state ).toEqual([...demoTodos, newTodo]);
    });

    test('Debe de eliminar un todo', () => {

      const action = {
        type: 'delete',
        payload: 1
      };

      const state = todoReducer( demoTodos, action );
      /* Checking that the state is equal to the demoTodos array with the todo with id 1 removed. */
      expect( state ).toEqual([...demoTodos.filter(todo => todo.id !== 1)]);
    })

    test('Debe de modificar el estado de un todo', () => {

      /* Toggling the done property of the todo with id 1. */
      const action = {
        type: 'toggle',
        payload: 1
      };

      const state = todoReducer( demoTodos, action );
    /* Checking that the state is equal to the demoTodos array with the todo with id 1 having
      its done property toggled. */
      expect( state ).toEqual([...demoTodos.map(todo => todo.id === 1 ? {...todo, done: !todo.done} : todo)]);
    });
})