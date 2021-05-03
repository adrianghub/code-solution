import Link from 'next/link';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav>
        <ul>
          <li><Link href="/"><a>home</a></Link></li>
          <li><Link href="/contact"><a>contact</a></Link></li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
