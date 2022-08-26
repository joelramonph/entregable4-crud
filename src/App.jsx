import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './App.css'
import UsersList from './componets/UsersList'
import UserForm from './componets/UserForm'

function App() {
 
const [users, setUsers] = useState()
const [updateInfo,setUpdateInfo] = useState()
const [isFormOpen,setIsFormOpen] = useState(false)

  const getAllUsers = () => {
    const URL = 'https://users-crud1.herokuapp.com/users/'
    axios.get(URL)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
  getAllUsers()

  }, [])
  
  
const handleOpenForm = () => setIsFormOpen(true)

const handleCloseForm = () => setIsFormOpen(false)

  return (
    <div className="App">

     <header className='header__container'>

      <h1 className='header__title'> Users </h1>
      <button className='header__btn' onClick={handleOpenForm}> <ion-icon name="add-outline"></ion-icon>  Create New User </button>

     </header>

      <div className={ isFormOpen ? 'form__container' : 'form-none' }>

      <UserForm 
        getAllUsers={getAllUsers}
        updateInfo={updateInfo}
        setUpdateInfo={setUpdateInfo}
        handleCloseForm={handleCloseForm}
      />

      </div>
      <div className="card__container">

      {
        users?.map(user => (
          <UsersList 
            key={user.id}
            user={user}
            getAllUsers={getAllUsers}
            setUpdateInfo={setUpdateInfo}
            handleOpenForm={handleOpenForm}
          />

        ))

      }
        
      </div> 
    </div>
  )
}

export default App
