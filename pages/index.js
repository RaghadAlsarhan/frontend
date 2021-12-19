import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beauty Center</title>
        <meta name="description" content="beauty center " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href='/branches'> 
Branchs
      </Link>
    </div>
  )
}
