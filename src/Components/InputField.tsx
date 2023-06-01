import React,{useRef} from 'react'
import './styles.css';

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent)=>void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef()
    return (
    <form className='input' onSubmit={handleAdd}>
        <input 
            type="text" 
            value={todo} 
            onChange={(e)=> setTodo(e.target.value)} 
            placeholder='Enter a task' className='input__box'/>
        <button type="submit" className='input_submit'>Go</button>
    </form>
  )
}

export default InputField;