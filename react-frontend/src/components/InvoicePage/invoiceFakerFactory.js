
import { faker } from "@faker-js/faker";
export default (user,count,invoicetypeIds,supplierSidentifiertypeIds,thefirstsupplierScontactnumberIds,suppliercountrynameIds,supplierstatenameIds,buyeridentifiertypeIds,buyerSaddressCountrynameIds,buyerSaddressStatenameIds,thefirstbuyerScontactnumberIds,paymentinformationfrequencyofbillingIds,paymentinformationpaymentmodeIds,shippingrecipientSaddresscountrynameIds,shippingrecipientSaddressstatenameIds,shippingrecipientSidentifiertypeIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
no: faker.lorem.sentence(1),
invoicetype: invoicetypeIds[i % invoicetypeIds.length],
invoicedateandtime: faker.lorem.sentence(1),
consolidated: faker.lorem.sentence(1),
originaleinvoicereferencenumber: faker.lorem.sentence(1),
supplierSname: faker.lorem.sentence(1),
supplierStin: faker.lorem.sentence(1),
supplierSsstregistrationnumber: faker.lorem.sentence(1),
supplierSidentifiertype: supplierSidentifiertypeIds[i % supplierSidentifiertypeIds.length],
supplieridentifiernumber: faker.lorem.sentence(1),
supplierSmsiccode: faker.lorem.sentence(1),
supplierStourismtaxregistrationnumber: faker.lorem.sentence(1),
supplierSbusinessactivitydescription: faker.lorem.sentence(1),
supplierSeMail: faker.lorem.sentence(1),
thefirstsupplierScontactnumber: thefirstsupplierScontactnumberIds[i % thefirstsupplierScontactnumberIds.length],
supplierScontactnumber: faker.lorem.sentence(1),
suppliercountryname: suppliercountrynameIds[i % suppliercountrynameIds.length],
supplierstatename: supplierstatenameIds[i % supplierstatenameIds.length],
suppliercityname: faker.lorem.sentence(1),
supplierpostalzone: faker.lorem.sentence(1),
buyerSname: faker.lorem.sentence(1),
buyerStin: faker.lorem.sentence(1),
buyerSsstregistrationnumber: faker.lorem.sentence(1),
buyeridentifiertype: buyeridentifiertypeIds[i % buyeridentifiertypeIds.length],
businessregistrationnumberIdentificationnumberPassportnumber: faker.lorem.sentence(1),
buyerSeMail: faker.lorem.sentence(1),
buyerSaddressCountryname: buyerSaddressCountrynameIds[i % buyerSaddressCountrynameIds.length],
buyerSaddressStatename: buyerSaddressStatenameIds[i % buyerSaddressStatenameIds.length],
buyerSaddressCityname: faker.lorem.sentence(1),
buyerSaddressPostalzone: faker.lorem.sentence(1),
thefirstbuyerScontactnumber: thefirstbuyerScontactnumberIds[i % thefirstbuyerScontactnumberIds.length],
buyerScontactnumber: faker.lorem.sentence(1),
paymentinformationinvoicecurrency: faker.lorem.sentence(1),
paymentinformationcurrencyexchangerate: faker.lorem.sentence(1),
paymentinformationfrequencyofbilling: paymentinformationfrequencyofbillingIds[i % paymentinformationfrequencyofbillingIds.length],
paymentinformationbillingperiodstartdate: faker.lorem.sentence(1),
paymentinformationbillingperiodenddate: faker.lorem.sentence(1),
paymentinformationpaymentmode: paymentinformationpaymentmodeIds[i % paymentinformationpaymentmodeIds.length],
paymentinformationsupplierSbankaccountnumber: faker.lorem.sentence(1),
paymentinformationpaymentterms: faker.lorem.sentence(1),
paymentinformationprepaymentamount: faker.lorem.sentence(1),
paymentinformationprepaymentdate: faker.lorem.sentence(1),
paymentinformationprepaymentreferencenumber: faker.lorem.sentence(1),
shippingrecipientSname: faker.lorem.sentence(1),
shippingrecipientSaddresscountryname: shippingrecipientSaddresscountrynameIds[i % shippingrecipientSaddresscountrynameIds.length],
shippingrecipientSaddressstatename: shippingrecipientSaddressstatenameIds[i % shippingrecipientSaddressstatenameIds.length],
shippingrecipientSaddresscityname: faker.lorem.sentence(1),
shippingrecipientSaddresspostalzone: faker.lorem.sentence(1),
shippingrecipientStin: faker.lorem.sentence(1),
shippingrecipientSidentifiertype: shippingrecipientSidentifiertypeIds[i % shippingrecipientSidentifiertypeIds.length],
shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
