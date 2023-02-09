import { Container } from "@mui/system";
import React from "react";
import {useWallet} from 'use-wallet';
import {ethers} from 'ethers';
import Header from "../layouts/common/Header";
import StepForm from "../layouts/Launchpad/Presale/ApproveToken";

import useStore from '../layouts/common/useStore';
import { toBigNum, tips, validateEmail, validateUrl, validatePhone, validateUsername, fromBigNum, proxy, NF } from '../layouts/common/utils' 
import { StaticDatePicker } from "@mui/lab";


const CreatePreasale = () => {
  // const { call, update} = useStore()
  // const wallet = useWallet()
  // const updateStatus = (params:{[key:string]: string | number | boolean | Blob | any}) => ({...StaticDatePicker, ...params})

  // const [state, setStates] = React.userState({
    
  // })
  return (
    <Container maxWidth="xl">
      <Header />
      <StepForm />
    </Container>
  )
}

export default CreatePreasale