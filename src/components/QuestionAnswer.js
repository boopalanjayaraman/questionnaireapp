import React, { Component } from 'react';
import QuestionAnswerTextBox from './QuestionAnswerTextBox';
import QuestionAnswerDropDown from './QuestionAnswerDropDown';
import QuestionAnswerCheckBox from './QuestionAnswerCheckBox';
import QuestionAnswerRadio from './QuestionAnswerRadio';


class QuestionAnswer extends Component{

    constructor(props){
        super(props);
        this.state = {
            id: props.Attributes.id,
            subsectionId: props.Attributes.subsectionId,
            questionTypeId: props.Attributes.questionTypeId,
            isRequired: props.Attributes.isRequired ?? false,
            questionNumber: props.Attributes.questionNumber ?? "",
            questionOptionData: props.Attributes.questionOptionData ?? [
            ],
            isCompleted: props.Attributes.isCompleted ?? false,
            answerData: props.Attributes.answerData ?? [],
            rowStatement: props.rowStatement ?? null
        };
        this.answerComponent = null;
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

    setAnswerComponent(){
        let questionType = this.state.questionTypeId;
        if((questionType == 1) || (questionType == 6)) {
            this.answerComponent = <QuestionAnswerTextBox 
                                        Attributes={ this.state }>
                                    </QuestionAnswerTextBox>; 
        }
        else if(questionType == 7) {
            this.answerComponent = <QuestionAnswerDropDown 
                                        Attributes={ this.state }>
                                    </QuestionAnswerDropDown>; 
        }
        else if((questionType == 3)){
            this.answerComponent = <QuestionAnswerCheckBox 
                                        Attributes={ this.state }>
                                    </QuestionAnswerCheckBox>; 
        }
        else if((questionType == 2)){
            this.answerComponent = <QuestionAnswerRadio 
                                        Attributes={ this.state }>
                                    </QuestionAnswerRadio>; 
        }
    }

    render(){

        let questionText = this.state.name;
        
        if(this.answerComponent == null){
            this.setAnswerComponent();
        }

        /*
        // Text = 1,
        // SingleSelect = 2, (Radio)
        // MultiSelect = 3, (Checkbox)
        // Number = 4,
        // Percentage = 5,
        // CustomText = 6, (Rich text)
        // Dropdown = 7,
        // Date = 8, (Datepicker)
        */

        return(
                <div>
                    {
                        this.answerComponent
                    }
                </div>
        );
    }
}

export default QuestionAnswer;