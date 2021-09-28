import React from 'react'
import SectionContacto from '../componentes /SectionContacto'
import Header from '../componentes /header'
import Footer from '../componentes /footer'
import Banner  from'../componentes /componente_contacto/SectionBanner'
import SectionRedesSociales from '../componentes /componente_contacto/SectionRedesSociales'
import SeparadorOlasSirena from '../componentes /separadorOlasSirena'
import SectionSaberMas from '../componentes /componentes_home/sectionSaberMas'
import SectionInstagram from '../componentes /SectionInstagram'

function contacto() {
    const colorFondo= "#031fff"

    return (
        <div>
            <Header colorFondo={colorFondo}></Header>
            <Banner></Banner>
            <SectionContacto></SectionContacto>
            <SectionRedesSociales></SectionRedesSociales>
            <SeparadorOlasSirena></SeparadorOlasSirena>
            <SectionSaberMas></SectionSaberMas>
            <SectionInstagram></SectionInstagram>
            <Footer></Footer>
        </div>
    )
}

export default contacto
