import { useState } from 'react';
import {Sub} from '../types.d'



interface FormState {
  inputValues: Sub
}


//props de formulario
interface FormProps {
  onNewSub: (newSub: Sub) => void
}

const Form = (  {onNewSub} : FormProps )   => {

  const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
    nick:'',
    subMonths: 0,
    avatar:'',
    description:''
  })


  //props de formulario
    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
      evt.preventDefault()
      onNewSub(inputValues)
    }

    const handleChange = (evt:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
      setInputValues({
        ...inputValues,
        [evt.target.name]: evt.target.value
      })
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange}  type="text" name="nick" placeholder="nick"/>
            <input onChange={handleChange} value={inputValues.subMonths}type="number" name="subMonths" placeholder="subMonths"/>
            <input onChange={handleChange} value={inputValues.avatar}type="text" name="avatar" placeholder="avatar"/>
            <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="description"/>

            <button >Save new Sub</button>
        </form>
    </div>
  )
}

export default Form