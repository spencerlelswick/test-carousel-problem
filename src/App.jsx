import SOCarousel from './SOCarousel'
import './App.css'
import Carousel from './Carousel'

function App() {
  const testimonials = [
    'test1',
    'test2',
    'test3',
    'test4',
    'test5',
    'test6',
    'test7',
    'test8',
    'test9',
    'test10',
    'test11',
    'test12',
    'test13',
    'test14',
    'test15',
    'test16',
    'test17',
    'test18',
    'test19',
    'test20',
    'test21',
  ]

  return (
    <>
      <h1>Carousel Problem</h1>
      {/* <SOCarousel testimonials={testimonials} /> */}
      <Carousel testimonials={testimonials} />
    </>
  )
}

export default App
