import React, {useState } from 'react'
import Navbar from 'reactstrap'

const Footer = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <div>
        <Navbar color="navyblue" expand="md" alignItems="center">
            Copyright 2022 | SpiriTech 
        </Navbar>
        </div>
    )
}
export default Footer
