import axios from 'axios'
import React from 'react'


const UsersList = ({user, getAllUsers, setUpdateInfo, handleOpenForm}) => {

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
    handleOpenForm()
  }
    
  return (
   <article className='card'>
   <h2 className='card__name'>{user["first_name"]} {user["last_name"]}</h2>
   <hr className='card__hr' />

   <ul className='card__list'>
   <li className="card__item">Email <span className='card__span'>{user.email}</span></li>
   <li className="card__item">Birthday <span className='card__span'>{user.birthday}</span></li>
   </ul>

   <hr className='card__hr' />

   <div className='container__btn'>
    <button onClick={deleteUser} className='card__btn delete'>Delete</button>
    <button onClick={handleUpdateClick}  className='card__btn update'>Update</button>

   </div>

   </article>
  )
}

export default UsersList