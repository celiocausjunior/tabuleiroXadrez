import React from 'react'
import styles from './Tab.module.css'

function Tab(props:any) {
  return (
    <div className={styles.tab} style={{backgroundColor : props.black ? "black" : "white"}}/>
  )
}

export default Tab