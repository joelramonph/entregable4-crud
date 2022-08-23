import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './App.css'
import UsersList from './componets/UsersList'
import UserForm from './componets/UserForm'

function App() {
 
const [users, setUsers] = useState()

const [updateInfo,setUpdateInfo] = useState()

  const getAllUsers = () => {
    const URL = 'https://users-crud1.herokuapp.com/users/'
    axios.get(URL)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
  getAllUsers()

  }, [])
  
  


  return (
    <div className="App">
      <h1>Entregable4</h1>
      <UserForm 
        getAllUsers={getAllUsers}
        updateInfo={updateInfo}
        setUpdateInfo={setUpdateInfo}
      />
      <div className="card__container">

      {
        users?.map(user => (
          <UsersList 
            key={user.id}
            user={user}
            getAllUsers={getAllUsers}
            setUpdateInfo={setUpdateInfo}
          />

        ))

      }
        
      </div> 
    </div>
  )
}

export default App
