import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from  './../../hooks/useForm';


describe('Pruebas en useForm', () => {

  const initialForm = {
    name: 'santiago',
    email: 'santiago@gmail.com',
  }

  test('debe de regresar un formulario por defecto', () => {

      const { result } = renderHook(() => useForm(initialForm));
      const [ formValues, handleInputChange, reset ] = result.current;

      expect(formValues).toEqual(initialForm);
      expect( typeof handleInputChange ).toBe('function');
      expect( typeof reset ).toBe('function');
  });

  test('debe de cambiar el nombre del formulario', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [ , handleInputChange ] = result.current;

        act(() => {

            handleInputChange({
                target: {
                    name: 'name',
                    value: 'juan'
                }
            });

          })

        const [ formValues ] = result.current;

        expect(formValues).toEqual({ ...initialForm, name: 'juan' });
  });

  test('debe de resetear el formulario', () => {

          const { result } = renderHook(() => useForm(initialForm));
          const [ , handleInputChange , reset ] = result.current;

          act(() => {

            handleInputChange({
                  target: {
                      name: 'name',
                      value: 'juan'
                }
              });

            reset();
          })

          const [ formValues ] = result.current;

          expect(formValues).toEqual(initialForm);
  });
});