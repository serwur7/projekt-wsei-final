import React from 'react'
import styles from '../style'

const button = () => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient
    font-poppins font-medium text-[18px] text-primary outline-none
    ${styles} rounded-[10px]`}>
        A button to click
    </button>
  )
}

export default button