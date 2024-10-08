import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"


const ContactForm = () => {
    

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm()

    const handleclick = () => {

    }

    const submitContactForm = async (data) => {
        // console.log("Form Data - ", data)
        try {
            fetch('https://sheetdb.io/api/v1/itsey7eg0xuir', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ data })
            }).then((response) => response.json())
                .then((data) => {
                    toast.success(`thanks for contacting`);

                    console.log(data)
                })

        } catch (error) {
            toast.error(`Ops!...`);
        }
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                email: "",
                Name: "",
                message: ""
            })
        }
    }, [reset, isSubmitSuccessful])
    return (

        <div className="mt-15  ">
            <h1 className="text-gray-800 text-center text-[40px] mb-5">Get in touch</h1>
            <form
                className="bg-black bg-opacity-90 flex flex-col gap-5 p-5 w-[80%] border-2 mx-auto  border-blue-950 shadow-2xl shadow-blue-500/20  text-gray-500 rounded-2xl "
                onSubmit={handleSubmit(submitContactForm)}
            >

                <div className="flex flex-col  ">
                    <label htmlFor="firstname" className="lable-style">
                        Name
                    </label>
                    <input
                        type="text"
                        name="Name"
                        id="Name"
                        placeholder="Enter name"
                        className="form-style bg-transparent bg-opacity-50 backdrop-blur-lg p-2 border-2 rounded-md border-gray-800"
                        {...register("Name", { required: true })}
                    />
                    {errors.Name && (
                        <span className="-mt-1 text-[12px] text-yellow-100">
                            Please enter your name.
                        </span>
                    )}
                </div>


                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="lable-style">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter email address"
                        className="form-style bg-transparent bg-opacity-50 backdrop-blur-lg p-2 border-2 rounded-md border-gray-800"
                        {...register("email", { required: true })}
                    />
                    {errors.email && (
                        <span className="-mt-1 text-[12px] text-yellow-100">
                            Please enter your Email address.
                        </span>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message"
                        className="form-style bg-transparent bg-opacity-50 backdrop-blur-lg p-2 border-2 rounded-md border-gray-800"
                        {...register("message", { required: true })}
                    ></textarea>

                </div>

                <button

                    type="submit"
                    onClick={handleclick}
                    className={`border-blue-950 border-2 rounded-2xl px-6 py-3 text-center text-[13px] font-bold  bg-blue-900 text-white 
                          disabled:bg-richblack-500 sm:text-[16px] hover:scale-95 `}
                >
                    Send Message
                </button>
            </form>
        </div>

    )
}

export default ContactForm
