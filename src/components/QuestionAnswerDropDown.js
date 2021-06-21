import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';


class QuestionAnswerDropDown extends Component{

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
        answers[0].optionId = e.target.value; //// changes
        this.setState({answers});
    }



    render(){

        let questionText = this.state.name;
        let questionNumber = this.state.questionNumber;
        return(
                <div>
                    <FormControl fullWidth={"100%"}>
                        <Select
                            id= { "AnswerDropDown_" + this.state.questionId}
                            value={ this.state.answerData[0].optionId}
                            onChange={ this.onAnswerChange }
                            >
                                { this.state.questionOptionData.map((opt) => (
                                    <MenuItem key={ opt.id } value={ opt.id } >
                                    { opt.name }
                                    </MenuItem>
                                ))}
                        </Select>
                    </FormControl>
                </div>
        );
    }
}

export default QuestionAnswerDropDown;