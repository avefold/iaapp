import waterImg from '../.././assets/veganu/1.water/potablewater.webp'

const water = [{
  id: 0,
  nutrient: 'water',
  img: waterImg,
  name: 'Potable Water'
}]

export function Water() {
  return water.map((nutrient: any) =>
    <div className='card' key={nutrient.id}>
      <img src={nutrient.img} alt={nutrient.name} />
      <b>{nutrient.name}</b>
    </div>
  )
}