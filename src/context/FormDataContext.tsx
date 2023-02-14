import { createContext, useState } from 'react';

export interface IFormDataState  {
  firstName: string,
  secondName: string,
  [key: string]:string
}

interface IFormDataContext  {
  formData: IFormDataState,
  setFormData: React.Dispatch<React.SetStateAction<IFormDataState>>
}

export const FormDataContext = createContext<IFormDataContext | null>(null);


export const FormDataProvider = ({children}:{children: React.ReactNode}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: ""
  })

  return (
    <FormDataContext.Provider value={{formData , setFormData}}>
      {children}
    </FormDataContext.Provider>
  );
}

