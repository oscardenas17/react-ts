import { useState } from 'react';


const Form = () => {

  const [inputValues, setInputValues] = useState({
    nick:'',
    subMonths:'',
    avatar:'',
    description:''
  })

    const handleSubmit = () => {}

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