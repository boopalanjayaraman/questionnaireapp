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
      border: "solid 1px rgba(224, 224, 224, 1)",
      
    },
    question: {
        backgroundColor: 'rgb(193, 195, 195, 1)',
        //fontWeight: 'bold',
        verticalAlign: 'top',
        border: "solid 1px rgba(224, 224, 224, 1)",
        //fontFamily : "verdana"
    },
    cell: {
        border: "solid 1px rgba(224, 224, 224, 1)"
    }
  });

class MatrixSubSection extends Component{

    constructor(props){
        super(props);

        var subSectionData = {
			"id": 3633,
			"sectionId": 1213,
			"name": "Department / Function",
			"number": null,
			"displayOrder": 1,
            "subSectionType": "matrix", //// Added for matrix
            "hideRowStatements" : false, //// Added for matrix
            "rowStatements": [{
                "id": 1,
                "value" : "Senior Management (not in a category below)",
                "group": "",
                "isUserDefined" : false,
                "enteredValue" : "",
                "newGroup" : true
            },
            {
                "id": 2,
                "value" : "Investment staff",
                "group": "",
                "isUserDefined" : false,
                "enteredValue" : ""
            },
            {
                "id": 3,
                "value" : "Trade Execution",
                "group": "",
                "isUserDefined" : false,
                "enteredValue" : ""
            },
            {
                "id": 4,
                "value" : "Risk Management",
                "group": "",
                "isUserDefined" : false,
                "enteredValue" : ""
            },
            {
                "id": 5,
                "value" : "Internal Audit",
                "group": "",
                "isUserDefined" : false,
                "enteredValue" : "",
                "newGroup" : true
            },
            {
                "id": 6,
                "value" : "Operational Risk",
                "group": "",
                "isUserDefined" : false,
                "enteredValue" : ""
            },
            {
                "id": 7,
                "value" : "Middle / back office operations staff",
                "group": "",
                "isUserDefined" : false,
                "enteredValue" : ""
            },
            {
                "id": 8,
                "value" : "Legal",
                "group": "",
                "isUserDefined" : false,
                "enteredValue" : ""
            },
            {
                "id": 9,
                "value" : "Compliance",
                "group": "",
                "isUserDefined" : false,
                "enteredValue" : ""
            },
            {
                "id": 10,
                "value" : "Finance and treasury",
                "group": "",
                "isUserDefined" : false,
                "enteredValue" : "",
                "newGroup" : true
            },
            {
                "id": 11,
                "value" : "Investor relations/ client services/ marketing/sales staff",
                "group": "",
                "isUserDefined" : false,
                "enteredValue" : ""
            },
            {
                "id": 12,
                "value" : "IT development",
                "group": "",
                "isUserDefined" : false,
                "enteredValue" : ""
            },
            {
                "id": 13,
                "value" : "IT infrastructure support",
                "group": "",
                "isUserDefined" : false,
                "enteredValue" : "",
                "newGroup" : true
            },
            {
                "id": 14,
                "value" : "Human resources",
                "group": "",
                "isUserDefined" : false,
                "enteredValue" : ""
            },
            {
                "id": 15,
                "value" : "Administrative staff",
                "group": "",
                "isUserDefined" : false,
                "enteredValue" : ""
            },
            {
                "id": 16,
                "value" : "Others (please specify)",
                "group": "",
                "isUserDefined" : true,
                "enteredValue" : ""
            },
            {
                "id": 17,
                "value" : "Totals",
                "group": "",
                "isUserDefined" : false,
                "enteredValue" : ""
            }
            ], //// Added for matrix
			"questionData": [{
				"id": 3001,
				"subsectionId": 3633,
				"questionTypeId": 1,
				"name": "Permanent Staff - Current",
				"isRequired": false,
				"displayOrder": 1,
				"questionNumber": "",
				"questionOptionData": [],
				"isCompleted": false,
				"answerData": [], //// this wont be used for matrix
				"modifiedBy": null,
				"modifiedOn": "2021-06-02T14:57:40.8266667",
				"isFlag": false,
				"comments": [],
            },
            {
				"id": 3002,
				"subsectionId": 3633,
				"questionTypeId": 1,
				"name": "Permanent Staff - 2 years ago",
				"isRequired": false,
				"displayOrder": 2,
				"questionNumber": "",
				"questionOptionData": [],
				"isCompleted": false,
				"answerData": [], //// this wont be used for matrix
				"modifiedBy": null,
				"modifiedOn": "2021-06-02T14:57:40.8266667",
				"isFlag": false,
				"comments": [] ,
            },
            {
				"id": 3003,
				"subsectionId": 3633,
				"questionTypeId": 1,
				"name": "Temporary Staff - Current",
				"isRequired": false,
				"displayOrder": 3,
				"questionNumber": "",
				"questionOptionData": [],
				"isCompleted": false,
				"answerData": [], //// this wont be used for matrix
				"modifiedBy": null,
				"modifiedOn": "2021-06-02T14:57:40.8266667",
				"isFlag": false,
				"comments": [],
            },
            {
				"id": 3004,
				"subsectionId": 3633,
				"questionTypeId": 1,
				"name": "Temporary Staff - 2 years ago",
				"isRequired": false,
				"displayOrder": 4,
				"questionNumber": "",
				"questionOptionData": [],
				"isCompleted": false,
				"answerData": [], //// this wont be used for matrix
				"modifiedBy": null,
				"modifiedOn": "2021-06-02T14:57:40.8266667",
				"isFlag": false,
				"comments": [],
            },
            {
				"id": 3005,
				"subsectionId": 3633,
				"questionTypeId": 1,
				"name": "External Consultants - Current",
				"isRequired": false,
				"displayOrder": 5,
				"questionNumber": "",
				"questionOptionData": [],
				"isCompleted": false,
				"answerData": [], //// this wont be used for matrix
				"modifiedBy": null,
				"modifiedOn": "2021-06-02T14:57:40.8266667",
				"isFlag": false,
				"comments": [],
            },
            {
				"id": 3006,
				"subsectionId": 3633,
				"questionTypeId": 1,
				"name": "External Consultants - 2 years ago",
				"isRequired": false,
				"displayOrder": 6,
				"questionNumber": "",
				"questionOptionData": [],
				"isCompleted": false,
				"answerData": [], //// this wont be used for matrix
				"modifiedBy": null,
				"modifiedOn": "2021-06-02T14:57:40.8266667",
				"isFlag": false,
				"comments": [],
            },
            {
				"id": 3007,
				"subsectionId": 3633,
				"questionTypeId": 1,
				"name": "Total FTEs - Current",
				"isRequired": false,
				"displayOrder": 7,
				"questionNumber": "",
				"questionOptionData": [],
				"isCompleted": false,
				"answerData": [], //// this wont be used for matrix
				"modifiedBy": null,
				"modifiedOn": "2021-06-02T14:57:40.8266667",
				"isFlag": false,
				"comments": [],
            },
            {
				"id": 3008,
				"subsectionId": 3633,
				"questionTypeId": 1,
				"name": "Total FTEs - 2 years ago",
				"isRequired": false,
				"displayOrder": 8,
				"questionNumber": "",
				"questionOptionData": [],
				"isCompleted": false,
				"answerData": [], //// this wont be used for matrix
				"modifiedBy": null,
				"modifiedOn": "2021-06-02T14:57:40.8266667",
				"isFlag": false,
				"comments": [],
            },
            {
				"id": 30123,
				"subsectionId": 3633,
				"questionTypeId": 7,
				"name": "Turnover in the last 12 months",
				"isRequired": false,
				"displayOrder": 9,
				"questionNumber": "",
				"questionOptionData": [{
					"id": 56268,
					"questionId": 30123,
					"name": "<5%",
					"displayOrder": 1,
					"isAdditionalFieldRequired": false
				},
				{
					"id": 56269,
					"questionId": 30123,
					"name": "5-10%",
					"displayOrder": 2,
					"isAdditionalFieldRequired": false
				},
				{
					"id": 56270,
					"questionId": 30123,
					"name": "10-15%",
					"displayOrder": 3,
					"isAdditionalFieldRequired": false
				},
				{
					"id": 56271,
					"questionId": 30123,
					"name": ">15%",
					"displayOrder": 4,
					"isAdditionalFieldRequired": false
				}],
				"isCompleted": false,
				"answerData": [],  //// this wont be used for matrix
				"modifiedBy": null,
				"modifiedOn": "2021-06-02T14:57:40.8266667",
				"isFlag": false,
				"comments": [],
			}
        ],
            "matrixQuestionData" : [
            ],
			"isCompleted": false,
			"isFlag": false
	    };

        subSectionData = props.subSectionData ?? subSectionData;

        let matrixQuestionData = [];
        //// This should come from server side.
        //// create this entire structure while configuring. 
        //// The questionData and rowStatements in the top hierarchy can go to existing tables.
        //// The below structure for matrix will come from a different structure / an existing table (up to the dev.)
        if(subSectionData.rowStatements 
            && (subSectionData.matrixQuestionData.length == 0) ){
            for(let rowSt of subSectionData.rowStatements){
                let questionData = [];
                for(let question of subSectionData.questionData){
                    let newQuestion = {};
                    newQuestion = JSON.parse(JSON.stringify(question)); //// cloning with a dirty workaround.
                    newQuestion.rowStatementId = rowSt.id;
                    questionData.push(newQuestion);
                }
                matrixQuestionData.push(questionData);
            }
            subSectionData['matrixQuestionData'] = matrixQuestionData;
        }
        
        /*
        let answerDataTemplate = {
					"id": 55304,
					"questionId": 3001,
					"isOption": false,
					"optionId": 0,
					"optionIds": [],
					"isSelected": false,
					"displayOrder": 0,
					"isAdditionalFieldRequired": false,
					"otherData": null,
					"answer": "",
                    "rowId" : 0 //// Added for matrix, null for other types. 
			}
        */

        this.state = subSectionData;  


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
                        <Table className={classes.table} >
                                <TableHead>
                                    <TableRow key={'matrix_headrow_'}>
                                        {
                                            this.state.hideRowStatements == false &&
                                                <TableCell className={classes.question}>
                                                    <span> {this.state.name} </span>
                                                </TableCell> 
                                        }
                                        { this.state.questionData.map(
                                            (_item) => (
                                                
                                                    <TableCell className={classes.question}>
                                                        <QuestionText id={_item.id} name={_item.name} 
                                                                questionNumber = {_item.questionNumber} ></QuestionText>
                                                    </TableCell>
                                               
                                            )
                                         )}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                        {
                                            this.state.rowStatements.map(
                                                (_rowSt, _rowStIndex) => (
                                                    <TableRow key={'matrix_row_' + _rowSt.id}>
                                                        {

                                                            this.state.hideRowStatements == false &&
                                                                <TableCell className={classes.question}>
                                                                    <QuestionText id={_rowSt.id} name={_rowSt.value} 
                                                                        questionNumber = {""} isUserDefined={_rowSt.isUserDefined}
                                                                        enteredValue={_rowSt.enteredValue}
                                                                        isRowStatement = {true} ></QuestionText>
                                                                </TableCell> 
                                                        }
                                                        {
                                                            this.state.questionData.map(
                                                                (_item, _questionIndex) => (
                                                                    
                                                                        <TableCell className={classes.cell}>
                                                                            <QuestionAnswer Attributes = { this.state.matrixQuestionData[_rowStIndex][_questionIndex]} rowStatement={_rowSt}></QuestionAnswer>
                                                                        </TableCell>
                                                                )
                                                            )
                                                        }
                                                    </TableRow>
                                            )
                                            )
                                         }
                                   
                                </TableBody>
                        </Table>
                    </TableContainer>
                </div>
        );
    }
}

export default withStyles(styles)(MatrixSubSection);