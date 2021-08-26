import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import api from '../../services/services_GitHub'
import MaterialTable from 'material-table'

const Users = () => {
  const [searchUser, setSearchUser] = useState([])

  const columns = [
    { title: 'User', field: 'login' },
    { title: 'Profile Image', field: 'avatar_url' },
    { title: 'Url', field: 'html_url' },
    { title: 'Type', field: 'type' }
  ]

  useEffect(() => {

    api.get_all_users().then(response => {
      setSearchUser(response.data)
    })

    return () => {
    }
  }, [])

  return (
    <>
      <Container maxWidth='xl' className='main-box'>
        <div className='User' style={{ maxWidth: '100%' }}>
          <MaterialTable
            title='Lista de Usuarios'
            columns={columns}
            data={searchUser}
          />
        </div>
      </Container>
    </>
  )
}

export default Users
