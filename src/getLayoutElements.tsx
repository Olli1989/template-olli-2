import FormInput from './components/form/FormInput/FormInput';
import { IFormDataState } from './context/FormDataContext';

export const getFormLayoutElements = (formData:IFormDataState, handleFormChange:(event:any)=>void) => {
  const formLayout:{name: string, type: string}[] = [{name: 'firstName', type: 'text'}, {name: 'secondName', type: 'text'}];

  const layoutElements = formLayout.map((formelement, i) => {
    let name = formelement.name;
    switch (formelement.type) {
      case 'text':
        return (
          <FormInput 
            key={i} 
            label={name}
            name={name}
            placeholder={name}
            value={formData[name]}
            onChange={handleFormChange}
          />
        );
      case 'number':
        return (
          <FormInput
            key={i} 
            label="First Name"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleFormChange}
            type="number"
          />
        );
      default:
        return;
    }
  })

  return layoutElements;
}