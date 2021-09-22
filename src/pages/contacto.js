import React from 'react'
import SectionContacto from '../componentes /SectionContacto'
import Header from '../componentes /header'
import Footer from '../componentes /footer'
import Banner  from'../componentes /componente_contacto/SectionBanner'
import SectionRedesSociales from '../componentes /componente_contacto/SectionRedesSociales'
import SeparadorOlasSirena from '../componentes /separadorOlasSirena'
import SectionSaberMas from '../componentes /componentes_home/sectionSaberMas'

function contacto() {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <SectionContacto></SectionContacto>
            <SectionRedesSociales></SectionRedesSociales>
            <SeparadorOlasSirena></SeparadorOlasSirena>
            <SectionSaberMas></SectionSaberMas>
            <Footer></Footer>
        </div>
    )
}

export default contacto
