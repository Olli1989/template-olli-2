import { useEffect } from 'react';
import FormInput from './components/form/FormInput/FormInput';
import './app.css';
import { useFormData } from './hooks/useFormData';
import { useFetchWithAbortController } from './hooks/useFetchWithAbortController';
import { getFormLayoutElements } from './getLayoutElements';

function App() {
  const { formData, setFormData} = useFormData();
  const { fetchData, error, isLoading } = useFetchWithAbortController('./testFetchData.json')


  console.log("Fetched Data:");
  console.log(fetchData)
  console.log("Error: ");
  console.log(error)
  console.log("isLoading: ");
  console.log(isLoading)
  
  console.log("First Name: " + formData.firstName);
  console.log("Last Name: " + formData.secondName);
  
  const handleFormChange = (event:any):void => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const name = event.target.name;
    
    setFormData(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  
  const formLayoutElements = getFormLayoutElements(formData,handleFormChange)
  

  return (
    <>
      <form>
        {formLayoutElements}
      </form>
    </>
  )
}

export default App;
