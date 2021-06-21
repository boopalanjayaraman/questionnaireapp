import React, { Component } from 'react';



class QuestionText extends Component{

    constructor(props){
        super(props);
        this.state = {
            id: props.id ?? 0,
            subsectionId: props.id ?? 0,
            name: props.name ?? "",
            isRowStatement: props.isRowStatement ?? false,
            questionTypeId: props.questionTypeId ?? 0,
            questionNumber: props.questionNumber ?? 0,
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



    render(){

        let questionText = this.state.name;
        let questionNumber = this.state.questionNumber;
        return(
                <div>
                    <p><span className="blue-text"> { questionNumber } </span>
                        <span> { questionText } </span>
                    </p>
                </div>
        );
    }
}

export default QuestionText;