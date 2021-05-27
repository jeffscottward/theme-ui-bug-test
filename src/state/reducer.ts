import InitialState from '../state/initialState'
import type { dappType } from '../state/initialState'
import type { web3apiType } from '../state/initialState'
import type { publishType } from '../state/initialState'
import type { searchType } from '../state/initialState'

import { ethereumPlugin, ConnectionConfig } from "@web3api/ethereum-plugin-js"

function dappReducer(state = {}, action) {
  // console.log('dappReducer', state, action)
  let newStateObj: dappType = InitialState.dapp
  switch (action.type) {
    case 'SET_ADDRESS':
      newStateObj.address = action.payload
      return { ...state, ...newStateObj }
    case 'SET_NETWORK':
      newStateObj.network = action.payload
      return { ...state, ...newStateObj }
    case 'SET_BALANCE':
      newStateObj.balance = action.payload
      return { ...state, ...newStateObj }
    case 'SET_WALLET':
      newStateObj.wallet = action.payload
      return { ...state, ...newStateObj }
    case 'SET_WEB3':
      newStateObj.web3 = action.payload
      return { ...state, ...newStateObj }
    case 'SET_AVAILABLE_APIS':
      newStateObj.apis = action.payload
      return { ...state, ...newStateObj }
    case 'SET_GITHUB_USER':
      newStateObj.github = action.payload
      return { ...state, ...newStateObj }
    default:
      return state
  }
}

function searchReducer(state = {}, action) {
  let newStateObj: searchType = InitialState.search
  switch (action.type) {
    case 'sortSelectApi':
      newStateObj.sortedApi = action.payload
      return {...state, ...newStateObj}
    
  }
}

function publishReducer(state = {}, action) {
  let newStateObj: publishType = InitialState.publish
  switch (action.type) {
    case 'setsubdomain':
      newStateObj.subdomain = action.payload
      return {...state, ...newStateObj}
    case 'setipfs':
      newStateObj.ipfs = action.payload
      return {...state, ...newStateObj}
    case 'setsubdomainError':
      newStateObj.subdomainError = action.payload
      return {...state, ...newStateObj}
    case 'setsubdomainLookupSuccess':
      newStateObj.subdomainLookupSuccess = action.payload
      return {...state, ...newStateObj}
    case 'setsubdomainRegisterSuccess':
      newStateObj.subdomainRegisterSuccess = action.payload
      return {...state, ...newStateObj}
    case 'setsubdomainLoading':
      newStateObj.subdomainLoading = action.payload
      return {...state, ...newStateObj}
    case 'setipfsLoading':
      newStateObj.ipfsLoading = action.payload
      return {...state, ...newStateObj}
    case 'setipfsError':
      newStateObj.ipfsError = action.payload
      return {...state, ...newStateObj}
    case 'setipfsSuccess':
      newStateObj.ipfsSuccess = action.payload
      return {...state, ...newStateObj}
    case 'setShowConnectModal':
      newStateObj.showConnectModal = action.payload
      return {...state, ...newStateObj}
    case 'setShowSignInModal':
      newStateObj.showSignInModal = action.payload
      return {...state, ...newStateObj}
    case 'setShowSuccessModal':
      newStateObj.showSuccessModal = action.payload
      return {...state, ...newStateObj}
    case 'setApiData':
      newStateObj.apiData = action.payload
      return {...state, ...newStateObj}
    case 'registrationStatus':
      newStateObj.registrationStatus = action.payload
      return {...state, ...newStateObj}
    default:
      return state
  }
}

function web3apiReducer(
  state: {
    dapp: dappType,
    web3api: web3apiType
  } = {
    web3api: InitialState.web3api,
    dapp: InitialState.dapp
  },
  action
) {
  let newStateObj: web3apiType = InitialState.web3api
  const dapp = state.dapp;

  switch (action.type) {
    case 'recreateredirects':
      const networks: Record<string, ConnectionConfig> = { };

      if (dapp) {
        networks[dapp.network.toString()] = { provider: dapp.web3 };
      }

      newStateObj.redirects = [
        {
          from: "ens/ethereum.web3api.eth",
          to: ethereumPlugin({
            networks: networks
          })
        }
      ]
      return {...state, ...newStateObj}
    default:
      return state
  }
}

export default function mainReducer(w3hubStates, action) {
  // middleware goes here, i.e calling analytics service, etc.
  // localStorage.setItem('w3hubStates.publish', JSON.stringify(w3hubStates.publish))
  return {
    dapp: dappReducer(w3hubStates.dapp, action),
    web3api: web3apiReducer(w3hubStates, action),
    publish: publishReducer(w3hubStates.publish, action),
    search: searchReducer(w3hubStates.search, action)
  }
}
