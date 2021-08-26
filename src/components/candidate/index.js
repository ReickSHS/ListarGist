import React, { useState } from 'react'
import Container from '@material-ui/core/Container'

import api from '../../services/services_GitHub'
import MaterialTable from 'material-table'
import { Button, H1 } from './styles'

const CandidateTable = () => {
  const [searchUser, setSearchUser] = useState('')
  const [data, setData] = useState([])

  const columns = [
    { title: 'Name', field: 'name' },
    { title: 'Username', field: 'login' },
    { title: 'Avatar', field: 'avatar_url' },
    { title: 'Url', field: 'html_url' },
    { title: 'Company', field: 'company' },
    { title: 'No Repos', field: 'public_repos' }
  ]

  const getUserInfo = () => {
    api.get_user_data(searchUser).then(response => {
      setData([response.data])
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
        <Button type="button" onClick={() => getUserInfo()}>Search</Button>
      </Container>
      <div className='User' style={{ maxWidth: '100%' }}>
        <MaterialTable
          title='Lista de Usuarios'
          columns={columns}
          data={data}
        />
      </div>
    </>
  )
}

export default CandidateTable
