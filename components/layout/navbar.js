import React from 'react'
import styles from '@/styles/ubike.module.css'
import Image from 'next/image'
export default function Navbar() {
  return (
    <>
      <div className={`${styles.navbarContainer}`}>
        <div className={`${styles.navbarLogo}`}>
          {/* <img src="ubikelogo.png" alt="Ubike Logo" /> */}
          <Image
            src="/ubikelogo.png"
            alt="Ubike Logo"
            width="95"
            height="95"
          ></Image>
        </div>
        <div className={`${styles.navbarList}`}>
          <div>使用說明</div>
          <div>收費方式</div>
          <div>站點資訊</div>
          <div>最新消息</div>
          <div>活動專區</div>
        </div>
        <div className={`${styles.navbarloginIcon}`}>登入</div>
      </div>
    </>
  )
}
