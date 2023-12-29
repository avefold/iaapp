import avocadoImg from '../.././assets/veganu/4.minerals/avocado.webp'
import bananaImg from '../.././assets/veganu/4.minerals/banana.webp'
import beansImg from '../.././assets/veganu/4.minerals/beans.webp'
import brazilnutsImg from '../.././assets/veganu/4.minerals/brazil-nuts.webp'
import broccoliImg from '../.././assets/veganu/4.minerals/broccoli.webp'
import carrotImg from '../.././assets/veganu/4.minerals/carrot.webp'
import cinnamonImg from '../.././assets/veganu/4.minerals/cinnamon.webp'
import datesImg from '../.././assets/veganu/4.minerals/dates.webp'
import dillImg from '../.././assets/veganu/4.minerals/dill.webp'
import grapeImg from '../.././assets/veganu/4.minerals/grape.webp'
import greenleafyImg from '../.././assets/veganu/4.minerals/green-leafy.webp'
import legumesImg from '../.././assets/veganu/4.minerals/legumes.webp'
import lentilsImg from '../.././assets/veganu/4.minerals/lentils.webp'
import nutsImg from '../.././assets/veganu/4.minerals/nuts.webp'
import oatsImg from '../.././assets/veganu/4.minerals/oats.webp'
import orangeImg from '../.././assets/veganu/4.minerals/orange.webp'
import oreganoImg from '../.././assets/veganu/4.minerals/oregano.webp'
import potatoesImg from '../.././assets/veganu/4.minerals/potatoes.webp'
import pruneImg from '../.././assets/veganu/4.minerals/prune.webp'
import riceImg from '../.././assets/veganu/4.minerals/rice.webp'
import sapoteImg from '../.././assets/veganu/4.minerals/sapote.webp'
import seasaltImg from '../.././assets/veganu/4.minerals/sea-salt.webp'
import seaweedImg from '../.././assets/veganu/4.minerals/seaweed.webp'
import seedsImg from '../.././assets/veganu/4.minerals/seeds.webp'
import spinachImg from '../.././assets/veganu/4.minerals/spinach.webp'
import sweetpotatoesImg from '../.././assets/veganu/4.minerals/sweet-potatoes.webp'
import thymeImg from '../.././assets/veganu/4.minerals/thyme.webp'
import tomatoImg from '../.././assets/veganu/4.minerals/tomato.webp'
import wholegrainsImg from '../.././assets/veganu/4.minerals/whole-grains.webp'

const minerals = [{
  id: 0,
  nutrient: 'minerals',
  img: avocadoImg,
  name: 'Avocado'
},
{
  id: 1,
  nutrient: 'minerals',
  img: bananaImg,
  name: 'Banana'
},
{
  id: 2,
  nutrient: 'minerals',
  img: beansImg,
  name: 'Beans'
},
{
  id: 3,
  nutrient: 'minerals',
  img: brazilnutsImg,
  name: 'Brazil Nuts'
},
{
  id: 4,
  nutrient: 'minerals',
  img: broccoliImg,
  name: 'Broccoli'
},
{
  id: 5,
  nutrient: 'minerals',
  img: carrotImg,
  name: 'Carrot'
},
{
  id: 6,
  nutrient: 'minerals',
  img: cinnamonImg,
  name: 'Cinnamon'
},
{
  id: 7,
  nutrient: 'minerals',
  img: datesImg,
  name: 'Dates'
},
{
  id: 8,
  nutrient: 'minerals',
  img: dillImg,
  name: 'Dill'
},
{
  id: 9,
  nutrient: 'minerals',
  img: grapeImg,
  name: 'Grape'
},
{
  id: 10,
  nutrient: 'minerals',
  img: greenleafyImg,
  name: 'Green Leafy'
},
{
  id: 11,
  nutrient: 'minerals',
  img: legumesImg,
  name: 'Legumes'
},
{
  id: 12,
  nutrient: 'minerals',
  img: lentilsImg,
  name: 'Lentils'
},
{
  id: 13,
  nutrient: 'minerals',
  img: nutsImg,
  name: 'Nuts'
},
{
  id: 14,
  nutrient: 'minerals',
  img: oatsImg,
  name: 'Oats'
},
{
  id: 15,
  nutrient: 'minerals',
  img: orangeImg,
  name: 'Orange'
},
{
  id: 16,
  nutrient: 'minerals',
  img: oreganoImg,
  name: 'Oregano'
},
{
  id: 17,
  nutrient: 'minerals',
  img: potatoesImg,
  name: 'Potatoes'
},
{
  id: 18,
  nutrient: 'minerals',
  img: pruneImg,
  name: 'Prune'
},
{
  id: 19,
  nutrient: 'minerals',
  img: riceImg,
  name: 'Rice'
},
{
  id: 20,
  nutrient: 'minerals',
  img: sapoteImg,
  name: 'Sapote'
},
{
  id: 21,
  nutrient: 'minerals',
  img: seasaltImg,
  name: 'Sea Salt'
},
{
  id: 22,
  nutrient: 'minerals',
  img: seaweedImg,
  name: 'Seaweed'
},
{
  id: 23,
  nutrient: 'minerals',
  img: seedsImg,
  name: 'Seeds'
},

{
  id: 24,
  nutrient: 'minerals',
  img: spinachImg,
  name: 'Spinach'
},
{
  id: 25,
  nutrient: 'minerals',
  img: sweetpotatoesImg,
  name: 'Sweet Potatoes'
},
{
  id: 26,
  nutrient: 'minerals',
  img: thymeImg,
  name: 'Thyme'
},
{
  id: 27,
  nutrient: 'minerals',
  img: tomatoImg,
  name: 'Tomato'
},
{
  id: 28,
  nutrient: 'minerals',
  img: wholegrainsImg,
  name: 'Whole Grains'
}]

export function Minerals() {
  return minerals.map((nutrient: any, index: any) =>
    <div className='card' key={index}>
      <img src={nutrient.img} alt={nutrient.name} />
      <b>{nutrient.name}</b>
    </div>
  )
}