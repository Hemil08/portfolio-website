import React, { useState } from "react";

const Contact = () => {

    const [formData,setFormData] = useState ({name: '',email:'',subject:'',message:''})
    const [formSubmitted,setFormSubmitted] = useState(false);

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData({...formData,[name]:value});
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            await submitForm(formData,setFormSubmitted);
            setFormData({name:'',email:'',subject:'',message:''});
        }catch (error){
            console.error('Error submitting form:',error);
        }
    }

    const submitForm = async (formData,setFormSubmitted) =>{
        try{
            const formDatab = new FormData();
            for(const key in formData){
                formDatab.append(key,formData[key]);
            }

            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbwYGxFldVxXu86DL7OvQoLuJN-sR7uXOlBQY4ytrm4TZ-YwF9JKas_YAKZvJipuFR_A/exec',
                {
                    method: 'POST',
                    body: formDatab,
                }
            );

            if(response.ok){
                console.log('Form submitted successfully');
                setFormSubmitted(true);
            }else{
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setFormSubmitted(true);
        }
    }

  return (
    <div className="h-[100vh] bg-gray-800 flex-col w-full text-white scroll-behavior:smooth pt-[80px]" id="Contact">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold mb-4 text-center ">Contact Me</h1>
      </div>

      <div className="bg-gray-800">
        <div className="pt-4 ">
          <div className="p-4 md:p-8">
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
              <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
                <div className="flex flex-col md:flex-row">
                  <input
                    // id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Name"
                    required
                  />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Email"
                    required
                  />
                </div>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                  required
                ></textarea>
              </div>

                {formSubmitted && (
                    <div className="text-sm font-bold text-green-900 text-center mt-4">
                        Message Sent successfully. I look forward to meeting you!
                    </div>
                )}

              <button className={`border-2 text-md mt-5 rounded-md py-2 px-4 bg-blue-600 hover:bg-blue-700 text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600
                ${formSubmitted ? 'opacity-50 cursor-not-allowed' : ''}`}
              type="submit"
              disabled={formSubmitted}
              >
                {formSubmitted ? 'Sent Message!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
