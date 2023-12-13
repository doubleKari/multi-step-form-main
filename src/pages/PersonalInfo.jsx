const PersonalInfo = () => {
  return (
  
      <section className="px-3 space-y-4">
        <div className="space-y-3">
          <h2 className="text-3xl text-primary-marine-blue font-bold">Personal Info</h2>
          <p className="text-neutral-cool-gray">Please provide your name, email address, and phone number.</p>
        </div>

      <form action="#" className="space-y-5 text-primary-marine-blue">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="block w-full border text-neutral-cool-gray py-3 px-4 rounded-md  outline-none" placeholder="e.g Stephen King" />
        </div>
        <div>
          <label htmlFor="mail">Email Address</label>
          <input type="email" id="mail" className="block w-full border text-neutral-cool-gray  py-3 px-4 rounded-md outline-none" placeholder="e.g. stephenking@lorem.com" />
        </div>
        <div>
          <label htmlFor="contact">Phone Number</label>
          <input type="phone" id="contact" className="block w-full border text-neutral-cool-gray py-3 px-4 rounded-md outline-none" placeholder="e.g. +1 234 567 890" />
        </div>
      </form>
       
      </section>
   
  )
}

export default PersonalInfo