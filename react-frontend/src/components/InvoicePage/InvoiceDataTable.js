import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState, useRef } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';

import { useParams } from "react-router-dom";
import moment from "moment";
import UploadService from "../../services/uploadService";
import { InputText } from 'primereact/inputtext';
import { Dialog } from "primereact/dialog";
import { MultiSelect } from "primereact/multiselect";
import DownloadCSV from "../../utils/DownloadCSV";

const InvoiceDataTable = ({ items, fields, onEditRow, onRowDelete, onRowClick, searchDialog, setSearchDialog,   showUpload, setShowUpload,
    showFilter, setShowFilter,
    showColumns, setShowColumns, onClickSaveFilteredfields ,
    selectedFilterFields, setSelectedFilterFields,
    selectedHideFields, setSelectedHideFields, onClickSaveHiddenfields, loading, user}) => {
    const dt = useRef(null);
    const urlParams = useParams();
    const [globalFilter, setGlobalFilter] = useState('');

const p_numberTemplate0 = (rowData, { rowIndex }) => <p >{rowData.no}</p>
const dropdownTemplate1 = (rowData, { rowIndex }) => <p >{rowData.invoicetype?.einvoicetypes}</p>
const calendar_24Template2 = (rowData, { rowIndex }) => <p>{new Date(rowData.invoicedateandtime).toLocaleDateString()}</p>
const tickTemplate3 = (rowData, { rowIndex }) => <i className={`pi ${rowData.consolidated?"pi-check": "pi-times"}`}  ></i>
const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.originaleinvoicereferencenumber}</p>
const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.supplierSname}</p>
const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.supplierStin}</p>
const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.supplierSsstregistrationnumber}</p>
const dropdownTemplate8 = (rowData, { rowIndex }) => <p >{rowData.supplierSidentifiertype?.identifytype}</p>
const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.supplieridentifiernumber}</p>
const pTemplate10 = (rowData, { rowIndex }) => <p >{rowData.supplierSmsiccode}</p>
const pTemplate11 = (rowData, { rowIndex }) => <p >{rowData.supplierStourismtaxregistrationnumber}</p>
const pTemplate12 = (rowData, { rowIndex }) => <p >{rowData.supplierSbusinessactivitydescription}</p>
const pTemplate13 = (rowData, { rowIndex }) => <p >{rowData.supplierSeMail}</p>
const dropdownTemplate14 = (rowData, { rowIndex }) => <p >{rowData.thefirstsupplierScontactnumber?.phonenumberprefix}</p>
const pTemplate15 = (rowData, { rowIndex }) => <p >{rowData.supplierScontactnumber}</p>
const dropdownTemplate16 = (rowData, { rowIndex }) => <p >{rowData.suppliercountryname?.countrycode}</p>
const dropdownTemplate17 = (rowData, { rowIndex }) => <p >{rowData.supplierstatename?.statecode}</p>
const pTemplate18 = (rowData, { rowIndex }) => <p >{rowData.suppliercityname}</p>
const pTemplate19 = (rowData, { rowIndex }) => <p >{rowData.supplierpostalzone}</p>
const pTemplate20 = (rowData, { rowIndex }) => <p >{rowData.buyerSname}</p>
const pTemplate21 = (rowData, { rowIndex }) => <p >{rowData.buyerStin}</p>
const pTemplate22 = (rowData, { rowIndex }) => <p >{rowData.buyerSsstregistrationnumber}</p>
const dropdownTemplate23 = (rowData, { rowIndex }) => <p >{rowData.buyeridentifiertype?.identifytype}</p>
const pTemplate24 = (rowData, { rowIndex }) => <p >{rowData.businessregistrationnumberIdentificationnumberPassportnumber}</p>
const pTemplate25 = (rowData, { rowIndex }) => <p >{rowData.buyerSeMail}</p>
const dropdownTemplate26 = (rowData, { rowIndex }) => <p >{rowData.buyerSaddressCountryname?.countrycode}</p>
const dropdownTemplate27 = (rowData, { rowIndex }) => <p >{rowData.buyerSaddressStatename?.statecode}</p>
const pTemplate28 = (rowData, { rowIndex }) => <p >{rowData.buyerSaddressCityname}</p>
const pTemplate29 = (rowData, { rowIndex }) => <p >{rowData.buyerSaddressPostalzone}</p>
const dropdownTemplate30 = (rowData, { rowIndex }) => <p >{rowData.thefirstbuyerScontactnumber?.phonenumberprefix}</p>
const pTemplate31 = (rowData, { rowIndex }) => <p >{rowData.buyerScontactnumber}</p>
const p_numberTemplate32 = (rowData, { rowIndex }) => <p >{rowData.paymentinformationinvoicecurrency}</p>
const p_dateTemplate33 = (rowData, { rowIndex }) => <p >{(new Date(rowData.paymentinformationcurrencyexchangerate)).toLocaleDateString()}</p>
const dropdownTemplate34 = (rowData, { rowIndex }) => <p >{rowData.paymentinformationfrequencyofbilling?.frequencyofbilling}</p>
const calendarTemplate35 = (rowData, { rowIndex }) => <p>{new Date(rowData.paymentinformationbillingperiodstartdate).toLocaleDateString()}</p>
const calendarTemplate36 = (rowData, { rowIndex }) => <p>{new Date(rowData.paymentinformationbillingperiodenddate).toLocaleDateString()}</p>
const dropdownTemplate37 = (rowData, { rowIndex }) => <p >{rowData.paymentinformationpaymentmode?.paymentmode}</p>
const pTemplate38 = (rowData, { rowIndex }) => <p >{rowData.paymentinformationsupplierSbankaccountnumber}</p>
const pTemplate39 = (rowData, { rowIndex }) => <p >{rowData.paymentinformationpaymentterms}</p>
const p_numberTemplate40 = (rowData, { rowIndex }) => <p >{rowData.paymentinformationprepaymentamount}</p>
const calendarTemplate41 = (rowData, { rowIndex }) => <p>{new Date(rowData.paymentinformationprepaymentdate).toLocaleDateString()}</p>
const pTemplate42 = (rowData, { rowIndex }) => <p >{rowData.paymentinformationprepaymentreferencenumber}</p>
const pTemplate43 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipientSname}</p>
const dropdownTemplate44 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipientSaddresscountryname?.currencycode}</p>
const dropdownTemplate45 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipientSaddressstatename?.statecode}</p>
const pTemplate46 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipientSaddresscityname}</p>
const pTemplate47 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipientSaddresspostalzone}</p>
const pTemplate48 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipientStin}</p>
const dropdownTemplate49 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipientSidentifiertype?.identifytype}</p>
const pTemplate50 = (rowData, { rowIndex }) => <p >{rowData.shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber}</p>
    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowData._id)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => <p>{moment(rowData.createdAt).fromNow()}</p>;
    const pUpdatedAt = (rowData, { rowIndex }) => <p>{moment(rowData.updatedAt).fromNow()}</p>;
    const pCreatedBy = (rowData, { rowIndex }) => <p>{rowData.createdBy?.name}</p>;
    const pUpdatedBy = (rowData, { rowIndex }) => <p>{rowData.updatedBy?.name}</p>;
    const paginatorLeft = <Button type="button" icon="pi pi-upload" text onClick={() => setShowUpload(true)} disabled={!true}/>;
    const paginatorRight = DownloadCSV({ data : items, fileName : "invoice"});
    const exportCSV = () => {dt.current?.exportCSV();};

    return (
        <>
        <DataTable value={items} ref={dt} removableSort onRowClick={onRowClick} scrollable rowHover stripedRows paginator rows={10} rowsPerPageOptions={[10, 50, 250, 500]} size={"small"}  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} rowClassName="cursor-pointer" alwaysShowPaginator={!urlParams.singleUsersId} loading={loading}>
<Column field="no" header="No" body={p_numberTemplate0} filter={selectedFilterFields.includes("no")} hidden={selectedHideFields?.includes("no")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoicetype" header="Invoice Type (*)" body={dropdownTemplate1} filter={selectedFilterFields.includes("invoicetype")} hidden={selectedHideFields?.includes("invoicetype")}  style={{ minWidth: "8rem" }} />
<Column field="invoicedateandtime" header="Invoice Date and Time (*)" body={calendar_24Template2} filter={selectedFilterFields.includes("invoicedateandtime")} hidden={selectedHideFields?.includes("invoicedateandtime")}  sortable style={{ minWidth: "8rem" }} />
<Column field="consolidated" header="Original eInvoice Reference Number" body={tickTemplate3} filter={selectedFilterFields.includes("consolidated")} hidden={selectedHideFields?.includes("consolidated")}  style={{ minWidth: "8rem" }} />
<Column field="originaleinvoicereferencenumber" header="Original eInvoice Reference Number" body={pTemplate4} filter={selectedFilterFields.includes("originaleinvoicereferencenumber")} hidden={selectedHideFields?.includes("originaleinvoicereferencenumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplierSname" header="Supplier's Name (*)" body={pTemplate5} filter={selectedFilterFields.includes("supplierSname")} hidden={selectedHideFields?.includes("supplierSname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplierStin" header="Supplier's TIN (*)" body={pTemplate6} filter={selectedFilterFields.includes("supplierStin")} hidden={selectedHideFields?.includes("supplierStin")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplierSsstregistrationnumber" header="Supplier's SST Registration Number" body={pTemplate7} filter={selectedFilterFields.includes("supplierSsstregistrationnumber")} hidden={selectedHideFields?.includes("supplierSsstregistrationnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplierSidentifiertype" header="Supplier's Identifier Type (*)" body={dropdownTemplate8} filter={selectedFilterFields.includes("supplierSidentifiertype")} hidden={selectedHideFields?.includes("supplierSidentifiertype")}  style={{ minWidth: "8rem" }} />
<Column field="supplieridentifiernumber" header="Supplier Identifier Number (*)" body={pTemplate9} filter={selectedFilterFields.includes("supplieridentifiernumber")} hidden={selectedHideFields?.includes("supplieridentifiernumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplierSmsiccode" header="Supplier's MSIC code (*)" body={pTemplate10} filter={selectedFilterFields.includes("supplierSmsiccode")} hidden={selectedHideFields?.includes("supplierSmsiccode")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplierStourismtaxregistrationnumber" header="Supplier's Tourism Tax Registration Number" body={pTemplate11} filter={selectedFilterFields.includes("supplierStourismtaxregistrationnumber")} hidden={selectedHideFields?.includes("supplierStourismtaxregistrationnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplierSbusinessactivitydescription" header="Supplier's Business Activity Description (*)" body={pTemplate12} filter={selectedFilterFields.includes("supplierSbusinessactivitydescription")} hidden={selectedHideFields?.includes("supplierSbusinessactivitydescription")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplierSeMail" header="Supplier's e-mail" body={pTemplate13} filter={selectedFilterFields.includes("supplierSeMail")} hidden={selectedHideFields?.includes("supplierSeMail")}  sortable style={{ minWidth: "8rem" }} />
<Column field="thefirstsupplierScontactnumber" header="The first Supplier's contact number (*)" body={dropdownTemplate14} filter={selectedFilterFields.includes("thefirstsupplierScontactnumber")} hidden={selectedHideFields?.includes("thefirstsupplierScontactnumber")}  style={{ minWidth: "8rem" }} />
<Column field="supplierScontactnumber" header="Supplier's contact number (*)" body={pTemplate15} filter={selectedFilterFields.includes("supplierScontactnumber")} hidden={selectedHideFields?.includes("supplierScontactnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliercountryname" header="Supplier Country name (*)" body={dropdownTemplate16} filter={selectedFilterFields.includes("suppliercountryname")} hidden={selectedHideFields?.includes("suppliercountryname")}  style={{ minWidth: "8rem" }} />
<Column field="supplierstatename" header="Supplier State name (*)" body={dropdownTemplate17} filter={selectedFilterFields.includes("supplierstatename")} hidden={selectedHideFields?.includes("supplierstatename")}  style={{ minWidth: "8rem" }} />
<Column field="suppliercityname" header="Supplier City name (*)" body={pTemplate18} filter={selectedFilterFields.includes("suppliercityname")} hidden={selectedHideFields?.includes("suppliercityname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplierpostalzone" header="Supplier Postal zone" body={pTemplate19} filter={selectedFilterFields.includes("supplierpostalzone")} hidden={selectedHideFields?.includes("supplierpostalzone")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyerSname" header="Buyer's name (*)" body={pTemplate20} filter={selectedFilterFields.includes("buyerSname")} hidden={selectedHideFields?.includes("buyerSname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyerStin" header="Buyer's TIN" body={pTemplate21} filter={selectedFilterFields.includes("buyerStin")} hidden={selectedHideFields?.includes("buyerStin")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyerSsstregistrationnumber" header="Buyer's SST Registration Number" body={pTemplate22} filter={selectedFilterFields.includes("buyerSsstregistrationnumber")} hidden={selectedHideFields?.includes("buyerSsstregistrationnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyeridentifiertype" header="Buyer Identifier Type" body={dropdownTemplate23} filter={selectedFilterFields.includes("buyeridentifiertype")} hidden={selectedHideFields?.includes("buyeridentifiertype")}  style={{ minWidth: "8rem" }} />
<Column field="businessregistrationnumberIdentificationnumberPassportnumber" header="Business registration number / Identification number / Passport number" body={pTemplate24} filter={selectedFilterFields.includes("businessregistrationnumberIdentificationnumberPassportnumber")} hidden={selectedHideFields?.includes("businessregistrationnumberIdentificationnumberPassportnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyerSeMail" header="Buyer's e-mail" body={pTemplate25} filter={selectedFilterFields.includes("buyerSeMail")} hidden={selectedHideFields?.includes("buyerSeMail")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyerSaddressCountryname" header="Buyer's address (*) (Country name)" body={dropdownTemplate26} filter={selectedFilterFields.includes("buyerSaddressCountryname")} hidden={selectedHideFields?.includes("buyerSaddressCountryname")}  style={{ minWidth: "8rem" }} />
<Column field="buyerSaddressStatename" header="Buyer's address (*) (State name)" body={dropdownTemplate27} filter={selectedFilterFields.includes("buyerSaddressStatename")} hidden={selectedHideFields?.includes("buyerSaddressStatename")}  style={{ minWidth: "8rem" }} />
<Column field="buyerSaddressCityname" header="Buyer's address (City name)" body={pTemplate28} filter={selectedFilterFields.includes("buyerSaddressCityname")} hidden={selectedHideFields?.includes("buyerSaddressCityname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyerSaddressPostalzone" header="Buyer's address (Postal zone)" body={pTemplate29} filter={selectedFilterFields.includes("buyerSaddressPostalzone")} hidden={selectedHideFields?.includes("buyerSaddressPostalzone")}  sortable style={{ minWidth: "8rem" }} />
<Column field="thefirstbuyerScontactnumber" header="The first buyer's contact number (*)" body={dropdownTemplate30} filter={selectedFilterFields.includes("thefirstbuyerScontactnumber")} hidden={selectedHideFields?.includes("thefirstbuyerScontactnumber")}  style={{ minWidth: "8rem" }} />
<Column field="buyerScontactnumber" header="Buyer's Contact Number (*)" body={pTemplate31} filter={selectedFilterFields.includes("buyerScontactnumber")} hidden={selectedHideFields?.includes("buyerScontactnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="paymentinformationinvoicecurrency" header="Payment information Invoice Currency (*)" body={p_numberTemplate32} filter={selectedFilterFields.includes("paymentinformationinvoicecurrency")} hidden={selectedHideFields?.includes("paymentinformationinvoicecurrency")}  sortable style={{ minWidth: "8rem" }} />
<Column field="paymentinformationcurrencyexchangerate" header="Payment information Currency Exchange Rate" body={p_dateTemplate33} filter={selectedFilterFields.includes("paymentinformationcurrencyexchangerate")} hidden={selectedHideFields?.includes("paymentinformationcurrencyexchangerate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="paymentinformationfrequencyofbilling" header="Payment information Frequency of Billing" body={dropdownTemplate34} filter={selectedFilterFields.includes("paymentinformationfrequencyofbilling")} hidden={selectedHideFields?.includes("paymentinformationfrequencyofbilling")}  style={{ minWidth: "8rem" }} />
<Column field="paymentinformationbillingperiodstartdate" header="Payment information Billing Period Start Date" body={calendarTemplate35} filter={selectedFilterFields.includes("paymentinformationbillingperiodstartdate")} hidden={selectedHideFields?.includes("paymentinformationbillingperiodstartdate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="paymentinformationbillingperiodenddate" header="Payment information Billing Period End Date" body={calendarTemplate36} filter={selectedFilterFields.includes("paymentinformationbillingperiodenddate")} hidden={selectedHideFields?.includes("paymentinformationbillingperiodenddate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="paymentinformationpaymentmode" header="Payment information Payment Mode" body={dropdownTemplate37} filter={selectedFilterFields.includes("paymentinformationpaymentmode")} hidden={selectedHideFields?.includes("paymentinformationpaymentmode")}  style={{ minWidth: "8rem" }} />
<Column field="paymentinformationsupplierSbankaccountnumber" header="Payment information Supplier's Bank Account Number" body={pTemplate38} filter={selectedFilterFields.includes("paymentinformationsupplierSbankaccountnumber")} hidden={selectedHideFields?.includes("paymentinformationsupplierSbankaccountnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="paymentinformationpaymentterms" header="Payment information Payment Terms" body={pTemplate39} filter={selectedFilterFields.includes("paymentinformationpaymentterms")} hidden={selectedHideFields?.includes("paymentinformationpaymentterms")}  sortable style={{ minWidth: "8rem" }} />
<Column field="paymentinformationprepaymentamount" header="Payment information PrePayment Amount" body={p_numberTemplate40} filter={selectedFilterFields.includes("paymentinformationprepaymentamount")} hidden={selectedHideFields?.includes("paymentinformationprepaymentamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="paymentinformationprepaymentdate" header="Payment information PrePayment Date" body={calendarTemplate41} filter={selectedFilterFields.includes("paymentinformationprepaymentdate")} hidden={selectedHideFields?.includes("paymentinformationprepaymentdate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="paymentinformationprepaymentreferencenumber" header="Payment information PrePayment Reference Number" body={pTemplate42} filter={selectedFilterFields.includes("paymentinformationprepaymentreferencenumber")} hidden={selectedHideFields?.includes("paymentinformationprepaymentreferencenumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingrecipientSname" header="Shipping Recipient's Name" body={pTemplate43} filter={selectedFilterFields.includes("shippingrecipientSname")} hidden={selectedHideFields?.includes("shippingrecipientSname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingrecipientSaddresscountryname" header="Shipping Recipient’s Address Country name" body={dropdownTemplate44} filter={selectedFilterFields.includes("shippingrecipientSaddresscountryname")} hidden={selectedHideFields?.includes("shippingrecipientSaddresscountryname")}  style={{ minWidth: "8rem" }} />
<Column field="shippingrecipientSaddressstatename" header="Shipping Recipient’s Address State name" body={dropdownTemplate45} filter={selectedFilterFields.includes("shippingrecipientSaddressstatename")} hidden={selectedHideFields?.includes("shippingrecipientSaddressstatename")}  style={{ minWidth: "8rem" }} />
<Column field="shippingrecipientSaddresscityname" header="Shipping Recipient’s Address City name" body={pTemplate46} filter={selectedFilterFields.includes("shippingrecipientSaddresscityname")} hidden={selectedHideFields?.includes("shippingrecipientSaddresscityname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingrecipientSaddresspostalzone" header="Shipping Recipient’s Address Postal Zone" body={pTemplate47} filter={selectedFilterFields.includes("shippingrecipientSaddresspostalzone")} hidden={selectedHideFields?.includes("shippingrecipientSaddresspostalzone")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingrecipientStin" header="Shipping Recipient's TIN" body={pTemplate48} filter={selectedFilterFields.includes("shippingrecipientStin")} hidden={selectedHideFields?.includes("shippingrecipientStin")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingrecipientSidentifiertype" header="Shipping Recipient's Identifier type" body={dropdownTemplate49} filter={selectedFilterFields.includes("shippingrecipientSidentifiertype")} hidden={selectedHideFields?.includes("shippingrecipientSidentifiertype")}  style={{ minWidth: "8rem" }} />
<Column field="shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber" header="Shipping Recipient's Information Business registration number/ Identification number / Passport number" body={pTemplate50} filter={selectedFilterFields.includes("shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber")} hidden={selectedHideFields?.includes("shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber")}  sortable style={{ minWidth: "8rem" }} />
            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            
        </DataTable>
        <Dialog header="Upload Invoice Data" visible={showUpload} onHide={() => setShowUpload(false)}>
        <UploadService 
          user={user} 
          serviceName="invoice"            
          onUploadComplete={() => {
            setShowUpload(false); // Close the dialog after upload
          }}/>
      </Dialog>

      <Dialog header="Search Invoice" visible={searchDialog} onHide={() => setSearchDialog(false)}>
      Search
    </Dialog>
    <Dialog
        header="Filter Users"
        visible={showFilter}
        onHide={() => setShowFilter(false)}
      >
        <div className="card flex justify-content-center">
          <MultiSelect
            value={selectedFilterFields}
            onChange={(e) => setSelectedFilterFields(e.value)}
            options={fields}
            optionLabel="name"
            optionValue="value"
            filter
            placeholder="Select Fields"
            maxSelectedLabels={6}
            className="w-full md:w-20rem"
          />
        </div>
        <Button
          text
          label="save as pref"
          onClick={() => {
            console.log(selectedFilterFields);
            onClickSaveFilteredfields(selectedFilterFields);
            setSelectedFilterFields(selectedFilterFields);
            setShowFilter(false)
          }}
        ></Button>
      </Dialog>

      <Dialog
        header="Hide Columns"
        visible={showColumns}
        onHide={() => setShowColumns(false)}
      >
        <div className="card flex justify-content-center">
          <MultiSelect
            value={selectedHideFields}
            onChange={(e) => setSelectedHideFields(e.value)}
            options={fields}
            optionLabel="name"
            optionValue="value"
            filter
            placeholder="Select Fields"
            maxSelectedLabels={6}
            className="w-full md:w-20rem"
          />
        </div>
        <Button
          text
          label="save as pref"
          onClick={() => {
            console.log(selectedHideFields);
            onClickSaveHiddenfields(selectedHideFields);
            setSelectedHideFields(selectedHideFields);
            setShowColumns(false)
          }}
        ></Button>
      </Dialog>
        </>
    );
};

export default InvoiceDataTable;