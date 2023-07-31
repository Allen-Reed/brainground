import { json } from '@sveltejs/kit'
import nodemailer from 'nodemailer'
const username = import.meta.env.VITE_EMAIL_USERNAME
const password = import.meta.env.VITE_EMAIL_PASSWORD
let name = ''
let email = ''
let body = ''

export async function POST({ request }) {
  const data = await request.json()
  name = data.name
  email = data.email
  body = data.body
  if (!name || !email || !body) {
    return json({ message: 'Please complete the form 😐' }, { status: 400 })
  }
  await sendMail()
  return json({ message: 'Got it! Thanks for reaching out 😃' })
}

const html = `
<h1>Message from: ${name}</h1>

<h3>${body}</div>
`

async function sendMail() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: username,
      pass: password
    }
  })

  const html = `
<h1>Message from: ${name}</h1>

<h3>${body}</h3>
`

  await transporter.sendMail({
    from: `${name} <${email}>`,
    to: `${username}`,
    subject: `Brainground Contact Email from ${name}`,
    html: html
  })
}
