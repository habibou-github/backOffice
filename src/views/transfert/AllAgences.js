import { CCard, CCardBody, CCardHeader, CDataTable } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AllAgences() {
  const [agences, updateAgences] = useState([]);
  useEffect(() => {
    axios.get("https://transfert-national.herokuapp.com/agence").then((response) => {
      updateAgences(response.data);
    });
  }, []);
      const fields = ['Nom','Adresse', 'Ville', 'Téléphone','Active']
    return (
        <>
            <CCard>
                <CCardHeader>
                    <h5>Agences</h5>
                </CCardHeader>
                <CCardBody>
                <CDataTable
              items={agences}
              fields={fields}
              
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'Nom':
                  (item)=>(
                    <td>
                        {item.nomAgence}
                    </td>
                  ),
                'Téléphone':
                  (item)=>(
                    <td>
                        {item.adresseAgence}
                    </td>
                  ),
                'Adresse':
                  (item)=>(
                    <td>
                        {item.villeAgence}
                    </td>
                  ),
                  'Ville':
                  (item)=>(
                    <td>
                        {item.telephoneAgence}
                    </td>
                  ),
                  'Active':
                  (item)=>(
                    <td>

                        {item.active?'Active':'Non active'}
                    </td>
                  )
              }}
            />
                </CCardBody>
            </CCard>
        </>
    )
}

export default AllAgences
