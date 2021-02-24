import React from 'react'
import { Show, SimpleShowLayout, TextField, DateField, NumberField, BooleanField } from 'react-admin';

const WorkShow = (props) => {
    return (
        <Show {...props}
            basePath={props.basePath}
            resource={props.resource}
            hasCreate={false}
            hasList={false}
            hasEdit={false}
        hasShow>
            
        <SimpleShowLayout>
            <TextField source="id"/>
            <TextField source="topic"/>
            <TextField source="person"/>
            <TextField source="type_of_work"/>
            <NumberField source="pages"/>
            <NumberField source="number_of_words"/>
            <DateField source="date"/>
            <NumberField source="expected_amount"/>
            <BooleanField source="cancelled"/>
            <BooleanField source="completed"/>
            <NumberField source="amount_received"/>
            <BooleanField source="paid"/>
        </SimpleShowLayout>
    </Show>
    )
}

export default WorkShow
