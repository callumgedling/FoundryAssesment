# Callum Gedling Foundry Assessment Write Up 


Upon opening the web app the user is taken to the clients page. On this page the user can do a number of things. They are able to add a new client by typing a name into the textbox labelled “Add A Client Name” and then pressing save client. 
This will immediately add a new client to the backend, with a randomly generated ID. 
This new client will also immediately appear in the table of clients, which can be seen below the add client text box. 
If the user attempts to press the save client button without entering a name, an alert will appear asking them to enter a name and nothing will be submitted to the database. 
A search bar can also be seen on this page, just above the table of clients. To search the user must first select which field they’d like to search by, name or ID. 
Then they simply have to type into the search box. To reset the search the user must clear the search box.
To edit a client the user must press on the edit button in the table. This will take the user to the edit client page.
On this page the user can change the selected clients name to whatever they choose by typing into the textbox, and press “Edit Client” to save the changes. 
If the edit client button is pressed without an entry in the client name textbox an alert will appear asking them to do so and nothing will be entered into the database.
If the user wishes to delete a client all they have to do is press the “X” icon in the table. 
To traverse to the other pages, the user can utilize the three buttons at the top of the page, labelled “Clients”, “Employees” and “Engagements”.  

The employees page functions exactly the same to the clients page except with employees instead of clients. 

The engagements page is also quite similar to the clients and employees page.
The entry form for engagements is a little more complicated, with a description, employee ID and client ID all requested to be added.
Again, an alert will appear if one or more of these is not entered by the user upon them pressing the “save engagement” button. 
Description is an exception for this as in the backend it is not required. All new engagements start date defaults to todays date and the end date is not yet set. 
The search function on the engagements page functions very similarly to the other pages, although the user is able to search by engagement name, a client id or an employee id 
related to the engagement. In the table of engagements itself, a colour code scheme is used, with red used to represent ended engagements and green used to represent
ongoing engagements. If the user clicks on a client or employee ID in the table, they will be taken to a separate page in which they can view every engagement
that client or employee is assigned to. If the user wishes to edit an engagement they must press the edit button in the table.
This will take them to a page in which they have three options. They can end the engagement, by pressing the “End Engagement” button. 
Or they can edit the name or description of an engagement through the text fields. If the user wishes to delete an engagement they simply have to press the “X” icon in the table.
