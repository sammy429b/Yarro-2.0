import { Link } from "react-router-dom"
import { useSnackbar } from "notistack";

const Confirmemail = () => {
  let resend = true;

  const { enqueueSnackbar } = useSnackbar();
  const ResendEmail = async () => {
    if (resend) {
      document.getElementById('resend').disabled = true
      try {
        const response = await fetch(`${import.meta.env.VITE_SERVER}/api/register`, {
          method: 'PUT',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }).then((response) => response.json())

        if (response.status === "success") {
          resend = false;
          enqueueSnackbar("Email sent successfully", { variant: 'success' });
        }
      }
      catch (err) {
        enqueueSnackbar("Failed to process the request", { variant: 'info' })
      }

      document.getElementById('resend').disabled = false
    }
    else {
      enqueueSnackbar("Already send an email", { variant: 'info' })
    }
  }


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
          <Link id="resend" onClick={ResendEmail} className="text-lg underline underline-offset-1 hover:text-blue-600 duration-300">
            click here
          </Link>
        </div>
      </div>
    </>
  )
}

export default Confirmemail
