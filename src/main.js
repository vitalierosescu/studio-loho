import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import global from './global'

import './styles/style.css'

gsap.registerPlugin(ScrollTrigger)

// Main function to determine which scripts to run
function main() {
  global()

  const init = () => {}
  init()
}

main()
