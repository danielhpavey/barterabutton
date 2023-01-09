import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';


export default function Home() {

  useEffect(() =>
  {        
      document.body.classList.add("bg-slate-50");
  });
  return (
    <div className="prose prose-xl prose-stone min-h-screen mx-auto antialiased font-sans text-2xl max-w-2xl">
      <Head>
        <title>Barter a Button</title>
        <meta name="description" content="Barter a Button" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-4 px-8">
        <h1 className="text-center strong text-4xl mb-4">
          Barter a Button
        </h1>
        <p>On August 31st 2022 I embarked upon quite a strange yet interesting adventure.</p>

        <p>I decided to offer a blue plastic button I had no use for on a local zero waste Facebook group. I was asking if anyone would like to offer me something they no longer needed in return for the button which they could make some use of.</p>

        <p>Hannah replied and offered me a stapler for the button, then Becka told me she really needed a stapler but had a violin she no longer had any use for.  I was inundated with people wanting the violin which was surprising as I would have thought it was quite a niche object. Off it went to it’s new home with two musicians and I had a pretty fancy Bean to Cup coffee machine in it’s place.</p>

        <p>The coffee machine also proved very popular and yet again, I had a lot of offers, including several cash offers which often led to me having to explain that ‘I simply cannot take cash for the item as I’m doing a cash-free challenge’.</p>

        <p>The coffee machine has found it’s new home now with an artist who responded to a complimentary comment I put on one of her lovely paintings on social media. I had come across Alice Mary having seen her incredible wall murals upstairs in the Exeter Guildhall Shopping Centre.</p>

        <p>Alice offered to create an original painting in exchange for the coffee machine and this is where we are up to in the challenge. I should explain – it is not my idea. This is called the Red Paperclip Challenge which was started by Kyle Macdonald back in 2006 in Canada. Kyle took just over a year and swapped items (from a red paperclip) all the way up to house. This was replicated last year by American Demi Skipper – who took 18 months and swapped 28 items to also make it to a house. I know some people have tried here in the UK but I don’t think anyone has succeeded in reaching a house yet – but that is my dream !</p>

        <p>We are in the situation like many families in the UK where saving for an enormous deposit for our own house is virtually impossible – whilst raising a family and paying rent. Doing this challenge requires a set of skills which seem to match my experience – and it seems to be working so far! I love that it’s cash-free as it just shows that not everything has to involve money and it really makes you think about the worth of things and what one person thinks is worth a lot,  another does not – this especially applies to art and I’m really thrilled to have a piece of art as part of this journey. Bartering has been around for thousands of years so really it’s nothing new!</p>

        <p>So onto the painting – as I’m hoping you are reading this as you’ve heard about what I’m doing and might want to make me an offer. The painting is an original unique image of Exeter Cathedral on canvas. It’s 80x60cm large and is embossed with gold leaf.</p>
      </main>

      <footer className="flex flex-row justify-between flex-wrap gap-4 px-8 my-4 mb-12">
          <div>
          </div>
          <div>
          </div>
      </footer>
    </div>
  )
}