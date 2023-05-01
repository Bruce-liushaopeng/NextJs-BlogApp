
// handle the user requst to the endpoint of 'api/contact'
function handler(req, res) {
  if (req.method === "POST") {
    // collection information from the body
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.include("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
        res.status(422).json({ message: 'Invalid input' });
        return;
    }

    // store in a database
    const newMessage = {
        email,
        name, 
        message
    };

    console.log(newMessage);
  }
}

export default handler;
