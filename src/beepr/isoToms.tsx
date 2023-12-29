export function isoToms(time: any) {
  let multiplier: any = [60, 60, 1000]
  if (typeof time !== 'string') {
    return parseInt(time)
  }
  let values: any = time.match(/\d{2}(\.\d+)?/g)
  return parseInt(multiplier.reduce((total: any, coef: any, i: any) => (total + parseFloat(values[i] || 0)) * coef, 0))
}