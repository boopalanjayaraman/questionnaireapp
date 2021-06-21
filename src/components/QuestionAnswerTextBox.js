import React, { Component } from 'react';



class QuestionAnswerTextBox extends Component{

    constructor(props){
        super(props);
        this.state = {
            id: props.Attributes.id,
            subsectionId: props.Attributes.subsectionId,
            questionId: props.Attributes.questionId,
            questionTypeId: props.Attributes.questionTypeId,
            isCompleted: props.Attributes.isCompleted,
            answerData: props.Attributes.answerData ?? [{
                questionId: 0,
                isOption: false,
                optionId: 0,
                optionIds: [],
                isSelected: false,
                displayOrder: 0,
                isAdditionalFieldRequired: false,
                otherData: "",
                answer: ""
            }]
        };
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

    onAnswerChange = e=>{
        var answers = {...this.state.answerData}
        answers[0].answer = e.target.value;
        this.setState({answers});
    }



    render(){

        let questionText = this.state.name;
        let questionNumber = this.state.questionNumber;
        return(
                <div>
                    <input placeholder="Type the answer here" id={ "answer_" + this.state.questionId } 
                        type="text" 
                        class="validate" 
                        onChange={ this.onAnswerChange }
                        value= { this.state.answerData[0].answer }>
                        </input>
                </div>
        );
    }
}

export default QuestionAnswerTextBox;