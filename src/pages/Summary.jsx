import thankyou from "../../public/images/icon-thank-you.svg"

const Summary = () => {
  return (
  
      <>
        <picture className="pt-10"><img src={thankyou} alt="A check" /></picture>
        <div className="text-center">
          <h1 className="text-primary-marine-blue text-3xl font-black pb-2">Thank you!</h1>
          <p className="text-neutral-cool-gray">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
            please feel free to email us at support@loremgaming.com
          </p>
        </div>
      </>
   
  )
}

export default Summary