import avocadoImg from '../.././assets/veganu/7.fat/avocado.webp'
import brazilnutsImg from '../.././assets/veganu/7.fat/brazil-nuts.webp'
import canolaImg from '../.././assets/veganu/7.fat/canola.webp'
import coconutImg from '../.././assets/veganu/7.fat/coconut.webp'
import cornImg from '../.././assets/veganu/7.fat/corn.webp'
import cottonseedsImg from '../.././assets/veganu/7.fat/cotton-seeds.webp'
import flaxseedsImg from '../.././assets/veganu/7.fat/flax-seeds.webp'
import grapeseedsImg from '../.././assets/veganu/7.fat/grape-seeds.webp'
import hempseedsImg from '../.././assets/veganu/7.fat/hemp-seeds.webp'
import olivesImg from '../.././assets/veganu/7.fat/olives.webp'
import peanutImg from '../.././assets/veganu/7.fat/peanut.webp'
import sesameseedsImg from '../.././assets/veganu/7.fat/sesame-seeds.webp'
import soyabeansImg from '../.././assets/veganu/7.fat/soya-beans.webp'
import sunflowerImg from '../.././assets/veganu/7.fat/sunflower.webp'
import walnutImg from '../.././assets/veganu/7.fat/walnut.webp'
import wholegrainsImg from '../.././assets/veganu/7.fat/whole-grains.webp'

const fat = [{
  id: 0,
  nutrient: 'fat',
  img: avocadoImg,
  name: 'Avocado'
},
{
  id: 1,
  nutrient: 'fat',
  img: brazilnutsImg,
  name: 'Brazil Nuts'
},
{
  id: 2,
  nutrient: 'fat',
  img: canolaImg,
  name: 'Canola'
},
{
  id: 3,
  nutrient: 'fat',
  img: coconutImg,
  name: 'Coconut'
},
{
  id: 4,
  nutrient: 'fat',
  img: cornImg,
  name: 'Corn'
},
{
  id: 5,
  nutrient: 'fat',
  img: cottonseedsImg,
  name: 'Cotton Seeds'
},
{
  id: 6,
  nutrient: 'fat',
  img: flaxseedsImg,
  name: 'Flax Seeds'
},
{
  id: 7,
  nutrient: 'fat',
  img: grapeseedsImg,
  name: 'Grape Seeds'
},
{
  id: 8,
  nutrient: 'fat',
  img: hempseedsImg,
  name: 'Hemp Seeds'
},
{
  id: 9,
  nutrient: 'fat',
  img: olivesImg,
  name: 'Olives'
},
{
  id: 10,
  nutrient: 'fat',
  img: peanutImg,
  name: 'Peanut'
},
{
  id: 11,
  nutrient: 'fat',
  img: sesameseedsImg,
  name: 'Sesame Seeds'
},
{
  id: 12,
  nutrient: 'fat',
  img: soyabeansImg,
  name: 'Soya Beans'
},
{
  id: 13,
  nutrient: 'fat',
  img: sunflowerImg,
  name: 'Sunflower'
},
{
  id: 14,
  nutrient: 'fat',
  img: walnutImg,
  name: 'Walnut'
},
{
  id: 15,
  nutrient: 'fat',
  img: wholegrainsImg,
  name: 'Whole Grains'
}]

export function Fat() {
  return fat.map((nutrient: any, index: any) =>
    <div className='card' key={index}>
      <img src={nutrient.img} alt={nutrient.name} />
      <b>{nutrient.name}</b>
    </div>
  )
}
