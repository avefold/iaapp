export function msToiso(ms: any) {
  let abs = Math.abs(ms)
  let h: any = Math.floor(abs / 3600000)
  let m = ('0' + Math.floor(abs / 60000) % 60).slice(-2)
  let s = ('0' + Math.floor(abs / 1000) % 60).slice(-2)
  h = (h < 10) ? '0' + h : h
  return h + ':' + m + ':' + s
}