import { useContext } from 'react';
import { FormDataContext } from '../context/FormDataContext';

export const useFormData = () => {
  const formDataContext = useContext(FormDataContext);

  if(!formDataContext) {
    throw new Error("formDataContext has to be used within <FormDataProvider.Provider>");
  }

  return formDataContext;
}
