import { CCard, CCardBody, CCardHeader, CDataTable } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AllAgents() {
  const [agents, getAllAgents] = useState([]);
  useEffect(() => {
    axios.get("https://transfert-national.herokuapp.com/agent").then((response) => {
      getAllAgents(response.data);
    });
  }, []);
      const fields = ['id','Username', 'Agence', 'Ville']
    return (
        <>
            <CCard>
                <CCardHeader>
                    <h5>Agents</h5>
                </CCardHeader>
                <CCardBody>
                <CDataTable
              items={agents}
              fields={fields}
              
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'Id':
                  (item)=>(
                    <td>
                        {item.id}
                    </td>
                  ),
                'Username':
                  (item)=>(
                    <td>
                        {item.username}
                    </td>
                  ),
                'Agence':
                  (item)=>(
                    <td>
                        {item.agence.nomAgence}
                    </td>
                  ),
                'Ville':
                  (item)=>(
                    <td>
                        {item.agence.villeAgence}
                    </td>
                  )
              }}
            />
                </CCardBody>
            </CCard>
        </>
    )
}

export default AllAgents
