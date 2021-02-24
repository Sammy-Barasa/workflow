import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput, NumberInput,BooleanInput, EditButton } from 'react-admin';

const WorkEdit = (props) => {
    return (
        <Edit {...props}
            basePath={props.basePath}
            resource={props.resource}
            hasCreate={false}
            hasList={false}
            hasEdit
            hasShow={false}>
        
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput disabled label="Topic" source="topic"/>
            <TextInput  label="Person" source="person"/>
            <TextInput  label="Type of work" source="type_of_work"/>
            <NumberInput label="Pages" source="pages"/>
            <NumberInput  label="number of words" source="number_of_words"/>
            <DateInput disabled label="Date" source="date"/>
            <NumberInput label="Expected amount" source="expected_amount"/>
            <BooleanInput label="Cancelled status" source="canceled"/>
            <BooleanInput label="Completed status" source="completed"/>
            <NumberInput label="Amount received" source="amount_recived"/>
            <BooleanInput label="Paid status" source="paid"/>
            <EditButton />
        </SimpleForm>
    </Edit>
    )
}

export default WorkEdit
