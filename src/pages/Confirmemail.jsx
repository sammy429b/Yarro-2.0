const Confirmemail = () => {
  return (
    <>
      <div className="my-10 mx-10 text-center group-data-[checked=true]:text-white">
        <p className="text-2xl">
          We have sent you a confirmation email, confirm your email to
          continue
        </p>
        <div className="mt-4 ">
          <label className="font-bold text-lg">Didn&#39;t get the email?</label>
          <a href="#" id="resend" className="text-lg underline underline-offset-1">
            click here
          </a>
        </div>
      </div>
    </>
  )
}

export default Confirmemail
