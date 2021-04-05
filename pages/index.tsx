import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Techcast Donation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <script src="/scripts/popcash.js"></script>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Techcast Donation
        </h1>

        <p className={styles.description}>
          Thank you for your support
        </p>

        <div className={styles.grid}>
          <div className={styles.button}>
            <span>
              Let's Donate
            </span>
          </div>
        </div>
      </main>
    </div>
  )
}
