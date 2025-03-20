const Contact = () => {
    return ( 
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-12 place-self-center text-center sm:text-left">
                    <h1 className="text-white text-2xl font-extrabold">
                        Contact Me!
                    </h1>
                </div>
            </div>
            
            <div className="mt-6 max-w-lg mx-auto">
                <form className="bg-gray-800 p-6 rounded-lg">
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-2 rounded-md bg-gray-700 text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-2 rounded-md bg-gray-700 text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                            Message
                        </label>
                        <textarea
                            type="message"
                            id="message"
                            name="message"
                            className="w-full p-2 rounded-md bg-gray-700 text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white p-2 bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                        Send a message!
                    </button>
                </form>
            </div>
        </section>
     );
}
 
export default Contact;