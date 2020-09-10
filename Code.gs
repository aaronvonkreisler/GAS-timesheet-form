function onOpen () {

// Create and open a form

var form = FormApp.create('ServPro Timesheet')


/* First Section -----------------------
* Create Name dropdown, and date item titled 'todays date'
*/

var name = form.addListItem()
  name.setTitle('Name:')
      .setChoices([
          name.createChoice('Billy Gibbons'),
          name.createChoice('Jose Guitierrez'),
          name.createChoice('John Portrack'),
          name.createChoice('Lisa Burger'),
          name.createChoice('Bart Simpson'),
          name.createChoice('Peter Griffin'),
          name.createChoice('Other Name')
      
      ]);
      
var date = form.addDateItem()
                .setTitle('Today\'s date');
var firstSect = form.addSectionHeaderItem();
      firstSect.setTitle('Morning Meeting / Shopwork Time / Load Up Time:')
      
var timeIn = form.addTimeItem().setTitle('Time in:')
var timeOut = form.addTimeItem().setTitle('Time out:')
var job1 = form.addPageBreakItem()
                .setTitle('Job 1')
                
//---------- Job 1 ----------

var nameOne = form.addTextItem()
    .setTitle('Customer Last Name')
   
   
var timeIn1 = form.addTimeItem().setTitle('Time in:')
var timeOut1 = form.addTimeItem().setTitle('Time out:')
var driveTime1 = form.addDurationItem()
                    .setTitle('How long was the drive time?')
var questions1 = form.addGridItem()
                     .setRows(['Did the job require a Tykek or White Suit?', 'Was it an emergency after hours job?'])
                     .setColumns(['Yes', 'No'])
var mcQ1 = form.addMultipleChoiceItem();
var job2 = form.addPageBreakItem()
                .setTitle('Job 2')

//----------Job 2--------------//

var nameTwo = form.addTextItem()
          .setTitle('Customer Last Name')
var timeIn2 = form.addTimeItem().setTitle('Time in:')
var timeOut2 = form.addTimeItem().setTitle('Time out:')
var driveTime2 = form.addDurationItem()
    .setTitle('How long was the drive time?')
var questions2 = form.addGridItem()
    .setRows(['Did the job require a Tykek or White Suit?', 'Was it an emergency after hours job?'])
    .setColumns(['Yes', 'No'])
var mcQ2 = form.addMultipleChoiceItem();
var job3 =  form.addPageBreakItem()
                .setTitle('Job 3')


//---------- Job3 ----------
var nameThree = form.addTextItem()
          .setTitle('Customer Last Name')
var timeIn3 = form.addTimeItem().setTitle('Time in:')
var timeOut3 = form.addTimeItem().setTitle('Time out:')
var driveTime3 = form.addDurationItem()
    .setTitle('How long was the drive time?')
var questions3 = form.addGridItem()
    .setRows(['Did the job require a Tykek or White Suit?', 'Was it an emergency after hours job?'])
    .setColumns(['Yes', 'No'])
var mcQ3 = form.addMultipleChoiceItem();
var job4 =  form.addPageBreakItem()
                .setTitle('Job 4')
                
                
//---------- Job 4 ----------                

var nameFour = form.addTextItem()
          .setTitle('Customer Last Name')
var timeIn4 = form.addTimeItem().setTitle('Time in:')
var timeOut4 = form.addTimeItem().setTitle('Time out:')
var driveTime4 = form.addDurationItem()
    .setTitle('How long was the drive time?')
var questions4 = form.addGridItem()
    .setRows(['Did the job require a Tykek or White Suit?', 'Was it an emergency after hours job?'])
    .setColumns(['Yes', 'No'])
var mcQ4 = form.addMultipleChoiceItem();
var job5 =  form.addPageBreakItem()
                .setTitle('Job 5')

//---------- Job 5 ----------   

var nameFive = form.addTextItem()
          .setTitle('Customer Last Name')
var timeIn5 = form.addTimeItem().setTitle('Time in:')
var timeOut5 = form.addTimeItem().setTitle('Time out:')
var driveTime5 = form.addDurationItem()
    .setTitle('How long was the drive time?')
var questions5 = form.addGridItem()
    .setRows(['Did the job require a Tykek or White Suit?', 'Was it an emergency after hours job?'])
    .setColumns(['Yes', 'No'])
var mcQ5 = form.addMultipleChoiceItem();
var job6 =  form.addPageBreakItem()
                .setTitle('Job 6')
                
                
//---------- Job 6 ---------- 
var nameSix = form.addTextItem()
          .setTitle('Customer Last Name')
var timeIn6 = form.addTimeItem().setTitle('Time in:')
var timeOut6 = form.addTimeItem().setTitle('Time out:')
var driveTime6 = form.addDurationItem()
    .setTitle('How long was the drive time?')
var questions6 = form.addGridItem()
    .setRows(['Did the job require a Tykek or White Suit?', 'Was it an emergency after hours job?'])
    .setColumns(['Yes', 'No'])
var mcQ6 = form.addMultipleChoiceItem();
var job7 =  form.addPageBreakItem()
                .setTitle('Job 7')
                

//---------- Job 7 ---------- 
var nameSeven = form.addTextItem()
          .setTitle('Customer Last Name')
var timeIn7 = form.addTimeItem().setTitle('Time in:')
var timeOut7 = form.addTimeItem().setTitle('Time out:')
var driveTime7 = form.addDurationItem()
    .setTitle('How long was the drive time?')
var questions7 = form.addGridItem()
    .setRows(['Did the job require a Tykek or White Suit?', 'Was it an emergency after hours job?'])
    .setColumns(['Yes', 'No'])
var mcQ7 = form.addMultipleChoiceItem();
var job8 =  form.addPageBreakItem()
                .setTitle('Job 8')

//---------- Job 8 ---------- 

/* Job 8 does not have the conditional last job question
* It is assumed that there will be no more than 8 jobs per employee per day
* but can be changed if needed. */


var nameEight = form.addTextItem()
          .setTitle('Customer Last Name')
var timeIn8 = form.addTimeItem().setTitle('Time in:')
var timeOut8 = form.addTimeItem().setTitle('Time out:')
var driveTime8 = form.addDurationItem()
    .setTitle('How long was the drive time?')
var questions8 = form.addGridItem()
    .setRows(['Did the job require a Tykek or White Suit?', 'Was it an emergency after hours job?'])
    .setColumns(['Yes', 'No'])
var wrapUp = form.addPageBreakItem()
                       .setTitle('Wrapping Up')


//---------Wrap Up Section -----------

var role = form.addListItem ()
var crewChief = form.addPageBreakItem()
                    .setTitle('Crew Chief')
//---------Crew Chief Section -----------
var notesChief = form.addParagraphTextItem()
notesChief.setTitle('Are there any notes to add for the day?')
var chiefQuestions = form.addCheckboxGridItem()
    .setTitle('Please confirm the following:')
    .setRows(['Sketches are in:','Alerts are satisfied:', 'Job Checked in: ',
               'Scopes are in:', 'Final forms were signed:', 'PPE Restocked:',
               'Vans are reset:'
              ])
    .setColumns(['Yes', 'No'])
var chiefConfirmation = form.addListItem()

var tech = form.addPageBreakItem()
                    .setTitle('Technician')
//---------Technician Section -----------
var notesTech = form.addParagraphTextItem()
notesTech.setTitle('Are there any notes to add for the day?')
var techQuestions = form.addCheckboxGridItem()
    .setTitle('Please confirm the following:')
    .setRows([ 'PPE Restocked:','Vans are reset:'])
    .setColumns(['Yes', 'No'])
var techConfirmation = form.addListItem()

//Initialize go-to settings for Multiple Choice Questions (last job)

mcQ1.setTitle('Was this your last job?')
mcQ1.setChoices([ 
  mcQ1.createChoice('Yes', wrapUp), 
  mcQ1.createChoice('No', job2)
]);

mcQ2.setTitle('Was this your last job?')
mcQ2.setChoices([ 
  mcQ2.createChoice('Yes', wrapUp), 
  mcQ2.createChoice('No', job3)
]);

mcQ3.setTitle('Was this your last job?')
mcQ3.setChoices([ 
  mcQ3.createChoice('Yes', wrapUp), 
  mcQ3.createChoice('No', job4)
]);

mcQ4.setTitle('Was this your last job?')
mcQ4.setChoices([ 
  mcQ4.createChoice('Yes', wrapUp), 
  mcQ4.createChoice('No', job5)
]);

mcQ5.setTitle('Was this your last job?')
mcQ5.setChoices([ 
  mcQ5.createChoice('Yes', wrapUp), 
  mcQ5.createChoice('No', job6)
]);

mcQ6.setTitle('Was this your last job?')
mcQ6.setChoices([ 
  mcQ6.createChoice('Yes', wrapUp), 
  mcQ6.createChoice('No', job7)
]);


mcQ7.setTitle('Was this your last job?')
mcQ7.setChoices([ 
  mcQ7.createChoice('Yes', wrapUp), 
  mcQ7.createChoice('No', job8)
]);


role.setTitle('Please Select Your Position')
role.setChoices([
   role.createChoice('Crew Chief', crewChief),
   role.createChoice('Technician', tech)
]);


chiefConfirmation.setTitle('Please confirm everything is accurate and true: ')
chiefConfirmation.setChoices([
     chiefConfirmation.createChoice('Confirmed', FormApp.PageNavigationType.SUBMIT)      
  ]);
  

techConfirmation.setTitle('Please confirm everything is accurate and true: ')
techConfirmation.setChoices([
     techConfirmation.createChoice('Confirmed', FormApp.PageNavigationType.SUBMIT)      
  ]);


Logger.log('Published URL: ' + form.getPublishedUrl());
Logger.log('Editor URL: ' + form.getEditUrl());
}












//https://www.bazroberts.com/2017/11/09/apps-script-basics-16-form-page-navigation/