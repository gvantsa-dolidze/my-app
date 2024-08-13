import Button from "./Button"
import Input from "./Input"
import TextArea from "./TextArea"
const Form = () => {
  return (
    <form action="submit" className="flex flex-col sm:w-96 gap-5 border p-5 rounded-md border-gray-700 shadow-xl">
        <Input 
            id='last_name'
            placeholder='First Name'
            name='first_name'
            label='Enter your First Name:'
            type='text'
        />
        <Input 
             id='first_name'
             placeholder='Last Name'
             name='last_name'
             label='Enter your Last Name:'
             type='text'
        />
        <Input 
             id='email'
             placeholder='Email'
             name='email'
             label='Enter your Email:'
             type='email'
        />
        <TextArea 
             id='text_area'
             placeholder='Wrote your massage here...'
             name='massage'
             label='Leave your message here:'
        />
        <Button 
             text='Submit'
             styles='secondary'
        />
    </form>
  )
}

export default Form