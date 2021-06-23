import React, { Component } from 'react';



class QuestionAnswerTextBox extends Component{

    constructor(props){
        super(props);
        this.state = {
            id: props.Attributes.id ?? 0,
            subsectionId: props.Attributes.subsectionId ?? 0,
            questionId: props.Attributes.questionId ?? 0,
            questionTypeId: props.Attributes.questionTypeId ?? 0,
            isCompleted: props.Attributes.isCompleted ?? false,
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
            }],
            rowStatementId: props.Attributes.rowStatementId ?? 0,
            rowStatement : props.Attributes.rowStatement ?? null //// added for matrix
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
        if(!answers[0]){
            answers = [{
                questionId: 0,
                isOption: false,
                optionId: 0,
                optionIds: [],
                isSelected: false,
                displayOrder: 0,
                isAdditionalFieldRequired: false,
                otherData: "",
                answer: ""
            }];
        }
        answers[0].answer = e.target.value;
        this.setState({answerData : answers});
    }



    render(){

        let questionText = this.state.name;
        let questionNumber = this.state.questionNumber;
        let questionId = "answer_" + this.state.questionId;
        if(this.state.rowStatement){
            questionId += "_" + this.state.rowStatement.id;
        } 

        return(
                <div>
                    <input placeholder="Type the answer here" id={ questionId } 
                        type="text" 
                        class="validate" 
                        onChange={ this.onAnswerChange }
                        value= { this.state.answerData[0]? this.state.answerData[0].answer : "" }
                        >
                        </input>
                </div>
        );
    }
}

export default QuestionAnswerTextBox;