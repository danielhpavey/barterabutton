import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Link from 'next/link'



export default function Home() {
  return (
    <div className="prose prose-xl prose-stone min-h-screen mx-auto antialiased font-sans text-2xl">
      <Head>
        <title>Barter a Button</title>
        <meta name="description" content="Follow my journey swapping from a button up to a house! Devon UK. Currently swapping a commissioned painting." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="w-screen ">
      <h1 className="text-center strong text-4xl my-10 tracking-widest">
          Barter a Button
        </h1>
        <nav className="flex flex-row justify-center gap-x-8 my-10">
        <Link className="no-underline" href="/">Home</Link>
          <Link href="about" className="no-underline">About</Link>
        </nav>
        <div className="bg-button mb-10 w-screen border-button-dark border-y-2" >
        <img src="/button.jpeg" className="object-cover h-72 m-auto"/>
        </div>
      </header>
      <main className="mt-4 px-8 max-w-2xl mx-auto">

      <img src="/sharon-fully-charged-cornwall.jpg" alt="Barter a Button Sharon at Fully Charged in Cornwall" className="my-8 mx-auto block"/>

<p>        
After a lot of work behind the scenes, I am absolutely over the moon to announce the latest swap. 
</p>
<p>
The holiday at Yonder Meadow in Devon has been swapped with Chris from Fully Charged Cornwall for a BRAND NEW electric bike !!!!!!!!!
</p>
<p>
Some of you will know we are a cycle-mad family ourselves and I always dreamed of an electric bike being one of my swaps on this cash free journey from a button to a house. I&apos;m so happy to achieve this. <Link href="/about">More about me here</Link>. 
</p>
<p>
The bike is a Moustache Samedi 28.1 Open 2022 electric bicycle with Bosch motor - all boxed up & ready to ship to you wherever you are! 
</p>
<p>
More details about the bike here <a href="https://www.fullycharged.com/moustache-samedi-28-1-open-2022">www.fullycharged.com</a>
</p>
<p>
Contact me and make me a cash free offer today.
</p>
<p><Link href="/about">Click here to read the whole story so far.</Link></p>

<img src="/flower-cropped.jpeg" alt="Barter a Button Sharon at Fully Charged in Cornwall" className="my-8 mx-auto block"/>

      </main>

    <div className="border-button-dark border-y-2 mb-12 my-4 mt-20 ">
      <footer className="flex flex-row justify-between flex-wrap gap-4 px-8 my-4  max-w-2xl mx-auto ">
          <div>
            <a href="https://instagram.com/barterabutton">Instagram</a>
          </div>
          <div>
            <a href="mailto:sharon@barterabutton.com">sharon@barterabutton.com</a>
          </div>
      </footer>
    </div>
    </div>
  )
}