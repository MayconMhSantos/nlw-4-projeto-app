// Este conteudo ira se repetir em todas as paginas
import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengesContexts'

function MyApp({ Component, pageProps }) {

  return (

  <ChallengesProvider>
  <Component {...pageProps} />
  </ChallengesProvider >

  )}

export default MyApp
