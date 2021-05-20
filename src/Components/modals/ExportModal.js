import React,{useState,useEffect} from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import * as FileSaver from 'file-saver';

import * as XLSX from 'xlsx';
// import { useHistory } from "react-router-dom"
// import StateContext from '../../Context/stateContext'


const ExportModal = ({from,to,Month,year,wassignedBy,totalWorks,totalExpectd,totalPaid,data}) => {

    
    const [open, setOpen] = useState(false)

    useEffect(()=>{

    },[])




    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

    const fileExtension = '.xlsx';



    const exportToCSV = (csvData, fileName) => {

        const ws = XLSX.utils.json_to_sheet(csvData);

        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };

        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

        const data = new Blob([excelBuffer], {type: fileType});

        FileSaver.saveAs(data, fileName + fileExtension);
    }
    

    
    let timeStamp = Date.now()
    let fileNameConstructed = `Invoice to ${wassignedBy} for ${Month},${year}_${timeStamp}`

    const handleExport=(e)=>{
        e.preventDefault()
        
        exportToCSV(data, fileNameConstructed)
        setOpen(false)
    }
    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button color="green" fluid><Icon name='external' />Export to  excel invoice</Button>}
            >
            <Modal.Header>{`Export work orders for period, ${from} to ${to}`}</Modal.Header>
            <Modal.Content image>
                <Icon name="file excel" size="massive" color="green"/>
                <Modal.Description>
                    <Header>{Month},{year}</Header>
                    
                    <p>{`Assigned by:  ${wassignedBy}`}</p>
                    <p>{`Total number of works: ${totalWorks}`}</p>
                    <p>{`Total Expected amount: ${totalExpectd}`}</p>
                    <p>{`Total Paid amount: ${totalPaid}`}</p>
                    <p>
                        {`The invoice will be in the form of excel sheet showing workItems in the period ${from} to ${to}. Do you whish to proceed?`}
                    </p>
                    
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={() => setOpen(false)}>
                <Icon name='remove' /> Cancel
                </Button>
                <Button color='green' onClick={handleExport}>
                <Icon name='external square' /> Export
                </Button>
            </Modal.Actions>
    </Modal>
    )
}

export default ExportModal