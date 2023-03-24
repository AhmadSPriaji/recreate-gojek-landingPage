import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Navbar from './component/navbar'
import Hero from './component/hero'
import Kenalin from './component/kenalin'
import Skala from './component/skala'
import Hubung from './component/hubung'
import Carousell from './component/carousell'
import Tumbuh from './component/tumbuh'
import Kerja from './component/kerja'
import Membangun from './component/membangun'
import Loyalti from './component/loyalti'
import Perjalanan from './component/perjalanan'
import Belum from './component/belum'
import Footer from './component/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Kenalin />
      <Hubung />
      <Skala />

      <Carousell />
      <Tumbuh />
      <Hubung />
      <Kerja />
      <Membangun />
      <Loyalti />
      <Hubung />
      <Perjalanan />
      <Belum />
      <Footer />
      
    </main>
  )
}
