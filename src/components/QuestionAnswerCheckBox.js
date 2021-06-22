import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';


class QuestionAnswerCheckBox extends Component{

    constructor(props){
        super(props);
        this.state = {
            id: props.Attributes.id,
            subsectionId: props.Attributes.subsectionId,
            questionId: props.Attributes.questionId,
            questionTypeId: props.Attributes.questionTypeId,
            isCompleted: props.Attributes.isCompleted,
            questionOptionData: props.Attributes.questionOptionData ?? [{
                id: 0,
                questionId: 0,
                name: "(Default)",
                displayOrder: 1,
                isAdditionalFieldRequired: false
            }],
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

        if(answers[0].optionIds == undefined || 
            answers[0].optionIds == null || 
            answers[0].optionIds.length == 0){
                answers[0].optionIds = [];
        }
        answers[0].optionIds.push(e.target.value); 
        this.setState({answerData : answers});
    }



    render(){

        let questionText = this.state.name;
        let questionNumber = this.state.questionNumber;
        
        return(
                <div>
                    <FormControl>
                        <FormGroup>
                                { this.state.questionOptionData.map((opt) => (
                                    <FormControlLabel
                                        control={<Checkbox onChange={ this.onAnswerChange } name= {  opt.id  }/>}
                                        label= {opt.name}
                                        />
                                ))}
                            
                        </FormGroup>
                    </FormControl>
                </div>
        );
    }
}

export default QuestionAnswerCheckBox;