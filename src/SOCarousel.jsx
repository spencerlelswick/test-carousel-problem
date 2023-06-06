import { useEffect, useRef, useState } from 'react'

export default function SOCarousel({ testimonials }) {
  let maxIndex = 2

  const [currentTestimonials, setCurrentTestimonials] = useState([
    testimonials[maxIndex - 2],
    testimonials[maxIndex - 1],
    testimonials[maxIndex],
  ])

  const currentTestimonialsRef = useRef(currentTestimonials)

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        currentTestimonialsRef.current
          .at(-1)
          .localeCompare(testimonials.at(-1)) === 0
      ) {
        console.log('HERE')
        maxIndex = 2
      } else {
        console.log('ADD THREE')
        maxIndex += 3
      }
      currentTestimonialsRef.current = [
        testimonials[maxIndex - 2],
        testimonials[maxIndex - 1],
        testimonials[maxIndex],
      ]
      setCurrentTestimonials([
        testimonials[maxIndex - 2],
        testimonials[maxIndex - 1],
        testimonials[maxIndex],
      ])
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='carosel-container flex'>
      {currentTestimonials.map((testimonial) => (
        <div className='testimonial'>
          <p>{testimonial}</p>
        </div>
      ))}
    </div>
  )
}
