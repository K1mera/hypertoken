import React from 'react'

export const Summary = () => {
  return (
    <main className="flex flex-col w-full  text-light py-10">
      <section className="flex w-full py-3 ">
        <div className="flex flex-col gap-2 w-1/2 ">
          <h3 className="font-rubik font-bold text-lg">Opportunities</h3>
          <ul>
            <li className="list-disc list-inside">
              Writing and republishing to incorporate roundup posts
            </li>
            <li className="list-disc list-inside">
              Pusing more video content to boost audience engagement, esp.
              YouTube or TikTok
            </li>
            <li className="list-disc list-inside">
              Targeting keywords related to common questions by sewing
              enthusiasts
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 border-l-2 pl-5 border-light border-dashed w-1/2">
          <h3 className="font-rubik font-bold text-lg">Risks</h3>
          <ul>
            <li className="list-disc list-inside">
              Google algorithmic changes could cause traffic and keyword
              rankings to fluctuate.
            </li>
            <li className="list-disc list-inside">
              Advertiser changes can affect the earnings per click (EPC) and
              economics of the business.
            </li>
          </ul>
        </div>
      </section>
      <section className="flex w-full py-3 ">
        <div className="w-1/2 flex flex-col gap-2">
          <h3 className="font-rubii font-bold text-lg">
            Sales support includes
          </h3>
          <p>
            The Seller is willing to offer up to 60 days of email support and/or
            calls (up to 1 hour per day) to ensure a smooth transition for the
            Buyer.
          </p>
        </div>
        <div className="w-1/2 flex flex-col gap-2 border-l-2 pl-5 border-light border-dashed">
          <h3 className="font-rubii font-bold text-lg">Reason for sale</h3>
          <p>The seller would like to explore other opportunities.</p>
        </div>
      </section>
      <section className="flex flex-col w-full py-5 gap-2">
        <h3 className="font-rubii font-bold text-lg text-light">Other information</h3>
        <ul>
          <li className='font-rubik text-light font-semibold'>
            Work Required Per Week: <span className='font-light'>20 Hours</span>
          </li>
          <li className='font-rubik text-light font-semibold'>
            Private Blog Network (PBN): <span className='font-light'>No</span>
          </li>
          <li className='font-rubik text-light font-semibold'>
            Domain Type: <span className='font-light'>.com</span>
          </li>
          <li className='font-rubik text-light font-semibold'>
            Platform: <span className='font-light'>WordPress</span>
          </li>
        </ul>
      </section>
    </main>
  );
}
