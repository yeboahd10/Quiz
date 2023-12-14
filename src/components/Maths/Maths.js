import React from 'react'
import styles from './Maths.module.css'
import { useNavigate } from 'react-router-dom'
import lock from './lock.png'

function Maths() {
  const navigate = useNavigate()



const Alert = () =>{
  alert('Complete Round 1 to Unlock ')
}
  return (
    <div>
      <div className={styles.com}>
      <h2>Are You Ready?</h2>
      <p>Let's Play ....<br/>Play Round one to Unlock the Next round</p>
      
      </div>
     
        <div className={styles.container} >
          
           <div className={styles.Card} onClick={()=> navigate('Box')}>
            <h2>Round 1</h2>
            
           </div>
           <div className={styles.Card} onClick={Alert}>
            <h2>Round 2</h2>
            <img src={lock} alt=''/>
           </div>
           <div className={styles.Card} onClick={Alert}>
            <h2 >Round 3</h2>
            <img src={lock} alt=''/>
           </div>
       <div className={styles.foot}>
        @P-Dan tech 2023
       </div>
        </div>
      
    </div>
  )
}

export default Maths