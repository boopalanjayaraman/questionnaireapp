import React, { Component } from 'react';

import { withStyles } from "@material-ui/core/styles";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import subsectionData from '../data/QnsPrototype';
import QuestionText from './QuestionText';
import QuestionAnswer from './QuestionAnswer';

const styles = theme => ({
    table: {
      minWidth: 650,
      border: "solid 1px rgba(224, 224, 224, 1)"
    },
    question: {
        backgroundColor: 'rgb(193, 195, 195, 1)',
        fontWeight: 'bold'
    }
  });

class VerticalTableSubSection extends Component{

    constructor(props){
        super(props);

        var subSectionData = {
			"id": 3633,
			"sectionId": 1213,
			"name": "Who is responding to this DDQ?",
			"number": null,
			"displayOrder": 1,
            "subSectionType": "verticalTable", //// Added for Vertical Table
			"questionData": [{
				"id": 30585,
				"subsectionId": 3633,
				"questionTypeId": 2,
				"name": "Organisation name (legal name and any other business names used, if applicable) (hereafter referred to as the “investment manager”)",
				"isRequired": false,
				"displayOrder": 1,
				"questionNumber": "1.1",
				"questionOptionData": [{
					"id": 55304,
					"questionId": 30585,
					"name": "Overview Table 1.1 has been completed in response to this question.",
					"displayOrder": 1,
					"isAdditionalFieldRequired": false
				}],
				"isCompleted": false,
				"answerData": [{
					"id": 55304,
					"questionId": 30585,
					"isOption": true,
					"optionId": 0,
					"optionIds": [],
					"isSelected": false,
					"displayOrder": 0,
					"isAdditionalFieldRequired": false,
					"otherData": null,
					"answer": ""
				}],
				"modifiedBy": null,
				"modifiedOn": "2021-06-02T14:57:40.8266667",
				"isFlag": false,
				"comments": []
            },
            {
				"id": 29850,
				"subsectionId": 3633,
				"questionTypeId": 6,
				"name": "(a) Name of primary contact:",
				"isRequired": false,
				"displayOrder": 5,
				"questionNumber": "1.1.5",
				"questionOptionData": [{
					"id": 55096,
					"questionId": 29850,
					"name": "",
					"displayOrder": 0,
					"isAdditionalFieldRequired": false
				}],
				"isCompleted": false,
				"answerData": [{
					"id": 55096,
					"questionId": 29850,
					"isOption": false,
					"optionId": 0,
					"optionIds": [],
					"isSelected": false,
					"displayOrder": 0,
					"isAdditionalFieldRequired": false,
					"otherData": null,
					"answer": ""
				}],
				"modifiedBy": null,
				"modifiedOn": "2021-06-02T14:57:40.8266667",
				"isFlag": false,
				"comments": []
            },
            {
				"id": 30123,
				"subsectionId": 3636,
				"questionTypeId": 3,
				"name": "Code of ethics (or a summary) (Select all that apply) - Full Document",
				"isRequired": false,
				"displayOrder": 15,
				"questionNumber": "4.1.8",
				"questionOptionData": [{
					"id": 56268,
					"questionId": 30123,
					"name": "Attached/Included:",
					"displayOrder": 1,
					"isAdditionalFieldRequired": false
				},
				{
					"id": 56269,
					"questionId": 30123,
					"name": "Available for review onsite",
					"displayOrder": 2,
					"isAdditionalFieldRequired": false
				},
				{
					"id": 56270,
					"questionId": 30123,
					"name": "Available on request:",
					"displayOrder": 3,
					"isAdditionalFieldRequired": false
				},
				{
					"id": 56271,
					"questionId": 30123,
					"name": "Available Online:",
					"displayOrder": 4,
					"isAdditionalFieldRequired": false
				},
				{
					"id": 56272,
					"questionId": 30123,
					"name": "Not available for review",
					"displayOrder": 5,
					"isAdditionalFieldRequired": false
				},
				{
					"id": 56273,
					"questionId": 30123,
					"name": "None adopted",
					"displayOrder": 6,
					"isAdditionalFieldRequired": false
				}],
				"isCompleted": false,
				"answerData": [{
					"id": 56268,
					"questionId": 30123,
					"isOption": true,
					"optionId": 0,
					"optionIds": [],
					"isSelected": false,
					"displayOrder": 0,
					"isAdditionalFieldRequired": false,
					"otherData": null,
					"answer": ""
				}],
				"modifiedBy": null,
				"modifiedOn": "2021-06-02T14:57:40.8266667",
				"isFlag": false,
				"comments": []
			},
            {
				"id": 30585,
				"subsectionId": 3633,
				"questionTypeId": 2,
				"name": "Organisation name (legal name and any other business names used, if applicable) (hereafter referred to as the “investment manager”)\r\nInstruction:  Where the questionnaire is being filled out on a group basis including information from multiple entities, complete Overview Table 1.1 with respect to each entity in the investment manager’s group that is providing products or services to any fund or managed account referred to in this DDQ.",
				"isRequired": false,
				"displayOrder": 1,
				"questionNumber": "1.1",
				"questionOptionData": [{
					"id": 55304,
					"questionId": 30585,
					"name": "Overview Table 1.1 has been completed in response to this question.",
					"displayOrder": 1,
					"isAdditionalFieldRequired": false
				}],
				"isCompleted": false,
				"answerData": [{
					"id": 55304,
					"questionId": 30585,
					"isOption": true,
					"optionId": 0,
					"optionIds": [],
					"isSelected": false,
					"displayOrder": 0,
					"isAdditionalFieldRequired": false,
					"otherData": null,
					"answer": ""
				}],
				"modifiedBy": null,
				"modifiedOn": "2021-06-02T14:57:40.8266667",
				"isFlag": false,
				"comments": []
        },
        {
				"id": 29850,
				"subsectionId": 3633,
				"questionTypeId": 6,
				"name": "(a) Address of the primary contact:",
				"isRequired": false,
				"displayOrder": 5,
				"questionNumber": "1.1.5",
				"questionOptionData": [{
					"id": 55096,
					"questionId": 29850,
					"name": "",
					"displayOrder": 0,
					"isAdditionalFieldRequired": false
				}],
				"isCompleted": false,
				"answerData": [{
					"id": 55096,
					"questionId": 29850,
					"isOption": false,
					"optionId": 0,
					"optionIds": [],
					"isSelected": false,
					"displayOrder": 0,
					"isAdditionalFieldRequired": false,
					"otherData": null,
					"answer": ""
				}],
				"modifiedBy": null,
				"modifiedOn": "2021-06-02T14:57:40.8266667",
				"isFlag": false,
				"comments": []
        },
        {
				"id": 30123,
				"subsectionId": 3636,
				"questionTypeId": 7,
				"name": "Code of ethics (or a summary) (Select all that apply) - Full Document",
				"isRequired": false,
				"displayOrder": 15,
				"questionNumber": "4.1.8",
				"questionOptionData": [{
					"id": 56268,
					"questionId": 30123,
					"name": "Attached/Included:",
					"displayOrder": 1,
					"isAdditionalFieldRequired": false
				},
				{
					"id": 56269,
					"questionId": 30123,
					"name": "Available for review onsite",
					"displayOrder": 2,
					"isAdditionalFieldRequired": false
				},
				{
					"id": 56270,
					"questionId": 30123,
					"name": "Available on request:",
					"displayOrder": 3,
					"isAdditionalFieldRequired": false
				},
				{
					"id": 56271,
					"questionId": 30123,
					"name": "Available Online:",
					"displayOrder": 4,
					"isAdditionalFieldRequired": false
				},
				{
					"id": 56272,
					"questionId": 30123,
					"name": "Not available for review",
					"displayOrder": 5,
					"isAdditionalFieldRequired": false
				},
				{
					"id": 56273,
					"questionId": 30123,
					"name": "None adopted",
					"displayOrder": 6,
					"isAdditionalFieldRequired": false
				}],
				"isCompleted": false,
				"answerData": [{
					"id": 56268,
					"questionId": 30123,
					"isOption": true,
					"optionId": 0,
					"optionIds": [],
					"isSelected": false,
					"displayOrder": 0,
					"isAdditionalFieldRequired": false,
					"otherData": null,
					"answer": ""
				}],
				"modifiedBy": null,
				"modifiedOn": "2021-06-02T14:57:40.8266667",
				"isFlag": false,
				"comments": []
			}
        ],
			"isCompleted": false,
			"isFlag": false
	    };

        this.state = props.subSectionData ?? subSectionData;  

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
        
        const { classes } = this.props;

        return(
                <div className="container">
                    <TableContainer>
                        <Table className={classes.table} size="medium" >
                                <TableBody>
                                        { this.state.questionData.map(
                                            (_item) => (
                                                <TableRow key={'verttable_row_'+_item.id}>
                                                    <TableCell className={classes.question} width={"50%"}>
                                                        <QuestionText id={_item.id} name={_item.name} 
                                                                questionNumber = {_item.questionNumber} ></QuestionText>
                                                    </TableCell>
                                                    <TableCell>
                                                        <QuestionAnswer Attributes = {_item}></QuestionAnswer>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                         )}
                                </TableBody>
                        </Table>
                    </TableContainer>
                </div>
        );
    }
}

export default withStyles(styles)(VerticalTableSubSection);