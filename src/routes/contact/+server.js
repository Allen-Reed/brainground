import { json } from '@sveltejs/kit'

export async function POST({ request }) {
  const data = await request.json()
  const { name, email, body } = data
  if (!name || !email || !body) {
    return json({ message: 'Please complete the form 😐' }, { status: 400 })
  }
  return json({ message: 'Got it! Thanks for reaching out 😃' })
}
