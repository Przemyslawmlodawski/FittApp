import React, { useState } from 'react'
import Video from '../video/video.mp4'
import { Button } from '../ButtonElements'
import { MainContainer, MainBg, VideoBg, MainContent, MainBtnWrapper, MainH1, MainP, ArrowForward, ArrowRight } from './MainSectionElements'
const MainSection = () => {
    const [hover, setHover] = useState(false)


    const onHover = () => {
        setHover(!hover)
    }
    return (
        <>
            <MainContainer>
                <MainBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4'>

                    </VideoBg>
                </MainBg>
                <MainContent>
                    <MainH1>
                        Zacznij swoją przygodę
                    </MainH1>
                    <MainP>
                        Na co jeszcze czekasz
                    </MainP>

                    <MainBtnWrapper>
                        <Button to='/sign-up' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark="true">Zarejestruj się!{hover ? <ArrowForward /> : <ArrowRight />}</Button>
                    </MainBtnWrapper>
                </MainContent>


            </MainContainer>

        </>
    )
}

export default MainSection
