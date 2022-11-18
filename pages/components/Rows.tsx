import React from 'react'
import Tab from './Tab'
import styles from './Rows.module.css'

function Rows(props) {
  return (
    <>
      <div className={styles.rows}>
        <Tab black={props.black} />
        <Tab black={!props.black} />
        <Tab black={props.black} />
        <Tab black={!props.black} />
        <Tab black={props.black} />
        <Tab black={!props.black} />
        <Tab black={props.black} />
        <Tab black={!props.black} />
      </div>
    </>
  )
}

export default Rows
