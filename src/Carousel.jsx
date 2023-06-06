import { useEffect, useState } from 'react'

export default function Carousel({ testimonials }) {
  let maxIndex = 2

  const [currentTestimonials, setCurrentTestimonials] = useState([
    testimonials[maxIndex - 2],
    testimonials[maxIndex - 1],
    testimonials[maxIndex],
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('ADD THREE')
      maxIndex += 3
      console.log(maxIndex)
      if (maxIndex > testimonials.length) {
        console.log('reached end of testimonials!')
        maxIndex = 2
      }

      setCurrentTestimonials([
        testimonials[maxIndex - 2],
        testimonials[maxIndex - 1],
        testimonials[maxIndex],
      ])
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  console.log(currentTestimonials)

  return (
    <div className='carousel-container flex'>
      {currentTestimonials.map((testimonial) => (
        <div className='testimonial'>
          <p>{testimonial}</p>
        </div>
      ))}
    </div>
  )
}
