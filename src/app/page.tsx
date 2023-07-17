import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <button>YouTube</button>
      <button>TiktTok</button>
      <button>Café con Absa</button>
    </main>
  )
}