import React from 'react'
import { List,Datagrid, TextField,DateField,NumberField, BooleanField } from 'react-admin'



export const WorkList = props =>(
    
        <List {...props} 
        basePath={props.basePath}
        resource={props.resource}
        hasCreate={false}
        hasList
        hasEdit={false}
        hasShow={false}>
            <Datagrid>
                <NumberField label="Id" Textsource="id"/>
                <TextField label="Topic" source="topic"/>
                <TextField label="Person" source="person"/>
                <TextField label="Type of work" source="type_of_work"/>
                <NumberField label="Number of pages" source="pages"/>
                <NumberField label="Number of words" source="number_of_words"/>
                <DateField label="Date" source="date"/>
                <NumberField label="Expected amount" source="expected_amount"/>
                <BooleanField label="Cancelled status" source="cancelled"/>
                <BooleanField label="Completed status" source="completed"/>
                <NumberField label="Amount received" source="amount_received"/>
                <BooleanField label="paid status" source="paid"/>
            </Datagrid>
        </List>
       
    );



