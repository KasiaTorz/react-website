import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BottomSection from './components/botton.section/botton.section';

class Section extends Component {
    static propTypes={
        title:PropTypes.string,
        bottomSectionVisability:PropTypes.bool.isRequired,
    };
    render(){
        return (
               <section >
                   {this.props.children}
                   {this.props.bottomSectionVisability ? <BottomSection/>:''}                  </section>



        );
    }
}

export default Section;
