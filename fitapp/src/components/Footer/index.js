import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialIconLink, SocialIcons, SocialMediaWrap, Logo, WebsiteRights } from './FooterElement'
const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Test</FooterLinkTitle>
                                <FooterLink to='/'>O nas</FooterLink>
                                <FooterLink to='/'>How it works</FooterLink>
                                <FooterLink to='/'>lorem</FooterLink>
                                <FooterLink to='/'>lorem</FooterLink>
                                <FooterLink to='/'>lorem</FooterLink>


                            </FooterLinkItems>

                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Test2</FooterLinkTitle>
                                <FooterLink to='/'>O nas</FooterLink>
                                <FooterLink to='/'>How it works</FooterLink>
                                <FooterLink to='/'>lorem</FooterLink>
                                <FooterLink to='/'>lorem</FooterLink>
                                <FooterLink to='/'>lorem</FooterLink>


                            </FooterLinkItems>

                        </FooterLinksWrapper>
                    </FooterLinksContainer>

                    <SocialMedia>
                        <SocialMediaWrap>
                            <Logo to="/">
                                FitApp
                            </Logo>
                            <WebsiteRights>FitApp © {new Date().getFullYear()}</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook></FaFacebook>

                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram />

                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="YouTube"><FaYoutube />

                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Twitter"><FaTwitter />

                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>

                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
