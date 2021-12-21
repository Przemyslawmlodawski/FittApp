import React from 'react'
import { InfoContiner, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap, Img } from './DataElements'
import { Button } from '../ButtonElements'
// import image from '../../images/svg_1.svg'
const DataSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, alt, primary, dark, image }) => {
    return (
        <>
            <InfoContiner lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                                <Subtitle darkText={darkText}>
                                    {description}
                                </Subtitle>
                                <BtnWrap>
                                    <Button to="/"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                    // dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={image} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>

            </InfoContiner>
        </>
    )
}

export default DataSection;
