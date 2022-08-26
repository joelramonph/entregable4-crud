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
      <h1 className='form__title'>{updateInfo ? 'Update User Information' : 'Create New User'}</h1>
      <ul className='form__list'>
        <li className='form__item'>
          <label htmlFor="name">Full Name</label>
          <input className='form__input firts' {...register("first_name")} type="text" placeholder="First Name" required  />
          <input className='form__input last' {...register("last_name")}  type="text" placeholder="Last Name" required  />
        </li>
        <li className='form__item'>
          <label htmlFor="email">Email</label>
          <input className='form__input email-main'  {...register("email")}  type="mail"  placeholder="Email" required />
        </li>
        <li className='form__item '>
          <label htmlFor="password">Password</label>
          <input className='form__input password-current' {...register("password")} type="password" placeholder="password" required />
        </li>
        <li className='form__item'>
          <label htmlFor="birthday">Birthday</label>
           <input className='form__input birthday-born' {...register("birthday")} type="date"  />
        </li>
      </ul>
    
        <button className='form__btn'>{updateInfo ? 'Update' : 'Create'}</button>
        
    </form>

    </div>
)}

export default UserForm