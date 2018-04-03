import React, { Component } from 'react';
import Header from '../../header/Header.component';
import Footer from '../../footer/Footer.component';
import Section from '../../../Section.component';
import './about.component.css';


class About extends Component {
    render() {
        return (
            <div className="App">
                <Header title="About work and projects"/>

                <Section bottomSectionVisability={false}>

                    <p className="App-intro">
                        TO JEST STRASZNIE POPIEPRZONE
                    </p>
                </Section>
                <Footer name=" Katarzyna Torz,Szczecin" date=" 10 march 2018" statment="'All rights reserved" versionApp="wersja2"/>
            </div>
        );
    }
}

export default About;