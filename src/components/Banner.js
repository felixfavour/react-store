import car from './assets/car1.jpeg'

export default function Banner (props) {
  return (
    <div className="banner-ctn shadow">
      <img src={car} alt=""/>
    </div>
  )
}