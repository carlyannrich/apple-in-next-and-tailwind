import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Alert from '../components/Alert'
import Section from '../components/Section'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Apple website recreation using Next and Tailwind</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./favicon.svg" />
      </Head>

      <nav>
        <Navbar></Navbar>
        <Alert></Alert>
        <div className="bg-appleGray text-center">
        <Section ></Section>
        <Image src="/image-1.png" alt="Lots of IPhones" width="900" height="300"></Image>
        </div>
      </nav>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
