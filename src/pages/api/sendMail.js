import { createTransport } from "nodemailer"

export default async function sendMail(req, res) {
    
    if (req.method === "POST") {
        const user = process.env.USERNAME_AWS_SMB
        const pass = process.env.PASSWORD_AWS_SMB
        const { body } = req
        const {
            name,
            lastName,
            email,
            phone,
            subject,
            message
        } = body

        const transporter = createTransport({
            host: "email-smtp.us-east-2.amazonaws.com",
            port: 465,
            auth: {
                user,
                pass
            }
        }) 

        await transporter.sendMail({
            from: email,
            to: "wendelnetal@gmail.com",
            reply: email,
            // text: message, // plain text body
            html: `
            <h1>${name} ${lastName}</h1>
            <h2>${subject}</h2>
            <p>${message}</p>
            <br />
            <strong>Contato do cliente</strong>
            <p>${email}</p>
            <p>${phone}</p>
        `, // html body
        }).then(info => {
            res.status(200).json(info)
        }).catch(err => res.send(err))
    } else {
        res.send("Método não permitido")
    }
}