import React, {useState} from 'react'
import axios from 'axios';

import MaterialTable from 'material-table'
import api from '../../services/services_Github';


function App () {
  const [list, seLlist] = useState(
    state = {
      repos: '',
      totalRepos: 0,
      columns: [
        { title: 'Name', field: 'name' },
        { title: 'Description', field: 'description' },
        { title: 'Language', field: 'language' },
        { title: 'Branch', field: 'default_branch' },
        { title: 'URL (Github)', field: 'html_url' }
      ],
      data: [],
      info: {},
      profileimgDefault: '/img/avatar5.jpg'
    }
    const hola = function (candidate) {
      const { candidate } = setState;
  
      api.get_user_data(candidate.github).then((info) => {
        if (info) {
          const candidates = JSON.parse(Cookies.get('candidates'));
  
          const allCandidates = candidates.map((item) => {
            if (item.github === candidate.github) {
              item.profileImg = info.data.avatar_url ? info.data.avatar_url : this.state.profileimg;
            }
  
            return item;
          });
  
          Cookies.set('candidates', allCandidates);
  
          this.setState({ info: info.data });
        }
      });
  
      api.get_repos(candidate.github).then((reposByUser) => {
        if (reposByUser) {
          this.setState({ totalRepos: reposByUser.data.length, data: reposByUser.data });
        }
      });
    }
    

  )
   
    
  
 /* return (
  <>
    <MaterialTable

      columns= {columnsGist}
      data={data}
    
    />
  </>)
}
*/
}
export default App
