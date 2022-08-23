import axios from 'axios'
import React from 'react'

const UsersList = ({user, getAllUsers, setUpdateInfo}) => {

  const deleteUser = () => {
    const URL = `https://users-crud1.herokuapp.com/users/${user.id}/`
    axios.delete(URL)
    .then(res => { 
      console.log(res.data) 
      getAllUsers()

    })
    .catch(err => console.log(err))
  }

  const handleUpdateClick = () =>{
    setUpdateInfo(user)
  }
    
  return (
   <article className='card'>
   <h2 className='card__name'>{user["first_name"]} {user["last_name"]}</h2>
   <hr className='card__hr' />

   <ul className='card__list'>
   <li className="card__item">Correo <span className='card__span'>{user.email}</span></li>
   <li className="card__item">Cumleapños <span className='card__span'>{user.birthday}</span></li>
   </ul>

   <div className='container__btn'>
    <button onClick={deleteUser} className='card__btn delete'>Eliminar</button>
    <button onClick={handleUpdateClick}  className='card__btn update'>Editar</button>

   </div>

   </article>
  )
}

export default UsersList