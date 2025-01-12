const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl align-middle text-center p-4 m-4">Contact Us</h1>
            <form className="align-middle text-center">
                <input type="text" placeholder="Name" className="border border-black p-2 m-2"/><br/>
                <input type="email" placeholder="Email" className="border border-black p-2 m-2"/><br/>
                <textarea placeholder="Message" rows="5" className="border border-black p-2 m-2"/><br/>
                <button type="submit" className="border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
            </form>
        </div>
    );
};

export default Contact;