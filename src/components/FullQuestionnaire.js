import React, { Component } from 'react';

import { withStyles } from "@material-ui/core/styles";
import subsectionData from '../data/QnsPrototype';
import HorizontalTableSubSection from './HorizontalTableSubSection';
import VerticalTableSubSection from './VerticalTableSubSection';
import MatrixSubSection from './MatrixSubSection';
import RegularSubSection from './RegularSubSection';
 

const styles = theme => ({
    table: {
      minWidth: 650,
      border: "solid 1px rgba(224, 224, 224, 1)"
    },
    question: {
        backgroundColor: 'rgb(193, 195, 195, 1)',
        fontWeight: 'bold',
        verticalAlign: 'top',
        border: "solid 1px rgba(224, 224, 224, 1)"
    },
    cell: {
        border: "solid 1px rgba(224, 224, 224, 1)"
    }
  });

class FullQuestionnaire extends Component{

    constructor(props){
        super(props);

        let subSectionsArray = subsectionData;
        this.state = props.subSectionData ?? subSectionsArray;  

    }

    componentDidUpdate(prevProps){
        
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount(){
    }

    getComponent(subSection){
        let subSectionType = subSection.subSectionType;
        if(subSectionType == 'horizontalTable') {
            return  <HorizontalTableSubSection 
                                        subSectionData={ subSection }>
                    </HorizontalTableSubSection>; 
        }
        else if(subSectionType == 'verticalTable') {
            return  <VerticalTableSubSection 
                                        subSectionData={ subSection }>
                    </VerticalTableSubSection>; 
        }
        else if(subSectionType == 'matrix') {
            return  <MatrixSubSection  
                                        subSectionData={ subSection }>
                    </MatrixSubSection>; 
        }
        else {
            return  <RegularSubSection  
                                        subSectionData={ subSection }>
                    </RegularSubSection>; 
        }
    }

    render(){

        const { classes } = this.props;

        return(
                <div>
                     
                    { this.state.map(
                        (_subSection) => (
                            <div className="row">
                                { this.getComponent(_subSection) }
                            </div>
                        )
                        )}
                                    
                </div>
        );
    }
}

export default withStyles(styles)(FullQuestionnaire);