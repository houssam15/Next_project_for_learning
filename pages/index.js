// app/pages/index.js
import Head from 'next/head';
import styles from '../styles/styles.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js CRUD App</title>
        <meta name="description" content="A basic CRUD app built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Next.js CRUD App!</h1>
        <p>This is a basic CRUD app built with Next.js.</p>
      </main>
    </div>
  );
}
