import React from 'react'
import { ServicesCard, ServicesH1, ServicesWrapper, ServicesContainer, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'
import icon1 from '../../images/svg_4.svg'
import icon2 from '../../images/svg_5.svg'
import icon3 from '../../images/svg_6.svg'
const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>
                    Usługi
                </ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={icon1}>
                        </ServicesIcon>
                        <ServicesH2>Strict Diet</ServicesH2>
                        <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing eli.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={icon2}>
                        </ServicesIcon>
                        <ServicesH2>Healthy Stats</ServicesH2>
                        <ServicesP>Pnterdum et malesuada fames ac ante ipsum primis in faucibus.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={icon3} >
                        </ServicesIcon>
                        <ServicesH2>Activity Tracker</ServicesH2>
                        <ServicesP>Pnterdum et malesuada fames ac ante ipsum primis in faucibus.</ServicesP>
                    </ServicesCard>

                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
