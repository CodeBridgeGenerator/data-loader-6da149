import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import ProjectLayout from "../Layouts/ProjectLayout";

import { Calendar } from 'primereact/calendar';

const SingleInvoicePage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    const [invoicetype, setInvoicetype] = useState([]);
const [supplierSidentifiertype, setSupplierSidentifiertype] = useState([]);
const [thefirstsupplierScontactnumber, setThefirstsupplierScontactnumber] = useState([]);
const [suppliercountryname, setSuppliercountryname] = useState([]);
const [supplierstatename, setSupplierstatename] = useState([]);
const [buyeridentifiertype, setBuyeridentifiertype] = useState([]);
const [buyerSaddressCountryname, setBuyerSaddressCountryname] = useState([]);
const [buyerSaddressStatename, setBuyerSaddressStatename] = useState([]);
const [thefirstbuyerScontactnumber, setThefirstbuyerScontactnumber] = useState([]);
const [paymentinformationfrequencyofbilling, setPaymentinformationfrequencyofbilling] = useState([]);
const [paymentinformationpaymentmode, setPaymentinformationpaymentmode] = useState([]);
const [shippingrecipientSaddresscountryname, setShippingrecipientSaddresscountryname] = useState([]);
const [shippingrecipientSaddressstatename, setShippingrecipientSaddressstatename] = useState([]);
const [shippingrecipientSidentifiertype, setShippingrecipientSidentifiertype] = useState([]);

    useEffect(() => {
        //on mount
        client
            .service("invoice")
            .get(urlParams.singleInvoiceId, { query: { $populate: [            {
                path: "createdBy",
                service: "users",
                select: ["name"],
              },{
                path: "updatedBy",
                service: "users",
                select: ["name"],
              },"invoicetype","supplierSidentifiertype","thefirstsupplierScontactnumber","suppliercountryname","supplierstatename","buyeridentifiertype","buyerSaddressCountryname","buyerSaddressStatename","thefirstbuyerScontactnumber","paymentinformationfrequencyofbilling","paymentinformationpaymentmode","shippingrecipientSaddresscountryname","shippingrecipientSaddressstatename","shippingrecipientSidentifiertype"] }})
            .then((res) => {
                set_entity(res || {});
                const invoicetype = Array.isArray(res.invoicetype)
            ? res.invoicetype.map((elem) => ({ _id: elem._id, einvoicetypes: elem.einvoicetypes }))
            : res.invoicetype
                ? [{ _id: res.invoicetype._id, einvoicetypes: res.invoicetype.einvoicetypes }]
                : [];
        setInvoicetype(invoicetype);
const supplierSidentifiertype = Array.isArray(res.supplierSidentifiertype)
            ? res.supplierSidentifiertype.map((elem) => ({ _id: elem._id, identifytype: elem.identifytype }))
            : res.supplierSidentifiertype
                ? [{ _id: res.supplierSidentifiertype._id, identifytype: res.supplierSidentifiertype.identifytype }]
                : [];
        setSupplierSidentifiertype(supplierSidentifiertype);
const thefirstsupplierScontactnumber = Array.isArray(res.thefirstsupplierScontactnumber)
            ? res.thefirstsupplierScontactnumber.map((elem) => ({ _id: elem._id, phonenumberprefix: elem.phonenumberprefix }))
            : res.thefirstsupplierScontactnumber
                ? [{ _id: res.thefirstsupplierScontactnumber._id, phonenumberprefix: res.thefirstsupplierScontactnumber.phonenumberprefix }]
                : [];
        setThefirstsupplierScontactnumber(thefirstsupplierScontactnumber);
const suppliercountryname = Array.isArray(res.suppliercountryname)
            ? res.suppliercountryname.map((elem) => ({ _id: elem._id, countrycode: elem.countrycode }))
            : res.suppliercountryname
                ? [{ _id: res.suppliercountryname._id, countrycode: res.suppliercountryname.countrycode }]
                : [];
        setSuppliercountryname(suppliercountryname);
const supplierstatename = Array.isArray(res.supplierstatename)
            ? res.supplierstatename.map((elem) => ({ _id: elem._id, statecode: elem.statecode }))
            : res.supplierstatename
                ? [{ _id: res.supplierstatename._id, statecode: res.supplierstatename.statecode }]
                : [];
        setSupplierstatename(supplierstatename);
const buyeridentifiertype = Array.isArray(res.buyeridentifiertype)
            ? res.buyeridentifiertype.map((elem) => ({ _id: elem._id, identifytype: elem.identifytype }))
            : res.buyeridentifiertype
                ? [{ _id: res.buyeridentifiertype._id, identifytype: res.buyeridentifiertype.identifytype }]
                : [];
        setBuyeridentifiertype(buyeridentifiertype);
const buyerSaddressCountryname = Array.isArray(res.buyerSaddressCountryname)
            ? res.buyerSaddressCountryname.map((elem) => ({ _id: elem._id, countrycode: elem.countrycode }))
            : res.buyerSaddressCountryname
                ? [{ _id: res.buyerSaddressCountryname._id, countrycode: res.buyerSaddressCountryname.countrycode }]
                : [];
        setBuyerSaddressCountryname(buyerSaddressCountryname);
const buyerSaddressStatename = Array.isArray(res.buyerSaddressStatename)
            ? res.buyerSaddressStatename.map((elem) => ({ _id: elem._id, statecode: elem.statecode }))
            : res.buyerSaddressStatename
                ? [{ _id: res.buyerSaddressStatename._id, statecode: res.buyerSaddressStatename.statecode }]
                : [];
        setBuyerSaddressStatename(buyerSaddressStatename);
const thefirstbuyerScontactnumber = Array.isArray(res.thefirstbuyerScontactnumber)
            ? res.thefirstbuyerScontactnumber.map((elem) => ({ _id: elem._id, phonenumberprefix: elem.phonenumberprefix }))
            : res.thefirstbuyerScontactnumber
                ? [{ _id: res.thefirstbuyerScontactnumber._id, phonenumberprefix: res.thefirstbuyerScontactnumber.phonenumberprefix }]
                : [];
        setThefirstbuyerScontactnumber(thefirstbuyerScontactnumber);
const paymentinformationfrequencyofbilling = Array.isArray(res.paymentinformationfrequencyofbilling)
            ? res.paymentinformationfrequencyofbilling.map((elem) => ({ _id: elem._id, frequencyofbilling: elem.frequencyofbilling }))
            : res.paymentinformationfrequencyofbilling
                ? [{ _id: res.paymentinformationfrequencyofbilling._id, frequencyofbilling: res.paymentinformationfrequencyofbilling.frequencyofbilling }]
                : [];
        setPaymentinformationfrequencyofbilling(paymentinformationfrequencyofbilling);
const paymentinformationpaymentmode = Array.isArray(res.paymentinformationpaymentmode)
            ? res.paymentinformationpaymentmode.map((elem) => ({ _id: elem._id, paymentmode: elem.paymentmode }))
            : res.paymentinformationpaymentmode
                ? [{ _id: res.paymentinformationpaymentmode._id, paymentmode: res.paymentinformationpaymentmode.paymentmode }]
                : [];
        setPaymentinformationpaymentmode(paymentinformationpaymentmode);
const shippingrecipientSaddresscountryname = Array.isArray(res.shippingrecipientSaddresscountryname)
            ? res.shippingrecipientSaddresscountryname.map((elem) => ({ _id: elem._id, currencycode: elem.currencycode }))
            : res.shippingrecipientSaddresscountryname
                ? [{ _id: res.shippingrecipientSaddresscountryname._id, currencycode: res.shippingrecipientSaddresscountryname.currencycode }]
                : [];
        setShippingrecipientSaddresscountryname(shippingrecipientSaddresscountryname);
const shippingrecipientSaddressstatename = Array.isArray(res.shippingrecipientSaddressstatename)
            ? res.shippingrecipientSaddressstatename.map((elem) => ({ _id: elem._id, statecode: elem.statecode }))
            : res.shippingrecipientSaddressstatename
                ? [{ _id: res.shippingrecipientSaddressstatename._id, statecode: res.shippingrecipientSaddressstatename.statecode }]
                : [];
        setShippingrecipientSaddressstatename(shippingrecipientSaddressstatename);
const shippingrecipientSidentifiertype = Array.isArray(res.shippingrecipientSidentifiertype)
            ? res.shippingrecipientSidentifiertype.map((elem) => ({ _id: elem._id, identifytype: elem.identifytype }))
            : res.shippingrecipientSidentifiertype
                ? [{ _id: res.shippingrecipientSidentifiertype._id, identifytype: res.shippingrecipientSidentifiertype.identifytype }]
                : [];
        setShippingrecipientSidentifiertype(shippingrecipientSidentifiertype);
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Invoice", type: "error", message: error.message || "Failed get invoice" });
            });
    }, [props,urlParams.singleInvoiceId]);


    const goBack = () => {
        navigate("/invoice");
    };

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Invoice</h3>
                </div>
                <p>invoice/{urlParams.singleInvoiceId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">No</label><p className="m-0 ml-3" >{Number(_entity?.no)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Date and Time (*)</label><p className="m-0 ml-3" ><Calendar id="invoicedateandtime" value={new Date(_entity?.invoicedateandtime)} disabled={true} hourFormat="12"   /></p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Original eInvoice Reference Number</label><p className="m-0 ml-3" ><i id="consolidated" className={`pi ${_entity?.consolidated?"pi-check": "pi-times"}`}  ></i></p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Original eInvoice Reference Number</label><p className="m-0 ml-3" >{_entity?.originaleinvoicereferencenumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's Name (*)</label><p className="m-0 ml-3" >{_entity?.supplierSname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's TIN (*)</label><p className="m-0 ml-3" >{_entity?.supplierStin}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's SST Registration Number</label><p className="m-0 ml-3" >{_entity?.supplierSsstregistrationnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier Identifier Number (*)</label><p className="m-0 ml-3" >{_entity?.supplieridentifiernumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's MSIC code (*)</label><p className="m-0 ml-3" >{_entity?.supplierSmsiccode}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's Tourism Tax Registration Number</label><p className="m-0 ml-3" >{_entity?.supplierStourismtaxregistrationnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's Business Activity Description (*)</label><p className="m-0 ml-3" >{_entity?.supplierSbusinessactivitydescription}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's e-mail</label><p className="m-0 ml-3" >{_entity?.supplierSeMail}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's contact number (*)</label><p className="m-0 ml-3" >{_entity?.supplierScontactnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier City name (*)</label><p className="m-0 ml-3" >{_entity?.suppliercityname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier Postal zone</label><p className="m-0 ml-3" >{_entity?.supplierpostalzone}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer's name (*)</label><p className="m-0 ml-3" >{_entity?.buyerSname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer's TIN</label><p className="m-0 ml-3" >{_entity?.buyerStin}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer's SST Registration Number</label><p className="m-0 ml-3" >{_entity?.buyerSsstregistrationnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Business registration number / Identification number / Passport number</label><p className="m-0 ml-3" >{_entity?.businessregistrationnumberIdentificationnumberPassportnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer's e-mail</label><p className="m-0 ml-3" >{_entity?.buyerSeMail}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer's address (City name)</label><p className="m-0 ml-3" >{_entity?.buyerSaddressCityname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer's address (Postal zone)</label><p className="m-0 ml-3" >{_entity?.buyerSaddressPostalzone}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer's Contact Number (*)</label><p className="m-0 ml-3" >{_entity?.buyerScontactnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information Invoice Currency (*)</label><p className="m-0 ml-3" >{Number(_entity?.paymentinformationinvoicecurrency)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information Billing Period Start Date</label><p id="paymentinformationbillingperiodstartdate" className="m-0 ml-3" >{_entity?.paymentinformationbillingperiodstartdate}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information Billing Period End Date</label><p id="paymentinformationbillingperiodenddate" className="m-0 ml-3" >{_entity?.paymentinformationbillingperiodenddate}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information Supplier's Bank Account Number</label><p className="m-0 ml-3" >{_entity?.paymentinformationsupplierSbankaccountnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information Payment Terms</label><p className="m-0 ml-3" >{_entity?.paymentinformationpaymentterms}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information PrePayment Amount</label><p className="m-0 ml-3" >{Number(_entity?.paymentinformationprepaymentamount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information PrePayment Date</label><p id="paymentinformationprepaymentdate" className="m-0 ml-3" >{_entity?.paymentinformationprepaymentdate}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information PrePayment Reference Number</label><p className="m-0 ml-3" >{_entity?.paymentinformationprepaymentreferencenumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient's Name</label><p className="m-0 ml-3" >{_entity?.shippingrecipientSname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient’s Address City name</label><p className="m-0 ml-3" >{_entity?.shippingrecipientSaddresscityname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient’s Address Postal Zone</label><p className="m-0 ml-3" >{_entity?.shippingrecipientSaddresspostalzone}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient's TIN</label><p className="m-0 ml-3" >{_entity?.shippingrecipientStin}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient's Information Business registration number/ Identification number / Passport number</label><p className="m-0 ml-3" >{_entity?.shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber}</p></div>
            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm">Invoice Type (*)</label>
                    {invoicetype.map((elem) => (
                        <Link key={elem._id} to={`/einvoiceTypes/${elem._id}`}>
                            <div className="card">
                                <p className="text-xl text-primary">{elem.einvoicetypes}</p>
                            </div>
                        </Link>
                    ))}</div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm">Supplier's Identifier Type (*)</label>
                    {supplierSidentifiertype.map((elem) => (
                        <Link key={elem._id} to={`/identifyType/${elem._id}`}>
                            <div className="card">
                                <p className="text-xl text-primary">{elem.identifytype}</p>
                            </div>
                        </Link>
                    ))}</div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm">The first Supplier's contact number (*)</label>
                    {thefirstsupplierScontactnumber.map((elem) => (
                        <Link key={elem._id} to={`/phoneNumberPrefix/${elem._id}`}>
                            <div className="card">
                                <p className="text-xl text-primary">{elem.phonenumberprefix}</p>
                            </div>
                        </Link>
                    ))}</div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm">Supplier Country name (*)</label>
                    {suppliercountryname.map((elem) => (
                        <Link key={elem._id} to={`/countryCode/${elem._id}`}>
                            <div className="card">
                                <p className="text-xl text-primary">{elem.countrycode}</p>
                            </div>
                        </Link>
                    ))}</div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm">Supplier State name (*)</label>
                    {supplierstatename.map((elem) => (
                        <Link key={elem._id} to={`/stateCode/${elem._id}`}>
                            <div className="card">
                                <p className="text-xl text-primary">{elem.statecode}</p>
                            </div>
                        </Link>
                    ))}</div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm">Buyer Identifier Type</label>
                    {buyeridentifiertype.map((elem) => (
                        <Link key={elem._id} to={`/identifyType/${elem._id}`}>
                            <div className="card">
                                <p className="text-xl text-primary">{elem.identifytype}</p>
                            </div>
                        </Link>
                    ))}</div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm">Buyer's address (*) (Country name)</label>
                    {buyerSaddressCountryname.map((elem) => (
                        <Link key={elem._id} to={`/countryCode/${elem._id}`}>
                            <div className="card">
                                <p className="text-xl text-primary">{elem.countrycode}</p>
                            </div>
                        </Link>
                    ))}</div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm">Buyer's address (*) (State name)</label>
                    {buyerSaddressStatename.map((elem) => (
                        <Link key={elem._id} to={`/stateCode/${elem._id}`}>
                            <div className="card">
                                <p className="text-xl text-primary">{elem.statecode}</p>
                            </div>
                        </Link>
                    ))}</div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm">The first buyer's contact number (*)</label>
                    {thefirstbuyerScontactnumber.map((elem) => (
                        <Link key={elem._id} to={`/phoneNumberPrefix/${elem._id}`}>
                            <div className="card">
                                <p className="text-xl text-primary">{elem.phonenumberprefix}</p>
                            </div>
                        </Link>
                    ))}</div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm">Payment information Frequency of Billing</label>
                    {paymentinformationfrequencyofbilling.map((elem) => (
                        <Link key={elem._id} to={`/frequencyOfBilling/${elem._id}`}>
                            <div className="card">
                                <p className="text-xl text-primary">{elem.frequencyofbilling}</p>
                            </div>
                        </Link>
                    ))}</div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm">Payment information Payment Mode</label>
                    {paymentinformationpaymentmode.map((elem) => (
                        <Link key={elem._id} to={`/paymentMode/${elem._id}`}>
                            <div className="card">
                                <p className="text-xl text-primary">{elem.paymentmode}</p>
                            </div>
                        </Link>
                    ))}</div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm">Shipping Recipient’s Address Country name</label>
                    {shippingrecipientSaddresscountryname.map((elem) => (
                        <Link key={elem._id} to={`/currencyCode/${elem._id}`}>
                            <div className="card">
                                <p className="text-xl text-primary">{elem.currencycode}</p>
                            </div>
                        </Link>
                    ))}</div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm">Shipping Recipient’s Address State name</label>
                    {shippingrecipientSaddressstatename.map((elem) => (
                        <Link key={elem._id} to={`/stateCode/${elem._id}`}>
                            <div className="card">
                                <p className="text-xl text-primary">{elem.statecode}</p>
                            </div>
                        </Link>
                    ))}</div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm">Shipping Recipient's Identifier type</label>
                    {shippingrecipientSidentifiertype.map((elem) => (
                        <Link key={elem._id} to={`/identifyType/${elem._id}`}>
                            <div className="card">
                                <p className="text-xl text-primary">{elem.identifytype}</p>
                            </div>
                        </Link>
                    ))}</div>

                    <div className="col-12">&nbsp;</div>
                </div>
            </div>
        </div>
        
        </ProjectLayout>
    );
};

const mapState = (state) => {
    const { user, isLoggedIn } = state.auth;
    return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(SingleInvoicePage);
