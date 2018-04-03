import React, { Component } from 'react';
import Header from './components/header/Header.component';
import Footer from './components/footer/Footer.component';
import Section from './Section.component';
import './App.css';


class Contact extends Component {
    render() {
        return (
            <div className="App">
                <Header title="About work and projects"/>

                <Section>
                    <p className="App-intro">
                        TO JEST STRASZNIE POPIEPRZONE
                    </p>
                </Section>
                <Footer name=" Katarzyna Torz,Szczecin" date=" 10 march 2018" statment="'All rights reserved" versionApp="wersja2"/>
            </div>
        );
    }
}

export default Contact;