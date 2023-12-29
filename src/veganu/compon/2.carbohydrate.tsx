import amaranthgrainImg from '../.././assets/veganu/2.carbohydrate/amaranth-grain.webp'
import arrowrootImg from '../.././assets/veganu/2.carbohydrate/arrowroot.webp'
import barleyImg from '../.././assets/veganu/2.carbohydrate/barley.webp'
import beansImg from '../.././assets/veganu/2.carbohydrate/beans.webp'
import breadfruitImg from '../.././assets/veganu/2.carbohydrate/breadfruit.webp'
import buckwheatImg from '../.././assets/veganu/2.carbohydrate/buckwheat.webp'
import bulgurImg from '../.././assets/veganu/2.carbohydrate/bulgur.webp'
import butternutsquashImg from '../.././assets/veganu/2.carbohydrate/butternut-squash.webp'
import cassavaImg from '../.././assets/veganu/2.carbohydrate/cassava.webp'
import chickpeasImg from '../.././assets/veganu/2.carbohydrate/chickpeas.webp'
import cornImg from '../.././assets/veganu/2.carbohydrate/corn.webp'
import farroImg from '../.././assets/veganu/2.carbohydrate/farro.webp'
import lentilsImg from '../.././assets/veganu/2.carbohydrate/lentils.webp'
import oatsImg from '../.././assets/veganu/2.carbohydrate/oats.webp'
import peasImg from '../.././assets/veganu/2.carbohydrate/peas.webp'
import potatoesImg from '../.././assets/veganu/2.carbohydrate/potatoes.webp'
import pumpkinImg from '../.././assets/veganu/2.carbohydrate/pumpkin.webp'
import quinoaImg from '../.././assets/veganu/2.carbohydrate/quinoa.webp'
import riceImg from '../.././assets/veganu/2.carbohydrate/rice.webp'
import sorghumImg from '../.././assets/veganu/2.carbohydrate/sorghum.webp'
import speltImg from '../.././assets/veganu/2.carbohydrate/spelt.webp'
import sproutedgrainsImg from '../.././assets/veganu/2.carbohydrate/sprouted-grains.webp'
import sweetpotatoesImg from '../.././assets/veganu/2.carbohydrate/sweet-potatoes.webp'
import taroImg from '../.././assets/veganu/2.carbohydrate/taro.webp'
import teffImg from '../.././assets/veganu/2.carbohydrate/teff.webp'
import wheatberriesImg from '../.././assets/veganu/2.carbohydrate/wheat-berries.webp'

const carbohydrate = [{
  id: 0,
  nutrient: 'carbohydrate',
  img: amaranthgrainImg,
  name: 'Amaranth Grain'
},
{
  id: 1,
  nutrient: 'carbohydrate',
  img: arrowrootImg,
  name: 'Arrowroot'
},
{
  id: 2,
  nutrient: 'carbohydrate',
  img: barleyImg,
  name: 'Barley'
},
{
  id: 3,
  nutrient: 'carbohydrate',
  img: beansImg,
  name: 'Beans'
},
{
  id: 4,
  nutrient: 'carbohydrate',
  img: breadfruitImg,
  name: 'Breadfruit'
},
{
  id: 5,
  nutrient: 'carbohydrate',
  img: buckwheatImg,
  name: 'Buckwheat'
},
{
  id: 6,
  nutrient: 'carbohydrate',
  img: bulgurImg,
  name: 'Bulgur'
},
{
  id: 7,
  nutrient: 'carbohydrate',
  img: butternutsquashImg,
  name: 'Butternut Squash'
},
{
  id: 8,
  nutrient: 'carbohydrate',
  img: cassavaImg,
  name: 'Cassava'
},
{
  id: 9,
  nutrient: 'carbohydrate',
  img: chickpeasImg,
  name: 'Chickpeas'
},
{
  id: 10,
  nutrient: 'carbohydrate',
  img: cornImg,
  name: 'Corn'
},
{
  id: 11,
  nutrient: 'carbohydrate',
  img: farroImg,
  name: 'Farro'
},
{
  id: 12,
  nutrient: 'carbohydrate',
  img: lentilsImg,
  name: 'Lentils'
},
{
  id: 13,
  nutrient: 'carbohydrate',
  img: oatsImg,
  name: 'Oats'
},
{
  id: 14,
  nutrient: 'carbohydrate',
  img: peasImg,
  name: 'Peas'
},
{
  id: 15,
  nutrient: 'carbohydrate',
  img: potatoesImg,
  name: 'Potatoes'
},
{
  id: 16,
  nutrient: 'carbohydrate',
  img: pumpkinImg,
  name: 'Pumpkin'
},
{
  id: 17,
  nutrient: 'carbohydrate',
  img: quinoaImg,
  name: 'Quinoa'
},
{
  id: 18,
  nutrient: 'carbohydrate',
  img: riceImg,
  name: 'Rice'
},
{
  id: 19,
  nutrient: 'carbohydrate',
  img: sorghumImg,
  name: 'Sorghum'
},
{
  id: 20,
  nutrient: 'carbohydrate',
  img: speltImg,
  name: 'Spelt'
},
{
  id: 21,
  nutrient: 'carbohydrate',
  img: sproutedgrainsImg,
  name: 'Sprouted Grains'
},
{
  id: 22,
  nutrient: 'carbohydrate',
  img: sweetpotatoesImg,
  name: 'Sweet Potatoes'
},
{
  id: 23,
  nutrient: 'carbohydrate',
  img: taroImg,
  name: 'Taro'
},
{
  id: 24,
  nutrient: 'carbohydrate',
  img: teffImg,
  name: 'Teff'
},
{
  id: 25,
  nutrient: 'carbohydrate',
  img: wheatberriesImg,
  name: 'Wheat Berries'
}]

export function Carbohydrate() {
  return carbohydrate.map((nutrient: any, index: any) =>
    <div className='card' key={index}>
      <img src={nutrient.img} alt={nutrient.name} />
      <b>{nutrient.name}</b>
    </div>
  )
}