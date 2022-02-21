import CIcon from "@coreui/icons-react";
import axios from 'axios'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
  CSelect,
} from "@coreui/react";
import React from "react";
import { useEffect } from 'react'
import { useState } from 'react'

function CreateAgent() {
  const [username,setUsername] = useState('');
  const [agences,setAgences] = useState([]);
  const [agence,setAgence] = useState('');
  const [password,setPassword] = useState('');

  const handleUsernameChange = (event)=>{
    setUsername(event.target.value)
  }
  const handleAgenceChange = (event)=>{
    setAgence(event.target.value)
  }
  const handlePasswordChange = (event)=>{
    setPassword(event.target.value)
  }
  
  const handleSubmit = (event) => {
    if(username !== '' && agence !== '' && password!=='')
        {
          console.log(username+' '+agence+' '+password);
        const newAgent = {
          'username' : username,
          'agenceId' : agence,
          'password' : password
        }
        
        axios.post('https://transfert-national.herokuapp.com/agent',newAgent).then((response) => {
          console.log(response.data);
        });;
        }
    else{
      console.log(username+' '+agence+' '+password);
      alert('Remplisser Tout Les Champs Obligatoires');
    }
      
    
    event.preventDefault();
  }
  useEffect(() => {
    axios.get("https://transfert-national.herokuapp.com/agence").then((response) => {
      setAgences(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <>
      <CCard>
        <CCardHeader>
          <h5>Nouveau Agent</h5>
        </CCardHeader>

        <CCardBody>
          <CRow>
            <CCol xs="12">
              <CFormGroup>
                <CLabel htmlFor="name">Username</CLabel>
                <CInput id="username" placeholder="Enter your name" required onChange={handleUsernameChange}/>
              </CFormGroup>
            </CCol>
          </CRow>

          <CRow>
            <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="ccnumber">Agence affectée</CLabel>
                <CSelect custom name="ccmonth" id="ccmonth" onChange={handleAgenceChange}>
                  {/* <option value={agences.id}>{agences.nomAgence}</option> */}
                  {agences.map((agence, index) => (
                      <option value={agence.id}>{agence.nomAgence}</option>
                    ))}
                </CSelect>
              </CFormGroup>
            </CCol>
            
            <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="ccmonth">Mot de passe</CLabel>
                <CInput onChange={handlePasswordChange}
                  id="password"
                  type="password"
                  placeholder="Enter a password"
                  required
                />
              </CFormGroup>
            </CCol>
          </CRow>

          <CRow></CRow>
        </CCardBody>
        <CCardFooter>
          <CButton onClick={handleSubmit} type="submit" size="sm" color="success">
            <CIcon name="cil-scrubber" /> Submit
          </CButton>
        
          <CButton type="reset" size="sm" color="danger">
            <CIcon name="cil-ban" /> Reset
          </CButton>
        </CCardFooter>
      </CCard>
    </>
  );
}

export default CreateAgent;
