import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="p-2 shadow-lg bg-fuchsia-200 border-bpy-4 navbar navbar-expand-lg navbar-light">
        <div className="relative flex w-screen">
          <div className="flex justify-center pt-1">
            <img src="images/logo.png" alt="logo image"/>
          </div>
          <div className="flex justify-around flex-1 mr-auto">
            <Link href="/">
              <button class="relative px-10 py-2 group">
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span class="relative text-black group-hover:text-white"> Home </span>
              </button>
            </Link>
            <Link href="/create-nft">
              <button class="relative px-9 py-2 group">
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-red-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-red-700 group-hover:bg-red-700"></span>
                <span class="relative text-red-700 group-hover:text-red-100"> Sell NFT </span>
              </button>
            </Link>
            <Link href="/my-nfts">
              <button class="relative px-9 py-2 group">
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-cyan-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-cyan-700 group-hover:bg-cyan-700"></span>
                <span class="relative text-cyan-700 group-hover:text-cyan-100">My NFT</span>
              </button>
            </Link>
            <Link href="/dashboard">
              <button class="relative px-6 py-2 group">
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-indigo-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-indigo-700 group-hover:bg-indigo-700"></span>
                <span class="relative text-indigo-700 group-hover:text-indigo-100"> Dashboard </span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp