---
title: '固定背景，下面的内容网上盖住视差滚动的效果'
date: '2022-10-27'
---

**原理**：`z-index: -10;`, `position: sticky;` `top:0` 核心就这3个属性，

- 错误点1：内容有外层div，由于z-index属性 ，被div盖住了，无法点击，div有背景甚至被覆盖。
    
    ![error1](/article_images/1.png)
    

- 错误点2：如果页面上有其他背景未设置，则会露出来，
    
    错误：
    ![Untitled](/article_images/2.png)
    
    正确：
    ![Untitled](/article_images/3.png)
    

**方法**: 使用 windows scroll 监听屏幕距离

1. 创建Scroll-observer.jsx 组件
    
    这里是使用了**React Context** 来跨组件传递Props
    
    ```jsx
    
    //文件路径： util/scroll-observer.jsx
    
    import React, { useCallback, useEffect, useState } from "react"
    
    const ScrollObserver = ({children}) => {
      const [scrollY, setScrollY] = useState(0);
      const handleScroll = useCallback(()=>{
        setScrollY(window.scrollY);
      },[])
      useEffect(()=> {
        document.addEventListener("scroll", handleScroll, {passive: true})
        return () => document.removeEventListener("scroll", handleScroll)
      }, [handleScroll])
    
      return (
        <ScrollContext.Provider value={{ scrollY }}>
          {children}
        </ScrollContext.Provider>
      )
    }
    
    export const ScrollContext = React.createContext({scrollY: 0})
    
    export default ScrollObserver;
    ```
    
2. 在_app.js中使用
    
    因为_app.js 是上层组件，所以在此页面使用后，所有页面都可以使用`scrollY` 这个Props。
    
    ```jsx
    // pages/_app.js
    
    import { appWithTranslation } from "next-i18next";
    import '../styles/globals.css'
    import ScrollObserver from '../utils/scroll-observer'
    
    function MyApp({ Component, pageProps }) {
      return (
        <ScrollObserver>
          <Component {...pageProps} />
          </ScrollObserver>
      ) 
      
    }
    
    export default appWithTranslation(MyApp);
    ```
    
3. 在CarouselBanner中设置

    ```jsx
    const CarouselBanner = ({ images, title, subTitle, link }) => {
    const { scrollY } = useContext(ScrollContext);
    // console.log(scrollY);
    const refContainer = useRef(null);
    const { current: elContainer } = refContainer;
    let progress = 0;
    if (elContainer) {
      progress = Math.min(1, scrollY / elContainer.clientHeight);
    }

    const pagination = {
      clickable: true,
    };

    return (
      <div
        // className="sticky top-0 -z-10 min-h-screen"
        // ref={refContainer}
        // style={{ transform: `translateY(-${progress * 5}vh)` }}
      >
      ...
    ```