import React from 'react'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import axios from 'axios'

const defaultValue = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  birthday: ''
}
const UserForm = ({getAllUsers, updateInfo, setUpdateInfo, handleCloseForm}) => {

  useEffect(() => {
    if (updateInfo) {
      reset(updateInfo)
    }
  
    
  }, [updateInfo])
  
  
  {/*Post para crear Usuario */}
  const createUser = data => {
    const URL = 'https://users-crud1.herokuapp.com/users/'
    axios.post(URL, data)
    .then(res => {
      console.log(res.data)
      getAllUsers()

    })
    .catch(err => console.log(err))
  }
  
  const updateUser = data => {
    const URL = `https://users-crud1.herokuapp.com/users/${updateInfo.id}/`
    axios.patch(URL, data)
    .then(res => {
      console.log(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))
  }

  const {register, reset, handleSubmit} = useForm()
  
  {/*Funcion para capturar los datos que se almacenan en el register de los input */}
  const submit = data => {

    if (updateInfo) {
      //update user
      updateUser(data)
      setUpdateInfo()
    }else{
      //create user
      createUser(data)
      
    }
    reset(defaultValue)
    handleCloseForm()
    
  }

  return (
    <div className='container'>

    <form onSubmit={handleSubmit(submit)} className='form'>
      <div onClick={handleCloseForm} className='form__equis'>X</div>
      <h1>{updateInfo ? 'Update User Information' : 'Create New User'}</h1>
      <ul className='form__list'>
        <li className='form__item'>
          <label htmlFor="name last">Name</label>
          <input {...register("first_name")} type="text" id='name' />
          <input {...register("last_name")}  type="text" id='last' />
        </li>
        <li className='form__item'>
          <label htmlFor="email">Email</label>
          <input {...register("email")}  type="mail" id='email' />
        </li>
        <li className='form__item'>
          <label htmlFor="password">Password</label>
          <input {...register("password")} type="password" id='password'/>
        </li>
        <li className='form__item'>
          <label htmlFor="birthday">Cumple</label>
          <input  {...register("birthday")} type="date" id='birthday'/>
        </li>
      </ul>
    
        <button className='form__btn'>{updateInfo ? 'Update' : 'Create'}</button>
        
    </form>

    </div>
)}

export default UserForm