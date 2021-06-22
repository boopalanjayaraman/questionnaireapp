import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';


class QuestionAnswerRadio extends Component{

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
        var answers = {...this.state.answerData};

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

        answers[0].optionId = e.target.value; 
        this.setState({answerData: answers});
    }



    render(){

        let selValue = this.state.answerData[0].optionId;
        //alert(selValue);
        return(
                <div>
                    <FormControl>
                        <RadioGroup aria-label={this.state.questionId} value={ selValue} onChange={ this.onAnswerChange }>
                                { this.state.questionOptionData.map((opt) => (
                                    <FormControlLabel
                                        control={<Radio checked={selValue == opt.id}/>  }
                                        value = {opt.id} 
                                        label= {opt.name}
                                        key = {'radiolabel_'+ this.state.questionId + '_' + opt.id}
                                        />
                                ))}
                            
                        </RadioGroup>
                    </FormControl>
                </div>
        );
    }
}

export default QuestionAnswerRadio;