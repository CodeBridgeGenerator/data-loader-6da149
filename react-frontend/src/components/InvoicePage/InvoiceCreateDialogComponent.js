import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../services/restClient";
import _ from "lodash";
import initilization from "../../utils/init";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Checkbox } from 'primereact/checkbox';

const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
      if (Object.hasOwnProperty.call(errorObj.errors, key)) {
        const element = errorObj.errors[key];
        if (element?.message) {
          errMsg[key] = element.message;
        }
      }
    }
    return errMsg.length ? errMsg : errorObj.message ? { error : errorObj.message} : {};
};

const InvoiceCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    const [invoicetype, setInvoicetype] = useState([])
const [supplierSidentifiertype, setSupplierSidentifiertype] = useState([])
const [thefirstsupplierScontactnumber, setThefirstsupplierScontactnumber] = useState([])
const [suppliercountryname, setSuppliercountryname] = useState([])
const [supplierstatename, setSupplierstatename] = useState([])
const [buyeridentifiertype, setBuyeridentifiertype] = useState([])
const [buyerSaddressCountryname, setBuyerSaddressCountryname] = useState([])
const [buyerSaddressStatename, setBuyerSaddressStatename] = useState([])
const [thefirstbuyerScontactnumber, setThefirstbuyerScontactnumber] = useState([])
const [paymentinformationfrequencyofbilling, setPaymentinformationfrequencyofbilling] = useState([])
const [paymentinformationpaymentmode, setPaymentinformationpaymentmode] = useState([])
const [shippingrecipientSaddresscountryname, setShippingrecipientSaddresscountryname] = useState([])
const [shippingrecipientSaddressstatename, setShippingrecipientSaddressstatename] = useState([])
const [shippingrecipientSidentifiertype, setShippingrecipientSidentifiertype] = useState([])

    useEffect(() => {
        let init  = {consolidated: false,paymentinformationbillingperiodstartdate:new Date(),paymentinformationbillingperiodenddate:new Date(),paymentinformationprepaymentdate:new Date()};
        if (!_.isEmpty(props?.entity)) {
            init = initilization({ ...props?.entity, ...init }, [invoicetype,supplierSidentifiertype,thefirstsupplierScontactnumber,suppliercountryname,supplierstatename,buyeridentifiertype,buyerSaddressCountryname,buyerSaddressStatename,thefirstbuyerScontactnumber,paymentinformationfrequencyofbilling,paymentinformationpaymentmode,shippingrecipientSaddresscountryname,shippingrecipientSaddressstatename,shippingrecipientSidentifiertype], setError);
        }
        set_entity({...init});
    }, [props.show]);

    const validate = () => {
        let ret = true;
        const error = {};
          
            if (_.isEmpty(_entity?.supplierSname)) {
                error["supplierSname"] = `Supplier's Name (*) field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.supplierStin)) {
                error["supplierStin"] = `Supplier's TIN (*) field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.supplieridentifiernumber)) {
                error["supplieridentifiernumber"] = `Supplier Identifier Number (*) field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.supplierSmsiccode)) {
                error["supplierSmsiccode"] = `Supplier's MSIC code (*) field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.supplierSbusinessactivitydescription)) {
                error["supplierSbusinessactivitydescription"] = `Supplier's Business Activity Description (*) field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.supplierScontactnumber)) {
                error["supplierScontactnumber"] = `Supplier's contact number (*) field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.suppliercityname)) {
                error["suppliercityname"] = `Supplier City name (*) field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.buyerSname)) {
                error["buyerSname"] = `Buyer's name (*) field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.buyerScontactnumber)) {
                error["buyerScontactnumber"] = `Buyer's Contact Number (*) field is required`;
                ret = false;
            }
        if (!ret) setError(error);
        return ret;
    }

    const onSave = async () => {
        if(!validate()) return;
        let _data = {
            no: _entity?.no,invoicetype: _entity?.invoicetype?._id,invoicedateandtime: _entity?.invoicedateandtime,consolidated: _entity?.consolidated || false,originaleinvoicereferencenumber: _entity?.originaleinvoicereferencenumber,supplierSname: _entity?.supplierSname,supplierStin: _entity?.supplierStin,supplierSsstregistrationnumber: _entity?.supplierSsstregistrationnumber,supplierSidentifiertype: _entity?.supplierSidentifiertype?._id,supplieridentifiernumber: _entity?.supplieridentifiernumber,supplierSmsiccode: _entity?.supplierSmsiccode,supplierStourismtaxregistrationnumber: _entity?.supplierStourismtaxregistrationnumber,supplierSbusinessactivitydescription: _entity?.supplierSbusinessactivitydescription,supplierSeMail: _entity?.supplierSeMail,thefirstsupplierScontactnumber: _entity?.thefirstsupplierScontactnumber?._id,supplierScontactnumber: _entity?.supplierScontactnumber,suppliercountryname: _entity?.suppliercountryname?._id,supplierstatename: _entity?.supplierstatename?._id,suppliercityname: _entity?.suppliercityname,supplierpostalzone: _entity?.supplierpostalzone,buyerSname: _entity?.buyerSname,buyerStin: _entity?.buyerStin,buyerSsstregistrationnumber: _entity?.buyerSsstregistrationnumber,buyeridentifiertype: _entity?.buyeridentifiertype?._id,businessregistrationnumberIdentificationnumberPassportnumber: _entity?.businessregistrationnumberIdentificationnumberPassportnumber,buyerSeMail: _entity?.buyerSeMail,buyerSaddressCountryname: _entity?.buyerSaddressCountryname?._id,buyerSaddressStatename: _entity?.buyerSaddressStatename?._id,buyerSaddressCityname: _entity?.buyerSaddressCityname,buyerSaddressPostalzone: _entity?.buyerSaddressPostalzone,thefirstbuyerScontactnumber: _entity?.thefirstbuyerScontactnumber?._id,buyerScontactnumber: _entity?.buyerScontactnumber,paymentinformationinvoicecurrency: _entity?.paymentinformationinvoicecurrency,paymentinformationcurrencyexchangerate: _entity?.paymentinformationcurrencyexchangerate,paymentinformationfrequencyofbilling: _entity?.paymentinformationfrequencyofbilling?._id,paymentinformationbillingperiodstartdate: _entity?.paymentinformationbillingperiodstartdate,paymentinformationbillingperiodenddate: _entity?.paymentinformationbillingperiodenddate,paymentinformationpaymentmode: _entity?.paymentinformationpaymentmode?._id,paymentinformationsupplierSbankaccountnumber: _entity?.paymentinformationsupplierSbankaccountnumber,paymentinformationpaymentterms: _entity?.paymentinformationpaymentterms,paymentinformationprepaymentamount: _entity?.paymentinformationprepaymentamount,paymentinformationprepaymentdate: _entity?.paymentinformationprepaymentdate,paymentinformationprepaymentreferencenumber: _entity?.paymentinformationprepaymentreferencenumber,shippingrecipientSname: _entity?.shippingrecipientSname,shippingrecipientSaddresscountryname: _entity?.shippingrecipientSaddresscountryname?._id,shippingrecipientSaddressstatename: _entity?.shippingrecipientSaddressstatename?._id,shippingrecipientSaddresscityname: _entity?.shippingrecipientSaddresscityname,shippingrecipientSaddresspostalzone: _entity?.shippingrecipientSaddresspostalzone,shippingrecipientStin: _entity?.shippingrecipientStin,shippingrecipientSidentifiertype: _entity?.shippingrecipientSidentifiertype?._id,shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber: _entity?.shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("invoice").create(_data);
        const eagerResult = await client
            .service("invoice")
            .find({ query: { $limit: 10000 ,  _id :  { $in :[result._id]}, $populate : [
                {
                    path : "invoicetype",
                    service : "einvoiceTypes",
                    select:["einvoicetypes"]},{
                    path : "supplierSidentifiertype",
                    service : "identifyType",
                    select:["identifytype"]},{
                    path : "thefirstsupplierScontactnumber",
                    service : "phoneNumberPrefix",
                    select:["phonenumberprefix"]},{
                    path : "suppliercountryname",
                    service : "countryCode",
                    select:["countrycode"]},{
                    path : "supplierstatename",
                    service : "stateCode",
                    select:["statecode"]},{
                    path : "paymentinformationfrequencyofbilling",
                    service : "frequencyOfBilling",
                    select:["frequencyofbilling"]},{
                    path : "paymentinformationpaymentmode",
                    service : "paymentMode",
                    select:["paymentmode"]},{
                    path : "shippingrecipientSaddresscountryname",
                    service : "currencyCode",
                    select:["currencycode"]}
            ] }});
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Invoice updated successfully" });
        props.onCreateResult(eagerResult.data[0]);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Invoice" });
        }
        setLoading(false);
    };

    useEffect(() => {
                    // on mount einvoiceTypes
                    client
                        .service("einvoiceTypes")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singleEinvoiceTypesId } })
                        .then((res) => {
                            setInvoicetype(res.data.map((e) => { return { name: e['einvoicetypes'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "EinvoiceTypes", type: "error", message: error.message || "Failed get einvoiceTypes" });
                        });
                }, []);

useEffect(() => {
                    // on mount identifyType
                    client
                        .service("identifyType")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singleIdentifyTypeId } })
                        .then((res) => {
                            setSupplierSidentifiertype(res.data.map((e) => { return { name: e['identifytype'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "IdentifyType", type: "error", message: error.message || "Failed get identifyType" });
                        });
                }, []);

useEffect(() => {
                    // on mount phoneNumberPrefix
                    client
                        .service("phoneNumberPrefix")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singlePhoneNumberPrefixId } })
                        .then((res) => {
                            setThefirstsupplierScontactnumber(res.data.map((e) => { return { name: e['phonenumberprefix'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "PhoneNumberPrefix", type: "error", message: error.message || "Failed get phoneNumberPrefix" });
                        });
                }, []);

useEffect(() => {
                    // on mount countryCode
                    client
                        .service("countryCode")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singleCountryCodeId } })
                        .then((res) => {
                            setSuppliercountryname(res.data.map((e) => { return { name: e['countrycode'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "CountryCode", type: "error", message: error.message || "Failed get countryCode" });
                        });
                }, []);

useEffect(() => {
                    // on mount stateCode
                    client
                        .service("stateCode")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singleStateCodeId } })
                        .then((res) => {
                            setSupplierstatename(res.data.map((e) => { return { name: e['statecode'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "StateCode", type: "error", message: error.message || "Failed get stateCode" });
                        });
                }, []);

useEffect(() => {
                    // on mount frequencyOfBilling
                    client
                        .service("frequencyOfBilling")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singleFrequencyOfBillingId } })
                        .then((res) => {
                            setPaymentinformationfrequencyofbilling(res.data.map((e) => { return { name: e['frequencyofbilling'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "FrequencyOfBilling", type: "error", message: error.message || "Failed get frequencyOfBilling" });
                        });
                }, []);

useEffect(() => {
                    // on mount paymentMode
                    client
                        .service("paymentMode")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singlePaymentModeId } })
                        .then((res) => {
                            setPaymentinformationpaymentmode(res.data.map((e) => { return { name: e['paymentmode'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "PaymentMode", type: "error", message: error.message || "Failed get paymentMode" });
                        });
                }, []);

useEffect(() => {
                    // on mount currencyCode
                    client
                        .service("currencyCode")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singleCurrencyCodeId } })
                        .then((res) => {
                            setShippingrecipientSaddresscountryname(res.data.map((e) => { return { name: e['currencycode'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "CurrencyCode", type: "error", message: error.message || "Failed get currencyCode" });
                        });
                }, []);

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError({});
    };

    const invoicetypeOptions = invoicetype.map((elem) => ({ name: elem.name, value: elem.value }));
const supplierSidentifiertypeOptions = supplierSidentifiertype.map((elem) => ({ name: elem.name, value: elem.value }));
const thefirstsupplierScontactnumberOptions = thefirstsupplierScontactnumber.map((elem) => ({ name: elem.name, value: elem.value }));
const suppliercountrynameOptions = suppliercountryname.map((elem) => ({ name: elem.name, value: elem.value }));
const supplierstatenameOptions = supplierstatename.map((elem) => ({ name: elem.name, value: elem.value }));
const buyeridentifiertypeOptions = buyeridentifiertype.map((elem) => ({ name: elem.name, value: elem.value }));
const buyerSaddressCountrynameOptions = buyerSaddressCountryname.map((elem) => ({ name: elem.name, value: elem.value }));
const buyerSaddressStatenameOptions = buyerSaddressStatename.map((elem) => ({ name: elem.name, value: elem.value }));
const thefirstbuyerScontactnumberOptions = thefirstbuyerScontactnumber.map((elem) => ({ name: elem.name, value: elem.value }));
const paymentinformationfrequencyofbillingOptions = paymentinformationfrequencyofbilling.map((elem) => ({ name: elem.name, value: elem.value }));
const paymentinformationpaymentmodeOptions = paymentinformationpaymentmode.map((elem) => ({ name: elem.name, value: elem.value }));
const shippingrecipientSaddresscountrynameOptions = shippingrecipientSaddresscountryname.map((elem) => ({ name: elem.name, value: elem.value }));
const shippingrecipientSaddressstatenameOptions = shippingrecipientSaddressstatename.map((elem) => ({ name: elem.name, value: elem.value }));
const shippingrecipientSidentifiertypeOptions = shippingrecipientSidentifiertype.map((elem) => ({ name: elem.name, value: elem.value }));

    return (
        <Dialog header="Create Invoice" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="invoice-create-dialog-component">
            <div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="no">No:</label>
                <InputNumber id="no" className="w-full mb-3 p-inputtext-sm" value={_entity?.no} onChange={(e) => setValByKey("no", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["no"]) ? (
              <p className="m-0" key="error-no">
                {error["no"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="invoicetype">Invoice Type (*):</label>
                <Dropdown id="invoicetype" value={_entity?.invoicetype?._id} optionLabel="name" optionValue="value" options={invoicetypeOptions} onChange={(e) => setValByKey("invoicetype", {_id : e.value})}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["invoicetype"]) ? (
              <p className="m-0" key="error-invoicetype">
                {error["invoicetype"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="invoicedateandtime">Invoice Date and Time (*):</label>
                <Calendar id="invoicedateandtime" value={_entity?.invoicedateandtime ? new Date(_entity?.invoicedateandtime) : new Date()} onChange={ (e) => setValByKey("invoicedateandtime", e.value)} showTime hourFormat="24"  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["invoicedateandtime"]) ? (
              <p className="m-0" key="error-invoicedateandtime">
                {error["invoicedateandtime"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field flex mt-5">
            <span className="align-items-center">
                <label htmlFor="consolidated">Original eInvoice Reference Number:</label>
                <Checkbox id="consolidated" className="ml-3" checked={_entity?.consolidated} onChange={(e) => setValByKey("consolidated", e.checked)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["consolidated"]) ? (
              <p className="m-0" key="error-consolidated">
                {error["consolidated"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="originaleinvoicereferencenumber">Original eInvoice Reference Number:</label>
                <InputText id="originaleinvoicereferencenumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.originaleinvoicereferencenumber} onChange={(e) => setValByKey("originaleinvoicereferencenumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["originaleinvoicereferencenumber"]) ? (
              <p className="m-0" key="error-originaleinvoicereferencenumber">
                {error["originaleinvoicereferencenumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="supplierSname">Supplier's Name (*):</label>
                <InputText id="supplierSname" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierSname} onChange={(e) => setValByKey("supplierSname", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplierSname"]) ? (
              <p className="m-0" key="error-supplierSname">
                {error["supplierSname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="supplierStin">Supplier's TIN (*):</label>
                <InputText id="supplierStin" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierStin} onChange={(e) => setValByKey("supplierStin", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplierStin"]) ? (
              <p className="m-0" key="error-supplierStin">
                {error["supplierStin"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="supplierSsstregistrationnumber">Supplier's SST Registration Number:</label>
                <InputText id="supplierSsstregistrationnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierSsstregistrationnumber} onChange={(e) => setValByKey("supplierSsstregistrationnumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplierSsstregistrationnumber"]) ? (
              <p className="m-0" key="error-supplierSsstregistrationnumber">
                {error["supplierSsstregistrationnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="supplierSidentifiertype">Supplier's Identifier Type (*):</label>
                <Dropdown id="supplierSidentifiertype" value={_entity?.supplierSidentifiertype?._id} optionLabel="name" optionValue="value" options={supplierSidentifiertypeOptions} onChange={(e) => setValByKey("supplierSidentifiertype", {_id : e.value})}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplierSidentifiertype"]) ? (
              <p className="m-0" key="error-supplierSidentifiertype">
                {error["supplierSidentifiertype"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="supplieridentifiernumber">Supplier Identifier Number (*):</label>
                <InputText id="supplieridentifiernumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplieridentifiernumber} onChange={(e) => setValByKey("supplieridentifiernumber", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplieridentifiernumber"]) ? (
              <p className="m-0" key="error-supplieridentifiernumber">
                {error["supplieridentifiernumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="supplierSmsiccode">Supplier's MSIC code (*):</label>
                <InputText id="supplierSmsiccode" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierSmsiccode} onChange={(e) => setValByKey("supplierSmsiccode", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplierSmsiccode"]) ? (
              <p className="m-0" key="error-supplierSmsiccode">
                {error["supplierSmsiccode"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="supplierStourismtaxregistrationnumber">Supplier's Tourism Tax Registration Number:</label>
                <InputText id="supplierStourismtaxregistrationnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierStourismtaxregistrationnumber} onChange={(e) => setValByKey("supplierStourismtaxregistrationnumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplierStourismtaxregistrationnumber"]) ? (
              <p className="m-0" key="error-supplierStourismtaxregistrationnumber">
                {error["supplierStourismtaxregistrationnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="supplierSbusinessactivitydescription">Supplier's Business Activity Description (*):</label>
                <InputText id="supplierSbusinessactivitydescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierSbusinessactivitydescription} onChange={(e) => setValByKey("supplierSbusinessactivitydescription", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplierSbusinessactivitydescription"]) ? (
              <p className="m-0" key="error-supplierSbusinessactivitydescription">
                {error["supplierSbusinessactivitydescription"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="supplierSeMail">Supplier's e-mail:</label>
                <InputText id="supplierSeMail" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierSeMail} onChange={(e) => setValByKey("supplierSeMail", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplierSeMail"]) ? (
              <p className="m-0" key="error-supplierSeMail">
                {error["supplierSeMail"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="thefirstsupplierScontactnumber">The first Supplier's contact number (*):</label>
                <Dropdown id="thefirstsupplierScontactnumber" value={_entity?.thefirstsupplierScontactnumber?._id} optionLabel="name" optionValue="value" options={thefirstsupplierScontactnumberOptions} onChange={(e) => setValByKey("thefirstsupplierScontactnumber", {_id : e.value})}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["thefirstsupplierScontactnumber"]) ? (
              <p className="m-0" key="error-thefirstsupplierScontactnumber">
                {error["thefirstsupplierScontactnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="supplierScontactnumber">Supplier's contact number (*):</label>
                <InputText id="supplierScontactnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierScontactnumber} onChange={(e) => setValByKey("supplierScontactnumber", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplierScontactnumber"]) ? (
              <p className="m-0" key="error-supplierScontactnumber">
                {error["supplierScontactnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="suppliercountryname">Supplier Country name (*):</label>
                <Dropdown id="suppliercountryname" value={_entity?.suppliercountryname?._id} optionLabel="name" optionValue="value" options={suppliercountrynameOptions} onChange={(e) => setValByKey("suppliercountryname", {_id : e.value})}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["suppliercountryname"]) ? (
              <p className="m-0" key="error-suppliercountryname">
                {error["suppliercountryname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="supplierstatename">Supplier State name (*):</label>
                <Dropdown id="supplierstatename" value={_entity?.supplierstatename?._id} optionLabel="name" optionValue="value" options={supplierstatenameOptions} onChange={(e) => setValByKey("supplierstatename", {_id : e.value})}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplierstatename"]) ? (
              <p className="m-0" key="error-supplierstatename">
                {error["supplierstatename"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="suppliercityname">Supplier City name (*):</label>
                <InputText id="suppliercityname" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliercityname} onChange={(e) => setValByKey("suppliercityname", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["suppliercityname"]) ? (
              <p className="m-0" key="error-suppliercityname">
                {error["suppliercityname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="supplierpostalzone">Supplier Postal zone:</label>
                <InputText id="supplierpostalzone" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierpostalzone} onChange={(e) => setValByKey("supplierpostalzone", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplierpostalzone"]) ? (
              <p className="m-0" key="error-supplierpostalzone">
                {error["supplierpostalzone"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyerSname">Buyer's name (*):</label>
                <InputText id="buyerSname" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyerSname} onChange={(e) => setValByKey("buyerSname", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyerSname"]) ? (
              <p className="m-0" key="error-buyerSname">
                {error["buyerSname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyerStin">Buyer's TIN:</label>
                <InputText id="buyerStin" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyerStin} onChange={(e) => setValByKey("buyerStin", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyerStin"]) ? (
              <p className="m-0" key="error-buyerStin">
                {error["buyerStin"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyerSsstregistrationnumber">Buyer's SST Registration Number:</label>
                <InputText id="buyerSsstregistrationnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyerSsstregistrationnumber} onChange={(e) => setValByKey("buyerSsstregistrationnumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyerSsstregistrationnumber"]) ? (
              <p className="m-0" key="error-buyerSsstregistrationnumber">
                {error["buyerSsstregistrationnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyeridentifiertype">Buyer Identifier Type:</label>
                <Dropdown id="buyeridentifiertype" value={_entity?.buyeridentifiertype?._id} optionLabel="name" optionValue="value" options={buyeridentifiertypeOptions} onChange={(e) => setValByKey("buyeridentifiertype", {_id : e.value})}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyeridentifiertype"]) ? (
              <p className="m-0" key="error-buyeridentifiertype">
                {error["buyeridentifiertype"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="businessregistrationnumberIdentificationnumberPassportnumber">Business registration number / Identification number / Passport number:</label>
                <InputText id="businessregistrationnumberIdentificationnumberPassportnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.businessregistrationnumberIdentificationnumberPassportnumber} onChange={(e) => setValByKey("businessregistrationnumberIdentificationnumberPassportnumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["businessregistrationnumberIdentificationnumberPassportnumber"]) ? (
              <p className="m-0" key="error-businessregistrationnumberIdentificationnumberPassportnumber">
                {error["businessregistrationnumberIdentificationnumberPassportnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyerSeMail">Buyer's e-mail:</label>
                <InputText id="buyerSeMail" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyerSeMail} onChange={(e) => setValByKey("buyerSeMail", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyerSeMail"]) ? (
              <p className="m-0" key="error-buyerSeMail">
                {error["buyerSeMail"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyerSaddressCountryname">Buyer's address (*) (Country name):</label>
                <Dropdown id="buyerSaddressCountryname" value={_entity?.buyerSaddressCountryname?._id} optionLabel="name" optionValue="value" options={buyerSaddressCountrynameOptions} onChange={(e) => setValByKey("buyerSaddressCountryname", {_id : e.value})}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyerSaddressCountryname"]) ? (
              <p className="m-0" key="error-buyerSaddressCountryname">
                {error["buyerSaddressCountryname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyerSaddressStatename">Buyer's address (*) (State name):</label>
                <Dropdown id="buyerSaddressStatename" value={_entity?.buyerSaddressStatename?._id} optionLabel="name" optionValue="value" options={buyerSaddressStatenameOptions} onChange={(e) => setValByKey("buyerSaddressStatename", {_id : e.value})}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyerSaddressStatename"]) ? (
              <p className="m-0" key="error-buyerSaddressStatename">
                {error["buyerSaddressStatename"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyerSaddressCityname">Buyer's address (City name):</label>
                <InputText id="buyerSaddressCityname" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyerSaddressCityname} onChange={(e) => setValByKey("buyerSaddressCityname", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyerSaddressCityname"]) ? (
              <p className="m-0" key="error-buyerSaddressCityname">
                {error["buyerSaddressCityname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyerSaddressPostalzone">Buyer's address (Postal zone):</label>
                <InputText id="buyerSaddressPostalzone" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyerSaddressPostalzone} onChange={(e) => setValByKey("buyerSaddressPostalzone", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyerSaddressPostalzone"]) ? (
              <p className="m-0" key="error-buyerSaddressPostalzone">
                {error["buyerSaddressPostalzone"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="thefirstbuyerScontactnumber">The first buyer's contact number (*):</label>
                <Dropdown id="thefirstbuyerScontactnumber" value={_entity?.thefirstbuyerScontactnumber?._id} optionLabel="name" optionValue="value" options={thefirstbuyerScontactnumberOptions} onChange={(e) => setValByKey("thefirstbuyerScontactnumber", {_id : e.value})}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["thefirstbuyerScontactnumber"]) ? (
              <p className="m-0" key="error-thefirstbuyerScontactnumber">
                {error["thefirstbuyerScontactnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyerScontactnumber">Buyer's Contact Number (*):</label>
                <InputText id="buyerScontactnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyerScontactnumber} onChange={(e) => setValByKey("buyerScontactnumber", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyerScontactnumber"]) ? (
              <p className="m-0" key="error-buyerScontactnumber">
                {error["buyerScontactnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="paymentinformationinvoicecurrency">Payment information Invoice Currency (*):</label>
                <InputNumber id="paymentinformationinvoicecurrency" className="w-full mb-3 p-inputtext-sm" value={_entity?.paymentinformationinvoicecurrency} onChange={(e) => setValByKey("paymentinformationinvoicecurrency", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["paymentinformationinvoicecurrency"]) ? (
              <p className="m-0" key="error-paymentinformationinvoicecurrency">
                {error["paymentinformationinvoicecurrency"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="paymentinformationcurrencyexchangerate">Payment information Currency Exchange Rate:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["paymentinformationcurrencyexchangerate"]) ? (
              <p className="m-0" key="error-paymentinformationcurrencyexchangerate">
                {error["paymentinformationcurrencyexchangerate"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="paymentinformationfrequencyofbilling">Payment information Frequency of Billing:</label>
                <Dropdown id="paymentinformationfrequencyofbilling" value={_entity?.paymentinformationfrequencyofbilling?._id} optionLabel="name" optionValue="value" options={paymentinformationfrequencyofbillingOptions} onChange={(e) => setValByKey("paymentinformationfrequencyofbilling", {_id : e.value})}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["paymentinformationfrequencyofbilling"]) ? (
              <p className="m-0" key="error-paymentinformationfrequencyofbilling">
                {error["paymentinformationfrequencyofbilling"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="paymentinformationbillingperiodstartdate">Payment information Billing Period Start Date:</label>
                <Calendar id="paymentinformationbillingperiodstartdate" value={_entity?.paymentinformationbillingperiodstartdate ? new Date(_entity?.paymentinformationbillingperiodstartdate) : new Date()} dateFormat="dd/mm/yy" onChange={ (e) => setValByKey("paymentinformationbillingperiodstartdate", new Date(e.target.value))} showIcon showButtonBar  inline showWeek  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["paymentinformationbillingperiodstartdate"]) ? (
              <p className="m-0" key="error-paymentinformationbillingperiodstartdate">
                {error["paymentinformationbillingperiodstartdate"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="paymentinformationbillingperiodenddate">Payment information Billing Period End Date:</label>
                <Calendar id="paymentinformationbillingperiodenddate" value={_entity?.paymentinformationbillingperiodenddate ? new Date(_entity?.paymentinformationbillingperiodenddate) : new Date()} dateFormat="dd/mm/yy" onChange={ (e) => setValByKey("paymentinformationbillingperiodenddate", new Date(e.target.value))} showIcon showButtonBar  inline showWeek  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["paymentinformationbillingperiodenddate"]) ? (
              <p className="m-0" key="error-paymentinformationbillingperiodenddate">
                {error["paymentinformationbillingperiodenddate"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="paymentinformationpaymentmode">Payment information Payment Mode:</label>
                <Dropdown id="paymentinformationpaymentmode" value={_entity?.paymentinformationpaymentmode?._id} optionLabel="name" optionValue="value" options={paymentinformationpaymentmodeOptions} onChange={(e) => setValByKey("paymentinformationpaymentmode", {_id : e.value})}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["paymentinformationpaymentmode"]) ? (
              <p className="m-0" key="error-paymentinformationpaymentmode">
                {error["paymentinformationpaymentmode"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="paymentinformationsupplierSbankaccountnumber">Payment information Supplier's Bank Account Number:</label>
                <InputText id="paymentinformationsupplierSbankaccountnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.paymentinformationsupplierSbankaccountnumber} onChange={(e) => setValByKey("paymentinformationsupplierSbankaccountnumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["paymentinformationsupplierSbankaccountnumber"]) ? (
              <p className="m-0" key="error-paymentinformationsupplierSbankaccountnumber">
                {error["paymentinformationsupplierSbankaccountnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="paymentinformationpaymentterms">Payment information Payment Terms:</label>
                <InputText id="paymentinformationpaymentterms" className="w-full mb-3 p-inputtext-sm" value={_entity?.paymentinformationpaymentterms} onChange={(e) => setValByKey("paymentinformationpaymentterms", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["paymentinformationpaymentterms"]) ? (
              <p className="m-0" key="error-paymentinformationpaymentterms">
                {error["paymentinformationpaymentterms"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="paymentinformationprepaymentamount">Payment information PrePayment Amount:</label>
                <InputNumber id="paymentinformationprepaymentamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.paymentinformationprepaymentamount} onChange={(e) => setValByKey("paymentinformationprepaymentamount", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["paymentinformationprepaymentamount"]) ? (
              <p className="m-0" key="error-paymentinformationprepaymentamount">
                {error["paymentinformationprepaymentamount"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="paymentinformationprepaymentdate">Payment information PrePayment Date:</label>
                <Calendar id="paymentinformationprepaymentdate" value={_entity?.paymentinformationprepaymentdate ? new Date(_entity?.paymentinformationprepaymentdate) : new Date()} dateFormat="dd/mm/yy" onChange={ (e) => setValByKey("paymentinformationprepaymentdate", new Date(e.target.value))} showIcon showButtonBar  inline showWeek  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["paymentinformationprepaymentdate"]) ? (
              <p className="m-0" key="error-paymentinformationprepaymentdate">
                {error["paymentinformationprepaymentdate"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="paymentinformationprepaymentreferencenumber">Payment information PrePayment Reference Number:</label>
                <InputText id="paymentinformationprepaymentreferencenumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.paymentinformationprepaymentreferencenumber} onChange={(e) => setValByKey("paymentinformationprepaymentreferencenumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["paymentinformationprepaymentreferencenumber"]) ? (
              <p className="m-0" key="error-paymentinformationprepaymentreferencenumber">
                {error["paymentinformationprepaymentreferencenumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipientSname">Shipping Recipient's Name:</label>
                <InputText id="shippingrecipientSname" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientSname} onChange={(e) => setValByKey("shippingrecipientSname", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipientSname"]) ? (
              <p className="m-0" key="error-shippingrecipientSname">
                {error["shippingrecipientSname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipientSaddresscountryname">Shipping Recipient’s Address Country name:</label>
                <Dropdown id="shippingrecipientSaddresscountryname" value={_entity?.shippingrecipientSaddresscountryname?._id} optionLabel="name" optionValue="value" options={shippingrecipientSaddresscountrynameOptions} onChange={(e) => setValByKey("shippingrecipientSaddresscountryname", {_id : e.value})}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipientSaddresscountryname"]) ? (
              <p className="m-0" key="error-shippingrecipientSaddresscountryname">
                {error["shippingrecipientSaddresscountryname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipientSaddressstatename">Shipping Recipient’s Address State name:</label>
                <Dropdown id="shippingrecipientSaddressstatename" value={_entity?.shippingrecipientSaddressstatename?._id} optionLabel="name" optionValue="value" options={shippingrecipientSaddressstatenameOptions} onChange={(e) => setValByKey("shippingrecipientSaddressstatename", {_id : e.value})}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipientSaddressstatename"]) ? (
              <p className="m-0" key="error-shippingrecipientSaddressstatename">
                {error["shippingrecipientSaddressstatename"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipientSaddresscityname">Shipping Recipient’s Address City name:</label>
                <InputText id="shippingrecipientSaddresscityname" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientSaddresscityname} onChange={(e) => setValByKey("shippingrecipientSaddresscityname", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipientSaddresscityname"]) ? (
              <p className="m-0" key="error-shippingrecipientSaddresscityname">
                {error["shippingrecipientSaddresscityname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipientSaddresspostalzone">Shipping Recipient’s Address Postal Zone:</label>
                <InputText id="shippingrecipientSaddresspostalzone" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientSaddresspostalzone} onChange={(e) => setValByKey("shippingrecipientSaddresspostalzone", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipientSaddresspostalzone"]) ? (
              <p className="m-0" key="error-shippingrecipientSaddresspostalzone">
                {error["shippingrecipientSaddresspostalzone"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipientStin">Shipping Recipient's TIN:</label>
                <InputText id="shippingrecipientStin" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientStin} onChange={(e) => setValByKey("shippingrecipientStin", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipientStin"]) ? (
              <p className="m-0" key="error-shippingrecipientStin">
                {error["shippingrecipientStin"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipientSidentifiertype">Shipping Recipient's Identifier type:</label>
                <Dropdown id="shippingrecipientSidentifiertype" value={_entity?.shippingrecipientSidentifiertype?._id} optionLabel="name" optionValue="value" options={shippingrecipientSidentifiertypeOptions} onChange={(e) => setValByKey("shippingrecipientSidentifiertype", {_id : e.value})}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipientSidentifiertype"]) ? (
              <p className="m-0" key="error-shippingrecipientSidentifiertype">
                {error["shippingrecipientSidentifiertype"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber">Shipping Recipient's Information Business registration number/ Identification number / Passport number:</label>
                <InputText id="shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber} onChange={(e) => setValByKey("shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber"]) ? (
              <p className="m-0" key="error-shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber">
                {error["shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber"]}
              </p>
            ) : null}
          </small>
            </div>
            <small className="p-error">
                {Array.isArray(Object.keys(error))
                ? Object.keys(error).map((e, i) => (
                    <p className="m-0" key={i}>
                        {e}: {error[e]}
                    </p>
                    ))
                : error}
            </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(InvoiceCreateDialogComponent);
