import { CBadge, CCard, CCardBody, CCardHeader, CDataTable } from '@coreui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import usersData from '../users/UsersData'
import axios from 'axios'

const Historique = () => {
  const [transferts, updateTransferts] = useState([]);
  useEffect(() => {
    axios.get("https://transfert-national.herokuapp.com/transfert").then((response) => {
      updateTransferts(response.data);
    });
  }, []);
      const fields = ['Réf de transfert','Donneur', 'Bénéficiaire','Type', 'Etat']
    return (
        <>
            <CCard>
                <CCardHeader>
                    <h4>Historique des Transferts</h4>
                </CCardHeader>
                <CCardBody>
                <CDataTable
              items={transferts}
              fields={fields}
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'Réf de transfert':
                (item)=>(
                  <td>
                      {item.referenceTransfert}
                  </td>
                ),
              'Donneur':
                (item)=>(
                  <td>
                      {item.clientDonneur.fullName}
                  </td>
                ),
              'Bénéficiaire':
                (item)=>(
                  <td>
                      {item.clientBeneficaire.fullName}
                  </td>
                ),
                'Type':
                (item)=>(
                  <td>
                      {item.typeTransfert}
                  </td>
                ),
                'Etat':
                (item)=>(
                  <td>
                      {item.etat}
                  </td>
                )
              }}
            />
                </CCardBody>
            </CCard>
        </>
    )
}

export default Historique
