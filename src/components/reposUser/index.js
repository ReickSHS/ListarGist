import React, { useState } from 'react'
import Container from '@material-ui/core/Container'

import api from '../../services/services_GitHub'
import MaterialTable from 'material-table'
import { Button, H1 } from './styles'

const UsersRepos = () => {
  const [searchUser, setSearchUser] = useState('')
  const [data, setData] = useState([])

  const columns = [
    { title: 'Name', field: 'full_name' },
    { title: 'Status', field: 'private' },
    { title: 'Followers', field: 'followers_url' }
  ]

  const getUserRepos = () => {
    api.get_repos(searchUser).then(response => {
      const newArray = Object.keys(response.data[0]).map(item => {
        return {
          full_name: response.data[0].full_name,
          private: response.data[0].private,
          followers_url: response.data[0].owner.followers_url
        }
      })
      
      setData(newArray)
    })
  }

  return (
    <>
      <Container maxWidth='xl' className='main-box'>
        <H1>Select the GitHub user you want to find</H1>
        <input
          type='text'
          placeholder='Enter the user'
          onChange={e => setSearchUser(e.target.value)}
        />
        <Button type='button' onClick={() => getUserRepos()}>
          Search
        </Button>
      </Container>
      <div className='User' style={{ maxWidth: '100%' }}>
        <MaterialTable
          title='Lista de repositorios del usuario'
          columns={columns}
          data={data}
        />
      </div>
    </>
  )
}

export default UsersRepos
