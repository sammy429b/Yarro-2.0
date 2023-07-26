const Confirmemail = () => {
  return (
    <>
      <div className="bg-[#FAFAFA] lg:w-full h-[41.9rem] flex flex-col items-center justify-start pt-[8rem] group-data-[checked=true]:text-white">
        <p className="text-2xl">
          We have sent you a confirmation email, confirm your email to
          continue
        </p>
        <div className="mt-4 ">
          <label className="font-bold text-lg">Didn&#39;t get the email?</label>
            &nbsp; &nbsp;
          <a href="#" id="resend" className="text-lg underline underline-offset-1 hover:text-blue-600 duration-300">
            click here
          </a>
        </div>
      </div>
    </>
  )
}

export default Confirmemail
