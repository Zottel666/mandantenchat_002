
import Head from 'next/head'
import MandantenChat from '../components/MandantenChat'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mandanten-Chat</title>
        <meta name="description" content="Mandanteninformation per KI" />
      </Head>
      <main className="min-h-screen bg-white py-10">
        <MandantenChat />
      </main>
    </>
  )
}
