import {FaGithub} from 'react-icons/fa'

function Footer() {
  return (
    <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
    <div class="grid grid-flow-col gap-4">
      <a  href="#." class="link link-hover">Homepage</a> 
      <a href="https://github.com/burakceylanz" class="link link-hover">About</a> 
      <a href="https://github.com/burakceylanz"  class="link link-hover">Contact</a> 
      <a href="https://github.com/burakceylanz"  class="link link-hover">Github</a>
    </div> 
    <div>
      <div class="grid grid-flow-col gap-4">
         <a href="https://github.com/burakceylanz" ><FaGithub className='text-4xl'/></a>
      </div>
    </div> 
  </footer>
  )
}

export default Footer