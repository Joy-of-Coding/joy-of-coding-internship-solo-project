import {
  FieldError,
  Form,
  TextField,
  TextAreaField,
  Submit,
} from '@redwoodjs/forms'
import { Metadata } from '@redwoodjs/web'

interface FormValues {
  name: string
  email: string
  message: string
}

const ContactPage = () => {
  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <>
      <Metadata title="Contact" description="Contact page" />
      <div className="container mx-auto px-6 py-10 md:px-12 lg:px-24">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-900">
          Contact Us
        </h1>
        <div className="mx-auto max-w-lg rounded-lg border bg-white p-6 shadow-md">
          <Form
            onSubmit={onSubmit}
            config={{ mode: 'onBlur' }}
            className="space-y-4"
          >
            {/* Name Field */}
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <TextField
              name="name"
              validation={{ required: true }}
              className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name here..."
            />
            <FieldError name="name" className="text-sm text-red-600" />

            {/* Email Field */}
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <TextField
              name="email"
              validation={{
                required: true,
                pattern: {
                  value: /^[^@]+@[^.]+\..+$/,
                  message: 'Please enter a valid email address',
                },
              }}
              className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email here..."
            />
            <FieldError name="email" className="text-sm text-red-600" />

            {/* Message Field */}
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message:
            </label>
            <TextAreaField
              name="message"
              validation={{ required: true }}
              className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message here..."
            />
            <FieldError name="message" className="text-sm text-red-600" />

            {/* Submit Button */}
            <Submit className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Send Message
            </Submit>
          </Form>
        </div>
      </div>
    </>
  )
}

export default ContactPage
