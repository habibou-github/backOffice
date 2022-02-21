import CIcon from "@coreui/icons-react";
import axios from 'axios'
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CInputRadio,
  CLabel,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CSelect,
  CTabContent,
  CTabPane,
  CTabs,
} from "@coreui/react";
import React from "react";
import { useState } from 'react'
import { DocsLink } from "src/reusable";
import TransfertEspeceEspece from "./TransfertEspeceEspece";
import TransfertEspeceGAB from "./TransfertEspeceGAB";
import TransfertEspeceSolde from "./TransfertEspeceSolde";

const CreateAgence = () => {
  const [nomAgence,setNomAgence] = useState('');
  const [ville,setVille] = useState([]);
  const [adresse,setAdresse] = useState('');
  const [telephone,setTelephone] = useState('');
  const [statut,setStatut] = useState('');

  const handleNomAgenceChange = (event)=>{
    setNomAgence(event.target.value)
  }
  const handleVilleChange = (event)=>{
    setVille(event.target.value)
  }
  const handleAdresseChange = (event)=>{
    setAdresse(event.target.value)
  }
  const handleTelephoneChange = (event)=>{
    setTelephone(event.target.value)
  }
  const handleStatutChange = (event)=>{
    setStatut(event.target.value)
  }
  
  const handleSubmit = (event) => {
    if(nomAgence !== '' && ville !== '' && adresse!=='' && telephone!=='')
        {
          console.log(nomAgence+' '+ville+' '+adresse+' '+telephone);
        const newAgence = {
          'adresseAgence' : adresse,
          'villeAgence' : ville,
          'nomAgence' : nomAgence,
          'telephoneAgence' : telephone,
          'active' : statut          
        }        
        axios.post('https://transfert-national.herokuapp.com/agence',newAgence).then((response) => {
          console.log(response.data);
        });;
        }
    else{
      console.log(nomAgence+' '+ville+' '+adresse+' '+telephone);
      alert('Remplisser Tout Les Champs Obligatoires');
    }
      
    
    event.preventDefault();
  }
  // useEffect(() => {
  //   axios.get("https://transfert-national.herokuapp.com/agence").then((response) => {
  //     setAgences(response.data);
  //     console.log(response.data);
  //   });
  // }, []);
  return (
    <>
      <CCard>
        <CCardHeader>
          <h4>Nouvelle Agence</h4>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="name">Nom d'agence</CLabel>
                <CInput id="name" placeholder="Nom" required onChange={handleNomAgenceChange}/>
              </CFormGroup>
            </CCol>
            <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="name">Ville</CLabel>
                <CInput id="ville" placeholder="Ville" required onChange={handleVilleChange}/>
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="12">
            <CFormGroup>
                <CLabel htmlFor="name">Adresse</CLabel>
                <CInput id="adresse" placeholder="Adresse" required onChange={handleAdresseChange}/>
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
          <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="name">Téléphone</CLabel>
                <CInput id="tel" placeholder="Numéro de téléphone" required onChange={handleTelephoneChange}/>
              </CFormGroup>
            </CCol>
            <CCol xs="6">
              <CCol md="12" class="text-center">
                <CLabel>Statut</CLabel>
              </CCol>
              <CFormGroup variant="custom-radio" inline>
                <CInputRadio
                  custom
                  id="inline-radio1"
                  name="inline-radios"
                  value="option1" 
                  onChange={handleStatutChange}
                />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio1">
                  Active
                </CLabel>
                </CFormGroup>
            </CCol>

            {/*<CCol md="12" class="text-center">
              <CLabel>Type de transfert</CLabel>
            </CCol>
             <CCol md="12">
              <CFormGroup variant="custom-radio" inline>
                <CInputRadio
                  custom
                  id="inline-radio1"
                  name="inline-radios"
                  value="option1"
                />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio1">
                  Espèce vers espèce
                </CLabel>
              </CFormGroup>
              <CFormGroup variant="custom-radio" inline>
                <CInputRadio
                  custom
                  id="inline-radio2"
                  name="inline-radios"
                  value="option2"
                />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio2">
                  Espèce vers wallet
                </CLabel>
              </CFormGroup>
              <CFormGroup variant="custom-radio" inline>
                <CInputRadio
                  custom
                  id="inline-radio3"
                  name="inline-radios"
                  value="option3"
                />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio3">
                  Espèce vers Gab
                </CLabel>
              </CFormGroup>
            </CCol> */}
          </CRow>
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
};

export default CreateAgence;
